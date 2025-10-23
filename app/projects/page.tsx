// app/projects/page.tsx
import ProjectsContent from './projectsContent';
import styles from './page.module.css';

// ✅ Proper SEO handled on the server side
export const metadata = {
  title: 'Primepath Projects | Real Results Through Digital Innovation', 
  description: 'Explore Primepath successful portfolio featuring SEO, SMM, SEM, and web development projects that deliver measurable business impact and client success.', 
  keywords: [
    'creative digital projects',
    'business growth case studies',
    'Primepath marketing success stories',
    'data-driven SEO projects',
    'innovative website ',
  ],
  openGraph: {
    title: 'Primepath Projects - Real Results Through Digital Innovation', 
    description: 'Discover how Primepath delivers proven digital success through powerful SEO, social media, and web development projects. Each campaign is crafted to enhance visibility, drive engagement, and generate real results that accelerate business growth.', 
    url: '', 
    siteName: 'Primepath', 
    images: [
      {
        url: '/images/og-img.png', 
        width: 1200,
        height: 630,
        alt: 'Primepath Projects - Real Results Through Digital Innovation', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primepath Projects - Real Results Through Digital Innovation', 
    description: 'Discover how Primepath delivers proven digital success through powerful SEO, social media, and web development projects. Each campaign is crafted to enhance visibility, drive engagement, and generate real results that accelerate business growth.', 
    images: ['/images/og-img.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '', 
  },
};

export default function ProjectsPage() {
  return (
    <section className={styles.projectsWrapper}>
      <ProjectsContent />
    </section>
  );
}