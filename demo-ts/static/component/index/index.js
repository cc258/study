import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import "./todo.css";

import thunk from "redux-thunk";
import todos from "../../reducers/todos";

import Todos from "../app/todos";

const INITIAL = {};

const store = createStore(
  combineReducers({
    INITIAL,
    todos
  }),
  applyMiddleware(thunk)
);

const mount = document.getElementById("app");
render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  mount
);
