import Panel from '../../Panel';
import { Trans } from 'react-i18next';
import './Bid.css';
import { gql, useSubscription } from '@apollo/client';
import getUnitName from '../../../scripts/algo/getUnitName';
import { useContext } from 'react';
import { AppContext } from '../../../contexts/app-context';
import formatAsaAmount from '../../../scripts/algo/formatAsaAmount';
import formatPrice from '../../../scripts/algo/formatPrice';
interface BidProps {
  assetBuy: number;
  assetSell: number;
}

const query = gql`
  subscription bid($assetBuy: bigint!, $assetSell: bigint!) {
    bid(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell } }, limit: 10, order_by: { price: desc }) {
      id
      owner
      price
      volume
    }
  }
`;

export default function Bid(props: BidProps) {
  const { assetBuy, assetSell } = props;
  const appData = useContext(AppContext);
  const { data, loading, error } = useSubscription(query, {
    variables: {
      assetBuy: assetBuy,
      assetSell: assetSell,
    },
  });
  if (loading) {
    return <Panel>Loading...</Panel>;
  }
  if (error || !data) {
    return <Panel>Error... {JSON.stringify(error)}</Panel>;
  }

  if (!data.bid || data.bid.length <= 0) {
    return <Panel>No bids</Panel>;
  }
  const bestBids = data.bid.map(({ id, price, volume }) => {
    return (
      <tr key={id}>
        <td style={{ color: '#38a169', borderBottom: '0', paddingTop: 0, paddingBottom: 0 }} className="number">
          {formatPrice(price, appData)}
        </td>
        <td style={{ borderBottom: '0', paddingTop: 0, paddingBottom: 0 }}>{formatAsaAmount(volume, assetSell, appData)}</td>
      </tr>
    );
  });

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
        <Panel header="Top 10 bids">
          <table className="table table-borderless p-datatable p-component p-datatable-responsive-scroll" data-bs-spy="scroll">
            <thead className="p-datatable-thead">
              <tr>
                <th scope="col ">
                  <div className="number">
                    Price {getUnitName(assetBuy, appData)}/{getUnitName(assetSell, appData)}
                  </div>
                </th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody className="p-datatable-tbody">{bestBids}</tbody>
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
