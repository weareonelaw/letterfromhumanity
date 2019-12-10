import React from 'react';
import { connect } from 'react-redux';

import Logo from "../Logo/Logo";
import * as actions from '../../store/actions/creators';
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['logo']}>
        <a href="/">
          <Logo />
        </a>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    menuOpen: state.ui.menuOpen
  }),
  actions,
)(Header);
