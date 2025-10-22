// app/components/HomeClient.tsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';
import { FaCode, FaSearch, FaShareAlt, FaGoogle, FaPenNib, FaEnvelopeOpenText, FaRocket, FaShieldAlt, FaUsers, FaChartLine, FaAward, FaHandshake } from 'react-icons/fa';

const HomeClient = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(`.${styles.fadeIn}, .${styles.slideInLeft}, .${styles.slideInRight}`)
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.home}>
      {/* === your full content (hero, features, services, etc.) === */}
    </div>
  );
};

export default HomeClient;
