import React from 'react';
import './categorybar.css';

export default function CategoryBar(props) {
  return <h2 style={{ backgroundColor: props.color }}>{props.label}</h2>;
}
