import React, { Suspense, useState, useEffect } from 'react';

import 'react-grid-layout/css/styles.css';
import 'primereact/styleclass/';
import { Routes, Route } from 'react-router-dom';

import { AppContext, appData as defaultAppData, IState } from './contexts/app-context';

import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

import 'primeflex/primeflex.css';

import Home from './pages/home';
import About from './pages/about';
import CatchAll from './pages/404';
import Theme from './components/Theme';
import i18n from './i18n';

//import 'primereact/resources/themes/nova/theme.css'; //theme
//import 'primereact/resources/themes/rhea/theme.css'; //theme
//import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
export default function App() {
  const [appData, setAppData] = useState<IState>(defaultAppData);

  useEffect(() => {
    let language = localStorage.getItem('language');
    if (!language) language = 'en';
    if (language !== appData.language) {
      console.log('App.componentDidMount', language);
      i18n.changeLanguage(language);
      setAppData({ ...appData, language: language });
    }
  }, [appData]);

  return (
    <div className="App flex flex-column">
      <Suspense fallback="loading">
        <AppContext.Provider value={{ ...appData, setAppData: v => setAppData(v) }}>
          <Theme />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<CatchAll />} />
          </Routes>
        </AppContext.Provider>
      </Suspense>
    </div>
  );
}
