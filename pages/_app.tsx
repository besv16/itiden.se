import React from 'react';
import type { AppProps} from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    if (!document.documentElement.classList.contains('wf-active')) {
      import('webfontloader').then(WebFont =>
        WebFont.load({
          google: {
            families: ['Open Sans:300,400,600,700'],
          },
        })
      );
    }
  });
  return <Component {...pageProps} />;
};

export default MyApp;
