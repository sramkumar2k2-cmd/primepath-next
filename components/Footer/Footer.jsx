// components/Footer/Footer.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>

          {/* ✅ Company Info */}
          <div className={styles.footerSection}>
            <h3>Primepath</h3>
            <p>
              We provide cutting-edge digital marketing solutions to help your
              business grow in the digital landscape.
            </p>

            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/share/1CnxSgVm7S/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/primepath_official?igsh=OG85eXptanY3YXU5" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* ✅ Services Section */}
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/web-development">Web Development</Link></li>
              <li><Link href="/services/seo">SEO</Link></li>
              <li><Link href="/services/smm">SMM</Link></li>
              <li><Link href="/services/sem">SEM</Link></li>
              <li><Link href="/services/content-writing">Content Writing</Link></li>
              <li><Link href="/services/email-marketing">Email Marketing</Link></li>
            </ul>
          </div>

          {/* ✅ Quick Links Section */}
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li> {/* ✅ Added Projects */}
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/GetStarted">GetStarted</Link></li>
            </ul>
          </div>

          {/* ✅ Contact Info Section */}
          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p><FaMapMarkerAlt /> India, Tamil Nadu, Tenkasi, 627415</p>
              <p><FaPhone /> +91 70929 39307</p>
              <p><FaEnvelope /> official.primepath@gmail.com</p>
            </div>
          </div>
        </div>

        {/* ✅ Bottom Section */}
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Primepath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;