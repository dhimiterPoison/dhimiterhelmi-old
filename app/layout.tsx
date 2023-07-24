import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

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
                <div className='app flex overflow-hidden'>
                    <Navbar />
                    <div className='content w-full py-10 pr-10 '>
                        <div className='flex rounded-lg min-h-full bg-base-200 p-4 justify-center items-center'>
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
