import React from 'react';
import './Header.css';
import Avatar from "../src/assets/avatar.png";

const Header = () => {
  return (
    <div className="header">
      <div className="user-info">
        <img src={Avatar} alt="Manager Kim" className="profile-pic" />
        <div className="text-container">
          <span className="block-span">Manager Kim</span>
          <span className="block-span">Loan Management Team</span>
        </div>
      </div>
      <div className="menu-search">
        <input type="text" placeholder="Menu Search" />
      </div>
    </div>
  );
};

export default Header;
