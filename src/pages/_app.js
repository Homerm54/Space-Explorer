import Head from 'next/head';

import Router from 'next/router';
import NProgress from 'nprogress/nprogress';

import Navbar from 'components/Navigation Bar/Navigation Bar';

import 'components/Fontawesome Icon Library/Library';

//Global CSS
import 'components/css/fonts.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'components/css/nprogress.css';
import 'components/css/utilities.css';
import 'components/css/palette.css';
import 'components/css/global.css'

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
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
        <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/images/icons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Space Explorer" />
        <meta name="application-name" content="Space Explorer" />
        <meta name="theme-color" content="#f1f1f1" /> 

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
        <meta name="keywords" content="NASA, Nasa, Space, Galaxy, Explore, Telescope, Galaxy Exploration, Universe, Mars, SpaceX, Mars Rover, Space Images, Space Videos, PWA, Progressive Web App, Space Explorer, Web App, Awesome Site, Explore Universe, Nasa API" />
        <meta name="author" content="Omer Marquez" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <noscript>
        You need to enable JavaScript to run the features of this app.
      </noscript>
    </>
  )
}
