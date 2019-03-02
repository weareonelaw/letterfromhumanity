import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/creators';
import './MainMenu.module.sass';

const MainMenu = ({ toggleMainMenu, menuOpen }) => {
  return (
    <div className={`main-menu ${menuOpen ? 'open' : ''}`}>
      <div className="overlay" onClick={toggleMainMenu}></div>
      <div className="menu-container">
        <ul className="links">
          <li className="link"><a href="#sign">Sign</a></li>
          <li className="link"><a href="#about">About</a></li>
          <li className="link"><a href="#social">Social</a></li>
          <li className="link"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    menuOpen: state.ui.menuOpen
  }),
  actions,
)(MainMenu);