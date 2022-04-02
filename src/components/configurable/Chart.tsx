import React from 'react';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { InputText } from 'primereact/inputtext';
import Panel from '../Panel';
import AdvancedRealTimeChart from '../tradingview/AdvancedRealTimeChart';
//import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import { useEffect } from 'react';

interface ChartConfig {
  quote: string;
  theme: string;
}
interface ChartProps {
  editingLayout: boolean;
  editingComponents: boolean;
  config?: ChartConfig;
  children?: React.ReactNode;
  className?: string;
  onContentUpdate?: (data: any) => void;
}
export default function Chart(props: ChartProps) {
  // set default values
  useEffect(() => {
    let newConfig = { ...props.config };
    let updated = false;
    if (!newConfig) {
      newConfig = { quote: 'AAPL', theme: 'light' };
      updated = true;
    }
    if (!newConfig.quote) {
      newConfig.quote = 'AAPL';
      updated = true;
    }
    if (!newConfig.theme) {
      newConfig.theme = 'light';
      updated = true;
    }
    console.log('chart newConfig,updated', newConfig, updated);
    if (updated) {
      props.onContentUpdate(newConfig);
    }
  }, [props]);

  function handleUpdate(newConfig) {
    this.props.onContentUpdate(newConfig);
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
            <div className="field">
              <span className="p-float-label">
                <InputText id="name" name="name" value={props.config.quote} onChange={event => handleUpdate({ ...props.config, quote: event.target.value })} autoFocus />
                <label htmlFor="name">Quote name</label>
              </span>
            </div>
            <div className="field">
              <span className="p-float-label">
                <InputText id="name" name="name" value={props.config.theme} onChange={event => handleUpdate({ ...props.config, theme: event.target.value })} autoFocus />
                <label htmlFor="name">Theme - light | dark</label>
              </span>
            </div>
          </Panel>
        </>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  function Content() {
    try {
      return <AdvancedRealTimeChart symbol={props.config.quote} datafeed="http://localhost/udf" autosize></AdvancedRealTimeChart>;
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  return <>{props.editingComponents ? <Config /> : <Content />}</>;
}
