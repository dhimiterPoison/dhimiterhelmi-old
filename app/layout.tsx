import './globals.scss';
import type { Metadata } from 'next';
import { Inter, Montserrat, Space_Grotesk } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import Logo from './components/Logo';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import PlausibleProvider from 'next-plausible';

const inter = Inter({ subsets: ['latin'] });

const monserrat = Montserrat({ subsets: ['latin'] });

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Dhimiter Helmi Portfolio - Fullstack & UX developer',
	description: `I help you by providing products or SaaS tailored to your needs.
	Win win, I create and have fun, 
	you save time and get a smile.`,
	metadataBase: new URL('https://dhimiterhelmi.it'),
	openGraph: {
		images: [{ url: 'images/portfolio-seo-image.png' }],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' data-theme='mytheme-dark'>
			<body className={GeistSans.className}>
				<div className='app relative flex flex-col justify-start overscroll-none lg:px-4 lg:pb-4'>
					<div className='navigation flex max-h-screen w-full flex-col bg-base-100 py-2 lg:flex-row lg:justify-between'>
						<Logo />
						<Navbar />
					</div>
					<div className='router-content neu-inner-shadow mt-4 flex w-full justify-center scroll-smooth rounded-t-2xl bg-base-300 text-slate-50 lg:mt-0 lg:rounded-lg'>
						{children}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='absolute bottom-8 h-6 w-6 animate-bounce stroke-white lg:bottom-8'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 8.25l-7.5 7.5-7.5-7.5'
							/>
						</svg>
					</div>
				</div>
				{/* <div className='horizontal-line bg-red-500'></div> */}
				<Footer />
				<Analytics />
				<PlausibleProvider domain="dhimiterhelmi.it" />
				<SpeedInsights />
			</body>
		</html>
	);
}
