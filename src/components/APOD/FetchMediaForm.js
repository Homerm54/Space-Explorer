import { useContext } from 'react';
import { store } from 'Redux/store';
import actions from 'Redux/actions';

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
 *  *** Component ***
 * Provide a Form layout to fetch media in the Nasa APOD by date.
 * Will set a global state through the setDate function.
 *
 * The date used here sholud be handled by the main component (fetch section).
 */
function MediaRenderForm({ setDate }) {

  const date = new Date();
  const { dispatch } = useContext(store);

  // Method to be used when form submitted
  const submitMethod = e => {
    e.preventDefault();
    const target = e.target;

    const date = {
      day: target.day.value,
      month: target.month.value,
      year: target.year.value
    }
    dispatch({ //This is been fired twice, why?
      type: actions.update_APOD_queries, 
      add_new: true, 
      query: date, // Add new entry in the array
    })
    
    setDate({...date})
  }

  return (
    <form className={`row container pl-md-2 pl-lg-4 text-center ${styles.container}`} onSubmit={submitMethod}>
      <div className="col row">
        <label htmlFor="day" className={`col-12`}>Day</label>
        <select name="day" className={`col ${styles.selector}`} defaultValue={date.getDate()}>
          {dates(1, 31)}
        </select>
      </div>
      <div className="col row">
        <label htmlFor="month" className={`col-12`}>Month</label>
        <select name="month" className={`col ${styles.selector}`} defaultValue={date.getMonth() + 1}>
          {dates(1, 12)}
        </select>
      </div>
      <div className="col row">
        <label htmlFor="year" className={`col-12`}>Year</label>
        <select name="year" className={`col ${styles.selector}`} defaultValue={date.getFullYear()}>
          {dates(1995, date.getFullYear())}
        </select>
      </div>
      <div className="col row">
        <div className={`col-12 pb-2`}></div>
        <button type="submit" className={`col font-Poppins ${styles.btn}`}>Fetch</button>
      </div>
    </form>
  );
}

export default MediaRenderForm;