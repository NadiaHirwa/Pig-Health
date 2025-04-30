import React from 'react';
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram, FaArrowRight } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Description */}
        <div className="footer-brand">
          <div className="footer-logo">
            <h2>PigHealth</h2>
            <span>Rewards</span>
          </div>
          <p className="footer-description">
            There are many variations of passages of lorem ipsum available, but the 
            majority suffered.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        {/* Explore Links */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Pig Farming</a></li>
            <li><a href="#">Veterinary Services</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* News Section */}
        <div className="footer-section">
          <h3>News</h3>
          <div className="news-item">
            <h4>New Farming Techniques</h4>
            <p>Discover modern pig farming methods for better yields.</p>
          </div>
          <div className="news-item">
            <h4>Disease Prevention Tips</h4>
            <p>Learn how to keep your pigs healthy year-round.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <div className="contact-info">
            <p>
              <a href="tel:+250790755675">+250790755675</a>
            </p>
            <p>
              <a href="mailto:ishimwediane40@gmail.com">ishimwediane40@gmail.com</a>
            </p>
            <p>Kigali,Rwanda</p>
          </div>
          <div className="newsletter">
            <input type="email" placeholder="Your Email Address" />
            <button type="submit" aria-label="Subscribe">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 