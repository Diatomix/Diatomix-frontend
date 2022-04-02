import Panel from '../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { InputText } from 'primereact/inputtext';
import Authenticate from '../Authenticate';

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
                <InputText id="header" name="header" value={props.config.quote} onChange={event => handleUpdate({ ...props.config, quote: event.target.value })} autoFocus />
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
          <p>Todo</p>
          <Authenticate />
        </Panel>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  return <>{props.editingComponents ? <Config /> : <Content />}</>;
}
