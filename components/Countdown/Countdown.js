
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from "./Countdown.module.sass";

/**
 * Note :
 * If you're using react v 15.4 or less
 * You can directly import PropTypes from react instead.
 * Refer to this : https://reactjs.org/warnings/dont-call-proptypes.html
 */

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    this.tick();
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    let date = this.calculateCountdown(this.props.date);
    if (!date) {
      date = {
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
      }
      if (this.props.onComplete) {
        this.props.onComplete();
      }
      this.stop();
    }
    this.setState({ ...date });
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    // calculate time difference between now and expected date
    // if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
    //   timeLeft.years = Math.floor(diff / (365.25 * 86400));
    //   diff -= timeLeft.years * 365.25 * 86400;
    // }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const { days, hours, min, sec } = this.state;

    return (
      <div className={styles['countdown']}>
        {days !== 0 && <span className={styles['unit-box']}>
          <span className={styles['number']}>{this.addLeadingZeros(days)}</span>
          <span className={styles['unit']}>{days === 1 ? 'Day' : 'Days'}</span>
        </span>}

        <span className={styles['unit-box']}>
          <span className={styles['number']}>{this.addLeadingZeros(hours)}</span>
          <span className={styles['unit']}>Hours</span>
        </span>

        <span className={styles['unit-box']}>
          <span className={styles['number']}>{this.addLeadingZeros(min)}</span>
          <span className={styles['unit']}>Min</span>
        </span>

        <span className={styles['unit-box']}>
          <span className={styles['number']}>{this.addLeadingZeros(sec)}</span>
          <span className={styles['unit']}>Sec</span>
        </span>
      </div>
    );
  }
}

Countdown.defaultProps = {
  date: new Date(),
};

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
  onComplete: PropTypes.func,
};


export default Countdown;
