import styles from './FectchedList.module.css';

function FetchedList() {
  return (
    <>
    <h3 className="h6 mt-3">10 Last Fetched Images</h3>
    <ul className={`pl-4 ${styles.ul}`}>
      <li className={styles.li}>1</li>
      <li className={styles.li}>2</li>
      <li className={styles.li}>3</li>
      <li className={styles.li}>4</li>
    </ul>
    </>
  )
}

export default FetchedList;