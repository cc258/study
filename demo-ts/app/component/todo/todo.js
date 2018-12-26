import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          text: "xxxx",
          st: 0
        }
      ]
    };
  }
  render() {
    const { addTodo, selectCateloge } = this.props;
    const { todos } = this.state;

    console.log("----------todo--------", this.props);
    return (
      <div>
        <div>{`addTodoData: ${
          this.props.todos.addTodoData
        }, selectCatelogeData: ${this.props.todos.selectCatelogeData}`}</div>
        <div>
          <select onChange={selectCateloge}>
            <option value="select1">select I</option>
            <option value="select2">select II</option>
            <option value="select3">select III</option>
          </select>
        </div>
        <div>
          <button onClick={addTodo}>Add todo</button>
        </div>
        {todos.map((todo, index) => {
          return (
            <p key={index} style={{ background: todo.st ? "green" : "orange" }}>
              {todo.text}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Todo;
