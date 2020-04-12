import React from "react";
import "./App.css";
import { Store } from "./utils/store";
import Axios from "axios";
import { Card, Row, Col } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const App = () => {
  //The useContext hook provides access to the data present
  //as the value of Context Provider.
  const { state, dispatch } = React.useContext(Store);
  const API_URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

  // loads the episodes data once the componentMounts
  React.useEffect(() => {
    state.episodes.length === 0 &&
      Axios.get(API_URL).then((response) => {
        const { _embedded } = response.data;
        dispatch({
          type: "FETCH_DATA",
          payload: _embedded.episodes,
        });
      });
  });

  const { episodes } = state;
  const { Meta } = Card;

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
                    actions={[<HeartOutlined key="favourite" />]}
                  >
                    <Meta
                      title={`Season: ${item.season} Episode: ${item.number}`}
                      description={item.name}
                    />
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
