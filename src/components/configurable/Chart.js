import React from 'react';
import i18n from 'i18next';

import { InputText } from 'primereact/inputtext';
import Panel from '../Panel';
import AdvancedRealTimeChart from '../tradingview/AdvancedRealTimeChart';
//import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

class Chart extends React.Component {
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
    if (!copy.theme) copy.theme = 'light';
    return copy;
  }
  handleUpdate(newConfig) {
    this.setState({ config: newConfig });
    this.props.onContentUpdate(newConfig);
  }
  render() {
    return (
      <>
        {this.props.editingComponents ? (
          <>
            <Panel header={i18n.t('Layout.EditProperties')}>
              <div className="field">
                <span className="p-float-label">
                  <InputText id="name" name="name" value={this.state.config.quote} onChange={event => this.handleUpdate({ ...this.state.config, quote: event.target.value })} autoFocus />
                  <label htmlFor="name">Quote name</label>
                </span>
              </div>
              <div className="field">
                <span className="p-float-label">
                  <InputText id="name" name="name" value={this.state.config.theme} onChange={event => this.handleUpdate({ ...this.state.config, theme: event.target.value })} autoFocus />
                  <label htmlFor="name">Theme - light | dark</label>
                </span>
              </div>
            </Panel>
          </>
        ) : (
          <AdvancedRealTimeChart symbol={this.state.config.quote} datafeed="http://localhost/udf" autosize></AdvancedRealTimeChart>
        )}
      </>
    );
  }
}
export default Chart;
