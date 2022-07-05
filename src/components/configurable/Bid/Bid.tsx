import Panel from '../../Panel';
import { Trans } from 'react-i18next';
import { gql, useSubscription } from '@apollo/client';
import getUnitName from '../../../scripts/algo/getUnitName';
import { useContext, useRef, useState } from 'react';
import { AppContext } from '../../../contexts/app-context';
import formatAsaAmount from '../../../scripts/algo/formatAsaAmount';
import formatPrice from '../../../scripts/algo/formatPrice';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog'; // To use <ConfirmDialog> tag
import getEscrowById from '../../../scripts/graphql/getEscrowById';
import { AuthContext, IProvider, ProvidersEnum } from '../../../contexts/AuthContext';
import getAlgodClient from '../../../scripts/algo/getAlgod';
import arc0017ExecuteFullOrderGetRawTxs from '../../../scripts/algo/arc0017ExecuteFullOrderGetRawTxs';
import getOfferById from '../../../scripts/graphql/getOfferById';
import { LogicSigAccount } from 'algosdk';
import signTxsWithProviders from '../../../scripts/algo/signTxsWithProviders';
import { Toast } from 'primereact/toast';
import arc0017CancelOrderWithAssetGetRawTxs from '../../../scripts/algo/arc0017CancelOrderWithAssetGetRawTxs';

interface BidProps {
  assetBuy: number;
  assetSell: number;
}

const query = gql`
  subscription bid($assetBuy: bigint!, $assetSell: bigint!) {
    bid(where: { assetBuy: { _eq: $assetBuy }, assetSell: { _eq: $assetSell }, volume: { _gt: 0 } }, limit: 10, order_by: { price: desc }) {
      id
      owner
      price
      volume
    }
  }
`;

export default function Bid(props: BidProps) {
  const { assetBuy, assetSell } = props;
  const toast = useRef(null);

  const appData = useContext(AppContext);
  const authContext = useContext(AuthContext);
  const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
  const [toExecute, setToExecute] = useState<string>();
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
  function selectPrice(price: any): void {
    appData.price = price;
    appData.setAppData({ ...appData });
  }
  function selectVolume(volume: any): void {
    appData.quantity = volume / 1000000;
    appData.setAppData({ ...appData });
  }
  function trade(id: string): void {
    setToExecute(id);
    setConfirmVisible(true);
  }
  const bestBids = data.bid.map(({ id, price, volume, owner }) => {
    return (
      <tr key={id} className="order-row">
        <td style={{ borderBottom: '0', paddingTop: 1, paddingBottom: 0 }}>
          {owner == authContext.authAddress ? (
            <Button className="px-2 my-0 p-0" style={{ textAlign: 'center' }} onClick={() => cancelOrder(id)}>
              Cancel
            </Button>
          ) : (
            <Button className="px-2 my-0 p-0" style={{ textAlign: 'center' }} onClick={() => trade(id)}>
              Trade
            </Button>
          )}
        </td>
        <td style={{ color: '#38a169', borderBottom: '0', paddingTop: 0, paddingBottom: 0 }} className="align-middle number clickable" onClick={() => selectPrice(price)}>
          {formatPrice(price, appData)}
        </td>
        <td className="align-middle nowrap clickable" style={{ borderBottom: '0', paddingTop: 0, paddingBottom: 0 }} onClick={() => selectVolume(volume)}>
          {formatAsaAmount(volume, assetSell, appData)}
        </td>
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
  const cancelOrder = (id: string) => {
    const exec = async () => {
      console.log('canceling ' + id);
      const escrow = await getEscrowById(id, authContext);
      const algodClient = getAlgodClient(appData.appConfiguration);
      const suggestedParams = await algodClient.getTransactionParams().do();
      const txs = arc0017CancelOrderWithAssetGetRawTxs(appData, authContext, suggestedParams, escrow);
      console.log('txs', txs);
      const program = new Uint8Array(Buffer.from(escrow.lsig, 'hex'));
      const lsig = new LogicSigAccount(program);
      const tealProvider: IProvider = {
        address: lsig.address(),
        provider: lsig,
        type: ProvidersEnum.LogicSigAccount,
      };
      const providers = [authContext.provider, tealProvider];
      const signedTxs = await signTxsWithProviders(txs, providers);

      algodClient
        .sendRawTransaction(signedTxs)
        .do()
        .then(sent => {
          toast.current.show({ severity: 'success', summary: 'Order canceled', detail: 'Your order has been canceled', life: 3000 });
          console.log('sent', sent);
        })
        .catch(e => {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error occured. Check your balance', life: 3000 });
        });
    };
    exec().catch(console.error);
  };
  const accept = () => {
    const exec = async () => {
      console.log(`executing ${toExecute}`);
      const escrow = await getEscrowById(toExecute, authContext);
      const offer = await getOfferById(toExecute, authContext);
      const algodClient = getAlgodClient(appData.appConfiguration);
      const suggestedParams = await algodClient.getTransactionParams().do();
      const txs = arc0017ExecuteFullOrderGetRawTxs(appData, authContext, suggestedParams, offer, escrow);

      const program = new Uint8Array(Buffer.from(escrow.lsig, 'hex'));
      const lsig = new LogicSigAccount(program);
      const tealProvider: IProvider = {
        address: lsig.address(),
        provider: lsig,
        type: ProvidersEnum.LogicSigAccount,
      };
      const providers = [authContext.provider, tealProvider];
      console.log(
        'before sign',
        txs.map(t => {
          return {
            id: t.txID(),
            t,
          };
        }),
        providers
      );
      const signedTxs = await signTxsWithProviders(txs, providers);
      algodClient
        .sendRawTransaction(signedTxs)
        .do()
        .then(sent => {
          toast.current.show({ severity: 'success', summary: 'Order submitted', detail: 'Your order has been submitted to the blockchain', life: 3000 });
          console.log('sent', sent);
        })
        .catch(e => {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error occured. Check your balance', life: 3000 });
        });

      console.log('suggestedParams,escrow,signed', suggestedParams, escrow, signedTxs);
    };
    exec().catch(console.error);

    setConfirmVisible(false);
  };

  const reject = () => {
    setConfirmVisible(false);
  };
  function Content() {
    try {
      return (
        <>
          <Toast ref={toast} />
          <ConfirmDialog
            visible={confirmVisible}
            onHide={() => setConfirmVisible(false)}
            message="Are you sure you want to execute the order?"
            header="Confirmation"
            icon="pi pi-exclamation-triangle"
            accept={accept}
            reject={reject}
          />
          <Panel header="Top 10 bids">
            <table className="table table-borderless p-datatable p-component p-datatable-responsive-scroll" data-bs-spy="scroll">
              <thead className="p-datatable-thead">
                <tr>
                  <th scope="col">Action</th>
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
        </>
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
