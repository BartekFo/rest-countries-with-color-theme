import { FunctionComponent } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyles from '@styles/GlobalStyles';
import Provider from '@utils/Provider';

const App: FunctionComponent<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <GlobalStyles />
      </Provider>
    </>
  );
};

export default App;
