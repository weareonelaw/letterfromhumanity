import React from 'react';
import styles from "./ProgressBar.module.sass"

const ProgressBar = ( {progressData} ) => {
  const {value, hasError, hasData} = progressData;
  return (
    <div className={styles['progress-bar']}>
      {hasError &&
        <span className={styles['progress__line']}  style={{ 'width': value + '%' }} />
      }
    </div>
  )
}

export default ProgressBar;