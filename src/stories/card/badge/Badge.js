import React from 'react';
import './badge.css';

export default function Badge(props) {
  return (
    <div
      style={{ display: props.badgeText ? 'block' : 'none' }}
      className="badge"
    >
      {props.badgeText}
    </div>
  );
}
