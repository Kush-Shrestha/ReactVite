import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <div className="header-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded with a vision to revolutionize online shopping, we've grown from a small startup
            to a trusted e-commerce platform serving customers worldwide. Our journey is marked by
            innovation, customer satisfaction, and a commitment to excellence.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We strive to provide an exceptional shopping experience by offering high-quality products,
            competitive prices, and outstanding customer service. Our goal is to make online shopping
            simple, secure, and enjoyable for everyone.
          </p>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-heart"></i>
              <h3>Customer First</h3>
              <p>Your satisfaction is our top priority</p>
            </div>
            <div className="value-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Quality</h3>
              <p>We never compromise on quality</p>
            </div>
            <div className="value-card">
              <i className="fas fa-sync"></i>
              <h3>Innovation</h3>
              <p>Constantly evolving and improving</p>
            </div>
            <div className="value-card">
              <i className="fas fa-handshake"></i>
              <h3>Integrity</h3>
              <p>Honest and transparent in all dealings</p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Products</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Countries Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;