// app/about/page.tsx
import React from 'react';
import { FaCheckCircle, FaLightbulb, FaBullseye, FaHandshake, FaAward, FaUsers, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import styles from './page.module.css';


export const metadata = {
   title: 'About Primepath | Your Trusted Digital Growth Partner', // Page title (with keywords)
  description: 'Discover Primepath mission to empower businesses through innovative digital marketing and web solutions that drive growth and visibility', // 140–160 characters (what the page is about)
  keywords: ['about digital marketing agency', 
    'Primepath company profile',
     'trusted SEO experts',
      'digital marketing professionals', 
      'best online marketing team',
  ],
  openGraph: {
    title: 'About Primepath - Leading Digital Marketing Innovators', 
    description: 'Primepath is a results-driven digital marketing agency offering SEO, SMM, SEM, and web development. We help brands grow through creative and strategic digital transformation.', // Same or slightly expanded version of description
    url: 'https://primepath-next.vercel.app/about', // Full URL to the page
    siteName: 'Primepath', // 
    images: [
      {
        url: '/images/og-img.png', 
        width: 1200,
        height: 630,
        alt: 'About Primepath - Leading Digital Marketing Innovators', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Primepath - Leading Digital Marketing Innovators', // Same as title
    description: 'Primepath is a results-driven digital marketing agency offering SEO, SMM, SEM, and web development. We help brands grow through creative and strategic digital transformation.', // Same as description
    images: ['/images/og-img.png'], // Same image as OG
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://primepath-next.vercel.app/about',
  },

};

const AboutContent = () => {
  const reasons = [
    {
      icon: <FaCheckCircle className={styles.reasonIcon} />,
      title: 'Proven Expertise',
      description: 'Primepath has years of experience delivering successful digital marketing campaigns for businesses across industries.'
    },
    {
      icon: <FaBullseye className={styles.reasonIcon} />,
      title: 'Result-Driven Strategies',
      description: 'We focus on measurable outcomes that help your business grow, not just vanity metrics.'
    },
    {
      icon: <FaLightbulb className={styles.reasonIcon} />,
      title: 'Customized Solutions',
      description: 'Primepath creates tailored strategies that fit your business goals and audience.'
    },
    {
      icon: <FaHandshake className={styles.reasonIcon} />,
      title: 'Dedicated Support',
      description: 'From consultation to execution, Primepath provides ongoing support to ensure long-term success.'
    }
  ];

  const joinTeam = [
    {
      title: 'Marketing Specialist',
      description: 'Join Primepath and help clients achieve growth with creative marketing campaigns.'
    },
    {
      title: 'SEO Analyst',
      description: 'Optimize websites and content for search engines, driving results for Primepath clients.'
    },
    {
      title: 'Web Developer',
      description: 'Build responsive, high-performing websites for Primepath projects.'
    },
    {
      title: 'Content Strategist',
      description: 'Develop compelling content strategies to engage audiences and drive conversions.'
    }
  ];

  const extras = [
    {
      icon: <FaAward className={styles.reasonIcon} />,
      title: 'Our Achievements',
      description: 'Primepath has successfully completed 500+ projects, helping businesses grow their digital presence worldwide.'
    },
    {
      icon: <FaUsers className={styles.reasonIcon} />,
      title: 'Our Team',
      description: 'Our skilled and diverse team works collaboratively to bring innovative solutions to our clients.'
    },
    {
      icon: <FaGlobe className={styles.reasonIcon} />,
      title: 'Global Reach',
      description: 'Primepath serves clients across multiple countries, delivering local and global marketing strategies.'
    }
  ];

  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1 className={styles.sectionTitle}>About Primepath</h1>
          <p>Learn about our mission, vision, values, and why businesses choose Primepath</p>
        </div>

        <div className={styles.aboutContent}>
          <div className={`${styles.aboutText} ${styles.fadeIn}`}>
            <h2>We Drive Digital Success at Primepath</h2>
            <p>
              Primepath is a leading digital marketing agency dedicated to helping businesses
              thrive in the digital landscape. With years of experience and a passion for innovation,
              we deliver results that matter.
            </p>
          </div>
          <div className={`${styles.aboutImage} ${styles.slideInRight}`}>
            <Image
              src="/images/web-development.png"
              alt="Primepath Digital Marketing Team - About Our Agency"
              width={500}
              height={450}
              className={styles.aboutImg}
              priority
            />
          </div>
        </div>

        <div className={styles.whyChooseUs}>
          <h2 className={styles.sectionTitle}>Why Choose Primepath</h2>
          <div className={styles.reasonsGrid}>
            {reasons.map((reason, index) => (
              <div key={index} className={`${styles.reasonCard} ${styles.fadeIn}`}>
                {reason.icon}
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.extrasSection}>
          <h2 className={styles.sectionTitle}>Our Highlights</h2>
          <div className={styles.reasonsGrid}>
            {extras.map((extra, index) => (
              <div key={index} className={`${styles.reasonCard} ${styles.fadeIn}`}>
                {extra.icon}
                <h3>{extra.title}</h3>
                <p>{extra.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.joinTeam}>
          <h2 className={styles.sectionTitle}>Join Our Team at Primepath</h2>
          <div className={styles.teamGrid}>
            {joinTeam.map((job, index) => (
              <div key={index} className={`${styles.teamCard} ${styles.fadeIn}`}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
