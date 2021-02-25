import React from 'react';
import './card.css';
import Header from './header/Header';
import CategoryBar from './category_bar/CategoryBar';
import Title from './title/Title';
import Progress from './progress/Progress';
import Raise from './raise/Raise';
import SectorIndustryStage from './sector_industry_stage/SectorIndustryStage';

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
      <Title className="title" title={props.Title}></Title>
      <CategoryBar label={props.Category} color={color} />
      <Progress percent={props.Percent} />
      <Raise raiseAmount={props.RaiseAmount} />
      <SectorIndustryStage
        sector={props.Sector}
        industry={props.Industry}
        stage={props.Stage}
      />
    </div>
  );
}
