import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Accredian - Enterprise Solution',
  description: 'Accredian Enterprise Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
