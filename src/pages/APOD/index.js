import Head from 'next/head';

import RenderMedia from 'components/APOD/RenderMedia';
import FetchMedia from 'components/APOD/FetchMediaForm';
import FetchedMediaList from 'components/APOD/FetchedList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.css';

function APOD() {

  return (
    <>
      <Head>
        <title>
          Astronomic Picture of the Day | Space Explorer
      </title>
        <meta name="description" content="Discover our Universe. Each day, receive a new Image or Video (HD), with detailed information writed by a professional." />
      </Head>
      <main className={`container-fluid ${styles.container}`}>
        <h1 className={styles.h1}>
          Astronomic Picture of The Day
        </h1>
        <div className={`row ${styles['main-container']}`}>
          <section className={`col-12 col-md-6 ${styles['img-container']}`}>
            <RenderMedia />
            <FetchMedia />
            <FetchedMediaList />
          </section>
          <section className={`col ${styles.description}`}>
            <h3 className={`h5 mb-3`}>Description:</h3>
            You are seen this message either by:
            <br />
            <br />
            <ol>
              <li>Slow internet connection (just wait a little bit).</li>
              <li>There's no media for the day selected (today by default).</li>
              <li>There might be a problem with the Nasa API.</li>
            </ol>
            In either case, just try reloading the page, or changing the date of the media fetch with
            the form above, and everything should be ok.

            <span className="d-block px-2 pt-3">
              If the problem continue, feel free <a href="mailto:omer.marquez54@gmail.com">to contact me.</a>
            </span>
          </section>
        </div>
      </main>
      <div role="button" className={`d-block d-md-none ${styles.btn}`}>
        <span className="sr-only">Toggle Image/Text View</span>
        <FontAwesomeIcon icon="align-left" className={styles.icon} />
      </div>
    </>
  )
}

export default APOD;