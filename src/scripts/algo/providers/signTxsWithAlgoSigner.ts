import algosdk from 'algosdk';

const signTxsWithAlgoSigner = async (txs: algosdk.Transaction[], AlgoSigner: any): Promise<algosdk.SignedTransaction[]> => {
  const txsToSign = txs.map(tx => {
    let binaryTx = tx.toByte();
    return { txn: AlgoSigner.encoding.msgpackToBase64(binaryTx) };
  });
  let signedTxs = await AlgoSigner.signTxn(txsToSign);
  return signedTxs.map(signed => {
    const uint8: Uint8Array = signed.blob;
    return algosdk.decodeSignedTransaction(uint8);
  });
};
export default signTxsWithAlgoSigner;
