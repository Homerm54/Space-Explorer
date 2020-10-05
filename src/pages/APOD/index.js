import Head from 'next/head';
import { useState, useEffect } from 'react';

import RenderMedia from 'components/APOD/RenderMedia';
import FetchMediaForm from 'components/APOD/FetchMediaForm';
import FetchedMediaList from 'components/APOD/FetchedList';
import fetchMedia from 'components/APOD/FetchMethod';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.css';

//2020-9-1 Video


/**
 * Index Page, render all the components to create an interface to search
 * and retrieve media from the Nasa APOD API, hence it's name
 */
function APOD() {

  let date = new Date();

  const [fetchDate, setFetchDate] = useState({
    day: date.getDate(), month: (date.getMonth() + 1), year: date.getFullYear()
  });

  const [fetchedMedia, setFetchedMedia] = useState({
    media: false, title: false, copyright: false,
    date: `$
    {fetchDate.year}-${fetchDate.month}-${fetchDate.day}`, mediaType: 'image',
    explanation: false, loading: true
  });

  useEffect(() => {
    const date = `${fetchDate.year}-${fetchDate.month}-${fetchDate.day}`;
    //String formated for Nasa API   YYYY-MM-DD

    let tempData = {
      date
    }; //Store the data fetched here

    fetchMedia(date, setFetchedMedia, tempData, true);

  }, [fetchDate])

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
          <section className={`col-12 ${styles['img-container']}`}>
            <RenderMedia fetchedMedia={fetchedMedia} />
            <h3 className='h4 inline-block p-2'>Fetch more Images/Videos by date!</h3>
          </section>
          <section className='col-12'>
            <FetchMediaForm setDate={setFetchDate} />
            <FetchedMediaList />
          </section>
        </div>
      </main>
    </>
  )
}

export default APOD;