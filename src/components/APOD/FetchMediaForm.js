import styles from './FetchMediaForm.module.css';


function MediaRenderForm() {
  return (
    <form className={`row justify-content-center text-center ${styles.container}`}>
      <div className="col-3 row">
        <label htmlFor="day" className={`col-12`}>Day</label>
        <select name="day" className={`col ${styles.selector}`}>
          <option>1</option>
        </select>
      </div>
      <div className="col-3 row">
        <label htmlFor="month" className={`col-12`}>Month</label>
        <select name="month" className={`col ${styles.selector}`}>
          <option>1</option>
        </select>
      </div>
      <div className="col-3 row">
        <label htmlFor="year" className={`col-12`}>Year</label>
        <select name="year" className={`col ${styles.selector}`}>
          <option>1</option>
        </select>
      </div>
      <div className="col-3 row">
        <div className={`col-12 pb-2`}></div>
        <button disabled type="submit" className={`col-auto font-Poppins ${styles.btn}`}>Fetch</button>
      </div>
    </form>
  );
}

export default MediaRenderForm;