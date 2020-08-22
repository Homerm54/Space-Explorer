import Link from 'next/link';
import Head from 'next/head';

import Landpage from 'components/Landpage/Main';

export default function Home(){
  return(
    <>
      <Head>
        <meta name="description" content="Explore the Cosmos from your Home. Access to Nasa's API, learn and discover galaxies, exoplanets, and more." />
        <title>
          Space Explorer
        </title>
      </Head>
      <Landpage />
    </>
  )
}