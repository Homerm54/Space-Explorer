import styles from './FectchedList.module.css';

import { useContext, useEffect } from 'react';
import { store } from 'Redux/store';
import actions from 'Redux/actions';

const def_list = <div className='pl-2'>
  Seems like you haven't searched other media files.
  <br />
  This is normal in case of been your first time here, if not the case,
  your browser might not support this feature.
</div>

let array_of_searchs = []

function FetchedList() {

  const { dispatch } = useContext(store);

  useEffect(() =>{
    // Actually shouldn't be a redux thing.
    dispatch({type: actions.get_APOD_search})
  }, []);

  return (
    <div className='container'>
    <h3 className="h6 mt-3">10 Last Fetched Images</h3>
    {array_of_searchs.length || def_list}
    </div>
  )
}

export default FetchedList;