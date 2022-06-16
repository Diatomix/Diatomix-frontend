import i18n from 'i18next';
import { Menubar } from 'primereact/menubar';
import React, { Suspense } from 'react';
import { AppContext, IState } from '../contexts/app-context';
import { useNavigate } from 'react-router-dom';
import Authenticate from './Authenticate';
import { Button } from 'primereact/button';
import { AuthContext, IAuthState } from '../contexts/AuthContext';

function Header() {
  let navigate = useNavigate();
  function setTheme(item) {
    localStorage.setItem('CHOSEN_THEME', item);
    console.log('localStorage', localStorage);
    window.location.reload();
  }
  function setLanguage(appData, language) {
    appData.language = language;
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
    if (appData.setAppData) {
      appData.setAppData({ ...appData, language: language });
    }
  }
  function routeTo(path) {
    navigate(path);
  }
  function getItems(appData: IState) {
    return [
      {
        label: i18n.t('Nav.DiatomiX'),
        items: [
          {
            label: i18n.t('Nav.Home'),
            command: () => {
              routeTo('/');
            },
          },
          {
            label: i18n.t('Nav.Trade'),
            command: () => {
              routeTo('/trade');
            },
          },
          {
            label: i18n.t('Nav.Trading'),
            command: () => {
              routeTo('/trading');
            },
          },
          {
            label: i18n.t('Nav.About'),
            command: () => {
              routeTo('/about');
            },
          },
        ],
      },
      {
        label: 'Style',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Rhea',
            command: () => {
              setTheme('rhea');
            },
          },
          {
            label: 'MDC dark indigo',
            command: () => {
              setTheme('mdc-dark-indigo');
            },
          },
          {
            label: 'MDC light indigo',
            command: () => {
              setTheme('mdc-light-indigo');
            },
          },
          {
            label: 'Lara light indigo',
            command: () => {
              setTheme('lara-light-indigo');
            },
          },
        ],
      },
      {
        label: 'Layout editor',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Toggle Drag & Drop',
            command: () => {
              appData.setAppData({ ...appData, editingLayout: !appData.editingLayout });
            },
          },
          {
            label: 'Toggle component properties',
            command: () => {
              appData.setAppData({ ...appData, editingComponents: !appData.editingComponents });
            },
          },
          {
            label: 'Toggle expert mode',
            command: () => {
              appData.setAppData({ ...appData, editingExpertMode: !appData.editingExpertMode });
            },
          },
          {
            label: 'Reset layout',
            command: () => {
              appData.setAppData({ ...appData, resetLayout: true });
            },
          },
          {
            label: 'Finish edit mode',
            command: () => {
              appData.setAppData({ ...appData, editingLayout: false, editingComponents: false });
            },
          },
          {
            separator: true,
          },
          {
            label: 'Add new component',
            items: [
              {
                label: 'MyOrders',
                command: () => {
                  appData.setAppData({ ...appData, layoutAddNew: 'MyOrders' });
                },
              },
              {
                label: 'Chart',
                command: () => {
                  appData.setAppData({ ...appData, layoutAddNew: 'Chart' });
                },
              },
              {
                label: 'Order Book',
                command: () => {
                  appData.setAppData({ ...appData, layoutAddNew: 'OrderBook' });
                },
              },
              {
                label: 'Place order',
                command: () => {
                  appData.setAppData({ ...appData, layoutAddNew: 'PlaceOrder' });
                },
              },
              {
                label: 'Trades',
                command: () => {
                  appData.setAppData({ ...appData, layoutAddNew: 'Trades' });
                },
              },
            ],
          },
        ],
      },
      {
        label: 'Language',
        items: [
          {
            label: 'English',
            command: () => {
              setLanguage(appData, 'en');
            },
          },
          {
            label: 'Slovak',
            command: () => {
              setLanguage(appData, 'sk');
            },
          },
        ],
      },
    ];
  }
  const logout = (authContext: IAuthState) => {
    authContext.authAddress = null;
    authContext.authToken = null;
    authContext.authTx = null;
    authContext.setAuthContext({ ...authContext });
  };
  return (
    <Suspense fallback="loading">
      <AppContext.Consumer>
        {appData => (
          <AuthContext.Consumer>
            {authContext => (
              <>
                <div className="flex flex-row">
                  <Menubar className="m-2 flex-grow-1" model={getItems(appData)} />
                  {authContext.authAddress ? (
                    <Button onClick={() => logout(authContext)} className="m-2">
                      Logout
                    </Button>
                  ) : (
                    <Authenticate buttonIcon="pi pi-external-link" buttonClassName="m-2" />
                  )}
                </div>
              </>
            )}
          </AuthContext.Consumer>
        )}
      </AppContext.Consumer>
    </Suspense>
  );
}

export default Header;
