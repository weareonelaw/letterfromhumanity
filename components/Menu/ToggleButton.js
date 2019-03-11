import React from 'react';
import * as actions from '../../store/actions/creators';
import { connect } from 'react-redux';
import './ToggleButton.module.sass';

const ToggleButton = ({toggleMainMenu, menuOpen}) => {
  const menuText = (menuOpen) ? "Close menu"  : "Open menu";
  return (
    <div className={`menu-toggler container ${menuOpen ? 'opened' : ''}`} onClick={toggleMainMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default connect(
  state => ({
    menuOpen: state.ui.menuOpen
  }),
  actions
)(ToggleButton);
