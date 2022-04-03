import Panel from '../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { InputText } from 'primereact/inputtext';
import { order_by, useSubscription } from '../../gqty';
import { Suspense } from 'react';

interface TradesConfig {
  quote: string;
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
