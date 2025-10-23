'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function ServicesContent() {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const services = [
    {
      title: 'Web Development',
      description:
        'We create responsive, user-friendly websites that convert visitors into customers.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading',
        'Modern Technologies',
      ],
      image: '/images/web-development.png',
      link: '/services/web-development',
    },
    {
      title: 'SEO (Search Engine Optimization)',
      description:
        'Improve your website visibility and rank higher on search engines.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Content Optimization',
      ],
      image: '/images/SEO.png',
      link: '/services/seo',
    },
    {
      title: 'SMM (Social Media Marketing)',
      description:
        'Engage with your audience and grow your brand on social media platforms.',
      features: [
        'Content Strategy',
        'Community Management',
        'Paid Social Ads',
        'Analytics & Reporting',
      ],
      image: '/images/SMM.png',
      link: '/services/smm',
    },
    {
      title: 'SEM (Search Engine Marketing)',
      description:
        'Drive targeted traffic to your website through paid search advertising.',
      features: [
        'Google Ads',
        'Bing Ads',
        'Ad Copywriting',
        'Conversion Tracking',
      ],
      image: '/images/SEM.png',
      link: '/services/sem',
    },
    {
      title: 'Content Writing',
      description:
        'Create compelling content that resonates with your audience and drives action.',
      features: [
        'Blog Posts',
        'Website Copy',
        'Product Descriptions',
        'Email Content',
      ],
      image: '/images/Content-writing.png',
      link: '/services/content-writing',
    },
    {
      title: 'Email Marketing',
      description:
        'Nurture leads and build customer loyalty through effective email campaigns.',
      features: [
        'Newsletter Design',
        'Automation Sequences',
        'A/B Testing',
        'Performance Analytics',
      ],
      image: '/images/Email-marketing.png',
      link: '/services/Email-marketing',
    },
  ];

  return (
    <>
      {/* Mobile Services Dropdown */}
      <div className={styles.mobileServicesDropdown}>
        <button
          className={styles.mobileDropdownToggle}
          onClick={() => setShowMobileDropdown(!showMobileDropdown)}
        >
          Browse All Services
          <span
            className={`${styles.dropdownArrow} ${
              showMobileDropdown ? styles.open : ''
            }`}
          >
            ▼
          </span>
        </button>

        {showMobileDropdown && (
          <div className={styles.mobileDropdownMenu}>
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className={styles.mobileDropdownItem}
                onClick={() => setShowMobileDropdown(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Services List */}
      <div className={styles.servicesList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <div className={styles.serviceContent}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link href={service.link} className="btn">
                Learn More
              </Link>
            </div>
            <div className={styles.serviceImage}>
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className={styles.serviceImg}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <h2>Ready to get started?</h2>
        <p>Contact us today to discuss how we can help your business grow.</p>
        <Link href="/GetStarted" className="btn">
          Get Started
        </Link>
      </div>
    </>
  );
}