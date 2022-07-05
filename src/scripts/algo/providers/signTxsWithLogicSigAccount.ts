import algosdk, { LogicSigAccount } from 'algosdk';

const signTxsWithLogicSigAccount = (txs: algosdk.Transaction[], signer: LogicSigAccount): Uint8Array[] => {
  return txs.map(tx => {
    return algosdk.signLogicSigTransactionObject(tx, signer).blob;
  });
};
export default signTxsWithLogicSigAccount;
