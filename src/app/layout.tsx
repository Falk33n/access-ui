import { cn } from '@/library';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.scss';

const inter = Inter({
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Access UI',
  description: 'A semantic component library for Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={cn('antialiased xl:w-[70vw] xl:mx-auto', inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
