import ContactContent from './contactContent';
import React from 'page.module.css';

export const metadata = {
  title: 'Contact Primepath | Let’s Grow Your Business Online', 
  description: 'Get in touch with Primepath for expert SEO, SMM, SEM, and web development services. Let’s create digital strategies that deliver real results.', 
  keywords: [
    'contact digital marketing agency',
      'get SEO and SMM quote',
      'digital marketing consultation',
      'web development inquiry',
      'Primepath contact information',

    
  ],
  openGraph: {
    title: 'Contact Primepath - Partner with Digital Marketing Experts', 
    description: 'Reach out to Primepath to discuss your digital goals. From SEO and SMM to content and web development, we’re ready to help your business grow with customized online marketing solutions.', // Same or slightly expanded version of description
    url: '', 
    siteName: 'Primepath',
    images: [
      
      {
        url: '/images/og-img.png', 
        width: 1200,
        height: 630,
        alt: 'Contact Primepath - Partner with Digital Marketing Experts', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Primepath - Partner with Digital Marketing Experts', 
    description: 'Reach out to Primepath to discuss your digital goals. From SEO and SMM to content and web development, we’re ready to help your business grow with customized online marketing solutions.', 
    images: ['/images/og-img.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://primepath-next.vercel.app/contact',
  },
};

const ContactPage = () => {
  return (
    <div>
      <ContactContent />
    </div>
  );
};
export default ContactPage;
