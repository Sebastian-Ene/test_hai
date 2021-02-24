import React from 'react';
import './progress.css';

export default function Progress(props) {
  const progress = `${props.percent}%`;
  return (
    <div className="progress">
      <div className="progress-lvl" style={{ width: progress }}></div>
    </div>
  );
}
