import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState, useContext } from 'react';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from 'algorand-walletconnect-qrcode-modal';
import algosdk from 'algosdk';
import { formatJsonRpcRequest } from '@json-rpc-tools/utils';
import { AppContext } from '../contexts/app-context';
import MyAlgoConnect from '@randlabs/myalgo-connect';

export default function Authenticate() {
  const appData = useContext(AppContext);
  const [visible, setVisible] = useState<boolean>(false);
  const [checkWallet, setCheckWallet] = useState<boolean>(false);

  function getAuthTxToSign(account: string) {
    const suggestedParams: algosdk.SuggestedParams = {
      fee: 0,
      firstRound: 0,
      lastRound: 30000000,
      genesisID: 'mainnet-v1.0',
      genesisHash: 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
      flatFee: true,
    };
    console.log('suggestedParams', suggestedParams);
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: account,
      to: account,
      amount: 0,

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
  const footer = (
    <div>
      <Button label="Use Pera Wallet" onClick={WalletConnectInit} />
      <Button label="Use MyAlgo Wallet" onClick={myAlogAuth} />
      <Button label="Use Algo Signer" onClick={onHide} />
      <Button label="Cancel" icon="pi pi-times" onClick={onHide} />
    </div>
  );

  const myIcon = (
    <button className="p-dialog-titlebar-icon p-link">
      <span className="pi pi-search"></span>
    </button>
  );
  return (
    <>
      <Button label="Authenticate" icon="pi pi-external-link" onClick={() => onShow()} />

      <Dialog header="Authenticate" footer={footer} icons={myIcon} visible={visible} style={{ width: '50vw' }} modal onHide={onHide}>
        <p>Please authenticate using your algorand account. You will self sign the zero balance transaction.</p>
        {checkWallet ? <p>Check your wallet</p> : <p>Select wallet</p>}
      </Dialog>
    </>
  );
}
