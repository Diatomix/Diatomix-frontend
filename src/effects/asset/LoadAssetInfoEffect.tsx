import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/app-context';
import getAsset from '../../scripts/algo/getAsset';
const LoadAssetInfoEffect = () => {
  const appData = useContext(AppContext);

  /**
   * Initial configuration load
   */

  useEffect(() => {
    const exec = async () => {
      console.log('asa load');
      if (appData.asa1) {
        appData.asa1Config = await getAsset(appData.asa1);
      } else {
        appData.asa1Config = null;
      }
      if (appData.asa2) {
        appData.asa2Config = await getAsset(appData.asa2);
      } else {
        appData.asa2Config = null;
      }
      console.log('asa load appData', appData);
      appData.setAppData({ ...appData });
    };
    exec().catch(console.error);
  }, [appData.asa1, appData.asa2]);
  return <></>;
};
export default LoadAssetInfoEffect;
