import React, { Component } from 'react';
import { connect } from 'react-redux';

import Thanks from './Thanks';
import * as actions from "../../store/actions/creators";
import { formatInteger } from "../../utils/numbers";

class ThanksContainer extends Component {
  componentDidMount() {
    this.props.getProgress();
  }
  render() {
    const { progressData } = this.props;
    return <Thanks numberSigns={formatInteger(progressData.value)} />
  }
};

export default connect(
  state => ({
    progressData: state.progress
  }),
  actions
)(ThanksContainer)
