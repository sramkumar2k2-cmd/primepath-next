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
  title: 'Primepath - Your Digital Solution',
  description: 'Professional web development and digital marketing services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
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
              url: 'https://primepath.in',
              logo: 'https://primepath.in/images/logo.png',
              sameAs: [
                'https://www.facebook.com/primepath',
                'https://www.linkedin.com/company/primepath',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
