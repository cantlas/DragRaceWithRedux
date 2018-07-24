import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import SelectQueen from "./SelectQueen";
import Queen from "./Queen";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/SelectQueen" component={SelectQueen} />
        <Route path="/Queen" component={Queen} />
      </div>
    </Router>
  </Provider>
);

export default Root;
