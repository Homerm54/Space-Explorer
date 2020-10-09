import React, { createContext, useReducer } from 'react';
import { set, get } from 'idb-keyval';

import actions from './actions';

const initialState = {
  /**
   * This is the initial state of the context manager
   * Everything here are default values, since `idb` is async
   * we will use it to later update the preferences.
   */

  APOD_queries: null
};

const store = createContext(initialState);
// Store object. Store is composed of Provider + State

const { Provider } = store;
//Extract the provider from Context API, this object will distribute
//everything

/**
 * Creating a reducer function outside of the `StateProvider` Component
 * avoids a React behaviour that recreate the reducer, and sometimes
 * if can fired the reducer twice in order to see if re-render the
 * `StateProvider`.
 * 
 * @param {object} state: The Current state before reducer
 * @param {*} action: The action to be implemented, with all the data needed.
 */
const reducer = (state, action) => {

  console.debug('Redux Action:', action)
  switch (action.type) {
    // Only pure functions here
    case actions.test:
      console.log(action.test_message)
      return state;
    case actions.update_APOD_queries:
      let queries = state.APOD_queries;
      if (action.add_new) {
        //adding a new query
        if (!queries) queries = [];
        if (queries.length >= 10) { queries.shift() } //Drop first element
        queries.push(action.query);

        set('APOD_queries', queries).catch(e =>{
          console.error('Error saving APOD_queries:', e)
        });
      } else if (action.update) {
        // updating by the first time
        queries = action.queries
      }
      return {
        ...state,
        APOD_queries: queries
      }
    default:
      throw new Error('Reducer didn\'t get valid action\n Action:', action.type);
  }
}

const StateProvider = ({ children }) => {
  /**
   * This variable is a function, must be used as a Higher Order Component
   * Since will be the wrapper of the whole Redux thing.
   */

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider }