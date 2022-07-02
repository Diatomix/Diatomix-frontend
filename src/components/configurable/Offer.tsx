import Panel from '../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { order_by } from '../../gqty';
import { useSubscription } from '../../gqty';
interface OfferProps {
  assetBuy: number;
  assetSell: number;
}
export default function Offer(props: OfferProps) {
  function ErrorHandler({ error }) {
    return (
      <div role="alert">
        <p>
          <Trans i18nKey="Common.ErrorOccured">An error occurred</Trans>:
        </p>
        <pre>{error.message}</pre>
      </div>
    );
  }

  const { offers } = useSubscription();
  const bestOffers = offers({ limit: 10, order_by: [{ price: order_by.desc }] }).map(({ id, price, amount }) => {
    return (
      <tr key={id}>
        <td style={{ color: 'white' }}>{price}</td>
        <td style={{ color: 'white' }}>{amount}</td>
      </tr>
    );
  });

  function Content() {
    try {
      return (
        <Panel header={i18n.t('OrderBook.Title')}>
          <table className="table  table-borderless table-hover" data-bs-spy="scroll">
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
            <tbody>{bestOffers}</tbody>
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
}
