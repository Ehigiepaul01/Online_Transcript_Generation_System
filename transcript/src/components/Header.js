import React from 'react';
import logoImage from '../assets/Logo (1).png';
import bellImage from '../asets/notification 1@2x.png';
import avatarImage from '../assets/Ellipse 4.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>

      <div className="right-nav">
        <img src={bellImage} className='bell' alt="bell" />
        <img src={avatarImage} alt="avatar" />
        <h5>Oluwapelumi Abiodun</h5>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="details-container">
      <ul className="nav-list">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Transcript</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  );
}

export { Navbar, Info };
