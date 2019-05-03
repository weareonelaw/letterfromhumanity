import React, { Component } from 'react';
import { goToAnchor } from 'react-scrollable-anchor';

import styles from './Thanks.module.sass';
import Button from '../Button';

class Thanks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copiedUrl: false,
    };
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.setState({
      copiedUrl: true,
    });
  }

  render() {
    const { numberSigns, lastSignLocation } = this.props;
    return (
      <div className={styles['thanks']}>
        <h1 className={styles['title']}>Thank you!</h1>
        <p className={styles['desc']}>
          In the midst of these one hundred billion galaxies, we're eternally grateful that you are one of {numberSigns} humans that signed this letter. By making history together, we can create the future. You can share the letter with your friends below.
          {lastSignLocation && <span>The person that signed the letter before you is located in <b>{lastSignLocation}</b>.</span>}
        </p>
        <div className={styles['actions']}>
          <Button
            className={styles['btn']}
            block
            secondary
            onClick={() => {
              const url = window.location.origin;
              this.copyToClipboard(url);
              this.timeoutId = setTimeout(() => {
                this.setState({
                  copiedUrl: false,
                });
              }, 5000);
            }}
          >
            {this.state.copiedUrl ? 'Link copied to clipboard!' : 'Share the message'}
          </Button>
          <Button
            className={styles['btn']}
            block
            secondary
            href="https://www.instagram.com/weareonelaw"
            target="_blank"
          >
            Follow the project on Instagram
          </Button>
          <Button
            className={styles['btn']}
            block
            secondary
            href="#about"
          >
            Read more about the project
          </Button>
        </div>
      </div>
    );
  }
};

export default Thanks;
