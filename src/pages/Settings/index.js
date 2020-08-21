import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.css';

function Settings() {

  return (
    <main className={`container-fluid ${styles.container}`}>
      <section className="row mb-4">
        <h2 className={`col-12 mb-3 ${styles.title}`}>
          <FontAwesomeIcon icon="info-circle" className={styles.icon} /> Information & Stats
        </h2>
        <ul className={styles.ul}>
          <li>
            Offline Support (Service Worker):&nbsp;&nbsp;&nbsp;
            <span className={styles["text-danger"]}>Not Available</span>
            {/*'serviceWorker' in navigator ?
              <span className={styles["text-success"]}>OK</span>
              :
              <span className="text-danger">Not Available</span>*/}
          </li>
          <li>
            Smart Cache Support (IndexedDB):&nbsp;&nbsp;&nbsp;
            <span className={styles["text-danger"]}>Not Available</span>
            {/*indexedBDAvailable ?
              <span className={styles["text-success"]}>OK</span>
              :
              <span className={styles["text-danger"]}>Not Available</span>*/}
          </li>
          <li>
            PWA Status: <span className={styles["text-danger"]}>Not Installed</span>
          </li>
          <li className={styles.muted/*`${indexedBDAvailable?'':'text-muted'}`*/}>
            Data consumed: {'---'/*indexedBDAvailable? 'to-do':'---'*/}
          </li>
          <li className={styles.muted/*`${indexedBDAvailable?'':'text-muted'}`*/}>
            Using since: {'---'/*indexedBDAvailable? 'to-do':'---'*/}
          </li>
        </ul>
      </section>
      <section className="row pb-5">
        <h2 className={`col-12 mb-3 ${styles.title}`}>
          <FontAwesomeIcon icon="cogs" className={styles.icon} /> Configuration
        </h2>
        <form className="col-12">
          <div className="pb-3">
            <span className="d-inline-block pr-4">Toggle UI Theme</span>
            <span className={styles['icon-container']} role="button"><FontAwesomeIcon className={styles.moon} icon="moon" /></span>
          </div>
          <input type="checkbox" name="session_checkbox" disabled checked />
          <label className={`${styles.label} ${styles.muted}`} htmlFor="session_checkbox">Save Last Session (Under Dev)</label>
          <br />
          <input type="checkbox" name="hints_checkbox" disabled checked />
          <label className={`${styles.label} ${styles.muted}`} htmlFor="hints_checkbox">Show Hints (Under Dev)</label>
          <br />
          <button className={styles['btn-install']}>
            <FontAwesomeIcon icon="long-arrow-alt-down" className={styles['install-icon']} />
            &nbsp;&nbsp;&nbsp;
            Install PWA (Under Dev)
            </button>
          <br />
          <button className={styles['btn-reset']}>Reset Settings (Under Dev)</button>
        </form>
      </section>
    </main>
  )
}

export default Settings;