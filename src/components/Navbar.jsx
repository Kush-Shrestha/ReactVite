<<<<<<< HEAD
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
=======
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-lg sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-20'>
                    {/* Logo */}
                    <Link to="/" className='flex-shrink-0 transform hover:scale-105 transition-transform duration-300'>
                        <img
                            src={LOGO_URL}
                            alt='Logo'
                            className='h-12 w-auto drop-shadow-lg'
                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <Link 
                            to='/' 
                            className='text-white hover:text-blue-100 font-medium transition-colors duration-200 relative group'
                        >
                            Home
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
                        </Link>
                        <Link 
                            to='/about' 
                            className='text-white hover:text-blue-100 font-medium transition-colors duration-200 relative group'
                        >
                            About
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
                        </Link>
                        <Link 
                            to='/contact' 
                            className='text-white hover:text-blue-100 font-medium transition-colors duration-200 relative group'
                        >
                            Contact
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
                        </Link>
                    </div>

                    {/* Cart */}
                    <Link 
                        to='/cart'
                        className='flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg shadow-md hover:bg-white/20 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border border-white/20'
                    >
                        <FaShoppingCart className='h-5 w-5' />
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
>>>>>>> e34691b (React Training)

export default Navbar;