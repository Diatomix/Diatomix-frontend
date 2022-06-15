import '../css/common.css'; //common
import 'primereact/resources/themes/mdc-light-indigo/theme.css'; //theme

import { AppContext, IState } from '../contexts/app-context';

import React, { useContext, useEffect } from 'react';
const MdcLightIndigo = () => {
  const appData = useContext(AppContext);
  const thisIsDark = false;
  useEffect(() => {
    if (appData.isDark !== thisIsDark) {
      appData.isDark = thisIsDark;
      appData.setAppData({ ...appData });
    }
  }, [appData.isDark]);
  return <AppContext.Consumer>{appData => <></>}</AppContext.Consumer>;
};
export default MdcLightIndigo;
