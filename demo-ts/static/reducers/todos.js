// Actions
const TODO_ADD = 'TODO_ADD';

// Reducer

const initState = {};
export default (state = initState, action) => {
  const data = action.data;
  switch (action.type) {
    case TODO_ADD:
      console.log(`TODO_ADD ############# list######`, data);
      return Object.assign({}, state, data);
    default:
      return state;
  }
};

// Action Creators
export const actions = {

  addTodo: function(ls, d){
    // 这个坑，我踩哭了
    const list = ls.slice();
    list.unshift({st: 0, txt: d});
    console.log(`action ############# list######`, list);
    const payData = { list };
    return { type: TODO_ADD, data: payData};
    
  }
}
