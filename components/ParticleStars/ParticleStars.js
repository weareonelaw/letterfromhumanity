import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

import config from './particlesjs-config-floating.json';
import styles from './ParticleStars.module.sass';

class ParticleStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "100%",
      height: "100%",
    };
  }
  componentDidMount() {
    // TODO: Measure height

  }

  render() {
    return (
      // <div className="particles-container">
        <Particles
          className={styles['particles']}
          width="100%"
          height="100%"
          params={config}
          style={{

          }}
        />
      // </div>
    );
  }
};

ParticleStars.defaultProps = {
};

ParticleStars.propTypes = {
};

export default ParticleStars;
