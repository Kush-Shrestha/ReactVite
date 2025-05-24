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
};

export default Navbar;