import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import URLs from 'config/URLs';

function Footer() {

  return (
    <div className={`row ${styles.container}`}>
      <div className={`col-6 m-auto`}>
        <a href={URLs.About} className={`${styles.button}`} role="button">
          <FontAwesomeIcon icon="chevron-down" className={`pt-1 ${styles.icon}`} />
          &nbsp;&nbsp;
          How this works
        </a>
      </div>
      <div className="col-6">
        <div>
          <span className={`d-inline-block pr-1 ${styles.icon}`}>
            <FontAwesomeIcon icon="database" />
            &nbsp;&nbsp;&nbsp;
          </span>
          Powered by Nasa's API
        </div>
        <div>
          <span className={`d-inline-block pl-1 ${styles.icon}`}>
            <FontAwesomeIcon icon="mobile" />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          PWA Supported
        </div>
      </div>
    </div>
  )
}

export default Footer;