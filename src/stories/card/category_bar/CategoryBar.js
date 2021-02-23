import React from 'react';
import './categorybar.css';

export const CategoryBar = (props) => {
  let color = '#959595';
  if (props.label == 'Capital Raise') color = ' #4caf50';
  if (props.label == 'Secondary Sale') color = '#aa439d';
  if (props.label == 'Fund') color = 'lightblue';
  return <h2 style={{ backgroundColor: color }}>{props.label}</h2>;
};
