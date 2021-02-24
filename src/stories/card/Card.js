import React from 'react';
import './card.css';
import Header from './header/Header';
import CategoryBar from './category_bar/CategoryBar';

export default function Card(props) {
  const colors = {
    'Capital Raise': '#4caf50',
    'Secondary Sale': '#aa439d',
    Fund: 'lightblue',
  };
  let color = '';
  if (colors[props.Category] == undefined) color = '#959595';
  else color = colors[props.Category];

  return (
    <div className="card">
      <Header color={color}></Header>
      <CategoryBar label={props.Category} color={color} />
    </div>
  );
}
