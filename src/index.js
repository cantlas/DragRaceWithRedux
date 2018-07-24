import React from "react";
import { render } from "react-dom";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import dragRace from "./reducers";
import Root from "./components/root";

import "./styles.css";

const store = createStore(dragRace, applyMiddleware(logger));

render(<Root store={store} />, document.getElementById("root"));
