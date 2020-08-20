import styles from './style.module.css';

function Container({ children }) {
  return (
    <main className={styles.container}>
      <section className={`container`}>
        {children}
      </section>
    </main>
  )
}

export default Container;