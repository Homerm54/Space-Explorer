import styles from './style.module.css';

function MainText(){
  return(
    <div className={`row ${styles.container}`}>
      <h1 className={`col ${styles.h1}`}>
        Discover the Universe
      </h1>
    </div>
  )
}

export default MainText;