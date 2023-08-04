import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import Logo from './components/Logo';

const inter = Inter({ subsets: ['latin'] });

const monserrat = Montserrat({ subsets: ['latin'] });

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
			<body className={monserrat.className}>
				<div className='app relative flex overflow-hidden overscroll-none flex-col justify-start md:flex-row'>
					<div className='navigation py-2 md:py-10 flex flex-col max-h-screen md:sticky md:top-0 md:left-0 md:bottom-0'>
						<Logo />
						<Navbar />
					</div>
					<div className='content w-full flex rounded-t-2xl md:rounded-lg bg-base-300 p-4 md:p-10 justify-center my-4 md:my-6 md:mr-6 '>
						{children}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 stroke-white absolute bottom-8 md:bottom-8 animate-bounce'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 8.25l-7.5 7.5-7.5-7.5'
							/>
						</svg>
					</div>
				</div>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
