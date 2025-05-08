import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <span className="logo-icon">👑</span>
          King's Store
        </a>

        <div className="nav-search">
          <input type="text" placeholder="Search products..." />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="nav-actions">
          <a href="/wishlist" className="nav-action-item">
            <i className="fas fa-heart"></i>
            <span className="action-label">Wishlist</span>
          </a>
          <a href="/cart" className="nav-action-item">
            <i className="fas fa-shopping-cart"></i>
            <span className="action-label">Cart</span>
            <span className="cart-count">0</span>
          </a>
          <a href="/account" className="nav-action-item">
            <i className="fas fa-user"></i>
            <span className="action-label">Account</span>
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={toggleMenu}>
              <i className="fas fa-home"></i>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/products" className="nav-link" onClick={toggleMenu}>
              <i className="fas fa-store"></i>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a href="/categories" className="nav-link" onClick={toggleMenu}>
              <i className="fas fa-th-large"></i>
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a href="/deals" className="nav-link" onClick={toggleMenu}>
              <i className="fas fa-tag"></i>
              Deals
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" onClick={toggleMenu}>
              <i className="fas fa-info-circle"></i>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={toggleMenu}>
              <i className="fas fa-envelope"></i>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;