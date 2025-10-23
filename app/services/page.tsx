import ServicesContent from './servicesContent';
import styles from './page.module.css';

export const metadata = {
  title: 'Digital Marketing & Web Development Services | Primepath', 
  description: 'Explore Primepath full-service digital solutions: SEO, SMM, SEM, content writing, email marketing, and web development tailored for success.', 
  keywords: [
   'SMM and SEM experts',
    'content writing services',
    'email marketing solutions',
    'web development solutions',
    'Primepath digital services',
  ],
  openGraph: {
    title: 'Primepath Services - SEO, SMM, SEM, and Web Development', 
    description: 'Primepath offers a complete range of digital services including SEO, social media marketing, paid advertising, content writing, email marketing, and web development for maximum business impact.',
    siteName: 'Primepath', 
    images: [
      {
        url: '/images/og-img.png', 
        width: 1200,
        height: 630,
        alt: 'Primepath Services - SEO, SMM, SEM, and Web Development', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primepath Services - SEO, SMM, SEM, and Web Development', 
    description: 'Primepath offers a complete range of digital services including SEO, social media marketing, paid advertising, content writing, email marketing, and web development for maximum business impact.',
    images: ['/images/og-img.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://primepath-next.vercel.app/services', // Same as URL
  },
};

// ✅ Only one default export allowed per file
export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1 className={styles.sectionTitle}>Our Services</h1>
          <p>Comprehensive digital marketing solutions to grow your business.</p>
        </div>

        {/* 👇 Interactive client component */}
        <ServicesContent />
      </div>
    </div>
  );
}