import React from 'react';
import Panel from '../Panel';
import i18n from 'i18next';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

class OrderBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: this.props.config,
    };
  }
  render() {
    const events = [
      { status: i18n.t('Timeline.Start'), text: i18n.t('Timeline.StartText'), date: 'Q4 2021', icon: 'pi pi-star', image: 'game-controller.jpg' },
      { status: i18n.t('Timeline.MVP'), text: i18n.t('Timeline.MVPText'), date: 'Q1 2022', icon: 'pi pi-star' },
      { status: i18n.t('Timeline.Testnet'), text: i18n.t('Timeline.TestnetText'), date: 'Q3 2022', icon: 'pi pi-star' },
      { status: i18n.t('Timeline.Mainnet'), text: i18n.t('Timeline.MainnetText'), date: 'Q4 2022', icon: 'pi pi-star' },
    ];
    const customizedMarker = item => {
      return (
        <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
          <i className={item.icon}></i>
        </span>
      );
    };

    const customizedContent = item => {
      return (
        <Card title={item.status} subTitle={item.date}>
          {item.image && (
            <img
              src={`${this.contextPath}/images/product/${item.image}`}
              onError={e => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
              alt={item.name}
              width={200}
              className="p-shadow-2"
            />
          )}
          <p>{item.text}</p>
          <Button label="Read more" className="p-button-text"></Button>
        </Card>
      );
    };

    return (
      <>
        {this.props.mode === 'edit' ? (
          <>
            <Panel header={i18n.t('Layout.EditProperties')}>
              <div className="field my-2">
                <code>{i18n.t(`Layout.NotConfigurable`)}</code>
              </div>
            </Panel>
          </>
        ) : (
          <Panel header={i18n.t('Timeline.Title')}>
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
          </Panel>
        )}
      </>
    );
  }
}
export default OrderBook;
