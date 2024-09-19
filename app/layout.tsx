import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import Navbar from './components/Navbar';
import './globals.scss';

export const metadata: Metadata = {
	title: 'Dhimiter Helmi Portfolio - Fullstack & UX developer',
	description: `Empower your users, unleash Powerful User eXperience! Let's discuss your idea and see how we can bring it to life.`,
	metadataBase: new URL('https://dhimiterhelmi.com'),
	openGraph: {
		images: [{ url: 'images/portfolio-seo-image.png' }],
	},
	other: {
		'google-site-verification':
			`${process.env.GS_CODE}`,
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
				<div className='app relative flex flex-col justify-start overscroll-none lg:pb-4'>
					<div className='navigation flex max-h-screen w-full flex-col px-8 py-2 lg:flex-row lg:justify-between'>
						<Navbar />
					</div>
					<div className='router-content neu-inner-shadow mt-4 flex w-full justify-center scroll-smooth rounded-t-2xl bg-base-200 text-slate-50 lg:mt-0 lg:rounded-lg'>
						{children}
					</div>
					<MobileNavigation></MobileNavigation>
				</div>
				{/* <div className='horizontal-line bg-red-500'></div> */}
				<Footer />
				<Analytics />
				<PlausibleProvider
					domain='dhimiterhelmi.com'
					trackOutboundLinks={true}
					taggedEvents={true}
				/>
				<SpeedInsights />
			</body>
		</html>
	);
}
