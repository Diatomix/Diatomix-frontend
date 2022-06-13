import React, { useEffect, useContext, useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { AppContext, IState } from '../contexts/app-context';

import Panel from '../components/configurable/Panel';
import Chart from '../components/configurable/Chart';
import MyOrders from '../components/configurable/MyOrders';
import OrderBook from '../components/configurable/OrderBook';
import PlaceOrder from '../components/configurable/PlaceOrder';
import Trades from '../components/configurable/Trades';
import Timeline from '../components/configurable/Timeline';
import { createId } from './tradingview/Utils';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
interface LayoutProps {
  layout: string;
}
interface LayoutItem {
  i: string;
  c?: any;
  w: number;
  h: number;
  x: number;
  y: number;
  minW: number;
  minH: number;
  moved: boolean;
  static: boolean;
}
type Layout = Array<LayoutItem>;

interface Layouts {
  [key: string]: Layout;
}

export default function ResponsiveLocalStorageLayout(props: LayoutProps) {
  const appData = useContext(AppContext);
  const [layout, setLayout] = useState<Layout>([]);
  const [layouts, setLayouts] = useState<Layouts>({});
  const [config, setConfig] = useState({});
  const [layoutText, setLayoutText] = useState<string>('');

  useEffect(() => {
    const layoutId = `layouts-${props.layout}`;
    const originalLayouts = getFromLS(layoutId) || {};

    console.log('originalLayouts', layoutId, originalLayouts);
    let layout = [];
    if (Object.keys(originalLayouts).length > 0) {
      layout = originalLayouts[Object.keys(originalLayouts)[0]];
      setLayout(layout);
      setLayouts(JSON.parse(JSON.stringify(originalLayouts)));
      const config = {};
      layout.forEach(element => {
        if (element.c) {
          config[element.i] = element.c;
        }
      });
      setConfig(config);
    } else {
      // init config

      if (appData.setAppData) {
        const newAppData: IState = { ...appData, resetLayout: true };
        console.log('setting newAppData', newAppData);
        appData.setAppData(newAppData);
      }
    }

    console.log('layout init', layout, layouts);
  }, []);
  useEffect(() => {
    setLayoutText(JSON.stringify(layouts));
  }, [layouts]);

  function saveLayoutsTextToLayouts() {
    console.log('saving ', layoutText);
    const newLayouts: Layouts = JSON.parse(layoutText);

    const firstKey = Object.keys(newLayouts)[0];
    const firstLayout = newLayouts[firstKey];
    setLayout(firstLayout);
    const config = {};
    firstLayout.forEach(element => {
      if (element.c) {
        config[element.i] = element.c;
      }
    });

    setLayouts(newLayouts);
    if (appData.setAppData) {
      const newAppData: IState = { ...appData, editingExpertMode: false };
      console.log('setting newAppData', newAppData);
      appData.setAppData(newAppData);
    }
  }

  /// reset
  useEffect(() => {
    console.log('appData.editingLayout', appData.editingLayout);
    if (appData.resetLayout) {
      try {
        console.log('reset', props.layout);
        const layout = require(`../layouts/${props.layout}.json`);
        const layoutCopy = JSON.parse(JSON.stringify(layout));
        console.log('loaded layout', layout, layoutCopy);
        const config = {};
        layoutCopy.forEach(element => {
          if (element.c) {
            config[element.i] = element.c;
          }
        });
        console.log('reset.layout', layoutCopy, JSON.stringify(config));
        const layouts = { lg: JSON.parse(JSON.stringify(layoutCopy)) };
        const layoutId = `layouts-${props.layout}`;
        saveToLS(layoutId, layouts);
        setLayouts(layouts);
        setLayout(layoutCopy);
        setConfig(config);
      } catch (e) {
        console.error('reset error', e);
        const defaultlayout: Layout = [{ i: '1', w: 12, h: 5, minW: 12, minH: 5, x: 0, y: 0, moved: false, static: false }];
        setLayouts({});
        setLayout(defaultlayout);
      }
      if (appData.setAppData) {
        const newAppData: IState = { ...appData, resetLayout: false };
        console.log('setting newAppData', newAppData);
        appData.setAppData(newAppData);
      }
    }
  }, [appData, props.layout]);

  /// reset
  useEffect(() => {
    console.log('appData.editingLayout', appData.editingLayout);
    if (appData.layoutAddNew) {
      addItemToLayout(appData.layoutAddNew);
    }
  }, [appData, props.layout]);

  function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem(key)) || {};
      } catch (e) {
        /*Ignore*/
      }
    }
    return ls[key];
  }

  function saveToLS(key, value) {
    console.log('saveToLS', JSON.stringify(value));
    if (global.localStorage) {
      global.localStorage.setItem(
        key,
        JSON.stringify({
          [key]: value,
        })
      );
    }
  }

  function addItemToLayout(layoutAddNew) {
    try {
      const newItem: LayoutItem = {
        i: layoutAddNew + '_' + createId(5),
        w: 3,
        h: 3,
        x: 0,
        y: 0,
        minW: 1,
        minH: 3,
        moved: false,
        static: false,
        c: { type: layoutAddNew },
      };

      const newLayout: Layout = JSON.parse(JSON.stringify(layout));
      newLayout.push(newItem);
      console.log('newLayout', newLayout);
      const newLayouts: Layouts = JSON.parse(JSON.stringify(layouts));
      console.log('newLayouts1', newLayouts);
      for (let size in newLayouts) {
        console.log('size', size);
        newLayouts[size].push(newItem);
      }
      console.log('newLayouts2', newLayouts);

      const layoutId = `layouts-${props.layout}`;
      console.log('saveToLS.newitem', JSON.stringify(newItem));
      console.log('saveToLS', JSON.stringify(newLayouts));
      const newConfig = { ...config };
      newConfig[newItem.i] = newItem.c;
      setConfig(newConfig);
      console.log('newConfig', newConfig);
      saveToLS(layoutId, newLayouts);
      console.log('setLayout.1', JSON.stringify(newLayout));
      setLayout(newLayout);
      console.log('setLayout.2', JSON.stringify(newLayout));
      setLayouts(newLayouts);
      console.log('setLayouts.3', JSON.stringify(newLayouts));
    } catch {
      const defaultlayout: Layout = [{ i: '1', w: 1, h: 1, minH: 2, minW: 2, x: 0, y: 0, moved: false, static: false }];
      setLayouts({});
      setLayout(defaultlayout);
    }
    if (appData.setAppData) {
      const newAppData = { ...appData, layoutAddNew: '' };
      console.log('setting newAppData', newAppData);
      appData.setAppData(newAppData);
    }
  }
  function onLayoutChange(layout, layouts) {
    if (layout.length > 0) {
      let newConfig = { ...config };
      console.log('onLayoutChange.state.config', config, newConfig);
      layout.forEach(element => {
        if (element.c) {
          newConfig[element.i] = element.c;
        } else {
          element.c = config[element.i];
        }
      });

      const layoutId = `layouts-${props.layout}`;
      console.log('onLayoutChange', layoutId, layout, layouts, props.layout);
      saveToLS(layoutId, layouts);
      console.log('saving config', config, newConfig);
      setLayout(layout);
      setLayouts(layouts);
      setConfig(newConfig);
    }
  }
  function handleContentUpdate(v, value) {
    console.log('i,c,value', value);
    const newLayout = [];
    layout.forEach(lv => {
      if (lv.i === v.i) {
        lv.c = value;
        console.log('set lv config');
        newLayout.push(lv);
      } else {
        newLayout.push(lv);
      }
      console.log('lv.i,v.i,i', lv, value, lv.i, v.i);
    });
    const newLayouts = JSON.parse(JSON.stringify(layouts));
    for (let index in newLayouts) {
      const newL = newLayouts[index];
      for (let lIndex in newL) {
        if (newLayouts[index][lIndex].i === v.i) {
          newLayouts[index][lIndex].c = value;
        }
      }
    }
    console.log('updated layout', newLayout);
    setLayout(newLayout);
    console.log('state.layout, state.layouts', newLayout, newLayouts);
    onLayoutChange(newLayout, newLayouts);
    console.log('state.layout', newLayout);
  }

  return (
    <>
      <AppContext.Consumer>
        {appData => (
          <>
            {appData.editingExpertMode ? (
              <>
                <InputTextarea className="flex flex-grow-0 flex-grow-1 m-2" value={layoutText} onChange={event => setLayoutText(event.target.value)} rows={10}></InputTextarea>
                <Button className="m-2" onClick={saveLayoutsTextToLayouts}>
                  Save
                </Button>
              </>
            ) : (
              <ResponsiveReactGridLayout
                className="layout"
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={30}
                isDraggable={appData ? appData.editingLayout : false}
                isResizable={appData ? appData.editingLayout : false}
                autoSize={true}
                layouts={layouts}
                onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
              >
                {layout.map(v => (
                  <div className="flex flex-column" key={v.i} data-grid={v}>
                    {!v.c ? (
                      <Panel editingLayout={appData.editingLayout} editingComponents={appData.editingComponents} className="flex-grow-0 flex-grow-1 flex flex-column" header="Header 1">
                        {v.i} {JSON.stringify(v)}
                      </Panel>
                    ) : v.c.type === 'Panel' ? (
                      <Panel
                        editingLayout={appData.editingLayout}
                        editingComponents={appData.editingComponents}
                        config={v.c}
                        header={v.c.header}
                        content={v.c.content}
                        onContentUpdate={value => handleContentUpdate(v, value)}
                      ></Panel>
                    ) : v.c.type === 'Chart' ? (
                      <Chart editingLayout={appData.editingLayout} editingComponents={appData.editingComponents} config={v.c} onContentUpdate={value => handleContentUpdate(v, value)}></Chart>
                    ) : v.c.type === 'Timeline' ? (
                      <Timeline editingLayout={appData.editingLayout} editingComponents={appData.editingComponents} config={v.c} onContentUpdate={value => handleContentUpdate(v, value)}></Timeline>
                    ) : v.c.type === 'MyOrders' ? (
                      <MyOrders editingLayout={appData.editingLayout} editingComponents={appData.editingComponents} config={v.c} onContentUpdate={value => handleContentUpdate(v, value)}></MyOrders>
                    ) : v.c.type === 'OrderBook' ? (
                      <OrderBook editingLayout={appData.editingLayout} editingComponents={appData.editingComponents} config={v.c} onContentUpdate={value => handleContentUpdate(v, value)}></OrderBook>
                    ) : v.c.type === 'PlaceOrder' ? (
                      <PlaceOrder config={v.c} onContentUpdate={value => handleContentUpdate(v, value)}></PlaceOrder>
                    ) : v.c.type === 'Trades' ? (
                      <Trades editingLayout={appData.editingLayout} editingComponents={appData.editingComponents} config={v.c} onContentUpdate={value => handleContentUpdate(v, value)}></Trades>
                    ) : (
                      <Panel editingLayout={appData.editingLayout} editingComponents={appData.editingComponents} className="flex-grow-0 flex-grow-1 flex flex-column" header="Header 1">
                        {v.i} {JSON.stringify(v)} {JSON.stringify(v.c.type === 'MyOrders')}
                      </Panel>
                    )}
                  </div>
                ))}
              </ResponsiveReactGridLayout>
            )}
          </>
        )}
      </AppContext.Consumer>
    </>
  );
}
