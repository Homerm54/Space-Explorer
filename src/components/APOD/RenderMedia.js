import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MediaRender.module.css';

/**
 * 
 * @param {object} fetchedMedia: Contains all the media related attributes needed to render.
 * 
 *  * loading: Attribute that tells if the fetch method is on progress (async, render an wait thing)
 *  * explanation: Text that explains the image/video
 *  * title: Of the media
 *  * copyright
 *  * media: the url of the image/video
 *  * mediaType: String, either `'image'` of `'video'`. (Note: Passing something else that `'image'` assumes `'video'`)
 */
function MediaRender({ fetchedMedia }) {

  //Load the defaults
  let media;

  let text = (<>
    <section className={`col ${styles.description}`}>
      <FontAwesomeIcon icon="circle-notch" className={`d-inline-block ${styles.spinner}`} role="status" />
      <span className="d-inline-block">
        <h3 className="h5 pl-3">Fetching Media...</h3>
      </span>
      <div>
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
      </div>
    </section>
  </>)

  // Dynamic Rendering, according to the type of media passed.
  if (!fetchedMedia.loading) {

    text = <span className="d-inline-block">
      <h3 className="h5 pl-2">{fetchedMedia.title}</h3>
      <span className='d-block pl-2'>{fetchedMedia.copyright}</span>
      <br />
      <span className='d-inline-block mr-4' style={{ textAlign: 'justify' }}>
        {fetchedMedia.explanation}
      </span>
    </span>

    if (fetchedMedia.mediaType === 'image') {
      media =
        <figure className={`row `}>
          <span className='col-12 px-0'>
            <img src={fetchedMedia.media} className={`${styles.img}`} />
          </span>
          <figcaption className={`col pt-4 pb-5 ${styles.figcaption}`}>
            {text}
          </figcaption>
        </figure>
    } else { //Video is the default
      media =
        <div className='row'>
          <div className={`col-12 px-0 ${styles['video-container']}`}>
            <iframe title="Amazing Space Video" src={fetchedMedia.media /*youtube embed url*/} controls="1"></iframe>
          </div>
          <div className={`col pt-4 pb-5 pl-1 ${styles.figcaption} ${styles.div_line}`}>
            {text}
          </div>
        </div>
    }
  } else {
    media =
      <figure className={`row`}>
        <span className='col-12 px-0'>
          <img src="images/bad-img.png" className={`${styles.img}`} />
        </span>
        <figcaption className={`col pt-4 pb-5 ${styles.figcaption}`}>
          {text}
        </figcaption>
      </figure>
  }

  return media;
}

export default MediaRender;