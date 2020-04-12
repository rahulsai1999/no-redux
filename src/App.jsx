import React from "react";
import "./App.css";
import { Store } from "./utils/store";
import Axios from "axios";
import { Card, Row, Col, Button } from "antd";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";

const App = () => {
  //The useContext hook provides access to the data present
  //as the value of Context Provider.
  const { state, dispatch } = React.useContext(Store);
  const { episodes, favourites } = state;
  const API_URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

  const fetchDataAction = () => {
    Axios.get(API_URL).then((response) => {
      const { _embedded } = response.data;
      return dispatch({
        type: "FETCH_DATA",
        payload: _embedded.episodes,
      });
    });
  };

  const toggleFavAction = (episode) => {
    const episodeInFavourites = favourites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };
    if (episodeInFavourites) {
      const favouritesWithoutEpisode = favourites.filter(
        (fav) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favouritesWithoutEpisode,
      };
    }
    return dispatch(dispatchObj);
  };

  // loads the episodes data once the componentMounts
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  return (
    <React.Fragment>
      <div style={{ margin: 40 }}>
        <h1>Episodes</h1>
        <p>Select your favourite episodes</p>
        <Row gutter={[16, 16]}>
          {episodes.length !== 0 ? (
            episodes.map((item) => {
              return (
                <Col>
                  <Card
                    key={item.id}
                    style={{ width: 300 }}
                    cover={
                      <img
                        src={item.image != null ? item.image.medium : null}
                        alt={item.name}
                      />
                    }
                  >
                    <Card.Meta
                      title={`Season: ${item.season} Episode: ${item.number}`}
                      description={item.name}
                    />
                    <br />
                    <Button
                      icon={
                        favourites.find((fav) => fav.id === item.id) ? (
                          <LikeFilled />
                        ) : (
                          <LikeOutlined />
                        )
                      }
                      type="primary"
                      onClick={() => toggleFavAction(item)}
                    >
                      {favourites.find((fav) => fav.id === item.id)
                        ? "Unlike"
                        : "Like"}
                    </Button>
                  </Card>
                </Col>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </Row>
      </div>
    </React.Fragment>
  );
};

export default App;
