import { createContext } from 'react';
import { SignedTransaction } from 'algosdk';
import AppConfiguration from '../scripts/interface/configuration/AppConfiguration';
import { BigNumber } from 'bignumber.js';
import { ApprovalProgramProvider } from '../scripts/algo/providers/signTxsWithApprovalProgram';
export interface IState {
  environment: string;
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
  asa1?: number;
  asa1SellBigInt?: string;
  asa1Balance?: number;
  asa2?: number;
  asa2SellBigInt?: string;
  asa2Balance?: number;
  orderTeal?: string;
  orderCompiled?: ApprovalProgramProvider;
  isDark: boolean;
  setAppData?: (data: IState) => void;
}

export const defaultAppData: IState = {
  editingLayout: false,
  editingComponents: false,
  editingExpertMode: false,
  resetLayout: false,
  language: 'en',
  layoutAddNew: '',
  isDark: false,
  environment: 'testnet-v1.0',
};

export const AppContext = createContext<IState>(defaultAppData);
