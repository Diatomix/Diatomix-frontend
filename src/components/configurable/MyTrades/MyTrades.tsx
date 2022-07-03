import { FC, useContext } from 'react';
import { gql, useSubscription } from '@apollo/client';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Panel from '../../Panel';
import { AuthContext } from '../../../contexts/AuthContext';
import { AppContext } from '../../../contexts/app-context';
import moment from 'moment';
import shortenAddress from '../../../scripts/algo/shortenAddress';
import getUnitName from '../../../scripts/algo/getUnitName';
import formatAsaAmount from '../../../scripts/algo/formatAsaAmount';
import formatPrice from '../../../scripts/algo/formatPrice';

interface MyTradesPropsI {
  assetBuy: number;
  assetSell: number;
}

const userAsBuyerQuery = gql`
  subscription trade($assetBuy: bigint!, $assetSell: bigint!, $address: String!) {
    trade(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell }, buyer: { _eq: $address } }, order_by: { price: desc }) {
      seller
      sellQuantity
      created_at
      amount
      assetBuy
      assetSell
      buyer
      price
      buyQuantity
    }
  }
`;

const userAsSellerQuery = gql`
  subscription trade($assetBuy: bigint!, $assetSell: bigint!, $address: String!) {
    trade(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell }, seller: { _eq: $address } }, order_by: { price: desc }) {
      seller
      sellQuantity
      created_at
      amount
      assetBuy
      assetSell
      buyer
      price
      buyQuantity
    }
  }
`;

const MyTrades: FC<MyTradesPropsI> = ({ assetBuy, assetSell }) => {
  const appData = useContext(AppContext);
  const authData = useContext(AuthContext);

  const gqlVars = {
    variables: {
      assetBuy: assetBuy,
      assetSell: assetSell,
      address: authData.authAddress,
    },
  };

  const userAsBuyerResult = useSubscription(userAsBuyerQuery, gqlVars);
  const userAsSellerResult = useSubscription(userAsSellerQuery, gqlVars);

  if (userAsSellerResult.loading || userAsBuyerResult.loading) {
    return <Panel>Loading...</Panel>;
  }

  if (userAsSellerResult.error || !userAsSellerResult.data || userAsBuyerResult.error || !userAsBuyerResult.data) {
    return <Panel>Error loading trades. Please refresh the page. </Panel>;
  }

  const userSells = () => {
    const userSells = userAsSellerResult.data.trade.map(e => ({
      action: 'SELL',
      sellQuantity: formatAsaAmount(e.sellQuantity, e.assetSell, appData),
      buyQuantity: formatAsaAmount(e.buyQuantity, e.assetBuy, appData),
      price: `${formatPrice(e.price, appData)} ${getUnitName(assetBuy, appData)}/${getUnitName(assetSell, appData)}`,
      amount: formatAsaAmount(e.amount, e.assetSell, appData),
      createdAt: moment(e['created_at']).format('LLL'),
      seller: (
        <a href={`https://testnet.algoexplorer.io/address/${e.seller}`} target="_blank" rel="noreferrer">
          {shortenAddress(e.seller)}
        </a>
      ),
      buyer: (
        <a href={`https://testnet.algoexplorer.io/address/${e.buyer}`} target="_blank" rel="noreferrer">
          {shortenAddress(e.buyer)}
        </a>
      ),
    }));
    const userBuys = userAsBuyerResult.data.trade.map(e => ({
      action: 'BUY',
      sellQuantity: formatAsaAmount(e.sellQuantity, e.assetSell, appData),
      buyQuantity: formatAsaAmount(e.buyQuantity, e.assetBuy, appData),
      price: `${formatPrice(e.price, appData)} ${getUnitName(assetBuy, appData)}/${getUnitName(assetSell, appData)}`,
      amount: formatAsaAmount(e.amount, e.assetBuy, appData),
      createdAt: moment(e['created_at']).format('LLL'),
      seller: (
        <a href={`https://testnet.algoexplorer.io/address/${e.seller}`} target="_blank" rel="noreferrer">
          {shortenAddress(e.seller)}
        </a>
      ),
      buyer: (
        <a href={`https://testnet.algoexplorer.io/address/${e.buyer}`} target="_blank" rel="noreferrer">
          {shortenAddress(e.buyer)}
        </a>
      ),
    }));
    console.log(userBuys);
    const trades = userSells.concat(userBuys);
    return (
      <DataTable value={trades} paginator={trades.length > 10 ? true : false} rows={10} stripedRows>
        <Column field="action" header="ACTION" sortable></Column>
        <Column field="price" header="PRICE" sortable align="right"></Column>
        <Column field="amount" header="AMOUNT" sortable align="right"></Column>
        <Column field="seller" header="SELLER" sortable filter></Column>
        <Column field="buyer" header="BUYER" sortable filter></Column>
        <Column field="createdAt" header="CREATED AT" sortable></Column>
        <Column field="sellQuantity" header="SELL QUANTITY" sortable align="right"></Column>
        <Column field="buyQuantity" header="BUY QUANTITY" sortable align="right"></Column>
      </DataTable>
    );
  };

  return <Panel header="MY TRADES">{userSells()}</Panel>;
};

export default MyTrades;
