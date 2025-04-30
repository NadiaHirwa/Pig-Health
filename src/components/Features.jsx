import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      image: '/src/assets/farming-tech.jpg',
      label: 'Inspire',
    },
    {
      image: '/src/assets/farming-tech.jpg',
      label: 'Farming',
    },
    {
      image: '/src/assets/farming-tech.jpg',
      label: '',
    },
  ];

  const infoCards = [
    {
      category: 'HEALTH',
      title: 'Prevent Diseases',
      description: 'Regular vaccination reduces disease risks and ensures healthier pigs.',
    },
    {
      category: 'VETERINARY',
      title: 'Emergency Care',
      description: 'Know when to call a vet to save your pigs from critical illnesses.',
    },
    {
      category: 'BUSINESS',
      title: 'Profit Strategies',
      description: 'Smart management increases farm revenue and long-term success.',
    },
  ];

  return (
    <div className="features-container">
      <div className="farming-images">
        {features.map((feature, index) => (
          <div key={index} className="image-card">
            <img src={feature.image} alt={`Farming ${index + 1}`} />
            {feature.label && <span className="image-label">{feature.label}</span>}
            {index === 2 && <button className="view-more">VIEW MORE</button>}
          </div>
        ))}
      </div>

      <div className="info-cards">
        {infoCards.map((card, index) => (
          <div key={index} className="info-card">
            <span className="category">{card.category}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="connect-section">
        <h2>Connect, Learn & Grow</h2>
        <p>
          Become part of Rwanda's largest pig farming network. Share experiences, 
          get expert advice, and grow your farm successfully.
        </p>
        <button className="join-now">Join Now</button>
      </div>
    </div>
  );
};

export default Features; 