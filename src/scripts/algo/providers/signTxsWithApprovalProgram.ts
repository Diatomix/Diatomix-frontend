import algosdk, { LogicSigAccount } from 'algosdk';

interface ApprovalProgramProvider {
  hash: string;
  result: string;
}

const signTxWithAlgoSigner = (txs: algosdk.Transaction[], signer: ApprovalProgramProvider): algosdk.SignedTransaction[] => {
  const program = new Uint8Array(Buffer.from(signer.result, 'base64'));
  const lsig = new LogicSigAccount(program);
  return txs.map(tx => {
    const uint8 = algosdk.signLogicSigTransactionObject(tx, lsig).blob;
    return algosdk.decodeSignedTransaction(uint8);
  });
};
export default signTxWithAlgoSigner;
