## This Project uses `createContext, useReducer`

`createContext, useReducer` are an implementation of Redux inside the same `react` package. It isn't exactly the same, but works in similar fashion.

Have a `reducer` function, uses an exteranl source of state management (`createContext`), and allows the level of abstraction and simplicity that makes famouse the Redux method.

Keeping the same analogy, I created a `store.js` file, that works as the Store Object used in Redux. The Reducer, is passed through the components by a `Context Provider`, so that components have access to the State controled by the store, as so by the Reducers.