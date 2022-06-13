import React, { Suspense, useState, useEffect } from 'react';

import 'primereact/resources/themes/nova/theme.css'; //theme
import 'primereact/resources/themes/rhea/theme.css'; //theme
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'react-grid-layout/css/styles.css';
import 'primereact/styleclass/';
import { Routes, Route } from 'react-router-dom';

import { AppContext, appData as defaultAppData, IState } from './contexts/app-context';

import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

import 'primeflex/primeflex.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './pages/home';
import About from './pages/about';
import CatchAll from './pages/404';
import Authenticate from './components/Authenticate';
import Dashboard from './pages/dashboard';
import Theme from './components/Theme';
import Trading from './pages/trading';
import LoadInitDataEffect from './effects/global/LoadInitDataEffect';
import SelectAsset from './pages/SelectAsset';
import Trade from './pages/trade';
declare const window: any;
export default function App() {
  const [appData, setAppData] = useState<IState>(defaultAppData);

  return (
    <div className="App flex flex-column">
      <Suspense fallback="loading">
        <AppContext.Provider value={{ ...appData, setAppData: v => setAppData(v) }}>
          <LoadInitDataEffect />
          <Theme />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trade" element={<SelectAsset />} />
            <Route path="/trade/:asa1/:asa2" element={<Trade />} />
            <Route path="/trading" element={<Trading />} />
            <Route path="*" element={<CatchAll />} />
            <Route path="/authenticate" element={<Authenticate />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AppContext.Provider>
      </Suspense>
    </div>
  );
}
