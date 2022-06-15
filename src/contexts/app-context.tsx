import { createContext } from 'react';
import { SignedTransaction } from 'algosdk';
import AppConfiguration from '../scripts/interface/configuration/AppConfiguration';

export interface IState {
  appConfiguration?: AppConfiguration;

  isSellOrder?: boolean;
  price?: number;
  quantity?: number;

  editingLayout: boolean;
  editingComponents: boolean;
  editingExpertMode: boolean;
  resetLayout: boolean;
  language: string;
  layoutAddNew?: string;
  authToken: string;
  authAddress: string;
  authTx?: SignedTransaction;
  asa1?: number;
  asa1SellBigInt?: bigint;
  asa1Balance?: number;
  asa2?: number;
  asa2SellBigInt?: bigint;
  asa2Balance?: number;
  orderTeal?: string;
  orderCompiled?: any;
  isDark: boolean;
  setAppData?: (data: IState) => void;
}

export const appData: IState = {
  editingLayout: false,
  editingComponents: false,
  editingExpertMode: false,
  resetLayout: false,
  language: 'en',
  layoutAddNew: '',
  authToken:
    'gqNzaWfEQPkM+nM5Ztd0ZfFluReMGW1cfes2HGKBxKqV2GB0ZU1Mh72y1GosDZsSdmrAcrPp+PORcUc5BRsRfMf5ZqQfBwKjdHhuiKJmdgGjZ2VurG1haW5uZXQtdjEuMKJnaMQgwGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit+ibHbOAcnDgKRub3RlxAxEaWF0b21pWCBXZWKjcmN2xCBB3qblMgerX8KpGde4CogRjPIF6SA230NtuXO64GN8wKNzbmTEIEHepuUyB6tfwqkZ17gKiBGM8gXpIDbfQ225c7rgY3zApHR5cGWjcGF5',
  authAddress: 'IHPKNZJSA6VV7QVJDHL3QCUICGGPEBPJEA3N6Q3NXFZ3VYDDPTAC2BUXWY',
  authTx: JSON.parse(
    '{"sig":{"type":"Buffer","data":[249,12,250,115,57,102,215,116,101,241,101,185,23,140,25,109,92,125,235,54,28,98,129,196,170,149,216,96,116,101,77,76,135,189,178,212,106,44,13,155,18,118,106,192,114,179,233,248,243,145,113,71,57,5,27,17,124,199,249,102,164,31,7,2]},"txn":{"name":"Transaction","tag":{"type":"Buffer","data":[84,88]},"genesisID":"mainnet-v1.0","genesisHash":{"type":"Buffer","data":[192,97,196,216,252,29,189,222,210,215,96,75,228,86,142,63,109,4,25,135,172,55,189,228,182,32,181,171,57,36,138,223]},"type":"pay","firstRound":1,"lastRound":30000000,"note":{"0":68,"1":105,"2":97,"3":116,"4":111,"5":109,"6":105,"7":88,"8":32,"9":87,"10":101,"11":98},"lease":{},"from":{"publicKey":{"0":65,"1":222,"2":166,"3":229,"4":50,"5":7,"6":171,"7":95,"8":194,"9":169,"10":25,"11":215,"12":184,"13":10,"14":136,"15":17,"16":140,"17":242,"18":5,"19":233,"20":32,"21":54,"22":223,"23":67,"24":109,"25":185,"26":115,"27":186,"28":224,"29":99,"30":124,"31":192},"checksum":{"0":45,"1":6,"2":151,"3":182}},"to":{"publicKey":{"0":65,"1":222,"2":166,"3":229,"4":50,"5":7,"6":171,"7":95,"8":194,"9":169,"10":25,"11":215,"12":184,"13":10,"14":136,"15":17,"16":140,"17":242,"18":5,"19":233,"20":32,"21":54,"22":223,"23":67,"24":109,"25":185,"26":115,"27":186,"28":224,"29":99,"30":124,"31":192},"checksum":{"0":45,"1":6,"2":151,"3":182}}}}'
  ),
  isDark: false,
};

export const AppContext = createContext<IState>(appData);
