import { createContext } from 'react';

export interface IState {
  editingLayout: boolean;
  editingComponents: boolean;
  resetLayout: boolean;
  language: string;
  layoutAddNew?: string;
  setAppData?: (data: IState) => void;
}

export const appData: IState = {
  editingLayout: false,
  editingComponents: false,
  resetLayout: false,
  language: 'en',
  layoutAddNew: '',
};

export const AppContext = createContext<IState>(appData);
