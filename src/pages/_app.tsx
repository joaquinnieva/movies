import { MaterialProvider, Navbar } from '@/components';
import { StoreProvider } from '@/store';
import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Movies challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <StoreProvider>
        <MaterialProvider>
          <Navbar />
          <Component {...pageProps} />
        </MaterialProvider>
      </StoreProvider>
    </>
  );
}
