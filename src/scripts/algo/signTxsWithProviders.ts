import algosdk from 'algosdk';
import { IProvider, ProvidersEnum } from '../../contexts/AuthContext';
import signTxsWithAlgoSigner from './providers/signTxsWithAlgoSigner';
import signTxsWithApprovalProgram from './providers/signTxsWithApprovalProgram';
import signTxsWithMnemonics from './providers/signTxsWithMnemonics';
import signTxsWithMyAlgoConnect from './providers/signTxsWithMyAlgoConnect';
import signTxWithWalletConnect from './providers/signTxsWithWalletConnect';

interface addr2txs {
  [key: string]: Array<algosdk.Transaction>;
}

const signTxsWithProviders = async (txns: algosdk.Transaction[], providers: IProvider[]) => {
  const ret: Array<algosdk.SignedTransaction> = [];
  const order = {};
  const addresses = {};
  const addr2txs: addr2txs = {};

  for (let index in txns) {
    const tx = txns[index];
    const addr = algosdk.encodeAddress(tx.from.publicKey);
    addresses[addr] = true;
    if (!addr2txs[addr]) addr2txs[addr] = [];
    addr2txs[addr].push(tx);
  }

  for (const addr of Object.keys(addresses)) {
    if (!addr2txs[addr]) throw Error(`Address does not contain any tx ${addr}`);
    const provider = providers.find(p => p.address == addr);
    if (!provider) throw Error(`Provider for address ${addr} has not been found`);
    switch (provider.type) {
      case ProvidersEnum.AlgoSigner:
        for (const signed of await signTxsWithAlgoSigner(addr2txs[addr], provider.provider)) {
          ret.push(signed);
        }
        break;
      case ProvidersEnum.ApprovalProgram:
        for (const signed of signTxsWithApprovalProgram(addr2txs[addr], provider.provider)) {
          ret.push(signed);
        }
        break;
      case ProvidersEnum.Mnemonics:
        for (const signed of signTxsWithMnemonics(addr2txs[addr], provider.provider)) {
          ret.push(signed);
        }
        break;
      case ProvidersEnum.MyAlgoConnect:
        for (const signed of await signTxsWithMyAlgoConnect(addr2txs[addr], provider.provider)) {
          ret.push(signed);
        }
        break;
      case ProvidersEnum.WalletConnect:
        for (const signed of await signTxWithWalletConnect(addr2txs[addr], provider.provider)) {
          ret.push(signed);
        }
        break;
    }
  }
  const out: Array<algosdk.SignedTransaction> = [];
  if (ret.length != txns.length) throw Error(`Some of the transactions has not been signed ${ret.length}/${txns.length}`);
  for (const tx of txns) {
    const signed = ret.find(signedTx => signedTx.txn.txID() == tx.txID());
    if (!signed) throw Error(`Tx not signed ${tx.txID()}`);
    out.push(signed);
  }
  return out;
};
export default signTxsWithProviders;
