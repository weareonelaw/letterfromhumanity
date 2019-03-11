import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import * as actions from "../../store/actions/creators";

class ProgressContainer extends Component {
  componentDidMount() {
    this.props.getProgress();
  }
  static getInitialProps({store, isServer, pathname, query}) {
}
  render() {
    const { progressData } = this.props;
    return <ProgressBar progressData={progressData} />
  }
};

export default connect(
  state => ({
    progressData: state.progress
  }),
  actions
)(ProgressContainer)