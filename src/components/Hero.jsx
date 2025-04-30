import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Transforming Pig Farming with Innovation</h1>
          <p>
            Start your journey to modern pig farming with the latest technologies. 
            Discover smart solutions for your farm that improve productivity and animal welfare.
          </p>
          <button className="get-started">Get Started</button>
        </div>

        <div className="hero-links">
          <a href="#" className="hero-link">
            <span>Explore the Best Pig Breeds for Your Farm</span>
            <FaArrowRight />
          </a>
          <a href="#" className="hero-link">
            <span>Healthy Pigs, Strong Community</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;