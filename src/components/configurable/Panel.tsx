import Panel from '../Panel';
import i18n from 'i18next';
import { Trans } from 'react-i18next';

import { InputText } from 'primereact/inputtext';

interface ConfigurablePanelConfig {
  header: string;
  content: string;
}
interface ConfigurablePanelProps {
  editingLayout: boolean;
  editingComponents: boolean;
  config?: ConfigurablePanelConfig;
  header: string;
  content?: string;
  children?: React.ReactNode;
  className?: string;
  onContentUpdate?: (data: any) => void;
}
export default function ConfigurablePanel(props: ConfigurablePanelProps) {
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
          {!props.config || !props.config.header ? (
            <div>Config error</div>
          ) : (
            <Panel header={i18n.t('Layout.EditProperties')}>
              <div className="field my-2">
                <span className="p-float-label">
                  <InputText id="header" name="header" value={props.config.header} onChange={event => handleUpdate({ ...props.config, header: event.target.value })} autoFocus />
                  <label htmlFor="header">{i18n.t('Layout.PropertyHeader')}</label>
                </span>
              </div>

              <div className="field my-2">
                <code>{i18n.t(`${props.config.header}`)}</code>
              </div>
              <div className="field my-2">
                <span className="p-float-label">
                  <InputText id="name" name="name" value={props.config.content} onChange={event => this.handleUpdate({ ...props.config, content: event.target.value })} />
                  <label htmlFor="name">{i18n.t('Layout.PropertyContent')}</label>
                </span>
              </div>

              <div className="field my-2">
                <code>{i18n.t(`${props.config.content}`)}</code>
              </div>
            </Panel>
          )}
        </>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  function Content() {
    try {
      return (
        <Panel header={i18n.t(props.header)}>
          <p>{i18n.t(`${props.content}`)}</p>
        </Panel>
      );
    } catch (error) {
      return <ErrorHandler error={error} />;
    }
  }
  return <>{props.editingComponents ? <Config /> : <Content />}</>;
}
