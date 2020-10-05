import styles from './FetchMediaForm.module.css';

/**
 * Small function to create a series of `<option></option>` including numbers from `min` to `max`.
 * Return an array of this values, ready to be used in JSX.
 * 
 * @param {int} min The starting date (should be one)
 * @param {int} max The Ending date (30 or 31)
 */

const dates = (min, max) => {
  const numbers = [];
  for (var i = min; i < (max + 1); i++) {
    numbers.push(<option key={i}>{i}</option>);
  }

  return numbers;
};

/**
 * Provide a Form layout to fetch media in the Nasa APOD by date.
 * Will set a global state through the setDate function.
 *
 * The date used here sholud by handled by the main component (fetch section).
 */
function MediaRenderForm({ setDate }) {

  const date = new Date();

  let submitMethod = e => {
    e.preventDefault();
    const target = e.target;

    const date = {
      day: target.day.value,
      month: target.month.value,
      year: target.year.value
    }

    //console.log("Date Submitted:", date);
    setDate({...date})
  }

  return (
    <form className={`row justify-content-center text-center ${styles.container}`} onSubmit={submitMethod}>
      <div className="col-3 row mx-md-n5 px-md-5">
        <label htmlFor="day" className={`col-12`}>Day</label>
        <select name="day" className={`col ${styles.selector}`} defaultValue={date.getDate()}>
          {dates(1, 31)}
        </select>
      </div>
      <div className="col-3 row mx-md-n5 px-md-5">
        <label htmlFor="month" className={`col-12`}>Month</label>
        <select name="month" className={`col ${styles.selector}`} defaultValue={date.getMonth() + 1}>
          {dates(1, 12)}
        </select>
      </div>
      <div className="col-3 row mx-md-n5 px-md-5">
        <label htmlFor="year" className={`col-12`}>Year</label>
        <select name="year" className={`col ${styles.selector}`} defaultValue={date.getFullYear()}>
          {dates(1995, date.getFullYear())}
        </select>
      </div>
      <div className="col-3 row mx-md-n5 px-md-5">
        <div className={`col-12 pb-2`}></div>
        <button type="submit" className={`col-auto font-Poppins ${styles.btn}`}>Fetch</button>
      </div>
    </form>
  );
}

export default MediaRenderForm;