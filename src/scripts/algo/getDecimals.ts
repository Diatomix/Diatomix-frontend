import { IState } from '../../contexts/app-context';

const getDecimals = (asa: number, appData: IState) => {
  if (appData.asa1Config && appData.asa1Config.asset && asa == appData.asa1Config.asset.index) {
    return appData.asa1Config.asset.params.decimals;
  } else if (appData.asa2Config && appData.asa2Config.asset && asa == appData.asa2Config.asset.index) {
    return appData.asa2Config.asset.params.decimals;
  } else {
    return 1;
  }
};
export default getDecimals;
