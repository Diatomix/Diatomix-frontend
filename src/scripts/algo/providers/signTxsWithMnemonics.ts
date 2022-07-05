import algosdk, { LogicSigAccount } from 'algosdk';

const signTxsWithMnemonics = (txs: algosdk.Transaction[], signer: algosdk.Account): Uint8Array[] => {
  return txs.map(tx => {
    return algosdk.signTransaction(tx, signer.sk).blob;
  });
};
export default signTxsWithMnemonics;
