import React from 'react';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <div className="cta-banner">
      <div className="cta-content">
        <div className="cta-image">
          <img src="/src/assets/pig-standing.png" alt="Pink pig" />
        </div>
        <div className="cta-text">
          <span className="cta-label">Join the Pig Farming Network</span>
          <h2>Be part of Rwanda's fastest-growing pig farming community.</h2>
          <button className="sign-up-btn">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default CTABanner; 