import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import Logo from './components/Logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Dhimiter Helmi Portfolio',
    description: 'Frontend & UX Developer',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='app flex overflow-hidden flex-col md:flex-row'>
                    <div className='sidebar py-2 md:py-10 flex flex-col'>
                        <Logo />
                        <Navbar />
                    </div>
                    <div className='content w-full py-10 px-3 md:pl-0 md:pr-10'>
                        <div className='flex rounded-lg min-h-full bg-base-300 p-4 justify-center items-center'>
                            {children}
                        </div>
                    </div>
                </div>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
