import React from 'react';

const MdcDarkIndigo = React.lazy(() => import('../themes/mdc-dark-indigo'));
const MdcLightIndigo = React.lazy(() => import('../themes/mdc-light-indigo'));
const LaraLightIndigo = React.lazy(() => import('../themes/lara-light-indigo'));
const Rhea = React.lazy(() => import('../themes/rhea'));

class Theme extends React.Component {
  render() {
    const CHOSEN_THEME = localStorage.getItem('CHOSEN_THEME') || 'mdc-dark-indigo';
    console.log('CHOSEN_THEME', CHOSEN_THEME);
    return (
      <>
        <React.Suspense fallback={<></>}>
          {CHOSEN_THEME === 'lara-light-indigo' ? <LaraLightIndigo /> : CHOSEN_THEME === 'mdc-light-indigo' ? <MdcLightIndigo /> : CHOSEN_THEME === 'mdc-dark-indigo' ? <MdcDarkIndigo /> : <Rhea />}
        </React.Suspense>
      </>
    );
  }
}

export default Theme;
