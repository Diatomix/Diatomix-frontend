import Panel from '../../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import './PlaceOrder.css';

import { AppContext } from '../../../contexts/app-context';
import { AuthContext, IProvider, ProvidersEnum } from '../../../contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import UpdateContractEffect from '../../../effects/order/UpdateContractEffect';
import { InputSwitch } from 'primereact/inputswitch';
import UpdateBalanceEffect from '../../../effects/order/UpdateBalanceEffect';
import compileApprovalProgram from '../../../scripts/algo/compileApprovalProgram';
import arc0017CreateOrderGetRawTxs from '../../../scripts/algo/arc0017CreateOrderGetRawTxs';
import getAlgodClient from '../../../scripts/algo/getAlgod';
import BigNumber from 'bignumber.js';
import algosdk, { LogicSigAccount } from 'algosdk';
import signTxsWithProviders from '../../../scripts/algo/signTxsWithProviders';
import { Tooltip } from 'primereact/tooltip';

import { BigNumbify } from '../../../helpers/BigNum';

interface PlaceOrderConfig {
  quote: string;
}
interface PlaceOrderProps {
  config?: PlaceOrderConfig;
  children?: React.ReactNode;
  className?: string;
  onContentUpdate?: (data: any) => void;
}
export default function PlaceOrder(props: PlaceOrderProps) {
  const { config, children, className } = props;
  const buttonOptions = ['BUY', 'SELL'];
  const appData = useContext(AppContext);
  const authContext = useContext(AuthContext);
  const [sideIsSell, setSideIsSell] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const [buttonState, setButtonState] = useState<string>(buttonOptions[0]);
  function handleUpdate(newConfig) {
    props.onContentUpdate(newConfig);
  }
  useEffect(() => {
    appData.quantity = quantity;
    if (sideIsSell) {
      appData.asa2SellBigInt = new BigNumber(quantity).multipliedBy(1000000).toFixed(0, 1);
    } else {
      appData.asa1SellBigInt = new BigNumber(quantity).multipliedBy(appData.price * 1000000).toFixed(0, 1);
    }
    appData.setAppData({ ...appData });
  }, [quantity, sideIsSell, price]);

  useEffect(() => {
    appData.price = price;
    appData.setAppData({ ...appData });
  }, [price]);

  useEffect(() => {
    appData.isSellOrder = sideIsSell;
    appData.setAppData({ ...appData });
  }, [sideIsSell]);

  function ErrorHandler({ error }) {
    return (
      <div role="alert">
        <p>
          <Trans i18nKey="Common.ErrorOccured">An error occurred</Trans>:
        </p>
        <pre>{error.message}</pre>
      </div>
    );
  }

  function Config() {
    try {
      return (
        <>
          <Panel header={i18n.t('Layout.EditProperties')}>
            <div className="field my-2">
              <span className="p-float-label">
                <label htmlFor="header">{i18n.t('Layout.PropertyHeader')}</label>
              </span>
            </div>
          </Panel>
        </>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }

  const compile = () => {
    compileApprovalProgram(appData.orderTeal).then(ret => {
      appData.orderCompiled = ret;
      console.log('appData.orderCompiled', appData.orderCompiled);
      getAlgodClient(appData.appConfiguration)
        .getTransactionParams()
        .do()
        .then(suggestedParams => {
          console.log('suggestedParams', suggestedParams);
          const txs = arc0017CreateOrderGetRawTxs(appData, authContext, suggestedParams);
          const program = new Uint8Array(Buffer.from(appData.orderCompiled.result, 'base64'));
          const lsig = new LogicSigAccount(program);
          const tealProvider: IProvider = {
            address: lsig.address(),
            provider: appData.orderCompiled,
            type: ProvidersEnum.ApprovalProgram,
          };
          const providers = [authContext.provider, tealProvider];
          console.log(
            'before sign',
            txs.map(t => {
              return {
                id: t.txID(),
                t,
              };
            }),
            providers
          );

          signTxsWithProviders(txs, providers).then(r => {
            console.log('signed txs', r);
            const algodClient = getAlgodClient(appData.appConfiguration);

            algodClient
              .sendRawTransaction(r)
              .do()
              .then(sent => {
                console.log('sent', sent);
              });
          });
        });
    });
  };

  const getAsa1UnitName = () => {
    if (appData.asa1Config && appData.asa1Config.asset && appData.asa1Config.asset.params) {
      return appData.asa1Config.asset.params['unit-name'] ? appData.asa1Config.asset.params['unit-name'] : appData.asa1Config.asset.params.name;
    }
    return '?';
  };
  const getAsa2UnitName = () => {
    if (appData.asa2Config && appData.asa2Config.asset && appData.asa2Config.asset.params) {
      return appData.asa2Config.asset.params['unit-name'] ? appData.asa2Config.asset.params['unit-name'] : appData.asa2Config.asset.params.name;
    }
    return '?';
  };
  const getAsasName = () => {
    return getAsa1UnitName() + ' / ' + getAsa2UnitName();
  };
  return (
    <>
      <UpdateContractEffect />
      <UpdateBalanceEffect />
      <Panel header={i18n.t('PlaceOrder.Title')} className={className}>
        <div className="button-container">
          <button
            className="buy-button"
            style={sideIsSell ? { backgroundColor: 'gray' } : { backgroundColor: 'green', border: '3px solid darkgreen', borderRadius: '6px' }}
            onClick={() => setSideIsSell(false)}
          >
            <b>BUY</b>
          </button>
          <button
            className="sell-button"
            style={sideIsSell ? { backgroundColor: 'red', border: '3px solid darkred', borderRadius: '6px' } : { backgroundColor: 'gray' }}
            onClick={() => setSideIsSell(true)}
          >
            <b>SELL</b>
          </button>
        </div>
        <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
          <p className="custom-text">AVAILABLE BALANCE</p> <Tooltip target=".custom-target-icon" />
          <i
            className="custom-target-icon pi pi-info-circle p-text-secondary p-overlay-badge"
            data-pr-tooltip="This section shows your account's available balances"
            data-pr-position="right"
            data-pr-at="right+5 center"
            data-pr-my="left center-2"
            style={{ fontSize: '0.75rem', cursor: 'pointer', paddingLeft: '0.5rem' }}
          />
        </div>
        <div className="asa-balance-container">
          <p className="asa-name">{getAsa1UnitName()}</p>
          <p className="asa-value">{BigNumbify(appData.asa1Balance)}</p>
        </div>
        <div className="asa-balance-container mb-3">
          <p className="asa-name">{getAsa2UnitName()}</p>
          <p className="asa-value">{BigNumbify(appData.asa2Balance)}</p>
        </div>
        <div className="divider mb-4" />
        <label htmlFor="price">Price {getAsasName()}</label>
        <InputNumber
          inputId="price"
          value={price}
          onValueChange={e => setPrice(e.value)}
          showButtons
          buttonLayout="horizontal"
          step={0.25}
          decrementButtonClassName="p-button-danger"
          incrementButtonClassName="p-button-success"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
          suffix={' ' + getAsasName()}
        />
        <div className="quantity-input">
          <label htmlFor="quantity">Quantity</label>
          <InputNumber
            className=""
            inputId="quantity"
            value={quantity}
            onValueChange={e => setQuantity(e.value)}
            showButtons
            buttonLayout="horizontal"
            step={0.25}
            decrementButtonClassName="p-button-danger"
            incrementButtonClassName="p-button-success"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            suffix={' ' + getAsa2UnitName()}
          />
        </div>

        <button className="place-order-button mt-5" style={sideIsSell ? { backgroundColor: 'red' } : { backgroundColor: 'green' }}>
          <b>
            {sideIsSell ? 'SELL' : 'BUY'} {getAsa2UnitName()}
          </b>
        </button>
      </Panel>
      {/* <Panel header={i18n.t('PlaceOrder.Title')} className={className}>
        <div className="grid p-fluid">
          <div className="flex flex-row flex-grow-1 w-100">
            <div className="m-2 clickable" style={sideIsSell ? { color: 'gray' } : { color: 'green' }} onClick={() => setSideIsSell(false)}>
              Buy
            </div>
            <InputSwitch className={sideIsSell ? 'm-2 tosell' : 'm-2 tobuy'} checked={sideIsSell} onChange={e => setSideIsSell(e.value)} />
            <div className="m-2 clickable" style={sideIsSell ? { color: 'red' } : { color: 'gray' }} onClick={() => setSideIsSell(true)}>
              Sell
            </div>
          </div>
          <div className=" col-12 md:col-3">
            <label htmlFor="price">Price {getAsasName()}</label>
            <InputNumber
              inputId="price"
              value={price}
              onValueChange={e => setPrice(e.value)}
              showButtons
              buttonLayout="horizontal"
              step={0.25}
              decrementButtonClassName="p-button-danger"
              incrementButtonClassName="p-button-success"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              suffix={' ' + getAsasName()}
            />
          </div>
          <div className=" col-12 md:col-3">
            <label htmlFor="quantity">Quantity</label>
            <InputNumber
              className=""
              inputId="quantity"
              value={quantity}
              onValueChange={e => setQuantity(e.value)}
              showButtons
              buttonLayout="horizontal"
              step={0.25}
              decrementButtonClassName="p-button-danger"
              incrementButtonClassName="p-button-success"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              suffix={' ' + getAsa2UnitName()}
            />
          </div>
        </div>
        {authContext.authToken && <p>{authContext.authAddress.substring(0, 10) + '..'}</p>}

        {appData.asa1Balance && (
          <p>
            Balance {appData.asa1}: {appData.asa1Balance}
          </p>
        )}
        {appData.asa2Balance && (
          <p>
            Balance {appData.asa2}: {appData.asa2Balance}
          </p>
        )}
        <p>
          asa1SellBigInt {appData.asa2}: {appData.asa1SellBigInt}
        </p>
        <p>
          asa2SellBigInt {appData.asa2}: {appData.asa2SellBigInt}
        </p>

        <Button onClick={() => compile()}>Place order</Button>
      </Panel> */}
    </>
  );
}
