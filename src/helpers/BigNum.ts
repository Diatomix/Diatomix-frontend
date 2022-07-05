import BigNumber from 'bignumber.js';

export const BigNumbify = (x: number, operation: 'decimalize' | 'undecimalize' = 'decimalize') => {
  return operation == 'decimalize' ? new BigNumber(x).dividedBy(1000000).toFixed(6, 0) : new BigNumber(x).multipliedBy(1000000).toFixed(6, 0);
};
