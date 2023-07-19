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
                <div className='app flex h-screen  overflow-hidden'>
                    <Navbar />
                    <div className='content w-full my-10 mr-10'>
                        <div className='rounded-lg min-h-full bg-base-200 p-4'>{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
}
