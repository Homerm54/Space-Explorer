import styles from './styles.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ULR from 'config/URLs';

function Links() {
  return (
    <nav className={`${styles.container}`}>
      <ul className={`row justify-content-around ${styles.ul}`}>
        <li className="col-auto">
          <Link href={ULR.APOD}>
            <a className={`${styles['nav-item']}`}>
              <span className={`${styles.title} d-block`}>
                <FontAwesomeIcon icon="satellite" className={styles.icon} />
                &nbsp;&nbsp;&nbsp;
                APOD
              </span>
              <span className={`${styles.body} d-block`}>
                <strong>Discover our Universe</strong>, one
                <br className="d-none d-md-block" /> picture/video
                per day.
              </span>
            </a>
          </Link>
        </li>
        <li className="col-auto">
          <Link href={ULR.MarsRover}>
            <a className={`${styles['nav-item']}`}>
              <span className={`${styles.title} d-block`}>
                <FontAwesomeIcon icon="user-astronaut" />
              &nbsp;&nbsp;&nbsp;
              Mars Rovers
              </span>
              <span className={`${styles.body} d-block`}>
                <strong>Explore Mars</strong>, through the
                <br className="d-none d-md-block" />
                Curiosity, Opportinuty and Spirit Rovers.
              </span>
            </a>
          </Link>
        </li>
        <li className="col-auto">
          <div className={styles['nav-item-disabled']}>
            <div className={`${styles.title}`}>
              <FontAwesomeIcon icon="dna" />
            &nbsp;&nbsp;&nbsp;Gen Lab&nbsp;&nbsp;
            <br className="d-block d-md-none" />
              <span className={`${styles['text-disabled']}`}>(Comming Soon)</span>
            </div>
            <div className={styles.body}>
              Full text and metadata search
              <br className="d-none d-md-block" /> of the Nasa's Genlab 
              <br className="d-none d-md-block" />database files.
            </div>
          </div>
        </li>
        <li className="col-auto">
          <div className={`${styles['nav-item-disabled']}`}>
            <div className={styles.title}>
              <FontAwesomeIcon icon="space-shuttle" />
              &nbsp;&nbsp;&nbsp;Exoplanets&nbsp;&nbsp;
              <br className="d-block d-md-none" />
              <span className={styles['text-disabled']}>
                (Comming Soon)
              </span>
            </div>
            <div className={styles.body}>
              Full access to the Nasa's
              <br className="d-none d-md-block" />
              Exoplanets archive database.
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Links;