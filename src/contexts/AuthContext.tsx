import algosdk, { SignedTransaction } from 'algosdk';
import { createContext } from 'react';

export enum ProvidersEnum {
  WalletConnect,
  MyAlgoConnect,
  AlgoSigner,
  Mnemonics,
  ApprovalProgram,
  LogicSigAccount,
}
export interface IProvider {
  type: ProvidersEnum;
  address: string;
  provider: any;
}

export interface IAuthState {
  authToken: string;
  authAddress: string;
  authTx?: SignedTransaction;
  provider?: IProvider;
  setAuthContext?: (data: IAuthState) => void;
}

export const defaultAuthContext: IAuthState = {
  authToken:
    'gqNzaWfEQNgrjz/Vhb82pzNpCny6p7JC6Uao8IVm+D6PU1umZsYp4kfBFBRgx3zvdNMkq+8xYqGsK12SvjrwN61Gk1rCpAKjdHhuiKJmdgGjZ2VurG1haW5uZXQtdjEuMKJnaMQgwGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit+ibHbOAcnDgKRub3RlxAxEaWF0b21pWCBXZWKjcmN2xCAwnBRVCUDB/NsYf9AUhjHnNPYIRUl9TOxIE7yARzpLIqNzbmTEIDCcFFUJQMH82xh/0BSGMec09ghFSX1M7EgTvIBHOksipHR5cGWjcGF5',
  authAddress: 'GCOBIVIJIDA7ZWYYP7IBJBRR442PMCCFJF6UZ3CICO6IARZ2JMRKPEGTQQ',
  authTx: JSON.parse(
    '{"sig":{"type":"Buffer","data":[216,43,143,63,213,133,191,54,167,51,105,10,124,186,167,178,66,233,70,168,240,133,102,248,62,143,83,91,166,102,198,41,226,71,193,20,20,96,199,124,239,116,211,36,171,239,49,98,161,172,43,93,146,190,58,240,55,173,70,147,90,194,164,2]},"txn":{"name":"Transaction","tag":{"type":"Buffer","data":[84,88]},"genesisID":"mainnet-v1.0","genesisHash":{"type":"Buffer","data":[192,97,196,216,252,29,189,222,210,215,96,75,228,86,142,63,109,4,25,135,172,55,189,228,182,32,181,171,57,36,138,223]},"type":"pay","firstRound":1,"lastRound":30000000,"note":{"0":68,"1":105,"2":97,"3":116,"4":111,"5":109,"6":105,"7":88,"8":32,"9":87,"10":101,"11":98},"lease":{},"from":{"publicKey":{"0":48,"1":156,"2":20,"3":85,"4":9,"5":64,"6":193,"7":252,"8":219,"9":24,"10":127,"11":208,"12":20,"13":134,"14":49,"15":231,"16":52,"17":246,"18":8,"19":69,"20":73,"21":125,"22":76,"23":236,"24":72,"25":19,"26":188,"27":128,"28":71,"29":58,"30":75,"31":34},"checksum":{"0":167,"1":144,"2":211,"3":132}},"to":{"publicKey":{"0":48,"1":156,"2":20,"3":85,"4":9,"5":64,"6":193,"7":252,"8":219,"9":24,"10":127,"11":208,"12":20,"13":134,"14":49,"15":231,"16":52,"17":246,"18":8,"19":69,"20":73,"21":125,"22":76,"23":236,"24":72,"25":19,"26":188,"27":128,"28":71,"29":58,"30":75,"31":34},"checksum":{"0":167,"1":144,"2":211,"3":132}}}}'
  ),
  provider: {
    type: 3,
    address: 'GCOBIVIJIDA7ZWYYP7IBJBRR442PMCCFJF6UZ3CICO6IARZ2JMRKPEGTQQ',
    provider: algosdk.mnemonicToSecretKey(
      'credit annual someone indoor soul jealous also document lonely virus capital panda gather notice expand hover double veteran glove dress master notable barrel able mechanic'
    ),
  },
};

export const AuthContext = createContext<IAuthState>(defaultAuthContext);
