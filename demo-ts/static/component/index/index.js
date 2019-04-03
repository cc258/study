import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import "./todo.css";

import { IntlProvider, addLocaleData } from "react-intl";
import * as zhCN from "../../locale/zh"; //个人配置
import * as enUS from "../../locale/en"; //个人配置
import zh from "react-intl/locale-data/zh"; //react-intl语言包
import en from "react-intl/locale-data/en"; //react-intl语言包
addLocaleData([...en, ...zh]); //需要放入本地数据库

import thunk from "redux-thunk";
import todos from "../app/todos.reducer";

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
  <IntlProvider locale={"zh"} messages={zhCN}>
    <Provider store={store}>
      <Todos />
    </Provider>
  </IntlProvider>,
  mount
);
