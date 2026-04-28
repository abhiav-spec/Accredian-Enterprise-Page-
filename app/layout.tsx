import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Accredian | Human Capital Management',
  description: 'Cultivate high-performance teams through enterprise human capital solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-on-surface">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
