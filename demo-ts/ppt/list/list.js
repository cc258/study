import React from "react";
import { connect } from "react-redux";
import {
  getA,
  getB,
  getC,
  getD,
  getE,
} from './FeatureA.action'

class FeatureA extends React.Component {
  render = () => <div>Feature</div>;
}

const mapStateToProps = (state, props) => {
  return {
    a: state.a,
    b: state.b,
    c: state.c,
    d: state.d,
    e: state.e,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getA: () => dispatch(getA()),
    getB: () => dispatch(getB()),
    getC: () => dispatch(getC()),
    getD: () => dispatch(getD()),
    getE: () => dispatch(getE()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureA);
