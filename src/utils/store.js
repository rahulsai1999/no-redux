import React from "react";

//creates a context object which childern components subscribe to.
const Store = React.createContext();

const initialState = {};
const reducer = () => {};

//encapsultaes the other components, props provides access to the children components.
const StoreProvider = (props) => {
  return <Store.Provider value="Store Data">{props.children}</Store.Provider>;
};

export { Store, StoreProvider };
