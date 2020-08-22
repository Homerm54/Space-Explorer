import styles from './style.module.css';

function MainText({ text }){
  return(
    <div className={`row font-Poppins ${styles.container}`}>
      <h1 className={`col ${styles.h1}`}>
        {text}
      </h1>
    </div>
  )
}

export default MainText;