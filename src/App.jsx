import React from "react";
import "./App.css";
import { Store } from "./utils/store";

function App() {
  //The useContext hook provides access to the data present
  //as the value of Context Provider.
  const store = React.useContext(Store);
  return (
    <React.Fragment>
      <div>
        <h1>Episodes</h1>
        <p>Select your favourite episodes</p>
        {store}
      </div>
    </React.Fragment>
  );
}

export default App;
