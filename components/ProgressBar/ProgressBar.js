import React from 'react';
import styles from './ProgressBar.module.sass';

import { formatInteger } from '../../utils/numbers';

const STROKE_WIDTH = 4;
const RADIUS = 100;
const NORMALIZED_RADIUS = RADIUS - STROKE_WIDTH * 2;
const CIRCUMFERENCE = NORMALIZED_RADIUS * (2 * Math.PI);

const ProgressBar = ( {progressData} ) => {
  const { hasError, hasData } = progressData;
  let { value, progressGoal } = progressData;
  if (!hasData || !value) {
    value = 0;
  }

  const percentage = Math.min(Math.round(value / (progressGoal || 1) * 100), 100);
  const strokeDashoffset = CIRCUMFERENCE - percentage / 100 * CIRCUMFERENCE;
  return (
    <div className={styles['progress-bar']}>
      <div className={styles['mid-text']}>
        <p className={styles['signs-number']}>{formatInteger(value)}<br />signatures</p>
        <p className={styles['goal-desc']}>First goal: {formatInteger(progressGoal)}</p>
      </div>
      <svg
        className={styles['svg']}
        viewBox={`0 0 ${RADIUS * 2} ${RADIUS * 2}`}
      >
        <circle
          className={styles['unfilled']}
          r={NORMALIZED_RADIUS}
          cx={RADIUS}
          cy={RADIUS}
          strokeWidth={Math.max(2, STROKE_WIDTH / 4)}
        />
        <circle
          className={styles['filled']}
          r={NORMALIZED_RADIUS}
          cx={RADIUS}
          cy={RADIUS}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={CIRCUMFERENCE + ' ' + CIRCUMFERENCE}
          style={{ strokeDashoffset }}
        />
      </svg>
    </div>
  );
}

export default ProgressBar;
