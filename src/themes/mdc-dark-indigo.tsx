import '../css/common.css'; //common
import 'primereact/resources/themes/mdc-dark-indigo/theme.css'; //theme
import '../css/dark.css'; //theme
import { AppContext, IState } from '../contexts/app-context';

import React, { useContext, useEffect } from 'react';
const MdcDarkIndigo = () => {
  const appData = useContext(AppContext);
  const thisIsDark = true;
  useEffect(() => {
    if (appData.isDark !== thisIsDark) {
      appData.isDark = thisIsDark;
      appData.setAppData({ ...appData });
    }
  }, [appData.isDark]);
  return <AppContext.Consumer>{appData => <></>}</AppContext.Consumer>;
};
export default MdcDarkIndigo;
