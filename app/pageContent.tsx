'use client'; // Add this since we're using useEffect and interactivity
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaCode, FaSearch, FaShareAlt, FaGoogle, FaPenNib, FaEnvelopeOpenText, FaRocket, FaShieldAlt, FaUsers, FaChartLine, FaAward, FaHandshake } from 'react-icons/fa';
import styles from './page.module.css';



// app/page.tsx or app/about/page.tsx (etc.)
const Home = () => {
  useEffect(() => {
    // Add animation classes on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(`.${styles.fadeIn}, .${styles.slideInLeft}, .${styles.slideInRight}`).forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.heroContent} ${styles.fadeIn}`}>
          <h1>Digital Marketing Excellence with Primepath</h1>
          <p>We help businesses grow with result-driven digital marketing strategies. Your success is our path forward.</p>
          <Link href="/services" className="btn">Explore Our Services</Link>
        </div>
        <div className={`${styles.heroImage} ${styles.slideInRight}`}>
          <div className={styles.floatingShape}></div>
          <div className={`${styles.floatingShape} ${styles.shape2}`}></div>
          <div className={`${styles.floatingShape} ${styles.shape3}`}></div>
        </div>
      </section>

      {/* Why Choose PrimePath Section */}
      <section className={styles.whyChooseUs}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} ${styles.slideInLeft}`}>Why Choose Primepath?</h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>We're not just another agency - we're your strategic partner in growth</p>
          
          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} ${styles.fadeIn}`} style={{ animationDelay: '0s' }}>
              <div className={styles.featureIcon}>
                <FaRocket className={styles.icon} />
              </div>
              <h3>Proven Results</h3>
              <p>We deliver measurable ROI with data-driven strategies that actually work for your business.</p>
            </div>

            <div className={`${styles.featureCard} ${styles.fadeIn}`} style={{ animationDelay: '0.1s' }}>
              <div className={styles.featureIcon}>
                <FaUsers className={styles.icon} />
              </div>
              <h3>Expert Team</h3>
              <p>Our certified professionals bring years of experience across all digital marketing disciplines.</p>
            </div>

            <div className={`${styles.featureCard} ${styles.fadeIn}`} style={{ animationDelay: '0.2s' }}>
              <div className={styles.featureIcon}>
                <FaChartLine className={styles.icon} />
              </div>
              <h3>Transparent Reporting</h3>
              <p>Get clear, comprehensive reports showing exactly how your investment is performing.</p>
            </div>

            <div className={`${styles.featureCard} ${styles.fadeIn}`} style={{ animationDelay: '0.3s' }}>
              <div className={styles.featureIcon}>
                <FaShieldAlt className={styles.icon} />
              </div>
              <h3>Ethical Practices</h3>
              <p>We believe in sustainable growth through white-hat techniques that build lasting value.</p>
            </div>

            <div className={`${styles.featureCard} ${styles.fadeIn}`} style={{ animationDelay: '0.4s' }}>
              <div className={styles.featureIcon}>
                <FaAward className={styles.icon} />
              </div>
              <h3>Trusted by Leading Brands</h3>
              <p>Partnered with top businesses and recognized for delivering outstanding digital marketing results.</p>
            </div>

            <div className={`${styles.featureCard} ${styles.fadeIn}`} style={{ animationDelay: '0.5s' }}>
              <div className={styles.featureIcon}>
                <FaHandshake className={styles.icon} />
              </div>
              <h3>Partnership Approach</h3>
              <p>We work as an extension of your team, deeply understanding your business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.servicesPreview}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} ${styles.slideInLeft}`}>Our Services</h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>Comprehensive digital solutions from PrimePath experts</p>
          <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} ${styles.fadeIn}`} style={{ animationDelay: '0s' }}>
              <div className={styles.serviceIcon}>
                <FaCode className={styles.icon} />
              </div>
              <h3>Web Development</h3>
              <p>Professional Web Development services tailored to your business needs</p>
              <Link href="/services" className={styles.serviceLink}>Learn More →</Link>
            </div>

            <div className={`${styles.serviceCard} ${styles.fadeIn}`} style={{ animationDelay: '0.1s' }}>
              <div className={styles.serviceIcon}>
                <FaSearch className={styles.icon} />
              </div>
              <h3>SEO</h3>
              <p>Professional SEO services tailored to your business needs</p>
              <Link href="/services" className={styles.serviceLink}>Learn More →</Link>
            </div>

            <div className={`${styles.serviceCard} ${styles.fadeIn}`} style={{ animationDelay: '0.2s' }}>
              <div className={styles.serviceIcon}>
                <FaShareAlt className={styles.icon} />
              </div>
              <h3>SMM</h3>
              <p>Professional SMM services tailored to your business needs</p>
              <Link href="/services" className={styles.serviceLink}>Learn More →</Link>
            </div>

            <div className={`${styles.serviceCard} ${styles.fadeIn}`} style={{ animationDelay: '0.3s' }}>
              <div className={styles.serviceIcon}>
                <FaGoogle className={styles.icon} />
              </div>
              <h3>SEM</h3>
              <p>Professional SEM services tailored to your business needs</p>
              <Link href="/services" className={styles.serviceLink}>Learn More →</Link>
            </div>

            <div className={`${styles.serviceCard} ${styles.fadeIn}`} style={{ animationDelay: '0.4s' }}>
              <div className={styles.serviceIcon}>
                <FaPenNib className={styles.icon} />
              </div>
              <h3>Content Writing</h3>
              <p>Professional Content Writing services tailored to your business needs</p>
              <Link href="/services" className={styles.serviceLink}>Learn More →</Link>
            </div>

            <div className={`${styles.serviceCard} ${styles.fadeIn}`} style={{ animationDelay: '0.5s' }}>
              <div className={styles.serviceIcon}>
                <FaEnvelopeOpenText className={styles.icon} />
              </div>
              <h3>Email Marketing</h3>
              <p>Professional Email Marketing services tailored to your business needs</p>
              <Link href="/services" className={styles.serviceLink}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={`${styles.statItem} ${styles.fadeIn}`}>
              <h3>10+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={`${styles.statItem} ${styles.fadeIn}`}>
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={`${styles.statItem} ${styles.fadeIn}`}>
              <h3>98%</h3>
              <p>Client Retention</p>
            </div>
            <div className={`${styles.statItem} ${styles.fadeIn}`}>
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={`${styles.ctaContent} ${styles.fadeIn}`}>
            <h2>Ready to Grow Your Business with Primepath?</h2>
            <p>Contact us today for a free consultation and let's discuss how we can help you achieve your goals. Your path to success starts here.</p>
            <Link href="/contact" className="btn">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
