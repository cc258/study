import React from "react";
import { connect } from "react-redux";
import { addTodo, selectCateloge } from "../../action/index";
import Todo from "../todo/todo";

class App extends React.Component {
  render() {
    return <Todo {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = {
  addTodo,
  selectCateloge
};

export default connect(
  state,
  mapDispatchToProps
)(App);
