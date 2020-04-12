import React from "react";
import { Row, Col, Empty, Card, Button } from "antd";
import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import { Store } from "../utils/store";

const Favourites = (props) => {
  const { state, dispatch } = React.useContext(Store);
  const { favourites } = state;

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

  return (
    <React.Fragment>
      <div style={{ marginTop: 40 }}>
        <h1>Favourites</h1>
        <p>Here are your favourites</p>
        <Row gutter={[16, 16]}>
          {favourites.length !== 0 ? (
            favourites.map((item) => {
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
            <Empty style={{ marginTop: 40 }} />
          )}
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Favourites;
