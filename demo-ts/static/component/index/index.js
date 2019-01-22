import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../reducers/index";
import App from "../app/app";

const store = createStore(reducer);

const mount = document.getElementById("app");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  mount
);
