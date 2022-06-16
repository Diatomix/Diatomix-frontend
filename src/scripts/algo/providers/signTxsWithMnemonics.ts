import algosdk, { LogicSigAccount } from 'algosdk';

const signTxsWithMnemonics = (txs: algosdk.Transaction[], signer: algosdk.Account): algosdk.SignedTransaction[] => {
  return txs.map(tx => {
    const uint8 = algosdk.signTransaction(tx, signer.sk).blob;
    return algosdk.decodeSignedTransaction(uint8);
  });
};
export default signTxsWithMnemonics;
