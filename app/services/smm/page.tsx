// app/services/smm/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

const SMMServices = () => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/GetStarted');
  };

  return (
    <div className={styles.smmServicesPage}>
      {/* Hero Section */}
      <section className={styles.smmHeroSection}>
        <div className="container">
          <h1>Elevate Your Brand with Primepath SMM</h1>
          <p>At Primepath, we help your business connect with your audience through powerful social media strategies. Our Social Media Marketing (SMM) services are designed to increase brand awareness, engage followers, and drive traffic to your website. With Primepath, your social presence becomes a lead-generating powerhouse.</p>
        </div>
      </section>

      {/* Services Section - Image Right */}
      <section className={`${styles.smmContentSection} ${styles.imageRight}`}>
        <div className="container">
          <div className={styles.smmContentGrid}>
            <div className={styles.smmTextContent}>
              <h2>Our Comprehensive SMM Services</h2>
              <p>We offer a full suite of Social Media Marketing services tailored to your business needs:</p>
              <ul className={styles.smmServicesList}>
                <li>
                  <strong>Social Media Strategy:</strong> Crafting customized plans for Facebook, Instagram, LinkedIn, Twitter, and more.
                </li>
                <li>
                  <strong>Content Creation:</strong> Designing engaging posts, graphics, videos, and stories that resonate with your audience.
                </li>
                <li>
                  <strong>Community Management:</strong> Interacting with followers, responding to messages, and building a loyal community.
                </li>
                <li>
                  <strong>Paid Social Advertising:</strong> Running targeted ad campaigns to boost reach, conversions, and ROI.
                </li>
                <li>
                  <strong>Analytics & Reporting:</strong> Measuring performance, tracking KPIs, and refining strategies for continuous improvement.
                </li>
              </ul>
            </div>
            <div className={styles.smmImageContainer}>
              <Image 
                src="/images/SMM.png" 
                alt="SMM Services" 
                width={500}
                height={400}
                className={styles.smmImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why SMM Matters Section - Image Left */}
      <section className={`${styles.smmContentSection} ${styles.imageLeft}`}>
        <div className="container">
          <div className={styles.smmContentGrid}>
            <div className={styles.smmImageContainer}>
              <Image 
                src="/images/SMM.png" 
                alt="Why SMM Matters" 
                width={500}
                height={400}
                className={styles.smmImage}
              />
            </div>
            <div className={styles.smmTextContent}>
              <h2>Why Social Media Marketing Matters</h2>
              <p>In today's digital landscape, social media is the heartbeat of your brand. Primepath ensures your business doesn't just exist on social platforms—it thrives. Effective SMM drives engagement, strengthens customer relationships, and helps your brand stand out in a crowded market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Image Right */}
      <section className={`${styles.smmContentSection} ${styles.imageRight}`}>
        <div className="container">
          <div className={styles.smmContentGrid}>
            <div className={styles.smmTextContent}>
              <h2>Benefits of Choosing Primepath</h2>
              <p>Partnering with Primepath for SMM comes with tangible benefits:</p>
              <ul className={styles.smmBenefitsList}>
                <li>
                  <strong>Boosted Brand Awareness:</strong> Reach a larger, relevant audience across multiple platforms.
                </li>
                <li>
                  <strong>Stronger Engagement:</strong> Interact meaningfully with customers to build trust and loyalty.
                </li>
                <li>
                  <strong>Targeted Growth:</strong> Focus on followers who are genuinely interested in your products or services.
                </li>
                <li>
                  <strong>Increased Traffic & Leads:</strong> Drive visitors to your website and convert them into customers.
                </li>
                <li>
                  <strong>Expert Strategy & Execution:</strong> Leverage our experience to stay ahead of social media trends.
                </li>
              </ul>
            </div>
            <div className={styles.smmImageContainer}>
              <Image 
                src="/images/SMM.png" 
                alt="SMM Benefits" 
                width={500}
                height={400}
                className={styles.smmImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - Image Left */}
      <section className={`${styles.smmContentSection} ${styles.imageLeft}`}>
        <div className="container">
          <div className={styles.smmContentGrid}>
            <div className={styles.smmImageContainer}>
              <Image 
                src="/images/SMM.png" 
                alt="Our SMM Approach" 
                width={500}
                height={400}
                className={styles.smmImage}
              />
            </div>
            <div className={styles.smmTextContent}>
              <h2>Our Approach to Social Media Success</h2>
              <p>At Primepath, we believe in a strategic, data-driven approach. From researching your audience to creating engaging content and running targeted campaigns, we ensure every action contributes to your growth. Our team continuously monitors results and adjusts strategies to maximize impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.smmCtaSection}>
        <div className="container">
          <h2>Take Your Social Presence to the Next Level</h2>
          <p>Don't let your competitors dominate social media. With Primepath SMM services, your brand will connect with the right audience, amplify engagement, and grow your business online. Let us help you transform your social media channels into powerful marketing tools.</p>
          <button className={styles.smmCtaButton} onClick={handleCTAClick}>
            Boost Your Social Media
          </button>
        </div>
      </section>
    </div>
  );
};

export default SMMServices;