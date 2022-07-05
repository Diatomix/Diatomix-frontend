import { IState } from '../../contexts/app-context';
import getDecimals from './getDecimals';
import getDecimalsMultiplier from './getDecimalsMultiplier';
import getUnitName from './getUnitName';

const formatPrice = (value: number, appData: IState) => {
  const decimals = 6;
  const ret = new Intl.NumberFormat(undefined, { style: 'decimal', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
  return `${ret}`;
};
export default formatPrice;
