import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/creators';
import styles from "./MainMenu.module.sass"
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const MainMenu = ({ toggleMainMenu, menuOpen }) => {
  const className = cx({
    ['main-menu']: true,
    open: menuOpen
  });
  return (
    <div className={className}>
      <div className={styles['overlay']} onClick={toggleMainMenu}></div>
      <div className={styles['menu-container']}>
        <ul className={styles['links']}>
          <li className={styles['link']}><a href="#sign">Sign</a></li>
          <li className={styles['link']}><a href="#about">About</a></li>
          <li className={styles['link']}><a href="#social">Social</a></li>
          <li className={styles['link']}><a href="#contact">Contact</a></li>
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