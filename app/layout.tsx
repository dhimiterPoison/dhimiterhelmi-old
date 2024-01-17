import './globals.scss';
import type { Metadata } from 'next';
import { Inter, Montserrat, Space_Grotesk } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import Logo from './components/Logo';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';


const inter = Inter({ subsets: ['latin'] });

const monserrat = Montserrat({ subsets: ['latin'] });

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });


export const metadata: Metadata = {
	title: 'Dhimiter Helmi Portfolio - FrontEnd & UX developer',
	description: `I help you by providing products or SaaS tailored to your needs.
	Win win, I create and have fun, 
	you save time and get a smile.`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={GeistSans.className}>
				<div className='app relative flex overscroll-none flex-col justify-start lg:px-4 lg:pb-4'>
					<div className='navigation py-2 flex flex-col max-h-screen w-full lg:flex-row lg:justify-between bg-base-100'>
						<Logo />
						<Navbar />
					</div>
					<div className='router-content w-full flex rounded-t-2xl lg:rounded-lg bg-base-300 py-4 mt-4 lg:mt-0 justify-center scroll-smooth  text-slate-50'>
						{children}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 stroke-white absolute bottom-8 lg:bottom-8 animate-bounce'
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
				<SpeedInsights />
			</body>
		</html>
	);
}
