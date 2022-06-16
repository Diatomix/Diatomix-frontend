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

export const defaultAppData: IState = {
  editingLayout: false,
  editingComponents: false,
  editingExpertMode: false,
  resetLayout: false,
  language: 'en',
  layoutAddNew: '',
  isDark: false,
};

export const AppContext = createContext<IState>(defaultAppData);
