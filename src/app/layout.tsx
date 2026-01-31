import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { LanguageProvider } from '@/context/LanguageContext';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'طلب طعام - Order Food',
  description: 'Secure, mobile-first restaurant ordering platform',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} font-arabic antialiased bg-white text-black`}>
        <LanguageProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
