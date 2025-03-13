import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/favorites" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-900/90 backdrop-blur-lg shadow-lg shadow-black/10 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <img src={logo} alt="Logo" className="h-12 w-12 relative z-10" />
          </div>
          <span className="ml-3 text-white text-xl font-bold tracking-tight">
            Haven<span className="text-blue-400">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path}
              className={`relative px-5 py-2 rounded-full text-white font-medium transition-all duration-300 hover:text-blue-400 ${
                location.pathname === link.path 
                  ? "text-blue-400" 
                  : "text-gray-200"
              }`}
            >
              {location.pathname === link.path && (
                <motion.span 
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-blue-500/10 rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              {link.name}
            </Link>
          ))}
          
          <Link to="/favorites">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-8 h-6 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-white hover:bg-gray-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/favorites">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavBar;