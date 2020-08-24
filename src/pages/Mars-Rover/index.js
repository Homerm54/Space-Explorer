import styles from './index.module.css';
import Link from 'next/link';
import Head from 'next/head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Index() {

  return (
    <>
      <Head>
        <title>
          Mars Rovers | Space Explorer
      </title>
        <meta name="description" content="Choose a Mars Rover, and explore Mars throught its cameras." />
      </Head>
      <div className={`container-fluid ${styles.container}`}>
        <main className={`row ${styles['h-100']}`}>
          <section className={`col-12 col-md-4 ${styles.spirit}`}>
            <h2 className={styles.title}>Spirit Rover</h2>
            <a className={styles.a} href="https://solarsystem.nasa.gov/missions/spirit/in-depth/" target="_blank">Spirit in depth &nbsp; <FontAwesomeIcon icon="external-link-alt" /></a>
            <Link href="Mars-Rover/Spirit">
              <a role="button" className={`my-a font-Poppins ${styles.btn}`}>
                Check the Image Gallery &nbsp; <FontAwesomeIcon icon="arrow-right" />
              </a>
            </Link>
          </section>
          <section className={`col-12 col-md-4 ${styles.curiosity}`}>
            <h2 className={styles.title}>Curiosity Rover</h2>
            <a className={styles.a} href="https://mars.nasa.gov/msl/mission/overview/" target="_blank">Curiosity in depth &nbsp; <FontAwesomeIcon icon="external-link-alt" /></a>
            <Link href="Mars-Rover/Curiosity">
              <a role="button" className={`my-a font-Poppins ${styles.btn}`}>
                Check the Image Gallery &nbsp; <FontAwesomeIcon icon="arrow-right" />
              </a>
            </Link>
          </section>
          <section className={`col-12 col-md-4 ${styles.opportunity}`}>
            <h2 className={styles.title}>Opportunity Rover</h2>
            <a className={styles.a} href="https://www.jpl.nasa.gov/missions/mars-exploration-rover-opportunity-mer/" target="_blank">Opportunity in depth &nbsp; <FontAwesomeIcon icon="external-link-alt" /></a>
            <Link href="Mars-Rover/Opportunity">
              <a role="button" className={`my-a font-Poppins ${styles.btn}`}>
                Check the Image Gallery &nbsp; <FontAwesomeIcon icon="arrow-right" />
              </a>
            </Link>
          </section>
        </main>
      </div>
      <div className={styles.hint} role="button">
        <span className="d-inline-block my-auto">
          <span className="sr-only">Show Help</span>
          <FontAwesomeIcon icon="question-circle" />
        </span>
      </div>
    </>
  );
}

export default Index;