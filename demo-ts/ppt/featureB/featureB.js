import React from "react";
import { connect } from "react-redux";
import actions from './FeatureA.action'

class FeatureB extends React.Component {
  render = () => <div>Feature</div>;
}

const mapStateToProps = state.feature;

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureB);
