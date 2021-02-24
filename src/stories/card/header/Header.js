import React from 'react';
import './header.css';
import pic from '../../assets/pic.png';

export default function Header(props) {
  return (
    <div className="header">
      <div className="bg-img-div">
        <img className="bg-img" src={pic} alt="img" />
      </div>
      <img className="logo-img" src={pic} alt="img" />
      <div
        className="color-layer"
        style={{ backgroundColor: props.color }}
      ></div>
    </div>
  );
}
