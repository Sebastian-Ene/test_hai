import React from 'react';
import './sector_industry_stage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBox, faBoxes } from '@fortawesome/free-solid-svg-icons';

export default function SectorIndustryStage(props) {
  return (
    <div className="sector_industry_stage">
      <li className="list-elem">
        <FontAwesomeIcon className="fa" icon={faBars} /> {props.sector}
      </li>
      <li className="list-elem">
        {' '}
        <FontAwesomeIcon className="fa" icon={faBox} />
        {props.industry}
      </li>
      <li className="list-elem">
        {' '}
        <FontAwesomeIcon className="fa" icon={faBoxes} />
        {props.stage}
      </li>
    </div>
  );
}
