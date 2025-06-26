import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, GraduationCap, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <GraduationCap size={32} className="text-primary" />
            <div>
              <div className="text-xl font-bold text-primary">E-Pathsala</div>
              <div className="text-xs uppercase tracking-wider text-gray-600">Digital Learning Hub</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  location.pathname === '/' ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/books" 
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  location.pathname === '/books' ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Books
              </Link>
              <Link 
                to="/journals" 
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  location.pathname === '/journals' ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Journals
              </Link>
              <Link 
                to="/newspapers" 
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  location.pathname === '/newspapers' ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Newspapers
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  location.pathname === '/about' ? 'text-primary' : 'text-gray-600'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  location.pathname === '/contact' ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                aria-label="Search"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Search size={20} />
              </button>
              <Link
                to="/login"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <User size={20} />
              </Link>
            </div>
          </div>

          <button
            className="md:hidden text-gray-600 hover:text-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container-custom py-4">
            <div className="flex justify-center mb-4">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search for resources..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
              </div>
            </div>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md ${
                  location.pathname === '/'
                    ? 'bg-primary-light/10 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/books"
                className={`px-4 py-2 rounded-md ${
                  location.pathname === '/books'
                    ? 'bg-primary-light/10 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                Books
              </Link>
              <Link
                to="/journals"
                className={`px-4 py-2 rounded-md ${
                  location.pathname === '/journals'
                    ? 'bg-primary-light/10 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                Journals
              </Link>
              <Link
                to="/newspapers"
                className={`px-4 py-2 rounded-md ${
                  location.pathname === '/newspapers'
                    ? 'bg-primary-light/10 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                Newspapers
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-md ${
                  location.pathname === '/about'
                    ? 'bg-primary-light/10 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-md ${
                  location.pathname === '/contact'
                    ? 'bg-primary-light/10 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="border-t border-gray-200 my-2"></div>
              <Link
                to="/login"
                className="px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 flex items-center"
                onClick={closeMenu}
              >
                <User size={18} className="mr-2" />
                Log In / Register
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;