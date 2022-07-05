import { IState } from '../../contexts/app-context';

const getAsa1UnitName = (appData: IState) => {
  if (appData.asa1Config && appData.asa1Config.asset && appData.asa1Config.asset.params) {
    return appData.asa1Config.asset.params['unit-name'] ? appData.asa1Config.asset.params['unit-name'] : appData.asa1Config.asset.params.name;
  }
  return '?';
};
export default getAsa1UnitName;
