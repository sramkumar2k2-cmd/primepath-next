import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'SEO', path: '/services/seo' },
    { name: 'Social Media Marketing', path: '/services/smm' },
    { name: 'Search Engine Marketing', path: '/services/sem' },
    { name: 'Content Writing', path: '/services/content-writing' },
    { name: 'Email Marketing', path: '/services/email-marketing' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('.hamburger-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleServiceClick = () => {
    if (window.innerWidth <= 968) {
      setIsServicesOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isServicesPage = location.pathname === '/services';

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Your Logo
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-menu desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          
          {/* Services Section with Page Link AND Dropdown */}
          <div className="services-nav-item">
            <Link 
              to="/services" 
              className="nav-link services-page-link"
              onMouseEnter={() => window.innerWidth > 968 && setIsServicesOpen(true)}
            >
              Services
            </Link>
            
            {/* Services Dropdown */}
            <div className="services-dropdown" ref={dropdownRef}>
              <button 
                className="dropdown-arrow-btn"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => window.innerWidth > 968 && setIsServicesOpen(true)}
                aria-label="Toggle services dropdown"
              >
                <span className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}
                   onMouseLeave={() => window.innerWidth > 968 && setIsServicesOpen(false)}>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="dropdown-item"
                    onClick={handleServiceClick}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="mobile-menu-container" ref={mobileMenuRef}>
          <button 
            className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Navigation Menu */}
          <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            
            {/* Services Page Link */}
            <Link to="/services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              All Services
            </Link>
            
            {/* Individual Services Links */}
            <div className="mobile-services-section">
              <div className="mobile-services-header">Our Services:</div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="mobile-service-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;