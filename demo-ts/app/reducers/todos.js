const todos = (state = [], action) => {
  console.log(`%c redux====`, "color: green");
  switch (action.type) {
    case "ADD_TODO":
      console.log(`%c ADD_TODO====${action.data}`, "color: red");
      return Object.assign({}, state, action.data);
    case "SELECTCATELOGE":
      console.log(`%c SELECTCATELOGE====${action.data}`, "color: blue");
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};
