import { createContext } from 'react';
import { SignedTransaction } from 'algosdk';
import AppConfiguration from '../scripts/interface/configuration/AppConfiguration';

export interface IState {
  appConfiguration?: AppConfiguration;

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
  asa2?: number;
  setAppData?: (data: IState) => void;
}

export const appData: IState = {
  editingLayout: false,
  editingComponents: false,
  editingExpertMode: false,
  resetLayout: false,
  language: 'en',
  layoutAddNew: '',
  authToken: '',
  authAddress: '',
  authTx: null,
};

export const AppContext = createContext<IState>(appData);
