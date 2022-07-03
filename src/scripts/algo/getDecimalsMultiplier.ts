import { IState } from '../../contexts/app-context';
import getDecimals from './getDecimals';

const getDecimalsMultiplier = (asa: number, appData: IState) => {
  return 10 ** getDecimals(asa, appData);
};
export default getDecimalsMultiplier;
