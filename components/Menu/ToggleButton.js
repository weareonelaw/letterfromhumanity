import React from 'react';
import * as actions from '../../store/actions/creators';
import { connect } from 'react-redux';
import styles from './ToggleButton.module.sass';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const ToggleButton = ({toggleMainMenu, menuOpen}) => {
  const className = cx({
    ['menu-toggler']: true,
    opened: menuOpen
  });
  return (
    <div className={className} onClick={toggleMainMenu}>
      <div className={styles['bar1']}></div>
      <div className={styles['bar2']}></div>
      <div className={styles['bar3']}></div>
    </div>
  );
};

export default connect(
  state => ({
    menuOpen: state.ui.menuOpen
  }),
  actions
)(ToggleButton);
