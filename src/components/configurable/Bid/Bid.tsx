import Panel from '../../Panel';
import { Trans } from 'react-i18next';
import './Bid.css';
import { gql, useSubscription } from '@apollo/client';
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
        <td style={{ color: '#38a169', borderBottom: '0', paddingTop: 0, paddingBottom: 0 }}>{price}</td>
        <td style={{ borderBottom: '0', paddingTop: 0, paddingBottom: 0 }}>{volume}</td>
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
        <Panel header="Bids">
          <table className="table table-borderless p-datatable p-component p-datatable-responsive-scroll" data-bs-spy="scroll">
            <thead>
              <tr>
                <th scope="col" style={{ color: 'white' }}>
                  Price
                </th>
                <th scope="col" style={{ color: 'white' }}>
                  Amount
                </th>
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
