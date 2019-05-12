import React from 'react';
import PropTypes from 'prop-types';
import ProgressContainer from '../ProgressBar/ProgressContainer';

import styles from "./Letter.module.sass";

const Letter = ({ showProgress }) => (
  <>
    <h2 className={styles['header']}>Dear leaders of the world,</h2>

    <p>This is a letter signed by a significant part of humanity – all of us connected to you.</p>

    <p>We would like to share something that can be both overwhelming, and easy to forget. In the midst of these one hundred billion galaxies, each and every one swirling with billions of stars with orbiting planets, somehow we’re all having a human experience on one of these planets. We are connected not only by sharing this experience with every other human on earth, but also by the deep chemical band that exists between us and everything else in this universe. The compounds in our bodies are the same ones found in the cosmos, and we have traced their origin back to exploding stars in which all the fundamental ingredients of life once were cooked. In other words, we are all naturally connected – just by being alive.</p>

    <p>Therefore, we are writing to you with one purpose; let this letter echo through your next major decision. Make that decision for everyone you love, have ever loved and will ever love. Make it for earth, our blue little home that nourishes our hearts and makes them beat. Make it for humanity. Because from the cosmic perspective, we all share the same origin, the same ability to love, the same home. All of us.</p>

    <p>From the cosmic perspective, we are one. As one, we can change the world.</p>

    {showProgress && <ProgressContainer />}
  </>
);

Letter.defaultProps = {
  showProgress: true,
};

Letter.props = {
  showProgress: PropTypes.bool,
};

export default Letter;
