import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Get Started with Primepath | Begin Your Digital Success Journey', 
  description: ' Start your digital transformation with Primepath. Choose from expert SEO, SMM, SEM, and web development services customized to elevate your online growth',
  keywords: [
    'start digital project with Primepath',
    'online marketing startup support',
    'website and SEO launch plan',
    'business growth services',
    'custom digital marketing strategy',
  ],
  openGraph: {
    title: 'Get Started with Primepath | Begin Your Digital Success Journey', 
    description: 'Partner with Primepath to begin your digital growth journey. Our expert team provides tailored SEO, SMM, SEM, and web development services designed to boost your online visibility, strengthen your brand, and achieve measurable business success.', 
    url: '', 
    siteName: 'Primepath', // 
    images: [
      {
        url: '/images/og-img.png', // Full image URL (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: 'Get Started with Primepath | Begin Your Digital Success Journey', // Alt text for OG image
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Started with Primepath | Begin Your Digital Success Journey', 
    description: 'Partner with Primepath to begin your digital growth journey. Our expert team provides tailored SEO, SMM, SEM, and web development services designed to boost your online visibility, strengthen your brand, and achieve measurable business success.', 
    images: ['/images/og-img.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '', // Same as URL
  },
};

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We build responsive and dynamic websites using modern technologies to help your business establish a strong online presence.'
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing campaigns across multiple channels including Google, Meta, and LinkedIn to grow your business.'
    },
    {
      title: 'SEO Services',
      description: 'Improve your website ranking and visibility with our proven SEO strategies and technical optimization techniques.'
    },
    {
      title: 'Social Media Management (SMM)',
      description: 'Manage your social media profiles, create engaging content, and grow your online communities.'
    },
    {
      title: 'Content Writing',
      description: 'High-quality articles, blogs, and web content tailored to your industry and target audience.'
    },
    {
      title: 'Email Marketing',
      description: 'Effective email marketing campaigns and automation workflows to engage customers and drive conversions.'
    }
  ];

  // Your Google Form link
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSdPHKO3WGEGlLre9LJz7rM2Igi_8diJD6qzM1Jk_tO1e02Xyw/viewform?usp=header";

  return (
    <div className={styles.getStartedPage}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.pageHeader}>
          <h1 className={styles.sectionTitle}>Our Services</h1>
          <p>Primepath offers comprehensive digital solutions to help your business grow online. Register for any service below and our team will contact you.</p>
        </div>

        {/* Services Grid */}
        <div className={styles.jobOpenings}>
          <h2 className={styles.sectionTitle}>Digital Services We Offer</h2>
          <div className={styles.jobsList}>
            {services.map((service, index) => (
              <div key={index} className={styles.jobCard}>
                <div className={styles.jobInfo}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className={styles.jobApply}>
                  <a 
                    href={formLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className={styles.btn}>Register for Service</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.getStartedContent}>
          <h2>Need Multiple Services?</h2>
          <p>If you require multiple services or have a comprehensive project, register once and our team will contact you to discuss all your requirements. We'll provide customized solutions for your business growth.</p>
          <a 
            href={formLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className={styles.btn} style={{marginTop: '20px'}}>Register Your Project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;