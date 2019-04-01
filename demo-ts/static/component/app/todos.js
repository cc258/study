import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { actions } from "./todos.reducer";
import Todo from "./todo";

class Todos extends React.Component {
  // 重要的一点：所有的组件都应当有propTypes验证。
  // propTypes和defaultProps的声明应该置顶便于其他开发者阅读。
  // 在React v15.3.0版本，推荐使用prop-types这个包替代React.PropTypes。
  //使用静态属性(ES7)声明propTypes越早越好

  static propTypes = {
    list: PropTypes.array,
    addTodo: PropTypes.func,
    changeStatus: PropTypes.func,
    getData: PropTypes.func
  };

  // 在propTypes后声明defaultProps
  static defaultProps = {
    list: [],
    addTodo: () => {},
    changeStatus: () => {},
    getData: () => {}
  };

  // 使用在方法中箭头函数来替代this.handleExpand.bind(this)
  // 提示： class严格来讲不是一个对象，class内定义的属性和方法并不需要用逗号','隔开。
  render = () => {
    const { list, addTodo, changeStatus, getData } = this.props;
    console.log(`todo~~~~~~~~~~~~~~~~~~~~~~this.props~~~~~~~~~~`, this.props);
    return (
      <div className="todo">
        <Todo
          list={list}
          addTodo={addTodo}
          changeStatus={changeStatus}
          getData={getData}
        />
      </div>
    );
  };
}

const mapStateToProps = state => state.todos;

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
