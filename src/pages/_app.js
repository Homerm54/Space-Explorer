import Head from 'next/head';

import Router from 'next/router';
import NProgress from 'nprogress/nprogress';

import Navbar from 'components/Navigation Bar/Navigation Bar';

import 'components/Fontawesome Icon Library/Library';

//Global CSS
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'components/nprogress.css'
import 'components/css/fonts.css';
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
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />
        <meta name="keywords" content="NASA, Nasa, Space, Galaxy, Explore, Telescope, Galaxy Exploration, Universe, Mars, SpaceX, Mars Rover, Space Images, Space Videos, PWA, Progressive Web App, Space Explorer, Web App, Awesome Site, Explore Universe, Nasa API" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Omer Marquez" />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="images/Icons/favicon.ico" />
        <link rel="apple-touch-icon" href="images/Icons/apple-touch-icon.png" />
        {/**<link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <noscript>
        You need to enable JavaScript to run the features of this app.
      </noscript>
    </>
  )
}
