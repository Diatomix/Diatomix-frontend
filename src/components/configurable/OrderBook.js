import React from 'react';
import Panel from '../Panel';

class OrderBook extends React.Component {
  render() {
    return <>{this.props.mode === 'edit' ? <>SASS</> : <Panel header="OrderBook">OrderBook</Panel>}</>;
  }
}
export default OrderBook;
