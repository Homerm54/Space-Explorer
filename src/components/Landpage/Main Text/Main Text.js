import styles from './style.module.css';

function MainText({ text }){
  return(
    <div className={`row font-Poppins ${styles.container}`}>
      <h1 className={`col ${styles.h1}`}>
        {text}
      </h1>
      <div className="px-3 pt-5 pb-0 col-12">
        <span className={`h2 font-Raleway ${styles['guide-text']}`}>Sections of Interest</span>
        <aside className={styles.aside}>Navigate through the Apps with this links</aside>
      </div>
    </div>
  )
}

export default MainText;