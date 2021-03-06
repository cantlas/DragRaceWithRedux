import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import SelectQueen from "./SelectQueen";
import Queen from "./Queen";
import BattleScreen from "./BattleScreen";
import BuildYourTeam from "./BuildYourTeam";
import CategoryIs from "./CategoryIs";
import Battle from "./Battle";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div class="App">
        <Route exact path="/" component={Home} />
        <Route path="/BuildYourTeam" component={BuildYourTeam} />
        <Route path="/SelectQueen" component={SelectQueen} />
        <Route path="/Queen" component={Queen} />
        <Route path="/BattleScreen" component={BattleScreen} />
        <Route path="/CategoryIs" component={CategoryIs} />
        <Route path="/Battle" component={Battle} />
      </div>
    </Router>
  </Provider>
);

export default Root;
