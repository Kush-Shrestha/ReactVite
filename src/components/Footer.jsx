import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">King's Store</h3>
            <p className="footer-description">
              Your one-stop destination for premium products and exceptional shopping experience.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/"><i className="fas fa-home"></i> Home</a></li>
              <li><a href="/about"><i className="fas fa-info-circle"></i> About</a></li>
              <li><a href="/contact"><i className="fas fa-envelope"></i> Contact</a></li>
              <li><a href="/cart"><i className="fas fa-shopping-cart"></i> Cart</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-links contact-info">
              <li><i className="fas fa-phone"></i> +1 234 567 890</li>
              <li><i className="fas fa-envelope"></i> info@kingsstore.com</li>
              <li><i className="fas fa-map-marker-alt"></i> 123 Store Street, City</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">&copy; 2024 King's Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;