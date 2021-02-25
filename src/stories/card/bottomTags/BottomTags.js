import React from 'react';
import './bottomTags.css';

export default function BottomTags(props) {
  return (
    <div className="tags">
      <div className="tag">{props.roomST}</div>
      <div className="tag">{props.currency}</div>
      <div className="tag">
        {props.location.length < 10
          ? props.location
          : props.location.slice(0, 7) + '...'}
      </div>
    </div>
  );
}
