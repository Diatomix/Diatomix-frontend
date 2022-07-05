import { IState } from '../../contexts/app-context';
import getAsa1UnitName from './getAsa1UnitName';
import getAsa2UnitName from './getAsa2UnitName';

const getUnitName = (asa: number, appData: IState) => {
  if (appData.asa1Config && appData.asa1Config.asset && asa == appData.asa1Config.asset.index) {
    return getAsa1UnitName(appData);
  } else if (appData.asa2Config && appData.asa2Config.asset && asa == appData.asa2Config.asset.index) {
    return getAsa2UnitName(appData);
  } else {
    return JSON.stringify(asa);
  }
};

export default getUnitName;
