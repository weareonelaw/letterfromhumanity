import React from 'react';
import { connect } from 'react-redux'

const MainMenu = ({menuOpen}) => {
  if(menuOpen) return (
    <div>MAIN MENU VISIBLE</div>
  )
  else return null;
};

export default connect(
  state => ({
    menuOpen: state.ui.menuOpen
  }),
  null
)(MainMenu)