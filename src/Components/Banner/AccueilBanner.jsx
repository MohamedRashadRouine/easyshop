// AccueilBanner.jsx

import React from 'react';
import './AccueilBanner.css';
import banner from './b2.jpg';

const quotes = [
  "“You know, if you need 100 rounds to kill a deer, maybe hunting isn’t your sport.” – J.R.R. Tolkien",
  "“A gun is like a woman, son — it’s all how you hold her.” – Rhett Atkins",
];

const AccueilBanner = () => {
  return (
    <div className="banner-container">
      <img src={banner} alt="Hunting Banner" className="banner-image" />
      <div className="quotes-container">
        {quotes.map((quote, index) => (
          <div key={index} className="quote">
            <h3 className="quote-text">{quote}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccueilBanner;
