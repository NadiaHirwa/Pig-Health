import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>PigHealth</h1>
        <span className="logo-subtitle">Rewards</span>
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button><FaSearch /></button>
      </div>

      <div className="nav-links">
        <a href="/" className="active">Home</a>
        <div className="dropdown">
          <a href="#">About</a>
        </div>
        <div className="dropdown">
          <a href="#">Pig Farming</a>
        </div>
        <div className="dropdown">
          <a href="#">Medicine and Supplies</a>
        </div>
        <div className="dropdown">
          <a href="#">Community & Education</a>
        </div>
        <a href="#">Government policies</a>
      </div>

      <div className="user-section">
        <FaUser />
        <span>User</span>
      </div>
    </nav>
  );
};

export default Navbar;