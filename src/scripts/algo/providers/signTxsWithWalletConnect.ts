import { formatJsonRpcRequest } from '@json-rpc-tools/utils';
import WalletConnect from '@walletconnect/client';
import algosdk, { LogicSigAccount } from 'algosdk';

const signTxWithWalletConnect = async (txs: algosdk.Transaction[], signer: WalletConnect): Promise<Uint8Array[]> => {
  const toSend = txs.map(tx => tx.toByte());

  const txnsToSign = txs.map(txn => {
    const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString('base64');
    return {
      txn: encodedTxn,
      message: 'Sign order',
    };
  });

  const requestParams = [txnsToSign];

  const request = formatJsonRpcRequest('algo_signTxn', requestParams);

  const result: Array<string | null> = await signer.sendCustomRequest(request);
  return result.map(element => {
    return element ? new Uint8Array(Buffer.from(element, 'base64')) : null;
  });
};
export default signTxWithWalletConnect;
