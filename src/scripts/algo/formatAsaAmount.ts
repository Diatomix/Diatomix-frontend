import { IState } from '../../contexts/app-context';
import getDecimals from './getDecimals';
import getDecimalsMultiplier from './getDecimalsMultiplier';
import getUnitName from './getUnitName';

const formatAsaAmount = (value: number, asa: number, appData: IState) => {
  const decimals = getDecimals(asa, appData);
  const decimalsMultipler = getDecimalsMultiplier(asa, appData);
  const ret = new Intl.NumberFormat(undefined, { style: 'decimal', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value / decimalsMultipler);
  return `${ret} ${getUnitName(asa, appData)}`;
};
export default formatAsaAmount;
