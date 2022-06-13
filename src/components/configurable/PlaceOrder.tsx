import Panel from '../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { InputText } from 'primereact/inputtext';
import Authenticate from '../Authenticate';
import { AppContext } from '../../contexts/app-context';
import { useContext, useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';

interface PlaceOrderConfig {
  quote: string;
}
interface PlaceOrderProps {
  editingLayout: boolean;
  editingComponents: boolean;
  config?: PlaceOrderConfig;
  children?: React.ReactNode;
  className?: string;
  onContentUpdate?: (data: any) => void;
}
export default function PlaceOrder(props: PlaceOrderProps) {
  const appData = useContext(AppContext);
  const [price, setPrice] = useState<number>(1);
  function handleUpdate(newConfig) {
    props.onContentUpdate(newConfig);
  }

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
  function Content() {
    try {
      return (
        <Panel header={i18n.t('PlaceOrder.Title')}>
          <input type={'number'} min={0} max={100} step={0.1} value={price} onChange={e => setPrice(e.target.valueAsNumber)} />

          {appData.authToken ? <p>{JSON.stringify(appData.authAddress)}</p> : <Authenticate />}
        </Panel>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  return <>{props.editingComponents ? <Config /> : <Content />}</>;
}
