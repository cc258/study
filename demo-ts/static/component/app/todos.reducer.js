// Ducks

import axios from "axios";

// Actions
const TODO_ADD = "TODO_ADD";
const TODO_CHANGE = "TODO_CHANGE";
const TODO_GETDATA = "TODO_GETDATA";

// Reducer

const initState = {};
export default (state = initState, action) => {
  const data = action.data;
  console.log(data);
  switch (action.type) {
    case TODO_ADD:
      return Object.assign({}, state, data);
    case TODO_CHANGE:
      return Object.assign({}, state, data);
    case TODO_GETDATA:
      return Object.assign({}, state, data);
    default:
      return state;
  }
};

// Action Creators
export const actions = {
  addTodo: (ls, d) => {
    // 这个坑，我踩哭了，数组部分更新不会render
    const list = ls.slice();
    list.unshift({ st: 0, txt: d });
    const payData = { list };
    return { type: TODO_ADD, data: payData };
  },

  changeStatus: (ls, item, idx) => {
    const list = ls.slice();
    list[idx] = item;
    const payData = { list };
    return { type: TODO_CHANGE, data: payData };
  },

  getData: () => {
    axios
      .get("/getdata", {
        params: {
          id: 12345
        }
      })
      .then(res => {
        const data = res.data;
        return { type: TODO_GETDATA, data };
      });
  }
};
