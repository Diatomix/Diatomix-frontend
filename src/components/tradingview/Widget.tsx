import React, { createRef, useEffect } from 'react';

interface WidgetProps {
  scriptHTML: any;
  scriptSRC: string;
  container?: string;
  type?: 'Widget' | 'MediumWidget';
}

declare const TradingView: any;
declare const Datafeeds: any;

const Widget: React.FC<WidgetProps> = ({ scriptHTML, scriptSRC, container, type }) => {
  const ref: { current: HTMLDivElement | null } = createRef();

  useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement('script');
      script.src = scriptSRC;
      script.async = true;
      script.type = 'text/javascript';
      scriptHTML.datafeed = new Datafeeds.UDFCompatibleDatafeed('https://demo-feed-data.tradingview.com');

      if (type === 'Widget' || type === 'MediumWidget') {
        if (typeof TradingView !== undefined) {
          script.onload = () => {
            script.innerHTML = JSON.stringify(type === 'Widget' ? new TradingView.widget(scriptHTML) : type === 'MediumWidget' ? new TradingView.MediumWidget(scriptHTML) : undefined);
            console.log('script.innerHTML', script.innerHTML);
          };
        }
      } else {
        script.innerHTML = JSON.stringify(scriptHTML);
        console.log('script.innerHTML', script.innerHTML);
      }
      ref.current.appendChild(script);
      refValue = ref.current;
    }
    return () => {
      if (refValue) {
        while (refValue.firstChild) {
          refValue.removeChild(refValue.firstChild);
        }
      }
    };
  }, [ref, scriptHTML]);

  return <div ref={ref} id={container} className="flex flex-column flex-grow-0 flex-grow-1" />;
};

export default Widget;
