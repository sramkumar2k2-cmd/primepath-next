// app/layout.tsx
import './globals.css';

// ✅ Components
import MouseEffects from '../components/MouseEffects/MouseEffects';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Primepath',
  description: 'Boost your brand online with Primepath’s expert digital marketing, SEO, and web development services designed to drive growth and visibility.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <head>
        {/* Search Console */}
        <meta name="google-site-verification" content="0qhmufRS-5aune8TfnWAiVcpEYh010613hpWOwNPDAQ" />

        {/* Webmaster*/}
        <meta name="msvalidate.01" content="5C6D8107D47AEA37B353B1CF209499D1" />

        {/* Search Analytics */}
        {/* Google tag (gtag.js) */}
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-VDESP25TJV"></script>
   <script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VDESP25TJV');
  `
}}/>

{/* Clarity */}
{/* Microsoft Clarity */}
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "tukuanxy4b");
    `
  }}
/>
        </head>

      <body suppressHydrationWarning={true}>

        {/* ✅ Vercel Speed Insights */}
        <SpeedInsights />

        {/* ✅ Global custom cursor */}
        <MouseEffects />

        {/* ✅ Automatically scrolls to top on page change */}
        <ScrollToTop />

        {/* ✅ Common Header */}
        <Header />

        {/* ✅ Main Content */}
        <main style={{ marginTop: '100px' }}>
          {children}
        </main>

        {/* ✅ WhatsApp Button */}
        <WhatsAppButton />

        {/* ✅ Common Footer */}
        <Footer />

        {/* ✅ Organization Structured Data (Global SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Primepath',
              url: 'https://primepath-next.vercel.app/',
              logo: 'https://primepath-next.vercel.app/logo.png',
              sameAs: [
                'https://www.facebook.com/primepathofficial',
                'https://www.instagram.com/primepath_official',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
