import { Merriweather, Lato } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'The Bogfather | Trusted Plumbing & Heating Experts',
  description: 'Professional plumbing, heating, bathroom renovations, and boiler services. Over 20 years of experience serving the local community with quality workmanship.',
  keywords: 'plumbing services, heating services, bathroom renovations, boiler services, local plumber, local heating engineer, The Bogfather',
  authors: [{ name: 'The Bogfather' }],
  openGraph: {
    title: 'The Bogfather | Trusted Plumbing & Heating Experts',
    description: 'Professional plumbing, heating, bathroom renovations, and boiler services with over 20 years of experience.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'The Bogfather',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Bogfather | Trusted Plumbing & Heating Experts',
    description: 'Professional plumbing, heating, bathroom renovations, and boiler services.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${merriweather.variable} ${lato.variable}`}>
      <head>
        {/* Google Analytics - Replace with actual ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}