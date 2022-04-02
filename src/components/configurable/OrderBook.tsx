import Panel from '../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { InputText } from 'primereact/inputtext';
import { order_by, useTransactionQuery } from '../../gqless';
import { Suspense, useState } from 'react';

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
  const [liveBids, setLiveBids] = useState<JSX.Element[]>([]);
  const [liveOffers, setLiveOffers] = useState<JSX.Element[]>([]);

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
  const { data, error, isLoading } = useTransactionQuery(
    (query, args: string) => {
      return query.bids({ limit: 10, order_by: [{ price: order_by.desc }] }).map(({ id, price, amount }) => {
        return (
          <tr key={id}>
            <td>{price}</td>
            <td>{amount}</td>
          </tr>
        );
      });
    },
    {
      variables: 'John',
      // By default is 'cache-first'
      fetchPolicy: 'cache-and-network',
      // Polling every 5 seconds
      pollInterval: 5000,
      // By default is `true`
      notifyOnNetworkStatusChange: true,
      onCompleted(data) {
        setLiveBids(data);
      },
      onError(error) {},
      suspense: false,
      // By default is `false`
      skip: false,
    }
  );
  const x = useTransactionQuery(
    (query, args: string) => {
      return query.offers({ limit: 10, order_by: [{ price: order_by.asc }] }).map(({ id, price, amount }) => {
        return (
          <tr key={id}>
            <td>{price}</td>
            <td>{amount}</td>
          </tr>
        );
      });
    },
    {
      variables: 'John',
      // By default is 'cache-first'
      fetchPolicy: 'cache-and-network',
      // Polling every 5 seconds
      pollInterval: 5000,
      // By default is `true`
      notifyOnNetworkStatusChange: true,
      onCompleted(data) {
        setLiveOffers(data);
      },
      onError(error) {},
      suspense: false,
      // By default is `false`
      skip: false,
    }
  );
  if (error) {
    return <p>Error! {error.message}</p>;
  }

  function Content() {
    try {
      return (
        <Panel header={i18n.t('OrderBook.Title')}>
          <table>
            <thead>
              <tr>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{liveOffers}</tbody>
            <thead>
              <tr>
                <th>Curr price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{liveBids}</tbody>
            <thead>
              <tr>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
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
