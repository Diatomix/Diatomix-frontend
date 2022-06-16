import algosdk from 'algosdk';

const signTxsWithAlgoSigner = async (txs: algosdk.Transaction[], AlgoSigner: any): Promise<Uint8Array[]> => {
  const txsToSign = txs.map(tx => {
    let binaryTx = tx.toByte();
    return { txn: AlgoSigner.encoding.msgpackToBase64(binaryTx) };
  });
  let signedTxs = await AlgoSigner.signTxn(txsToSign);
  return signedTxs.map(signed => {
    return signed.blob;
  });
};
export default signTxsWithAlgoSigner;
