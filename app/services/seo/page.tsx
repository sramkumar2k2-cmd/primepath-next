// app/services/seo/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

const SEOServices = () => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push('/GetStarted');
  };

  return (
    <div className={styles.seoServicesPage}>
      {/* Hero Section */}
      <section className={styles.seoHeroSection}>
        <div className="container">
          <h1>Boost Your Online Visibility with Primepath SEO</h1>
          <p>At Primepath, we help your business reach new heights by making your website more visible to potential customers. Our SEO strategies are designed to increase organic traffic, improve search engine rankings, and turn visitors into loyal clients. With Primepath, your online presence will no longer go unnoticed.</p>
        </div>
      </section>

      {/* Services Section - Image Right */}
      <section className={`${styles.seoContentSection} ${styles.imageRight}`}>
        <div className="container">
          <div className={styles.seoContentGrid}>
            <div className={styles.seoTextContent}>
              <h2>Our Comprehensive SEO Services</h2>
              <p>We offer a full range of SEO services tailored to your business needs:</p>
              <ul className={styles.seoServicesList}>
                <li>
                  <strong>Keyword Research:</strong> Identifying the most valuable keywords to attract your target audience.
                </li>
                <li>
                  <strong>On-Page Optimization:</strong> Enhancing website structure, meta tags, headings, and content for maximum search engine impact.
                </li>
                <li>
                  <strong>Technical SEO:</strong> Improving site speed, mobile responsiveness, and crawlability to ensure search engines can easily index your site.
                </li>
                <li>
                  <strong>Content Marketing:</strong> Creating high-quality, engaging content that drives traffic and establishes brand authority.
                </li>
                <li>
                  <strong>Link Building:</strong> Strengthening your website's authority with quality backlinks from reputable sources.
                </li>
              </ul>
            </div>
            <div className={styles.seoImageContainer}>
              <Image 
                src="/images/SEO Service.png" 
                alt="SEO Services" 
                width={500}
                height={400}
                className={styles.seoImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Matters Section - Image Left */}
      <section className={`${styles.seoContentSection} ${styles.imageLeft}`}>
        <div className="container">
          <div className={styles.seoContentGrid}>
            <div className={styles.seoImageContainer}>
              <Image 
                src="/images/SEO Services.png" 
                alt="Why SEO Matters" 
                width={500}
                height={400}
                className={styles.seoImage}
              />
            </div>
            <div className={styles.seoTextContent}>
              <h2>Why SEO Matters for Your Business</h2>
              <p>In today's digital world, having a website isn't enough. SEO ensures that your audience can actually find you online. At Primepath, we focus on strategies that not only bring traffic but attract the right customers who are ready to engage with your brand. Better rankings mean more visibility, more leads, and more revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Image Right */}
      <section className={`${styles.seoContentSection} ${styles.imageRight}`}>
        <div className="container">
          <div className={styles.seoContentGrid}>
            <div className={styles.seoTextContent}>
              <h2>Benefits of Choosing Primepath</h2>
              <p>Partnering with Primepath for SEO comes with clear advantages:</p>
              <ul className={styles.seoBenefitsList}>
                <li>
                  <strong>Increased Online Visibility:</strong> Appear at the top of search results and reach more potential customers.
                </li>
                <li>
                  <strong>Targeted Traffic:</strong> Drive visitors who are genuinely interested in your products or services.
                </li>
                <li>
                  <strong>Higher Conversion Rates:</strong> Optimized websites turn more visitors into leads or sales.
                </li>
                <li>
                  <strong>Long-Term Growth:</strong> Sustainable strategies that continue to deliver results over time.
                </li>
                <li>
                  <strong>Expert Guidance:</strong> Work with a team that understands both the technical and creative aspects of SEO.
                </li>
              </ul>
            </div>
            <div className={styles.seoImageContainer}>
              <Image 
                src="/images/Benefits.png" 
                alt="SEO Benefits" 
                width={500}
                height={400}
                className={styles.seoImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - Image Left */}
      <section className={`${styles.seoContentSection} ${styles.imageLeft}`}>
        <div className="container">
          <div className={styles.seoContentGrid}>
            <div className={styles.seoImageContainer}>
              <Image 
                src="/images/Success.png" 
                alt="Our SEO Approach" 
                width={500}
                height={400}
                className={styles.seoImage}
              />
            </div>
            <div className={styles.seoTextContent}>
              <h2>Our Approach to Success</h2>
              <p>At Primepath, we believe in a results-driven approach. We start with an in-depth analysis of your website and competitors, then create a customized SEO strategy. From implementing technical fixes to producing high-quality content, we continuously monitor performance and refine strategies to ensure your business stays ahead in search rankings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.seoCtaSection}>
        <div className="container">
          <h2>Take Your Business to the Next Level</h2>
          <p>Don't let your competitors outshine you online. With Primepath SEO services, your website will attract more visitors, gain higher rankings, and convert traffic into loyal customers. Let us help you unlock the full potential of your digital presence.</p>
          <button className={styles.seoCtaButton} onClick={handleCTAClick}>
            Start Your SEO Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;