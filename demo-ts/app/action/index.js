export const addTodo = obj => {
  console.log("action-addTodo");
  return {
    type: "ADD_TODO",
    data: { addTodoData: 111 }
  };
};

export const selectCateloge = e => {
  console.log("action-selectCateloge");
  return {
    type: "SELECTCATELOGE",
    data: { selectCatelogeData: 111 }
  };
};
