'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css'; // ✅ Fixed import path

const EmailMarketing = () => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/GetStarted');
  };

  return (
    <div className={styles.emailMarketingPage}>
      {/* Hero Section */}
      <section className={styles.emailHeroSection}>
        <div className={styles.container}>
          <h1>Drive Engagement and Conversions with Primepath Email Marketing</h1>
          <p>At Primepath, we understand that email marketing remains one of the most effective channels for building customer relationships and driving revenue. With personalized, strategic email campaigns, we help you connect with your audience, nurture leads, and achieve measurable business growth.</p>
        </div>
      </section>

      {/* Services Section - Image Right */}
      <section className={`${styles.emailContentSection} ${styles.imageRight}`}>
        <div className={styles.container}>
          <div className={styles.emailContentGrid}>
            <div className={styles.emailTextContent}>
              <h2>Our Comprehensive Email Marketing Services</h2>
              <p>Primepath offers a complete suite of email marketing solutions designed to maximize your ROI:</p>
              <ul className={styles.emailServicesList}>
                <li>
                  <strong>Email Campaign Strategy:</strong> Customized email marketing strategies aligned with your business goals and target audience.
                </li>
                <li>
                  <strong>Newsletter Design & Development:</strong> Engaging, mobile-responsive newsletters that keep your audience informed and connected.
                </li>
                <li>
                  <strong>Automated Email Sequences:</strong> Set up automated welcome series, lead nurturing campaigns, and customer onboarding flows.
                </li>
                <li>
                  <strong>Segmentation & Personalization:</strong> Targeted campaigns based on user behavior, preferences, and demographics.
                </li>
                <li>
                  <strong>A/B Testing & Optimization:</strong> Continuous testing and optimization to improve open rates, click-through rates, and conversions.
                </li>
              </ul>
            </div>
            <div className={styles.emailImageContainer}>
              <Image 
                src="/images/Email-markerting.png"  
                alt="Email Marketing Services"
                width={500}
                height={400}
                className={styles.emailImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Email Marketing Matters Section - Image Left */}
      <section className={`${styles.emailContentSection} ${styles.imageLeft}`}>
        <div className={styles.container}>
          <div className={styles.emailContentGrid}>
            <div className={styles.emailImageContainer}>
              <Image 
                src="/images/Email-markerting.png" 
                alt="Why Email Marketing Matters" 
                width={500}
                height={400}
                className={styles.emailImage}
              />
            </div>
            <div className={styles.emailTextContent}>
              <h2>Why Email Marketing Matters</h2>
              <p>Email marketing delivers the highest ROI of any marketing channel, offering direct access to your audience's inbox. It's not just about sending emails—it's about building relationships, establishing trust, and driving consistent revenue. With Primepath, your email campaigns become powerful tools for customer retention, brand loyalty, and sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Image Right */}
      <section className={`${styles.emailContentSection} ${styles.imageRight}`}>
        <div className={styles.container}>
          <div className={styles.emailContentGrid}>
            <div className={styles.emailTextContent}>
              <h2>Benefits of Choosing Primepath Email Marketing</h2>
              <p>Partner with us to unlock these advantages:</p>
              <ul className={styles.emailBenefitsList}>
                <li>
                  <strong>Higher Conversion Rates:</strong> Targeted, personalized emails that drive action and generate revenue.
                </li>
                <li>
                  <strong>Improved Customer Retention:</strong> Keep your brand top-of-mind and build long-term customer relationships.
                </li>
                <li>
                  <strong>Cost-Effective Marketing:</strong> Achieve significant results with one of the most affordable marketing channels.
                </li>
                <li>
                  <strong>Measurable Results:</strong> Track performance with detailed analytics and reporting.
                </li>
                <li>
                  <strong>Scalable Solutions:</strong> Grow your email marketing efforts as your business expands.
                </li>
              </ul>
            </div>
            <div className={styles.emailImageContainer}>
              <Image 
                src="/images/Email-markerting.png" 
                alt="Email Marketing Benefits" 
                width={500}
                height={400}
                className={styles.emailImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - Image Left */}
      <section className={`${styles.emailContentSection} ${styles.imageLeft}`}>
        <div className={styles.container}>
          <div className={styles.emailContentGrid}>
            <div className={styles.emailImageContainer}>
              <Image 
                src="/images/Email-markerting.png" 
                alt="Our Email Marketing Approach" 
                width={500}
                height={400}
                className={styles.emailImage}
              />
            </div>
            <div className={styles.emailTextContent}>
              <h2>Our Approach to Email Success</h2>
              <p>At Primepath, we follow a proven email marketing methodology:</p>
              <ol className={styles.emailApproachList}>
                <li><strong>Strategy Development:</strong> Define goals, audience segments, and key performance indicators.</li>
                <li><strong>Content Creation:</strong> Develop compelling email content that resonates with your audience.</li>
                <li><strong>Design & Development:</strong> Create visually appealing, mobile-responsive email templates.</li>
                <li><strong>Campaign Execution:</strong> Deploy targeted campaigns with precise timing and segmentation.</li>
                <li><strong>Analysis & Optimization:</strong> Monitor performance and continuously improve results.</li>
              </ol>
              <p>Partner with Primepath to transform your email marketing into a revenue-generating powerhouse. Our data-driven approach ensures every email delivers value and drives meaningful business outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.emailCtaSection}>
        <div className={styles.container}>
          <h2>Ready to Elevate Your Email Marketing?</h2>
          <p>Don't let outdated email strategies limit your growth. With Primepath Email Marketing services, you'll engage subscribers, drive conversions, and build lasting customer relationships. Let's create email campaigns that deliver real results.</p>
          <button className={styles.emailCtaButton} onClick={handleCTAClick}>
            Start Your Email Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketing;