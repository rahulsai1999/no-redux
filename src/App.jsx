import React from "react";
import "./App.css";
import { Store } from "./utils/store";
import Axios from "axios";

function App() {
  //The useContext hook provides access to the data present
  //as the value of Context Provider.
  const { state, dispatch } = React.useContext(Store);
  const API_URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

  // loads the episodes data once the componentMounts
  React.useEffect(() => {
    state.episodes.length == 0 &&
      Axios.get(API_URL).then((response) => {
        const { _embedded } = response.data;
        dispatch({
          type: "FETCH_DATA",
          payload: _embedded.episodes,
        });
      });
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1>Episodes</h1>
        <p>Select your favourite episodes</p>
        {console.log(state)}
      </div>
    </React.Fragment>
  );
}

export default App;
