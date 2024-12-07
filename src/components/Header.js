import React from 'react';
import { Menu, Home, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ onMenuToggle }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src="https://w7.pngwing.com/pngs/117/122/png-transparent-blogger-logo-online-socialmedia-most-usable-logos-icon.png" 
              alt="Company Logo" 
              className="h-10 w-10 rounded-full mr-3"
            />
            <span className="text-xl font-bold text-gray-900">Blog App</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 flex items-center space-x-1"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-blue-600 flex items-center space-x-1"
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={onMenuToggle}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;