import Panel from '../../Panel';
import { Trans } from 'react-i18next';
import './MyOrders.css';
import { gql, useSubscription } from '@apollo/client';
import { useContext } from 'react';
import { AuthContext, ProvidersEnum } from '../../../contexts/AuthContext';
import shortenAddress from '../../../scripts/algo/shortenAddress';
import { AppContext } from '../../../contexts/app-context';
import moment from 'moment';
import { Offer_Min_Fields } from '../../../generated/graphql';
import { ProgressSpinner } from 'primereact/progressspinner';
import getDecimalsMultiplier from '../../../scripts/algo/getDecimalsMultiplier';
import getUnitName from '../../../scripts/algo/getUnitName';
import formatAsaAmount from '../../../scripts/algo/formatAsaAmount';
import formatPrice from '../../../scripts/algo/formatPrice';

interface MyOrdersProps {
  className?: string;
  assetBuy: number;
  assetSell: number;
  localOrdersCount: number;
}

const query = gql`
  subscription offer($assetBuy: bigint!, $assetSell: bigint!, $owner: String!) {
    offer(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell }, owner: { _eq: $owner } }) {
      id
      price
      volume
      assetBuy
      assetSell
      owner
      updated_at
    }
  }
`;

const query2 = gql`
  subscription offer($assetBuy: bigint!, $assetSell: bigint!, $owner: String!) {
    offer(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell }, owner: { _eq: $owner } }) {
      id
      price
      volume
      assetBuy
      assetSell
      owner
      updated_at
    }
  }
`;

export default function MyOrders(props: MyOrdersProps) {
  const { assetBuy, assetSell } = props;
  const authContext = useContext(AuthContext);
  const appData = useContext(AppContext);
  const sub1 = useSubscription(query, {
    variables: {
      assetBuy: assetBuy,
      assetSell: assetSell,
      owner: authContext.authAddress,
    },
  });
  const sub2 = useSubscription(query2, {
    variables: {
      assetBuy: assetSell,
      assetSell: assetBuy,
      owner: authContext.authAddress,
    },
  });
  if (!authContext.authAddress) {
    return <Panel>Please authenticate first</Panel>;
  }
  if (sub1.loading) {
    return <Panel>Loading...</Panel>;
  }
  if (sub1.error || !sub1.data) {
    return <Panel>Error... {JSON.stringify(sub1.error)}</Panel>;
  }
  if (sub2.loading) {
    return <Panel>Loading...</Panel>;
  }
  if (sub2.error || !sub2.data) {
    return <Panel>Error... {JSON.stringify(sub2.error)}</Panel>;
  }

  const mergeData = () => {
    const ret = sub1.data.offer.concat(sub2.data.offer);
    const localOrders = localStorage.getItem('orders');
    if (!localOrders) return ret;
    const localArray: Array<Offer_Min_Fields> = JSON.parse(localOrders);
    for (let order of localArray) {
      if (!ret.find((o: Offer_Min_Fields) => o.id == order.id)) {
        ret.push(order);
      }
    }
    ret.sort(compare);
    return ret;
  };
  function compare(a, b) {
    if (a.updated_at < b.updated_at) {
      return 1;
    }
    if (a.updated_at > b.updated_at) {
      return -1;
    }
    return 0;
  }

  const orders = mergeData().map(({ id, price, volume, assetBuy, assetSell, updated_at }) => {
    return (
      <tr key={id}>
        <td>
          <a className="shortAddress" href={`https://testnet.algoexplorer.io/address/${id}`} target="_blank" rel="noreferrer">
            {shortenAddress(id)}
          </a>
        </td>
        <td>
          {volume ? (
            <span className="shortAddress">
              Sell {formatAsaAmount(volume, assetSell, appData)} -&gt; Get {formatAsaAmount(volume * price, assetBuy, appData)}
            </span>
          ) : (
            <ProgressSpinner className="smallSpinner" />
          )}
        </td>
        <td className="number">
          {price ? (
            <>
              {formatPrice(price, appData)} {getUnitName(assetBuy, appData)}/{getUnitName(assetSell, appData)}
            </>
          ) : (
            <ProgressSpinner className="smallSpinner" />
          )}
        </td>
        <td className="number">{volume ? <>{formatAsaAmount(volume, assetSell, appData)}</> : <ProgressSpinner className="smallSpinner" />}</td>
        <td>{moment(updated_at).format('LLL')}</td>
      </tr>
    );
  });
  if (!orders) {
    return <Panel>You do not have any orders yet</Panel>;
  }

  function ErrorHandler({ error }) {
    return (
      <div role="alert">
        <p>
          <Trans i18nKey="Common.ErrorOccured">An error occurred</Trans>:
        </p>
        {error && error.message && <pre>{error.message}</pre>}
      </div>
    );
  }

  function Content() {
    try {
      return (
        <Panel header="My orders">
          <table className="table table-borderless p-datatable p-component p-datatable-responsive-scroll" data-bs-spy="scroll">
            <thead className="p-datatable-thead">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Direction</th>
                <th scope="col">Price</th>
                <th scope="col">Amount</th>
                <th scope="col">Last update</th>
              </tr>
            </thead>
            <tbody className="p-datatable-tbody">{orders}</tbody>
          </table>
        </Panel>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  return (
    <>
      <Content />
    </>
  );
  /**/
}
