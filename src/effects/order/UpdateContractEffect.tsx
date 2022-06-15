import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/app-context';
import i18n from '../../i18n';
import getAppConfiguration from '../../scripts/common/getAppConfiguration';

import { Buffer } from 'buffer';
import arc0017Contract from '../../scripts/algo/arc0017Contract';

const UpdateContractEffect = () => {
  const appData = useContext(AppContext);

  /**
   * Initial configuration load
   */

  useEffect(() => {
    const exec = async () => {
      const toUpdate = arc0017Contract(appData);
      if (toUpdate != appData.orderTeal) {
        appData.orderTeal = toUpdate;
        appData.setAppData({ ...appData });
      }
    };
    exec().catch(console.error);
  }, [appData.price, appData.quantity, appData.asa1, appData.asa2, appData.authAddress, appData.isSellOrder]);
  return <></>;
};
export default UpdateContractEffect;
