import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Space, Button } from "antd";
import Main from "./pages/main";
import Favourites from "./pages/favourites";
import "./App.css";

const App = () => {
  return (
    <div style={{ margin: 40 }}>
      <Router basename="/no-redux/">
        <header>
          <Space>
            <Button type="danger">
              <Link to="/">Home</Link>
            </Button>
            <Button type="danger">
              <Link to="/fav">Favourites</Link>
            </Button>
          </Space>
        </header>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/fav" component={Favourites} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
