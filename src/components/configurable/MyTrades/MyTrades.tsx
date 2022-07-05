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

const query = gql`
  subscription trade($assetBuy: bigint!, $assetSell: bigint!, $address: String!) {
    trade(
      where: {
        _and: [
          { _or: [{ seller: { _eq: $address } }, { buyer: { _eq: $address } }] }
          { _or: [{ _and: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell } } }, { _and: { assetBuy: { _eq: $assetSell }, assetSell: { _eq: $assetBuy } } }] }
        ]
      }
    ) {
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
      address: authData.authAddress ? authData.authAddress : '',
      assetBuy,
      assetSell,
    },
  };

  const queryResult = useSubscription(query, gqlVars);

  if (queryResult.loading) {
    return <Panel>Loading...</Panel>;
  }
  if (queryResult.error) {
    return <Panel>Erorr... {JSON.stringify(queryResult.error)}</Panel>;
  }
  const userSells = () => {
    const userBuys = queryResult.data.trade.map(e => ({
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
    const trades = userBuys;
    return (
      <DataTable value={trades} paginator={trades.length > 10 ? true : false} rows={10} stripedRows>
        <Column field="action" header="ACTION" sortable></Column>
        <Column field="price" header="PRICE" sortable align="right"></Column>
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
