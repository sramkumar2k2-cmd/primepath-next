// app/services/web-development/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

const WebDevelopment = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/GetStarted'); 
  };

  return (
    <div className={styles.webDevelopmentPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <h1>Web Development</h1>
          <h2>Web Development Services That Drive Your Business Forward</h2>
          <p>At Primepath, we believe your website is the cornerstone of your digital presence. Our expert web development team crafts tailored solutions designed to engage your audience, streamline business processes, and amplify your brand's impact online.</p>
        </div>
      </section>

      {/* Why Primepath Section - Image Left */}
      <section className={`${styles.contentSection} ${styles.imageLeft}`}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/web-development.png" 
                alt="Why Choose Primepath" 
                width={500}
                height={400}
                className={styles.contentImage}
              />
            </div>
            <div className={styles.textContent}>
              <h2>Why Primepath for Web Development?</h2>
              <p>With years of industry experience, we combine cutting-edge technology, creativity, and business insight to deliver websites that perform exceptionally well. From intuitive design to robust backend functionality, we ensure your site is fast, secure, and scalable — ready to grow with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Image Right */}
      <section className={`${styles.contentSection} ${styles.imageRight}`}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <h2>Our Comprehensive Web Development Services</h2>
              <ul className={styles.servicesList}>
                <li>
                  <strong>Custom Website Development:</strong> We create personalized websites that reflect your brand identity and business objectives, using the latest frameworks and technologies for optimal performance.
                </li>
                <li>
                  <strong>E-commerce Development:</strong> Launch or upgrade your online store with secure payment gateways, smooth product management, and seamless user experience to boost sales.
                </li>
                <li>
                  <strong>Responsive & Mobile-First Design:</strong> Reach customers on any device with websites that adapt flawlessly to all screen sizes and provide a consistent experience.
                </li>
                <li>
                  <strong>Content Management Systems (CMS):</strong> Manage your content easily with user-friendly CMS solutions like WordPress, Drupal, or custom-built platforms.
                </li>
                <li>
                  <strong>Website Maintenance & Support:</strong> Keep your site secure, updated, and performing at its best with our dedicated maintenance plans.
                </li>
              </ul>
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/Website Development.png" 
                alt="Our Services" 
                width={500}
                height={400}
                className={styles.contentImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Image Left */}
      <section className={`${styles.contentSection} ${styles.imageLeft}`}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/Benefits.png" 
                alt="Benefits of Choosing Primepath" 
                width={500}
                height={400}
                className={styles.contentImage}
              />
            </div>
            <div className={styles.textContent}>
              <h2>Benefits of Choosing Primepath Web Development</h2>
              <ul className={styles.benefitsList}>
                <li>
                  <strong>Enhanced User Engagement:</strong> Our designs focus on user experience, helping visitors find information quickly and take action.
                </li>
                <li>
                  <strong>SEO-Ready Architecture:</strong> We build websites optimized for search engines to increase your online visibility and organic traffic.
                </li>
                <li>
                  <strong>Robust Security:</strong> Protect your business and customer data with secure coding practices and regular vulnerability assessments.
                </li>
                <li>
                  <strong>Scalable Solutions:</strong> Whether you're a startup or enterprise, our development approach ensures your site can handle growth and new features.
                </li>
                <li>
                  <strong>Performance Optimization:</strong> Fast loading speeds and smooth navigation keep users engaged and reduce bounce rates.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section - Image Right */}
      <section className={`${styles.contentSection} ${styles.imageRight}`}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <h2>How We Work</h2>
              <p>At Primepath, we follow a client-focused approach. We start with understanding your goals, then design and develop a website tailored to your needs. Our iterative process includes regular feedback loops, ensuring the final product exceeds your expectations.</p>
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/Work Section.png" 
                alt="How We Work" 
                width={500}
                height={400}
                className={styles.contentImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Ready to Elevate Your Online Presence?</h2>
          <p>Your website is more than just a digital space—it's your business's first impression. Partner with Primepath and get a website that not only looks great but drives results. Contact us today to start your web development journey!</p>
          <button className={styles.ctaButton} onClick={handleContactClick}>
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;