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

interface AllTradesPropsI {
  assetBuy: number;
  assetSell: number;
}

const query = gql`
  subscription trade($assetBuy: bigint!, $assetSell: bigint!) {
    trade(where: { _and: [{ _or: [{ _and: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell } } }, { _and: { assetBuy: { _eq: $assetSell }, assetSell: { _eq: $assetBuy } } }] }] }) {
      price
      assetSell
      assetBuy
      seller
      buyer
      sellQuantity
      buyQuantity
    }
  }
`;

const AllTrades: FC<AllTradesPropsI> = ({ assetBuy, assetSell }) => {
  const appData = useContext(AppContext);
  const authData = useContext(AuthContext);

  const gqlVars = {
    variables: {
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
      action: e.assetSell == appData.asa1 ? 'BUY' : 'SELL',
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
        <Column field="price" header="PRICE" sortable align="right"></Column>
        <Column field="sellQuantity" header="SELL QUANTITY" sortable align="right"></Column>
        <Column field="buyQuantity" header="BUY QUANTITY" sortable align="right"></Column>
        <Column field="createdAt" header="CREATED AT" sortable></Column>
      </DataTable>
    );
  };

  return <Panel header="TRADES">{userSells()}</Panel>;
};

export default AllTrades;
