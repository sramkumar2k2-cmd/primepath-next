// components/Header/Header.jsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Toggle dropdown (mobile only)
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Handle dropdown hover (desktop)
  const handleDropdownMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(dropdownTimerRef.current);
      setIsDropdownOpen(true);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (window.innerWidth > 768) {
      dropdownTimerRef.current = setTimeout(() => setIsDropdownOpen(false), 300);
    }
  };

  // Handle "Services" link
  const handleServicesClick = (e) => {
    if (window.innerWidth <= 768) {
      const isArrowClick =
        e.target.classList.contains(styles.dropdownArrow) ||
        e.target.parentElement?.classList.contains(styles.dropdownArrow);

      if (isArrowClick) {
        e.preventDefault();
        toggleDropdown();
      } else {
        router.push('/services');
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    } else {
      router.push('/services');
    }
  };

  // Close menu on link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(dropdownTimerRef.current);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* ✅ Logo on Left */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Primepath Logo"
              className={styles.logoImg}
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* ✅ Navigation on Right */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link
            href="/"
            className={pathname === '/' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={pathname === '/about' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div
              className={`${styles.dropdownToggle} ${
                pathname.startsWith('/services') ? styles.active : ''
              }`}
              onClick={handleServicesClick}
            >
              <span>Services</span>
              <span className={styles.dropdownArrow}>▼</span>
            </div>

            <div className={styles.dropdownMenu}>
              <Link href="/services/web-development" onClick={handleLinkClick}>
                Web Development
              </Link>
              <Link href="/services/seo" onClick={handleLinkClick}>
                SEO (Search Engine Optimization)
              </Link>
              <Link href="/services/smm" onClick={handleLinkClick}>
                SMM (Social Media Marketing)
              </Link>
              <Link href="/services/sem" onClick={handleLinkClick}>
                SEM (Search Engine Marketing)
              </Link>
              <Link href="/services/content-writing" onClick={handleLinkClick}>
                Content Writing
              </Link>
              <Link href="/services/email-marketing" onClick={handleLinkClick}>
                Email Marketing
              </Link>
            </div>
          </div>

          {/* ✅ Projects Link */}
          <Link
            href="/projects"
            className={pathname === '/projects' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            Projects
          </Link>

          <Link
            href="/blog"
            className={pathname === '/blog' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            Blog
          </Link>

          <Link
            href="/GetStarted"
            className={pathname === '/GetStarted' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            GetStarted
          </Link>

          <Link
            href="/contact"
            className={pathname === '/contact' ? styles.active : ''}
            onClick={handleLinkClick}
          >
            Contact
          </Link>

          {/* ✅ Mobile Contact Info */}
          <div className={styles.mobileContactInfo}>
            <div className={styles.contactItem} onClick={() => router.push('/contact')}>
              <span className={styles.contactIcon}>📱</span>
              <span className={styles.contactText}>+91 7092939307</span>
            </div>
            <div className={styles.contactItem} onClick={() => router.push('/contact')}>
              <span className={styles.contactIcon}>✉️</span>
              <span className={styles.contactText}>official.primepath@gmail.com</span>
            </div>
          </div>
        </nav>

        {/* ✅ Hamburger */}
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;