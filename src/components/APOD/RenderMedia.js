import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './MediaRender.module.css';

function MediaRender() {
  return (
    <figure className={`row ${styles.figure}`}>
      <img src="images/bad-img.png" className={`col-12 ${styles.img}`} />
      <figcaption className={`pt-4 pb-5 ${styles.figcaption}`}>
          <FontAwesomeIcon icon="circle-notch" className={`d-inline-block ${styles.spinner}`} role="status"/>
          <span className="d-inline-block">
            <h3 className="h5 pl-3">Fetching Media...</h3>
          </span>
      </figcaption>
    </figure>
  );
}

export default MediaRender;