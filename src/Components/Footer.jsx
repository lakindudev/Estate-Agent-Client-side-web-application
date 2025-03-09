// Footer component to display the footer section of the application
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../images/logo.png";

function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Properties", path: "/favorites" },
        { name: "Contact", path: "/contact" },
        { name: "Careers", path: "/careers" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Property Listings", path: "/listings" },
        { name: "Property Management", path: "/management" },
        { name: "Real Estate Consulting", path: "/consulting" },
        { name: "Market Analysis", path: "/analysis" },
        { name: "Investment Guidance", path: "/investment" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "FAQ", path: "/faq" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Sitemap", path: "/sitemap" },
      ]
    }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      url: "#"
    },
    { 
      name: "LinkedIn", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      url: "#"
    },
    { 
      name: "Facebook", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      url: "#"
    },
    { 
      name: "Twitter", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      url: "#"
    },
    { 
      name: "Email", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      url: "mailto:info@havenhub.com"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/src/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]"></div>
      
      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg rounded-3xl p-10 border border-gray-700/50 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Subscribe to Our Newsletter</h3>
                <p className="text-gray-300 text-lg">Stay updated with the latest properties and real estate insights.</p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-6 py-4 rounded-full bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Logo and About */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center mb-6">
                <img src={logo} alt="HavenHub Logo" className="h-12 w-12" />
                <span className="ml-3 text-2xl font-bold">
                  Haven<span className="text-blue-400">Hub</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                HavenHub is your trusted partner in finding the perfect property. With over 15 years of experience, we've helped thousands of clients find their dream homes.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-6 text-white">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path} 
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-0 h-0.5 bg-blue-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
