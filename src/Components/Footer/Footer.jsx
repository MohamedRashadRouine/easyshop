import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Validate the email format (you can use a library like validator.js)
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Perform any other actions here (e.g., add the email to a list, show a success message)
    alert(`Subscribed with email: ${email}`);
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    // You can use a library like validator.js or a regex pattern
    // This is a basic example, adjust as needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <footer className="simple-footer">
      <div className="column">
        <h3>Opening Dates and Hours</h3>
        <p>We are open every day of the week from 9 AM to 7 PM. Visit us and explore our offerings!</p>
      </div>
      <div className="newsletter">
        <h3>Newsletter</h3>
        <label htmlFor="newsletterEmail">Email address:</label>
        <input
          type="email"
          id="newsletterEmail"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
      <div className="developers">
        <h3>Developed by</h3>
        <a href="https://www.facebook.com/shiriamine/" className="developer-link">
          Mohamed Amine Sehiri
        </a>
        <a href="https://www.facebook.com/profile.php?id=100074566130215" className="developer-link">
          Ouday Djobbi
        </a>
        <a href="https://www.facebook.com/MohamedRashadRouine" className="developer-link">
          Mohamed Rashad Rouine
        </a>
      </div>
    </footer>
  );
};

export default Footer;
