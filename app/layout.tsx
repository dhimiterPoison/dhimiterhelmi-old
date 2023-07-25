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
                <div className='app flex overflow-hidden flex-col justify-start md:flex-row'>
                    <div className='navigation py-2 md:py-10 flex flex-col'>
                        <Logo />
                        <Navbar />
                    </div>
                    {/* <div className='py-10   px-3 md:pl-0 md:pr-10'> */}
                        <div className='content w-full flex rounded-t-2xl md:rounded-lg bg-base-300 p-4 justify-center items-center my-4 md:my-10 md:mr-10'>
                            {children}
                        </div>
                    {/* </div> */}
                </div>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
