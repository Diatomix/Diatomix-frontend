import algosdk, { LogicSigAccount } from 'algosdk';

export interface ApprovalProgramProvider {
  hash: string;
  result: string;
}

const signTxWithAlgoSigner = (txs: algosdk.Transaction[], signer: ApprovalProgramProvider): Uint8Array[] => {
  const program = new Uint8Array(Buffer.from(signer.result, 'base64'));
  const lsig = new LogicSigAccount(program);
  return txs.map(tx => {
    return algosdk.signLogicSigTransactionObject(tx, lsig).blob;
  });
};
export default signTxWithAlgoSigner;
