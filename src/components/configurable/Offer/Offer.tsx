import Panel from '../../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { order_by } from '../../../gqty';
import './Offer.css';
import { gql, useSubscription } from '@apollo/client';
import BigNumber from 'bignumber.js';
interface OfferProps {
  assetBuy: number;
  assetSell: number;
}

const query = gql`
  subscription offer($assetBuy: bigint!, $assetSell: bigint!) {
    offer(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell } }, limit: 10, order_by: { price: desc }) {
      id
      owner
      price
      volume
    }
  }
`;

export default function Offer(props: OfferProps) {
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

  if (!data.offer || data.offer.length <= 0) {
    return <Panel>No offers</Panel>;
  }
  const bestOffers = data.offer.map(({ id, price, volume }) => {
    return (
      <tr key={id}>
        <td style={{ color: '#b23639', borderBottom: '0', paddingTop: 0, paddingBottom: 0 }}>{price}</td>
        <td style={{ borderBottom: '0', paddingTop: 0, paddingBottom: 0 }}>{new BigNumber(volume).dividedBy(1000000).toFixed(6, 0)}</td>{' '}
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
        <Panel header="Offers">
          <table className="table table-borderless p-datatable p-component p-datatable-responsive-scroll" data-bs-spy="scroll">
            <tbody className="p-datatable-tbody">{bestOffers}</tbody>
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
