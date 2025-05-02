import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleContactUsClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/about') {
      navigate('/about');
      setTimeout(() => {
        if (window.scrollToContactUs) window.scrollToContactUs();
      }, 300);
    } else {
      if (window.scrollToContactUs) window.scrollToContactUs();
    }
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
                  <Link to="/farming-techniques/housing">Housing</Link>
                  <Link to="/farming-techniques/feeding">Feeding</Link>
                  <Link to="/farming-techniques/reproduction-management">Reproduction Management</Link>
                  <Link to="/farming-techniques/waste-management">Waste Management</Link>
                  <Link to="/farming-techniques/free-range-pig-farming">Free-Range Pig Farming</Link>
                </div>
                <div className="dropdown-section">
                  <h3>Pig Health and Diseases</h3>
                  <Link to="/farming-techniques/common-diseases">Common Diseases</Link>
                  <Link to="/farming-techniques/health-monitoring">Health Monitoring</Link>
                  <Link to="/farming-techniques/vaccination">Vaccination</Link>
                  <Link to="/farming-techniques/veterinary-services">Veterinary Services</Link>
                  <Link to="/farming-techniques/biosecurity">Biosecurity</Link>
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
                  <Link to="/medicine-supplies/pig-feed-and-medicine">Pig Feed and Medicine</Link>
                  <Link to="/medicine-supplies/veterinary-medicine">Veterinary Medicines</Link>
                  <Link to="/medicine-supplies/equipment-and-farm-supplies">Equipment and Farm Supplies</Link>
                  <Link to="/medicine-supplies/nutritional-supplements">Nutritional Supplements</Link>
                  <Link to="/medicine-supplies/pig-health-and-devices">Pig Health Monitoring Devices</Link>
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
                  <Link to="/about">About Us</Link>
                  <a href="#contact-us" onClick={handleContactUsClick}>Contact Us</a>
                  <a href="#faq-section" onClick={e => {
                    e.preventDefault();
                    if (location.pathname !== '/about') {
                      navigate('/about');
                      setTimeout(() => {
                        if (window.scrollToFAQ) window.scrollToFAQ();
                      }, 300);
                    } else {
                      if (window.scrollToFAQ) window.scrollToFAQ();
                    }
                  }}>FAQ</a>
                  {/* <a href="#">Testimonials</a> */}
                  {/* <a href="#">News and Updates</a> */}
                </div>
              </div>
            )}
          </div>

          <Link to="/government-policies" className="nav-link">Government policies</Link>
        </div>

        <div className="user-section">
          <Link to="/signup" className="nav-link">Sign In/Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
