import React, { createContext, useReducer } from 'react';
import { set, get } from 'idb-keyval';

import actions from './actions';

const initialState = {
  /**
   * This is the initial state of the context manager
   * Everything here are default values, since `idb` is async
   * we will use it to later update the preferences.
   */
};

const store = createContext(initialState);
// Store object. Store is composed of Provider + State

const { Provider } = store;
//Extract the provider from Context API, this object will distribute
//everything

const StateProvider = ({ children }) =>{
  /**
   * This variable is a function, must be used as a Higher Order Component
   * Since will be the wrapper of the whole Redux thing.
   */

  const [state, dispatch] = useReducer((state, action) =>{

    switch (action.type){

      case actions.test:
        console.log(action.test_message)
        break;
      case actions.save_APOD_history:
        //array.shift to drop first element - .pop to last
        //array.push to add item last - .unpush to add first, or [...records, new]
        console.log('Saved Search history')
        break;
      case actions.get_APOD_search:
        //add to the context the searchs?
        //isn't a encripted thing, pass it is ok
        console.log('Search Array Sended')
        break;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, StateProvider }
