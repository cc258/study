import { combineReducers } from "redux";
import todos from "./todos";

const INITIAL = {
  todos: []
};

const todoApp = combineReducers({
  todos,
  INITIAL
});

export default todoApp;
