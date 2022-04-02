import { createContext } from 'react';
import { SignedTransaction } from 'algosdk';

export interface IState {
  editingLayout: boolean;
  editingComponents: boolean;
  editingExpertMode: boolean;
  resetLayout: boolean;
  language: string;
  layoutAddNew?: string;
  authToken: string;
  authAddress: string;
  authTx?: SignedTransaction;
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
