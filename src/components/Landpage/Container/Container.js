import styles from './style.module.css';

function Container({ children }) {
  return (
    <main className={styles.container}>
      <div className={styles.copyright}>
        Copyright <br />
        <a className={styles.a} href="https://www.flickr.com/people/bluemoonlife/" target="_blank">
          Hirofumi Okubo
          </a>
      </div>
      <section className={`container ${styles.section}`}>
        {children}
      </section>
    </main>
  )
}

export default Container;