// Aboutus.jsx

import React from 'react';
import './aboutuscss.css';

export const Aboutus = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Tej Chasse</h1>
        <p>Your Trusted Armurerie in Ariana, Tunisia</p>
      </header>

      <section>
        <h2>About Us</h2>
        <p>
          Tej Chasse is a premier armurerie located in Ariana, Tunisia. We pride ourselves on providing high-quality
          firearms, ammunition, and hunting gear to our valued customers. With years of experience, our team is dedicated
          to meeting the needs of hunters, sports shooters, and firearm enthusiasts.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to offer a wide selection of top-notch firearms and related products while ensuring exceptional
          customer service. We are passionate about promoting responsible firearm ownership and supporting the shooting
          sports community.
        </p>

        <h2>Visit Us</h2>
        <p>
          Come visit Tej Chasse at our location in Ariana, Tunisia, to explore our extensive collection of firearms,
          accessories, and hunting equipment. Our knowledgeable staff is ready to assist you with any questions or
          concerns you may have.
        </p>

        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="Our Location"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.3329129683736!2d10.170947715226553!3d36.88132067991395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145ea5df5ff1e2b3%3A0x2dbfea49cb6d01b4!2sTej%20Chasse!5e0!3m2!1sen!2stn!4v1671435236214!5m2!1sen!2stn"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Tej Chasse - Ariana, Tunisia</p>
      </footer>
    </div>
  );
};

export default Aboutus;
