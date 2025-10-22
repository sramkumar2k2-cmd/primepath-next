'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../content-writing/page.module.css';

const ContentWriting = () => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/GetStarted');
  };

  return (
    <div className={styles.contentWritingPage}>
      {/* Hero Section */}
      <section className={styles.contentHeroSection}>
        <div className={styles.container}>
          <h1>Engage, Inform, and Convert with Primepath Content Writing</h1>
          <p>At Primepath, we believe that content is the backbone of every successful digital strategy. High-quality content attracts visitors, builds trust, and drives conversions. In today's competitive online landscape, businesses that fail to communicate effectively with their audience lose opportunities. Our Content Writing services ensure your brand delivers the right message to the right audience at the right time.</p>
        </div>
      </section>

      {/* Services Section - Image Right */}
      <section className={`${styles.contentContentSection} ${styles.imageRight}`}>
        <div className={styles.container}>
          <div className={styles.contentContentGrid}>
            <div className={styles.contentTextContent}>
              <h2>Our Comprehensive Content Writing Services</h2>
              <p>Primepath offers a full suite of content creation services tailored to meet the unique needs of your business:</p>
              <ul className={styles.contentServicesList}>
                <li>
                  <strong>Website Content:</strong> Optimized, engaging copy for your homepage, services pages, and product pages that speaks directly to your audience while improving search engine rankings.
                </li>
                <li>
                  <strong>Blogs & Articles:</strong> Regularly updated, informative content that establishes your brand authority, drives organic traffic, and keeps your audience coming back for more.
                </li>
                <li>
                  <strong>Social Media Content:</strong> Eye-catching posts, captions, and visual content crafted to increase engagement, grow followers, and enhance brand visibility across all platforms.
                </li>
                <li>
                  <strong>Email & Newsletter Content:</strong> Persuasive and personalized content designed to nurture leads, boost engagement, and convert subscribers into loyal customers.
                </li>
                <li>
                  <strong>Product Descriptions & E-commerce Copy:</strong> Clear, compelling, and SEO-friendly descriptions that highlight benefits, encourage purchases, and reduce bounce rates.
                </li>
              </ul>
            </div>
            <div className={styles.contentImageContainer}>
              <Image 
                src="/images/Content Writing.png" 
                alt="Content Writing Services"
                width={500}
                height={300}
                className={styles.contentImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Content Matters Section - Image Left */}
      <section className={`${styles.contentContentSection} ${styles.imageLeft}`}>
        <div className={styles.container}>
          <div className={styles.contentContentGrid}>
            <div className={styles.contentImageContainer}>
              <Image 
                src="/images/Content-writing.png" 
                alt="Why Content Matters" 
                width={500}
                height={400}
                className={styles.contentImage}
              />
            </div>
            <div className={styles.contentTextContent}>
              <h2>Why Content Matters</h2>
              <p>Content is more than words on a page—it's the voice of your brand. Every piece of content communicates who you are, what you stand for, and why your audience should trust you. At Primepath, we create content that resonates with your target audience, aligns with your brand identity, and drives measurable results. Whether your goal is to generate leads, improve SEO, or educate your customers, our content strategies are designed to achieve lasting impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.contentCtaSection}>
        <div className={styles.container}>
          <h2>Ready to Transform Your Content Strategy?</h2>
          <p>Don't let poor content hold your business back. With Primepath Content Writing services, you'll engage your audience, build authority, and drive meaningful conversions. Let's create content that makes an impact.</p>
          <button className={styles.contentCtaButton} onClick={handleCTAClick}>
            Start Your Content Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContentWriting;