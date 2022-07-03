import { IState } from '../../contexts/app-context';

const getAsa2UnitName = (appData: IState) => {
  if (appData.asa2Config && appData.asa2Config.asset && appData.asa2Config.asset.params) {
    return appData.asa2Config.asset.params['unit-name'] ? appData.asa2Config.asset.params['unit-name'] : appData.asa2Config.asset.params.name;
  }
  return '?';
};

export default getAsa2UnitName;
