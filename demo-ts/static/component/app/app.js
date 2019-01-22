import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../action/index";

class App extends React.Component {
  // 初始化state (ES7) 或者在构造函数(constructor)中初始化state (ES6)
  // state = {
  //   loadding: false,
  //   isshow: false,
  //   data: []
  // };

  // // 重要的一点：所有的组件都应当有propTypes验证。
  // // propTypes和defaultProps的声明应该置顶便于其他开发者阅读。
  // // 在React v15.3.0版本，推荐使用prop-types这个包替代React.PropTypes。
  // //使用静态属性(ES7)声明propTypes越早越好

  // // 还不能用ES7
  // static propTypes = {
  //   model: object.isRequired,
  //   title: string
  // };

  // // 在propTypes后声明defaultProps
  // static defaultProps = {
  //   model: {
  //     id: 0
  //   },
  //   title: "Your Name"
  // };

  // 使用在方法中箭头函数来替代this.handleExpand.bind(this)
  // 提示： class严格来讲不是一个对象，class内定义的属性和方法并不需要用逗号','隔开。

  init = () => {
    return <div>init</div>;
  };

  render = () => {
    return (
      <div>
        <div>React!!!</div>
        <Todo {...this.props} />
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = {
  addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
