import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Layout } from '../components/Layout/Layout';

import '../styles/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const rootElement = document.getElementById('__next');
    if (rootElement) {
      rootElement.className = 'flex flex-col min-h-screen';
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
