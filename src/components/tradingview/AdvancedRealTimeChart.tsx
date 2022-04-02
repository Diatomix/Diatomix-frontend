import { createId } from './Utils';
import Widget from './Widget';
import { Suspense } from 'react';

const AdvancedRealTimeChart = ({
  width = 980,
  height = 610,
  autosize = false,
  symbol = 'AAPL',
  datafeed = undefined,
  interval = '1',
  range = undefined,
  timezone = 'UTC',
  theme = 'light',
  style = '1',
  locale = 'en',
  toolbar_bg = '',
  enable_publishing = false,
  hide_top_toolbar = false,
  hide_legend = false,
  withdateranges = true,
  hide_side_toolbar = false,
  allow_symbol_change = true,
  save_image = true,
  details = false,
  hotlist = false,
  calendar = false,
  show_popup_button = false,
  popup_width = '600',
  popup_height = '400',
  watchlist = undefined,
  studies = undefined,
  container = `tradingview_${createId(5)}`,

  copyrightStyles = undefined,

  ...props
}) => {
  return (
    <div id="tradingview_widget_wrapper" className="flex flex-column flex-grow-0 flex-grow-1">
      <div id={container} className="flex flex-column flex-grow-0 flex-grow-1">
        <Suspense fallback="loading">
          <Widget
            scriptHTML={{
              ...(!autosize ? { width } : { width: '100%' }),
              ...(!autosize ? { height } : { height: '100%' }),
              autosize,
              datafeed,
              symbol,
              ...(!range ? { interval } : { range }),
              timezone,
              theme,
              style,
              locale,
              toolbar_bg,
              enable_publishing,
              hide_top_toolbar,
              hide_legend,
              withdateranges,
              hide_side_toolbar,
              allow_symbol_change,
              save_image,
              details,
              hotlist,
              calendar,
              ...(show_popup_button && {
                show_popup_button,
                popup_width,
                popup_height,
              }),
              watchlist,
              studies,
              container,
              library_path: '/charting_library/charting_library/',
              ...props,
            }}
            scriptSRC="/charting_library/charting_library/charting_library.js"
            container={container}
            type="Widget"
          ></Widget>
        </Suspense>
      </div>
    </div>
  );
};

export default AdvancedRealTimeChart;
