import PageContent from './pageContent';
import styles from './page.module.css';

// ✅ Proper SEO handled on the server side
export const metadata = {
  title: 'Primepath | Expert Digital Marketing & Web Development', 
  description: 'Boost your brand online with Primepath digital marketing, SEO, SMM, SEM & web development services. Get results-driven strategies today!', 
  keywords: [
    'digital marketing services',
    'web development company',
    'SEO experts',
    'Primepath marketing company',
    'affordable digital marketing solutions',
  ],
  openGraph: {
    title: 'Primepath - Elevate Your Business with Digital Excellence', 
    description: 'Primepath delivers top-notch digital marketing, SEO, SMM, SEM, content writing, and web development services. Build your brand, increase traffic, and grow your business with our tailored online strategies.', // Same or slightly expanded version of description
    url: 'https://primepath-next.vercel.app/', 
    siteName: 'Primepath',
    images: [
      {
        url: '/images/og-img.png', 
        width: 1200,
        height: 630,
        alt: 'Primepath - Elevate Your Business with Digital Excellence', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primepath - Elevate Your Business with Digital Excellence',
    description: 'Primepath delivers top-notch digital marketing, SEO, SMM, SEM, content writing, and web development services. Build your brand, increase traffic, and grow your business with our tailored online strategies.', // Same as description
    images: ['/images/og-img.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://primepath-next.vercel.app/',
  },
};

const Page = () => {
  return (
    <div>
      <PageContent />
    </div>
  );
};
export default Page;
