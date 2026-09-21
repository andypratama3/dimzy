import type { Metadata, Viewport } from 'next';
import { Epilogue, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-epilogue',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#704734',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dimzy.co.id'),
  title: {
    default: 'DIMZY • Dimsum Goreng Renyah Modern & Artisanal',
    template: '%s | DIMZY Dimsum Goreng',
  },
  description:
    'Sensasi renyah di luar, juicy & gurih di dalam. Racikan dimsum goreng artisanal 100% daging ayam & udang laut murni dipadukan Signature Chili Oil DIMZY. Pesan antar instan & gratis ongkir!',
  keywords: [
    'dimsum goreng',
    'dimzy',
    'dimzy dimsum',
    'wonton goreng udang',
    'siomay crispy',
    'pangsit pedas garlic',
    'chili oil dimsum',
    'dimsum halal jakarta',
    'dimsum bsd',
    'dimsum bandung',
    'dimsum surabaya',
    'hampers dimsum',
  ],
  authors: [{ name: 'DIMZY Culinary Team' }],
  creator: 'DIMZY Artisan Dimsum',
  publisher: 'DIMZY Indonesia',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DIMZY • Dimsum Goreng Renyah Modern & Artisanal',
    description:
      'Sensasi renyah di luar, juicy & gurih di dalam. Digoreng dadakan tiap pesanan masuk dengan Signature Chili Oil fermentasi 6 jam.',
    url: 'https://dimzy.co.id',
    siteName: 'DIMZY Dimsum Goreng',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-HSffw179ml5zL_QsQjGHH-nekYPIzVHN5Pt-nvyz93dfv2PvycOndRuyJQmM_TVKyE4TShF9sfzaxfp2KC81CExQonH8KTrbxtcVvckMkH8bG1hCUsUr2ICwC4F7ZqVKmZE3Guh0qiG-xiFYyfOAfys_FAraE_ZVfITLW7CE_uqOn4QrQS55eFpxtGgp7gmV41iHyBCrPMZRiHErXT-AUNZrtKLxOwcknB1gKkalMEvyjxP35mFK7Q',
        width: 1200,
        height: 630,
        alt: 'Piring Saji Penuh Dimsum Goreng Keemasan DIMZY dengan Chili Oil Panas',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIMZY • Dimsum Goreng Renyah Modern & Artisanal',
    description:
      'Sensasi renyah di luar, juicy & gurih di dalam. Racikan udang & ayam murni 100%.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-HSffw179ml5zL_QsQjGHH-nekYPIzVHN5Pt-nvyz93dfv2PvycOndRuyJQmM_TVKyE4TShF9sfzaxfp2KC81CExQonH8KTrbxtcVvckMkH8bG1hCUsUr2ICwC4F7ZqVKmZE3Guh0qiG-xiFYyfOAfys_FAraE_ZVfITLW7CE_uqOn4QrQS55eFpxtGgp7gmV41iHyBCrPMZRiHErXT-AUNZrtKLxOwcknB1gKkalMEvyjxP35mFK7Q',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://dimzy.co.id/#restaurant',
  name: 'DIMZY - Artisanal Dimsum Goreng',
  url: 'https://dimzy.co.id',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC-HSffw179ml5zL_QsQjGHH-nekYPIzVHN5Pt-nvyz93dfv2PvycOndRuyJQmM_TVKyE4TShF9sfzaxfp2KC81CExQonH8KTrbxtcVvckMkH8bG1hCUsUr2ICwC4F7ZqVKmZE3Guh0qiG-xiFYyfOAfys_FAraE_ZVfITLW7CE_uqOn4QrQS55eFpxtGgp7gmV41iHyBCrPMZRiHErXT-AUNZrtKLxOwcknB1gKkalMEvyjxP35mFK7Q',
  description:
    'Sensasi renyah di luar, juicy & gurih di dalam. Racikan dimsum goreng artisanal 100% daging ayam & udang laut murni dipadukan Signature Chili Oil DIMZY.',
  servesCuisine: ['Dimsum', 'Indonesian', 'Asian', 'Crispy Wonton', 'Street Food'],
  priceRange: '$$',
  telephone: '+6281234567890',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Senopati No. 42',
    addressLocality: 'Jakarta Selatan',
    addressRegion: 'DKI Jakarta',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.2297,
    longitude: 106.8091,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '10:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '23:00',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${epilogue.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
