import Panel from '../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { InputText } from 'primereact/inputtext';
import { order_by } from '../../gqty';
import { Suspense } from 'react';
import { useSubscription } from '../../gqty';
import { ScrollPanel } from 'primereact/scrollpanel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface OrderBookConfig {
  quote: string;
}
interface OrderBookProps {
  editingLayout: boolean;
  editingComponents: boolean;
  config?: OrderBookConfig;
  children?: React.ReactNode;
  className?: string;
  onContentUpdate?: (data: any) => void;
}
export default function OrderBook(props: OrderBookProps) {
  function handleUpdate(newConfig) {
    props.onContentUpdate(newConfig);
  }

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

  function Config() {
    try {
      return (
        <>
          <Panel header={i18n.t('Layout.EditProperties')}>
            <div className="field my-2">
              <span className="p-float-label">
                <InputText id="header" name="header" value={props.config.quote} onChange={event => handleUpdate({ ...props.config, quote: event.target.value })} />
                <label htmlFor="header">{i18n.t('Layout.PropertyHeader')}</label>
              </span>
            </div>
          </Panel>
        </>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  const { bids } = useSubscription();
  const bestBids = bids({ limit: 10, order_by: [{ price: order_by.desc }] }).map(({ id, price, amount }) => {
    return (
      // <div>
      //       <div className="card">
      //           <DataTable key={id} scrollable scrollHeight="flex">
      //               <Column field="Price" header="Price">{price}</Column>
      //               <Column field="amount.price" header="Amount">{amount}</Column>
      //           </DataTable>
      //       </div>
      //   </div>
      <tr key={id}>
        <td style={{ color: 'white' }}>{price}</td>
        <td style={{ color: 'white' }}>{amount}</td>
      </tr>
    );
  });

  const { offers } = useSubscription();
  const bestOffers = offers({ limit: 10, order_by: [{ price: order_by.desc }] }).map(({ id, price, amount }) => {
    return (
  //   <div>
  //     <div className="card" >
  //         <DataTable key={id} scrollable scrollHeight="flex">
  //             <Column field="price" header="Price">{price}</Column>
  //             <Column field="amount.price" header="Amount">{amount}</Column>
  //         </DataTable>
  //     </div>
  // </div>

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
              <th scope='col' style={{ color: 'white' }}>Price</th>
              <th scope='col' style={{ color: 'white' }}>Amount</th>
              </tr>
            </thead>
            <tbody>{bestOffers}</tbody>
            {/* <thead>
              <tr>
                <th>Curr price</th>
                <th>Amount</th>
              </tr>
            </thead> */}
            <tbody>{bestBids}</tbody>
            {/* <thead>
              <tr>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead> */}
          </table>
        </Panel>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  return (
    <>
      <Suspense fallback="Loading...">{props.editingComponents ? <Config /> : <Content />}</Suspense>
    </>
  );
}
