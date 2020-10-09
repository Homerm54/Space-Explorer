import styles from './FectchedList.module.css';

import { useContext, useEffect } from 'react';
import { store } from 'Redux/store';
import actions from 'Redux/actions';
import { get, del } from 'idb-keyval';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const def_list = <div className='pl-2'>
  Seems like you haven't searched other media files.
  <br />
  This is normal in case of been your first time here, if not the case,
  your browser might not support this feature.
</div>

function create_query_list(queries, setDate) {
  return (
    <ul className={styles.ul}>
      {queries.map((element, ix) => {
        const { day, month, year } = element
        return (
          <li role='button' key={ix} onClick={e => setDate({ day, month, year })}>
            {`${element.year}-${element.month}-${element.day}`}
          </li>
        )
      })}
    </ul>
  )
}

/**
 * Function to delete the queries queries in the database.
 * Also, delete from the state.
 */
function delQueries(dispatch) {

  return function () {
    del('APOD_queries')
      .then(() => {
        dispatch({
          type: actions.update_APOD_queries,
          update: true,
          queries: null
        })
      })
      .catch(e => {
        console.error('Error deleting APOD_queries', e)
      })
  }
}


function FetchedList({ setDate }) {

  const { state, dispatch } = useContext(store);

  let array_of_searchs = state.APOD_queries;
  console.log(array_of_searchs)
  if (array_of_searchs) array_of_searchs = create_query_list(array_of_searchs, setDate);

  useEffect(() => {
    get('APOD_queries').then(queries => {
      if (queries) { // Return undefined if no query array found
        dispatch({
          type: actions.update_APOD_queries,
          update: true,
          queries
        })
      }
    }).catch(e => {
      console.error('Error Database APOD_queries:', e)
    })
  }, []);

  return (
    <div className='container'>
      <div className='row mt-3 mb-2'>
        <h3 className="h5 col-7">Last Fetched Images</h3>
        <span className='d-block col' onClick={delQueries(dispatch)} role='button'>
          <FontAwesomeIcon className='h5 text-danger d-inline-block pr-1' icon='trash' />
          <span style={{ fontSize: 'small', color: 'grey' }} className='d-inline-block mt-n3'>
            Delete history
        </span>
        </span>
      </div>
      {array_of_searchs || def_list}
    </div>
  )
}

export default FetchedList;