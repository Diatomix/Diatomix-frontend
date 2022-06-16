import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk, { LogicSigAccount } from 'algosdk';

const signTxsWithMyAlgoConnect = async (txs: algosdk.Transaction[], signer: MyAlgoConnect): Promise<Uint8Array[]> => {
  const toSend = txs.map(tx => tx.toByte());
  const signedTxs = await signer.signTransaction(toSend);

  return signedTxs.map(tx => {
    return tx.blob;
  });
};
export default signTxsWithMyAlgoConnect;
