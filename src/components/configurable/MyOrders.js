import React from 'react';
import i18n from 'i18next';

import Panel from '../Panel';
import { InputText } from 'primereact/inputtext';

class MyOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      config: this.defaultConfig(),
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  defaultConfig() {
    const copy = JSON.parse(JSON.stringify(this.props.config));
    if (!copy.quote) copy.quote = 'AAPL';
    return copy;
  }
  handleUpdate(newConfig) {
    this.setState({ config: newConfig });
    this.props.onContentUpdate(newConfig);
  }
  render() {
    return (
      <>
        {this.props.mode === 'edit' ? (
          <>
            <Panel header={i18n.t('Layout.EditProperties')}>
              <div className="field">
                <span className="p-float-label">
                  <InputText id="name" name="name" value={this.state.config.quote} onChange={event => this.handleUpdate({ ...this.state.config, quote: event.target.value })} autoFocus />
                  <label htmlFor="name">Quote name</label>
                </span>
              </div>
            </Panel>
          </>
        ) : (
          <Panel header="MyOrders">MyOrders {this.state.config.quote}</Panel>
        )}
      </>
    );
  }
}
export default MyOrders;
