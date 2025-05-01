import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      {/* Top Row: Logo and Search */}
      <div className="top-row">
        <a href="/" className="brand">
          <span className="brand-name">PigHealth</span>
          <span className="brand-subtitle">Rwanda</span>
        </a>

        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {/* Bottom Row: Navigation and User */}
      <div className="bottom-row">
        <div className="nav-menu">
          <a href="/" className="nav-link active">Home</a>
          
          <div 
            className="nav-item" 
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-link">
              About <span className="arrow">▾</span>
            </a>
            {activeDropdown === 'about' && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h3>Pig Breeds</h3>
                  <a href="#">Large White</a>
                  <a href="#">Landrace</a>
                  <a href="#">Duroc</a>
                  <a href="#">Pietrain</a>
                  <a href="#">Berkshire</a>
                  <a href="#">Camborough</a>
                </div>
              </div>
            )}
          </div>

          <div 
            className="nav-item" 
            onMouseEnter={() => handleMouseEnter('farming')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-link">
              Pig Farming <span className="arrow">▾</span>
            </a>
            {activeDropdown === 'farming' && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h3>Pig Breeds</h3>
                  <a href="#">Large White</a>
                  <a href="#">Landrace</a>
                  <a href="#">Duroc</a>
                  <a href="#">Pietrain</a>
                  <a href="#">Berkshire</a>
                  <a href="#">Camborough</a>
                </div>
                <div className="dropdown-section">
                  <h3>Farming Techniques</h3>
                  <a href="#">Housing</a>
                  <a href="#">Feeding</a>
                  <a href="#">Reproduction Management</a>
                  <a href="#">Waste Management</a>
                  <a href="#">Free-Range Pig Farming</a>
                </div>
                <div className="dropdown-section">
                  <h3>Pig Health and Diseases</h3>
                  <a href="#">Common Diseases</a>
                  <a href="#">Health Monitoring</a>
                  <a href="#">Vaccination</a>
                  <a href="#">Veterinary Services</a>
                  <a href="#">Biosecurity</a>
                </div>
              </div>
            )}
          </div>

          <div 
            className="nav-item" 
            onMouseEnter={() => handleMouseEnter('shop')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-link">
              Medicine and Supplies <span className="arrow">▾</span>
            </a>
            {activeDropdown === 'shop' && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h3>Pig Breeds</h3>
                  <a href="#">Large White</a>
                  <a href="#">Landrace</a>
                  <a href="#">Duroc</a>
                  <a href="#">Pietrain</a>
                  <a href="#">Berkshire</a>
                  <a href="#">Camborough</a>
                </div>
              </div>
            )}
          </div>

          <div 
            className="nav-item" 
            onMouseEnter={() => handleMouseEnter('community')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-link">
              Community & Education <span className="arrow">▾</span>
            </a>
            {activeDropdown === 'community' && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h3>Pig Breeds</h3>
                  <a href="#">Large White</a>
                  <a href="#">Landrace</a>
                  <a href="#">Duroc</a>
                  <a href="#">Pietrain</a>
                  <a href="#">Berkshire</a>
                  <a href="#">Camborough</a>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="nav-link">Government policies</a>
        </div>

        <div className="user-section">
          <FaUser className="user-icon" />
          <span>User</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
