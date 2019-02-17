import React from 'react';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import * as actions from "../../store/actions/creators";

class ProgressContainer extends React.Component {
  componentDidMount() {
    this.props.getProgress();
  }
  render() {
    const { progressData } = this.props;
    return <ProgressBar progressData={progressData} />;
  }
};

export default connect(
  state => ({
    progressData: state.progress
  }),
  actions
)(ProgressContainer)