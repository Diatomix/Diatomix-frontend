import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState, useContext } from 'react';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from 'algorand-walletconnect-qrcode-modal';
import algosdk from 'algosdk';
import { formatJsonRpcRequest } from '@json-rpc-tools/utils';
import { AppContext } from '../contexts/app-context';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { Password } from 'primereact/password';
import i18n from 'i18next';
import { Message } from 'primereact/message';
import { setAuthorizationToken } from '../gqty';

declare global {
  interface Window {
    AlgoSigner: any;
  }
}
interface AuthenticateProps {
  buttonClassName?: string;
  buttonIcon?: string;
}
export default function Authenticate(props: AuthenticateProps) {
  const { buttonClassName, buttonIcon } = props;
  const appData = useContext(AppContext);
  const [visible, setVisible] = useState<boolean>(false);
  const [checkWallet, setCheckWallet] = useState<boolean>(false);
  const [mnemonicFormVisible, setMnemonicFormVisible] = useState<boolean>(false);
  const [key, setKey] = useState<string>('');
  const [error, setError] = useState<string>('');

  function getAuthTxToSign(account: string) {
    const suggestedParams: algosdk.SuggestedParams = {
      fee: 0,
      firstRound: 1,
      lastRound: 30000000,
      //genesisID: 'testnet-v1.0',
      //genesisHash: 'SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=',
      genesisID: 'mainnet-v1.0',
      genesisHash: 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      flatFee: true,
    };
    console.log('suggestedParams', suggestedParams);
    const note = Buffer.from('DiatomiX Web', 'ascii');
    console.log('note', note);
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: account,
      to: account,
      amount: 0,
      note: new Uint8Array(note),
      suggestedParams,
    });
    return txn;
  }

  async function SignAuthTx(account: string, connector: WalletConnect) {
    const txn = getAuthTxToSign(account);
    console.log('txn', txn);
    const txns = [txn];
    const txnsToSign = txns.map(txn => {
      const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString('base64');

      return {
        txn: encodedTxn,
        message: 'DiatomiX Web',
      };
    });

    const requestParams = [txnsToSign];

    const request = formatJsonRpcRequest('algo_signTxn', requestParams);
    console.log('request', request);
    setCheckWallet(true);
    const result: Array<string | null> = await connector.sendCustomRequest(request);
    const decodedResult = result.map(element => {
      return element ? new Uint8Array(Buffer.from(element, 'base64')) : null;
    });
    setCheckWallet(false);
    if (decodedResult.length > 0) {
      const b64 = Buffer.from(decodedResult[0]).toString('base64');
      const decoded = algosdk.decodeSignedTransaction(decodedResult[0]);
      const addr = algosdk.encodeAddress(decoded.txn.from.publicKey);
      // TODO .. validate signature
      appData.setAppData({ ...appData, authToken: b64, authTx: decoded, authAddress: addr });
    }
    return decodedResult;
  }

  function WalletConnectInit() {
    console.log('WalletConnectInit');
    // Create a connector
    const connector = new WalletConnect({
      bridge: 'https://bridge.walletconnect.org', // Required
      qrcodeModal: QRCodeModal,
    });

    console.log('connector', connector);
    // Check if connection is already established
    if (!connector.connected) {
      // create new session
      connector.createSession();
    }
    if (connector.connected) {
      if (connector.accounts.length > 0) {
        const account = connector.accounts[0];
        console.log('signing:', account);
        SignAuthTx(account, connector).then(r => {
          console.log('Signed:', r);
          onHide();
        });
      }
    }
    // Subscribe to connection events
    connector.on('connect', (error, payload) => {
      if (error) {
        throw error;
      }
      console.log('connect.payload', error, payload);
      // Get provided accounts
      const { accounts } = payload.params[0];
      const account = accounts[0];

      SignAuthTx(account, connector).then(r => {
        console.log('Signed:', r);
        onHide();
      });
    });

    connector.on('session_update', (error, payload) => {
      if (error) {
        throw error;
      }
      console.log('session_update.payload', error, payload);

      // Get updated accounts
      const { accounts } = payload.params[0];
    });

    connector.on('disconnect', (error, payload) => {
      console.log('disconnect.error,payload', error, payload);
      if (error) {
        throw error;
      }
    });
  }

  function onHide() {
    reset();
    setVisible(false);
    setCheckWallet(false);
  }
  function onShow() {
    setCheckWallet(false);
    setVisible(true);
  }
  function myAlogAuth() {
    const myAlgoWallet = new MyAlgoConnect();
    myAlgoWallet.connect().then(accounts => {
      const addresses = accounts.map(account => account.address);
      const account = addresses[0];
      const txn = getAuthTxToSign(account);
      myAlgoWallet.signTransaction(txn.toByte()).then(signedTxn => {
        const b64 = Buffer.from(signedTxn.blob).toString('base64');
        const decoded = algosdk.decodeSignedTransaction(signedTxn.blob);
        const addr = algosdk.encodeAddress(decoded.txn.from.publicKey);
        // TODO .. validate signature
        appData.setAppData({ ...appData, authToken: b64, authTx: decoded, authAddress: addr });
        onHide();
      });

      console.log('addresses', addresses);
    });
  }
  function algoSignerAuth() {
    console.log('window.AlgoSigner', window.AlgoSigner);
    const connectPromise: Promise<any> = window.AlgoSigner.connect();
    connectPromise.then(conn => {
      console.log('conn', conn);

      window.AlgoSigner.accounts({ ledger: 'MainNet' }).then(accounts => {
        const account = accounts[0].address;
        const txn = getAuthTxToSign(account);
        const b64Txn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString('base64');
        console.log('b64Txn0', b64Txn);
        window.AlgoSigner.signTxn([
          {
            txn: b64Txn,
          },
        ]).then(signedTxn => {
          console.log('signedTxn', signedTxn);
          if (signedTxn.length > 0) {
            const b64 = signedTxn[0].blob;
            const decoded = algosdk.decodeSignedTransaction(Buffer.from(b64, 'base64'));
            const addr = algosdk.encodeAddress(decoded.txn.from.publicKey);
            console.log('addr', addr);
            // TODO .. validate signature
            appData.setAppData({ ...appData, authToken: b64, authTx: decoded, authAddress: addr });
            onHide();
          }
        });
      });
    });
  }
  function authUsingMnemonics() {
    try {
      const address = algosdk.mnemonicToSecretKey(key);
      const txn = getAuthTxToSign(address.addr);
      const signed = txn.signTxn(address.sk);
      const b64 = Buffer.from(signed).toString('base64');
      const decoded = algosdk.decodeSignedTransaction(Buffer.from(b64, 'base64'));
      const addr = algosdk.encodeAddress(decoded.txn.from.publicKey);
      reset();
      setAuthorizationToken('SigTx ' + b64);

      appData.setAppData({ ...appData, authToken: b64, authTx: decoded, authAddress: addr });
      onHide();
    } catch (e) {
      console.error('authUsingMnemonics', e.message);
      setError(e.message);
    }
  }
  const footer = (
    <div>
      {mnemonicFormVisible ? (
        <>
          <Button
            label="Authenticate"
            onClick={() => {
              authUsingMnemonics();
            }}
            className="m-1 p-button-primary"
          />
          <Button
            label="Show other options"
            onClick={() => {
              reset();
            }}
            className="m-1 p-button-secondary"
          />
          <Button label="Cancel" icon="pi pi-times" className="m-1 p-button-danger" onClick={onHide} />
        </>
      ) : (
        <>
          <Button label="Use Pera Wallet" className="m-1" onClick={WalletConnectInit} />
          <Button label="Use MyAlgo Wallet" className="m-1" onClick={myAlogAuth} />
          {!!window.AlgoSigner ? <Button label="Use Algo Signer" className="m-1" onClick={algoSignerAuth} /> : ''}
          <Button label="Use mnemonics" className="m-1" onClick={() => setMnemonicFormVisible(true)} />

          <Button label="Cancel" className="m-1 p-button-danger" icon="pi pi-times" onClick={onHide} />
        </>
      )}
    </div>
  );

  function reset() {
    setMnemonicFormVisible(false);
    setKey('');
    setError('');
  }
  return (
    <>
      <Button className={buttonClassName} label="Authenticate" icon={buttonIcon} onClick={() => onShow()} />
      <Dialog header="Authenticate" className="flex flex-column" footer={footer} visible={visible} style={{ width: '50vw' }} modal onHide={onHide}>
        <p>Please authenticate using your algorand account. You will self sign the zero balance transaction.</p>
        {!!error ? <Message className="flex flex-row flex-grow-0" severity="error" text={error} /> : ''}
        {!!mnemonicFormVisible ? (
          <>
            <p>
              Mnemonic is secret phrase to your account - 25 words. It contains public and private key. Be extra careful dealing with a mnemonic. Even partial disclosure may lead to compromising your
              account.
            </p>
            <div className="field my-2 flex flex-column flex-grow-0">
              <span className="p-float-label  flex-column flex flex-grow-0">
                <Password className="flex-column flex flex-grow-0" value={key} onChange={e => setKey(e.target.value)} feedback={false} toggleMask />
                <label htmlFor="name">{i18n.t('Authenticate.InputMnemonics')}</label>
              </span>
            </div>
          </>
        ) : (
          <>{checkWallet ? <p>Check your wallet</p> : <p>Select wallet</p>}</>
        )}
      </Dialog>
    </>
  );
}
