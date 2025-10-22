// app/services/sem/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

const SEMServices = () => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/GetStarted');
  };

  return (
    <div className={styles.semServicesPage}>
      {/* Hero Section */}
      <section className={styles.semHeroSection}>
        <div className="container">
          <h1>Boost Your Online Visibility and Drive Targeted Traffic</h1>
          <p>At Primepath, we understand that visibility is the key to business growth. In today's competitive digital landscape, simply having a website isn't enough. Your potential customers are actively searching for products or services like yours on search engines every day. This is where Search Engine Marketing (SEM) comes into play. SEM is a powerful strategy that uses paid advertising to place your business at the top of search results, instantly putting your brand in front of the right audience.</p>
        </div>
      </section>

      {/* Services Section - Image Right */}
      <section className={`${styles.semContentSection} ${styles.imageRight}`}>
        <div className="container">
          <div className={styles.semContentGrid}>
            <div className={styles.semTextContent}>
              <h2>Our Comprehensive SEM Services</h2>
              <p>Primepath offers a complete suite of SEM services that cover every aspect of paid search marketing:</p>
              <ul className={styles.semServicesList}>
                <li>
                  <strong>PPC Campaign Management:</strong> We create and manage highly effective pay-per-click campaigns on platforms like Google Ads and Bing Ads. Every campaign is tailored to your business goals, ensuring optimal performance and cost-efficiency.
                </li>
                <li>
                  <strong>Keyword Research & Targeting:</strong> Our team identifies the most relevant and high-performing keywords for your industry, focusing on search terms that attract serious buyers and maximize conversions.
                </li>
                <li>
                  <strong>Compelling Ad Copy:</strong> High-quality ads are essential to capture attention and drive clicks. We craft persuasive, actionable ad copy that speaks directly to your target audience.
                </li>
                <li>
                  <strong>Landing Page Optimization:</strong> Driving traffic is only half the battle. We optimize your landing pages to convert visitors into leads or customers, ensuring a seamless experience from click to conversion.
                </li>
                <li>
                  <strong>Ongoing Monitoring & Reporting:</strong> At Primepath, we continuously track campaign performance, analyze metrics, and refine strategies to ensure sustained growth and maximum ROI.
                </li>
              </ul>
            </div>
            <div className={styles.semImageContainer}>
              <Image 
                src="/images/SEM.png" 
                alt="SEM Services" 
                width={500}
                height={400}
                className={styles.semImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why SEM Matters Section - Image Left */}
      <section className={`${styles.semContentSection} ${styles.imageLeft}`}>
        <div className="container">
          <div className={styles.semContentGrid}>
            <div className={styles.semImageContainer}>
              <Image 
                src="/images/SEM.png" 
                alt="Why SEM Matters" 
                width={500}
                height={400}
                className={styles.semImage}
              />
            </div>
            <div className={styles.semTextContent}>
              <h2>Why SEM Matters for Your Business</h2>
              <p>Paid search marketing delivers immediate results, putting your business at the top of search results when potential customers are most ready to take action. Unlike organic SEO, SEM allows you to control your visibility and target specific demographics, locations, devices, and times. This precision ensures that your marketing dollars are spent efficiently, reaching the right audience at the right moment. With Primepath, SEM is not just about clicks—it's about conversions, leads, and tangible business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Image Right */}
      <section className={`${styles.semContentSection} ${styles.imageRight}`}>
        <div className="container">
          <div className={styles.semContentGrid}>
            <div className={styles.semTextContent}>
              <h2>Benefits of Choosing Primepath SEM Services</h2>
              <p>Partner with us to experience these advantages:</p>
              <ul className={styles.semBenefitsList}>
                <li>
                  <strong>Instant Visibility:</strong> Appear above competitors and get noticed by your audience immediately.
                </li>
                <li>
                  <strong>Targeted Traffic:</strong> Reach people actively searching for products or services like yours.
                </li>
                <li>
                  <strong>Maximized ROI:</strong> Every campaign is optimized to deliver measurable results and ensure cost-efficiency.
                </li>
                <li>
                  <strong>Data-Driven Decisions:</strong> We use analytics and performance data to continuously improve campaigns.
                </li>
                <li>
                  <strong>Expert Guidance:</strong> Work with a team of certified SEM professionals who understand the nuances of paid search advertising.
                </li>
              </ul>
            </div>
            <div className={styles.semImageContainer}>
              <Image 
                src="/images/SEM.png" 
                alt="SEM Benefits" 
                width={500}
                height={400}
                className={styles.semImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - Image Left */}
      <section className={`${styles.semContentSection} ${styles.imageLeft}`}>
        <div className="container">
          <div className={styles.semContentGrid}>
            <div className={styles.semImageContainer}>
              <Image 
                src="/images/SEM.png" 
                alt="Our SEM Approach" 
                width={500}
                height={400}
                className={styles.semImage}
              />
            </div>
            <div className={styles.semTextContent}>
              <h2>Our Proven Approach</h2>
              <p>At Primepath, we take a strategic, results-oriented approach to SEM. We begin with a thorough analysis of your industry, competitors, and audience. Based on this research, we design customized campaigns that align with your business goals. From ad creation and keyword targeting to landing page optimization and detailed reporting, we handle every aspect of SEM, allowing you to focus on running your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.semCtaSection}>
        <div className="container">
          <h2>Ready to Dominate Search Results?</h2>
          <p>Don't let competitors capture your potential customers. With Primepath SEM services, you'll appear at the top of search results, drive qualified traffic, and achieve measurable business growth. Let's start your paid search success story today.</p>
          <button className={styles.semCtaButton} onClick={handleCTAClick}>
            Start Your SEM Campaign
          </button>
        </div>
      </section>
    </div>
  );
};

export default SEMServices;