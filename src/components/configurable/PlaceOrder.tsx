import Panel from '../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { InputText } from 'primereact/inputtext';
import Authenticate from '../Authenticate';
import { AppContext } from '../../contexts/app-context';
import { useContext, useEffect, useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

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
  const appData = useContext(AppContext);
  const [price, setPrice] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  function handleUpdate(newConfig) {
    props.onContentUpdate(newConfig);
  }
  useEffect(() => {
    appData.quantity = quantity;
    appData.setAppData({ ...appData });
  }, [quantity]);
  useEffect(() => {
    appData.price = price;
    appData.setAppData({ ...appData });
  }, [price]);
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
  return (
    <>
      <Panel header={i18n.t('PlaceOrder.Title')} className={className}>
        <div className="grid p-fluid">
          <div className=" col-12 md:col-3">
            <label htmlFor="price">
              Price {appData.asa1}/{appData.asa2}
            </label>
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
              mode="currency"
              currency="EUR"
            />
          </div>
        </div>
        {appData.authToken && <p>{appData.authAddress.substring(0, 10) + '..'}</p>}

        <Button>Place order</Button>
      </Panel>
    </>
  );
}
