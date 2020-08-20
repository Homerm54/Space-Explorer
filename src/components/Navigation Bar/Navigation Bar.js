import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

import styles from './style.module.css';
function Navbar() {

  const [navLinksDisplay, setNavLinksDisplay] = useState(false);
  const toggleState = () => (setNavLinksDisplay(!navLinksDisplay));

  return (
    <section className={`container ${styles.container}`}>

      <div className={`row`}>
        <h2 className={`col ${styles.title}`}>Space Explorer</h2>
        <span className={`col-auto ${styles.toggleButton}`} role="button"
          onClick={toggleState}>
          {navLinksDisplay ? <FontAwesomeIcon icon="times" className="text-blue" /> : <FontAwesomeIcon icon="bars" />}
        </span>
      </div>

      <nav className={`row ${styles['nav-links-container']} ${navLinksDisplay && styles['show-navContainer']}`}
        onClick={toggleState}>
        <ul className={`${styles['nav-links-list']}`}>
          <li className={styles['nav-item']}>
            <Link href="/">
              <a className={styles['nav-link']}>Hola</a>
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="/">
              <a className={styles['nav-link']}>Hola</a>
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="/">
              <a className={styles['nav-link']}>Hola</a>
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="/">
              <a className={styles['nav-link']}>Hola</a>
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="/">
              <a className={styles['nav-link']}>Hola</a>
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link href="/">
              <a className={styles['nav-link']}>Hola</a>
            </Link>
          </li>
        </ul>
      </nav>

    </section>
  )
}

export default Navbar;