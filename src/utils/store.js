import React from "react";

//creates a context object which childern components subscribe to.
const Store = React.createContext();

// basically the store which stores the state of the application
const initialState = {
  episodes: [],
  favourites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

//encapsultaes the other components, props provides access to the children components.
const StoreProvider = (props) => {
  // useReducer hook takes arguments of the reducer and the initial state,
  // and returns an array of state (data inside store) and dispatch
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

export { Store, StoreProvider };
