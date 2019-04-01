import React from "react";
import { connect } from "react-redux";
import actions from './FeatureA.reducer'

class FeatureB extends React.Component {
  render = () => <div>Feature</div>;
}

const mapStateToProps = state => state.feature;

const mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureB);
