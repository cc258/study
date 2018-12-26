export const addTodo = obj => {
  return {
    type: "ADD_TODO",
    data: { addTodoData: 111 }
  };
};

export const selectCateloge = e => {
  return {
    type: "SELECTCATELOGE",
    data: { selectCatelogeData: 111 }
  };
};
