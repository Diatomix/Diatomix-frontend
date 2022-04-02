import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from 'algorand-walletconnect-qrcode-modal';
import algosdk from 'algosdk';
import { formatJsonRpcRequest } from '@json-rpc-tools/utils';

export default function Authenticate() {
  const [visible, setVisible] = useState<boolean>(false);

  async function SignAuthTx(account: string) {
    const suggestedParams: algosdk.SuggestedParams = {
      fee: 0,
      firstRound: 0,
      lastRound: 30000000,
      genesisID: 'mainnet',
      genesisHash: '',
    };
    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: account,
      to: account,
      amount: 100000,
      suggestedParams,
    });

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
    const result: Array<string | null> = await this.connector.sendCustomRequest(request);
    const decodedResult = result.map(element => {
      return element ? new Uint8Array(Buffer.from(element, 'base64')) : null;
    });
  }

  function WalletConnectInit() {
    // Create a connector
    const connector = new WalletConnect({
      bridge: 'https://bridge.walletconnect.org', // Required
      qrcodeModal: QRCodeModal,
    });

    // Check if connection is already established
    if (!connector.connected) {
      // create new session
      connector.createSession();
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

      SignAuthTx(account).then(r => {
        console.log('Signed:', r);
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
  }
  function onShow() {
    setVisible(true);
  }
  const footer = (
    <div>
      <Button label="Use Pera Wallet" onClick={WalletConnectInit} />
      <Button label="Use MyAlgo Wallet" onClick={onHide} />
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
      </Dialog>
    </>
  );
}
