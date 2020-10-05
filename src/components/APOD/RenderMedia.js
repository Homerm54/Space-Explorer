import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MediaRender.module.css';

function MediaRender({ fetchedMedia }) {

  //Load the defaults
  let media = <img src="images/bad-img.png" className={`col-12 ${styles.img}`} />
  let text = (<> <FontAwesomeIcon icon="circle-notch" className={`d-inline-block ${styles.spinner}`} role="status" />
    <span className="d-inline-block">
      <h3 className="h5 pl-3">Fetching Media...</h3>
    </span></>)

  if (!fetchedMedia.loading) {

    text = <span className="d-inline-block">
      <h3 className="h5 pl-3">{fetchedMedia.title}</h3>
      <br />
      <span className='d-inline-block mr-4' style={{ textAlign: 'justify' }}>
        {fetchedMedia.explanation}
      </span>
    </span>

    if (fetchedMedia.mediaType === 'image') {
      media =
        <figure className={`row ${styles.figure}`}>
          <img src={fetchedMedia.media} className={`col-12 ${styles.img}`} />
          <figcaption className={`pt-4 pb-5 ${styles.figcaption}`}>
            {text}
          </figcaption>
        </figure>
    } else { //Video is the default
      media =
        <div className='row'>
          <div className={`embed-responsive embed-responsive-4by3 col-12 ${styles.video}`}>
            <iframe className={`embed-responsive-item`} title="Amazing Space Video" src={fetchedMedia.media /*youtube embed url*/} width="560" height="315" controls="1" allowFullScreen={true}></iframe>
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