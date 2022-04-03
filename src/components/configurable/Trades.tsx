import Panel from '../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { order_by, useSubscription } from '../../gqless';
import { Suspense, useEffect } from 'react';

interface TradesConfig {
  type: string;
  quote: string;
  aggregated: boolean;
}
interface TradesProps {
  editingLayout: boolean;
  editingComponents: boolean;
  config?: TradesConfig;
  children?: React.ReactNode;
  className?: string;
  onContentUpdate?: (data: any) => void;
}
export default function Trades(props: TradesProps) {
  function handleUpdate(newConfig) {
    props.onContentUpdate(newConfig);
  }
  // set default values
  useEffect(() => {
    let newConfig = { ...props.config };
    let updated = false;
    if (!newConfig) {
      newConfig = { type: 'Trades', quote: '', aggregated: true };
      updated = true;
      console.log('trades updating init');
    }
    if (newConfig.type !== 'Trades') {
      console.log('trades updating newConfig.type', newConfig);
      newConfig.type = 'Trades';
      updated = true;
    }
    if (newConfig.quote === undefined) {
      console.log('trades updating newConfig.quote', newConfig);
      newConfig.quote = '';
      updated = true;
    }
    if (newConfig.aggregated === undefined) {
      console.log('trades updating newConfig.aggregated', newConfig);
      newConfig.aggregated = true;
      updated = true;
    }
    console.log('trades newConfig,updated', newConfig, updated);
    if (updated && props.onContentUpdate) {
      props.onContentUpdate(newConfig);
    }
  }, [props]);

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
                <InputText id="header" name="header" value={props.config.quote} onChange={event => handleUpdate({ ...props.config, quote: event.target.value })} />
                <label htmlFor="header">{i18n.t('Trade.Quote')}</label>
              </span>
            </div>
            <div className="field my-2">
              <span className="">
                <Checkbox id="aggregated" name="aggregated" checked={props.config.aggregated} onChange={event => handleUpdate({ ...props.config, aggregated: !!event.target.checked })}></Checkbox>
                <label htmlFor="aggregated">{i18n.t('Trade.Aggregated')}</label>
              </span>
            </div>
          </Panel>
        </>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }

  const { trade } = useSubscription();
  const recentTrades = trade({ limit: 10, order_by: [{ time: order_by.desc }] }).map(({ id, time, price, amount }) => {
    return (
      <tr key={id}>
        <td>{time}</td>
        <td>{price}</td>
        <td>{amount}</td>
      </tr>
    );
  });
  function Content() {
    try {
      return (
        <Panel header={i18n.t('Trades.Title')}>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{recentTrades}</tbody>
          </table>
        </Panel>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  return (
    <>
      <Suspense fallback="Loading...">{props.editingComponents ? <Config /> : <Content />}</Suspense>
    </>
  );
}
