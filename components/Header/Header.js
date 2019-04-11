import React from 'react';
import { connect } from 'react-redux';
import { goToAnchor } from 'react-scrollable-anchor';

import * as actions from '../../store/actions/creators';
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <div className={styles['header']}>
      <img className={styles['logo']} src="/static/onelaw-logo.svg" />
    </div>
  );
};

export default connect(
  state => ({
    menuOpen: state.ui.menuOpen
  }),
  actions,
)(Header);
