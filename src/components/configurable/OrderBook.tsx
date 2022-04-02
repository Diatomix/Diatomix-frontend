import Panel from '../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { InputText } from 'primereact/inputtext';

interface OrderBookConfig {
  quote: string;
}
interface OrderBookProps {
  editingLayout: boolean;
  editingComponents: boolean;
  config?: OrderBookConfig;
  children?: React.ReactNode;
  className?: string;
  onContentUpdate?: (data: any) => void;
}
export default function OrderBook(props: OrderBookProps) {
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
        <Panel header={i18n.t('OrderBook.Title')}>
          <p>Todo</p>
        </Panel>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  return <>{props.editingComponents ? <Config /> : <Content />}</>;
}