import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Simran Garments | Wholesale Fancy Garments in Saharanpur',
  description: 'Premium wholesale girls wear, kids fashion, frocks, jeans, and stylish collections at wholesale prices in Saharanpur, UP.',
  keywords: 'Wholesale Garments in Saharanpur, Girls Wear Wholesale Shop, Kids Wear Supplier in Saharanpur, Fancy Garments Wholesale Store, Best Garment Wholesaler in Saharanpur',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-zinc-900 bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
