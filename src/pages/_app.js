import Head from 'next/head';

import Router from 'next/router';
import NProgress from 'nprogress/nprogress';

//Global CSS
import 'nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'components/css/fonts.css';
import 'components/css/utilities.css';
import 'components/css/palette.css';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {// Fallback
  NProgress.done();
};

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
