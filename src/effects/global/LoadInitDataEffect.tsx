import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/app-context';
import i18n from '../../i18n';
import getAppConfiguration from '../../scripts/common/getAppConfiguration';

import { Buffer } from 'buffer';
const LoadInitDataEffect = () => {
  const appData = useContext(AppContext);

  /**
   * Initial configuration load
   */

  useEffect(() => {
    const exec = async () => {
      console.log('exec1');
      let language = localStorage.getItem('language');
      if (!language) language = 'en';
      if (language !== appData.language) {
        console.log('App.componentDidMount', language);
        i18n.changeLanguage(language);
        appData.language = language;
      }

      window.Buffer = window.Buffer || Buffer;

      appData.appConfiguration = await getAppConfiguration();
      console.log('appData.appConfiguration', appData.appConfiguration);

      appData.setAppData({ ...appData });
    };
    exec().catch(console.error);
  }, []);
  return <></>;
};
export default LoadInitDataEffect;
