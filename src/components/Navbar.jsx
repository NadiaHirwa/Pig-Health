import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="brand">
          <span className="brand-name">PigHealth</span>
          <span className="brand-subtitle">Rwanda</span>
        </Link>

        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {/* Bottom Row: Navigation and User */}
      <div className="bottom-row">
        <div className="nav-menu">
          <Link to="/" className="nav-link active">Home</Link>
          
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
                  <Link to="/pig-breeds/large-white">Large White</Link>
                  <Link to="/pig-breeds/landrace">Landrace</Link>
                  <Link to="/pig-breeds/duroc">Duroc</Link>
                  <Link to="/pig-breeds/pietrain">Pietrain</Link>
                  <Link to="/pig-breeds/camborough">Camborough</Link>
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
                  <a href="#">Pig Feed and Medicine</a>
                  <a href="#">Veterinary Medicines</a>
                  <a href="#">Equipment and Farm Supplies</a>
                  <a href="#">Veterinary Pharmacies and Shops</a>
                  <a href="#">Nutritional Supplements</a>
                  <a href="#">Pig Health Monitoring Devices</a>
                </div>
              </div>
            )}
          </div>

          <div 
            className="nav-item" 
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-link">
              Elements <span className="arrow">▾</span>
            </a>
            {activeDropdown === 'about' && (
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <a href="#">About US</a>
                  <a href="#">Contact Us</a>
                  <a href="#">FAQ</a>
                  <a href="#">Testimonials</a>
                  <a href="#">News and Updates</a>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="nav-link">Government policies</a>
        </div>

        <div className="user-section">
          <Link to="/signup" className="nav-link">Sign In/Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
