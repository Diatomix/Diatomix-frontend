import Panel from '../Panel';
import { ScrollPanel } from 'primereact/scrollpanel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';
import { order_by } from '../../gqty';
import { useSubscription } from '../../gqty';

import { InputText } from 'primereact/inputtext';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';

interface MyOrdersConfig {
  quote: string;
}
interface MyOrdersProps {
  editingLayout: boolean;
  editingComponents: boolean;
  config?: MyOrdersConfig;
  children?: React.ReactNode;
  className?: string;
  onContentUpdate?: (data: any) => void;
}
export default function MyOrders(props: MyOrdersProps) {
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
            <div className="field my-2" data-bs-spy="scroll">
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
  const bestBids = bids({ limit: 10, order_by: [{ price: order_by.desc }] }).map(({ id, price, amount, created_at }) => {
    return (
      // <div>
      //       <div className="card">
      //           <DataTable key={id} scrollable scrollHeight="flex">
      //               <Column field="Price" header="Price">{price}</Column>
      //               <Column field="price.amount" header="Amount">{amount}</Column>
      //           </DataTable>
      //       </div>
      //  </div>
      <tr key={id} >
        <td >{price}</td>
        <td>{amount}</td>
        <td>{created_at}</td>
      </tr>
    );
  });


  const { offers } = useSubscription();
  const bestOffers = offers({ limit: 10, order_by: [{ price: order_by.desc }] }).map(({ id, price, amount, created_at }) => {
    return (
    // <div>
    //   <div className="card">
    //       <DataTable key={id} scrollable scrollHeight="flex">
    //           {/* <Column field="Time" header="Time">{time}</Column> */}
    //           <Column field="Price" header="Price">{price}</Column>
    //           <Column field="amount.price" header="Amount">{amount}</Column>
    //           <Column field="created.price" header="Time">{created_at}</Column>
    //       </DataTable>
    //   </div>
    // </div>
      <tr key={id}>
        <td style={{ color: "white"}}>{price}</td>
        <td style={{ color: 'white' }}>{amount}</td>
        <td style={{ color: 'white' }}>{created_at}</td>
      </tr>
    );
  });

  function Content() {
    try {
      return (
        <Panel header={i18n.t('MyOrders.Title')}>
           <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
          <div className="card-dark"  style={{ height: 'auto' }}>
          {/* <div className="card-header">
              Orders
          </div> */}
          <div className="card-body" data-bs-spy="scroll">
           <table className="table table-hover" data-bs-spy="scroll">
            <thead>
              <tr>
                <th scope='col' style={{ color: 'white' }}>Price</th>
                <th scope='col' style={{ color: 'white' }}>Amount</th>
                <th scope='col' style={{ color: 'white' }}>Time</th>
              </tr>
            </thead>
            <tbody  style={{ height: '50px', overflow: 'scroll' }}>{bestOffers}</tbody>
            {/* <thead>
              <tr>
                <th>Curr price</th>
                <th>Amount</th>
              </tr>
            </thead> */}
            {/* <tbody>{bestBids}</tbody> */}
            {/* <thead>
              <tr>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead> */}
          </table>
          </div>
    </div>
    </ScrollPanel>
          {/* <p>Todo</p> */}
        </Panel>

      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  return <>{props.editingComponents ? <Config /> : <Content />}</>;
}
