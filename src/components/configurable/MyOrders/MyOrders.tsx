import Panel from '../../Panel';
import { Trans } from 'react-i18next';
import './MyOrders.css';
import { gql, useSubscription } from '@apollo/client';
import { useContext } from 'react';
import { AuthContext, ProvidersEnum } from '../../../contexts/AuthContext';
import shortenAddress from '../../../scripts/algo/shortenAddress';
import { AppContext } from '../../../contexts/app-context';
import moment from 'moment';
interface MyOrdersProps {
  className?: string;
  assetBuy: number;
  assetSell: number;
}

const query = gql`
  subscription offer($assetBuy: bigint!, $assetSell: bigint!, $owner: String!) {
    offer(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell }, owner: { _eq: $owner } }, order_by: { price: desc }) {
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
    offer(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell }, owner: { _eq: $owner } }, order_by: { price: desc }) {
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
  const sub2 = useSubscription(query, {
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
  const getUnitName = (asa: number) => {
    if (appData.asa1Config && appData.asa1Config.asset && asa == appData.asa1Config.asset.index) {
      return getAsa1UnitName();
    } else if (appData.asa2Config && appData.asa2Config.asset && asa == appData.asa2Config.asset.index) {
      return getAsa2UnitName();
    } else {
      return JSON.stringify(asa);
    }
  };
  const getDecimalsMultiplier = (asa: number) => {
    if (appData.asa1Config && appData.asa1Config.asset && asa == appData.asa1Config.asset.index) {
      return 10 ** appData.asa1Config.asset.params.decimals;
    } else if (appData.asa2Config && appData.asa2Config.asset && asa == appData.asa2Config.asset.index) {
      return 10 ** appData.asa2Config.asset.params.decimals;
    } else {
      return 1;
    }
  };
  const orders = sub1.data.offer.concat(sub2.data.offer).map(({ id, price, volume, assetBuy, assetSell, updated_at }) => {
    return (
      <tr key={id}>
        <td>
          <a className="shortAddress" href={`https://testnet.algoexplorer.io/address/${id}`} target="_blank" rel="noreferrer">
            {shortenAddress(id)}
          </a>
        </td>
        <td>
          <span className="shortAddress">
            Sell {volume / getDecimalsMultiplier(assetSell)} {getUnitName(assetSell)} -&gt; Get {(volume * price) / getDecimalsMultiplier(assetBuy)} {getUnitName(assetBuy)}
          </span>
        </td>
        <td className="number">
          {price} {getUnitName(assetBuy)}/{getUnitName(assetSell)}
        </td>
        <td className="number">
          {volume / getDecimalsMultiplier(assetSell)} {getUnitName(assetSell)}
        </td>
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
