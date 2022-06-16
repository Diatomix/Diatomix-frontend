import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk, { LogicSigAccount } from 'algosdk';

const signTxsWithMyAlgoConnect = async (txs: algosdk.Transaction[], signer: MyAlgoConnect): Promise<algosdk.SignedTransaction[]> => {
  const toSend = txs.map(tx => tx.toByte());
  const signedTxs = await signer.signTransaction(toSend);

  return signedTxs.map(tx => {
    return algosdk.decodeSignedTransaction(tx.blob);
  });
};
export default signTxsWithMyAlgoConnect;
