import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MediaRender.module.css';

function MediaRender({ fetchedMedia }) {

  //Load the defaults
  let media = <img src="images/bad-img.png" className={`col-12 ${styles.img}`} />

  let text = (<>
    <section className={`col ${styles.description}`}>
      <FontAwesomeIcon icon="circle-notch" className={`d-inline-block ${styles.spinner}`} role="status" />
      <span className="d-inline-block">
        <h3 className="h5 pl-3">Fetching Media...</h3>
      </span>
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
  </>)

  if (!fetchedMedia.loading) {

    text = <span className="d-inline-block">
      <h3 className="h5 pl-2">{fetchedMedia.title}</h3>
      <span className='d-block pl-2'>Copyright: {fetchedMedia.copyright}</span>
      <br />
      <span className='d-inline-block mr-4' style={{ textAlign: 'justify' }}>
        {fetchedMedia.explanation}
      </span>
    </span>

    if (fetchedMedia.mediaType === 'image') {
      media =
        <figure className={`row`}>
          <img src={fetchedMedia.media} className={`col-12 col-md-7 ${styles.img} ${styles.media_container}`} />
          <figcaption className={`col pt-4 pb-5 ${styles.figcaption}`}>
            {text}
          </figcaption>
        </figure>
    } else { //Video is the default
      media =
        <div className='row'>
          <div className={`${styles.video_container} ${styles.media_container}`}>
            <iframe className={`${styles.video_iframe}`} title="Amazing Space Video" src={fetchedMedia.media /*youtube embed url*/} width="560" height="315" controls="1" allowFullScreen={true}></iframe>
          </div>
          <div className={`pt-4 pb-5 ${styles.figcaption}`}>
            {text}
          </div>
        </div>
    }
  }

  return media;
}

export default MediaRender;