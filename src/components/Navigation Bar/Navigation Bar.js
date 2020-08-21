import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

import ULRs from 'config/URLs';

import styles from './style.module.css';
import URLs from 'config/URLs';
function Navbar() {

  const [navLinksDisplay, setNavLinksDisplay] = useState(false);
  const toggleState = () => (setNavLinksDisplay(!navLinksDisplay));

  return (
    <section className={`container ${styles.container}`}>

      <div className={`row`}>
        <Link href="/">
          <a className={`col ${styles['nav-link']}`} style={{color: 'unset'}}>
            <h2 className={`${styles.title}`}>Space Explorer</h2>
          </a>
        </Link>
        <span className={`col-auto ${styles.toggleButton}`} role="button"
          onClick={toggleState}>
          {navLinksDisplay ? <FontAwesomeIcon icon="times" className="text-blue" /> : <FontAwesomeIcon icon="bars" />}
        </span>
      </div>

      <nav className={`row ${styles['nav-links-container']} ${navLinksDisplay && styles['show-navContainer']}`}
        onClick={toggleState}>
        <ul className={`${styles['nav-links-list']}`}>
          <li className={styles['nav-item']}>
            <Link href={ULRs.HOME}>
              <a className={styles['nav-link']}>
                <FontAwesomeIcon icon="home" />
                &nbsp;&nbsp;&nbsp;Home
              </a>
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href={URLs.Settings}>
              <a className={styles['nav-link']}>
                <FontAwesomeIcon icon="cogs" />
                &nbsp;&nbsp;&nbsp;Settings
              </a>
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href={URLs.About}>
              <a className={styles['nav-link']}>
                <FontAwesomeIcon icon="question-circle" />
                &nbsp;&nbsp;&nbsp;About
              </a>
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="/">
              <a className={styles['nav-link']}>
                <FontAwesomeIcon icon="id-card" />
                &nbsp;&nbsp;&nbsp;Contact
              </a>
            </Link>
          </li>
          <li className={styles['name']}>
            Omer Marquez    |    2020
          </li>
        </ul>
      </nav>

    </section>
  )
}

export default Navbar;