import { AxiosInterceptor } from '@/services';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  AxiosInterceptor();

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
