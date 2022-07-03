import { FC } from 'react';
import { gql, useSubscription } from '@apollo/client';
import Panel from '../../Panel';
import './OrderBook.css';
import BigNumber from 'bignumber.js';

interface OrderBookPropsI {
  className?: string;
  assetBuy: number;
  assetSell: number;
}

const bidQuery = gql`
  subscription bid($assetBuy: bigint!, $assetSell: bigint!) {
    bid(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell } }, limit: 10, order_by: { price: desc }) {
      id
      owner
      price
      volume
    }
  }
`;

const offerQuery = gql`
  subscription offer($assetBuy: bigint!, $assetSell: bigint!) {
    offer(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell } }, limit: 10, order_by: { price: desc }) {
      id
      owner
      price
      volume
    }
  }
`;

const OrderBook: FC<OrderBookPropsI> = ({ className, assetBuy, assetSell }) => {
  const bidResult = useSubscription(bidQuery, {
    variables: {
      assetBuy: assetBuy,
      assetSell: assetSell,
    },
  });
  const offerResult = useSubscription(offerQuery, {
    variables: {
      assetBuy: assetBuy,
      assetSell: assetSell,
    },
  });

  if (bidResult.loading || offerResult.loading) {
    return <Panel>Loading...</Panel>;
  }
  if (bidResult.error || offerResult.error || !bidResult.data || !offerResult.data) {
    return <Panel>Error... {bidResult.error ? JSON.stringify(bidResult.error) : JSON.stringify(offerResult.error)}</Panel>;
  }

  const bestBids = bidResult.data.bid.map(({ id, price, volume }) => {
    return (
      <div key={id} className="bid-grid">
        <p className="bid-price">{price}</p>
        <p className="volume">{new BigNumber(volume).dividedBy(1000000).toFixed(6, 0)}</p>
      </div>
    );
  });
  const bestOffers = offerResult.data.offer.map(({ id, price, volume }) => {
    return (
      <div key={id} className="offer-grid">
        <p className="offer-price">{price}</p>
        <p className="volume">{new BigNumber(volume).dividedBy(1000000).toFixed(6, 0)}</p>
      </div>
    );
  });
  return (
    <Panel header="ORDER BOOK" className={className}>
      <div className="headers">
        <p>PRICE</p>
        <p style={{ textAlign: 'right' }}>AMOUNT</p>
      </div>
      {bestBids}
      <div className="divide"></div>
      {bestOffers}
    </Panel>
  );
};

export default OrderBook;
