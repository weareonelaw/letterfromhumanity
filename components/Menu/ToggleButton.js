import React from 'react';
import * as actions from '../../store/actions/creators';
import { connect } from 'react-redux'

const ToggleButton = ({toggleMainMenu, menuOpen}) => {
  const menuText = (menuOpen) ? "Close menu"  : "Open menu";
  return <button onClick={toggleMainMenu}>{menuText}</button>;
};

export default connect(
  state => ({
    menuOpen: state.ui.menuOpen
  }),
  actions
)(ToggleButton);
