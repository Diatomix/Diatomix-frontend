import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/app-context';
import i18n from '../../i18n';
import getAppConfiguration from '../../scripts/common/getAppConfiguration';

import { Buffer } from 'buffer';
import arc0017Contract from '../../scripts/algo/arc0017Contract';
import getBalanceAtAccount from '../../scripts/algo/getBalanceAtAccount';
import { AuthContext } from '../../contexts/AuthContext';

const UpdateBalanceEffect = () => {
  const appData = useContext(AppContext);
  const authContext = useContext(AuthContext);

  /**
   * Initial configuration load
   */

  useEffect(() => {
    if (!authContext.authAddress) return;
    if (!appData.asa1) return;
    if (!appData.asa2) return;

    const exec = async () => {
      const asa1Balance = await getBalanceAtAccount(authContext.authAddress, appData.asa1);
      let updated = false;

      if (asa1Balance != appData.asa1Balance) {
        appData.asa1Balance = asa1Balance;
        updated = true;
      }
      const asa2Balance = await getBalanceAtAccount(authContext.authAddress, appData.asa2);
      if (asa2Balance != appData.asa2Balance) {
        appData.asa2Balance = asa2Balance;
        updated = true;
      }
      appData.setAppData({ ...appData });
    };
    exec().catch(console.error);
  }, [appData.asa1, appData.asa2, authContext.authAddress]);
  return <></>;
};
export default UpdateBalanceEffect;
