import React from 'react';
import './ProgressBar.module.sass';

const ProgressBar = ( {progressData} ) => {
  const {value, hasError, hasData} = progressData;
  return (
    <div className="progress-bar">
      {hasError &&
        <span className="progress__line" style={{ 'width': value + '%' }} />
      }
    </div>
  )
}

export default ProgressBar;