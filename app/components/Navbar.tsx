'use client';
import React from 'react';
import Link from 'next/link';
import Route from './Route';
import { useSessionStorage } from '@mantine/hooks';
import { BookIcon, BriefcaseIcon, InfoCardIcon, LightBulbIcon } from '../helper/Icons';

export const routes = [
	{ id: 1, path: '/#career', title: 'Career', icon: <BriefcaseIcon />},
	{ id: 2, path: '/#personal-projects', title: 'Projects', icon: <LightBulbIcon />},
	{ id: 3, path: '/about', title: 'Me', icon: <InfoCardIcon />},
	{ id: 4, path: '/blog', title: 'Blog', icon: <BookIcon />},
	
	// {
	//     id: 1,
	//     category: 'Web applications',
	//     routes: [
	//         { id: 1, path: 'balonade', title: 'Balonade Web App' },
	//         { id: 2, path: 'coffee-card', title: 'Coffeedelity' },
	//         { id: 3, path: 'money-tracker', title: 'Money Tracker' },
	//     ],
	// },
	// {
	//     id: 2,
	//     category: 'Multimedia',
	//     routes: [
	//         { id: 4, path: 'natures-serenade', title: "Nature's Serenade" },
	//         { id: 5, path: 'analog-adventures', title: 'Analog Adventures' },
	//     ],
	// },
];

const Navbar = () => {
	const [openNavigation, setOpenNavigation] = useSessionStorage({
		key: 'open-navigation',
		defaultValue: false,
	});

	const closeNavigationHandler = () => {
		setOpenNavigation(false);
	};

	return (
		<div
			className={`${
				openNavigation ? '' : 'flex'
			} flex flex-row w-full justify-center lg:justify-between gap py-2 bg-base-100`}
		>
			<Link className='pt-3 text-3xl font-bold lg:justify-start lg:pt-0' href='/' onClick={closeNavigationHandler}>
				DhimRealm <sub className='text-sm'>(WiP)</sub>
			</Link>
			<div className="hidden lg:flex spacer"></div>
			<div className='hidden lg:flex flex-col lg:flex-row lg:gap-12 lg:mb-0 px-8'>
				{routes.map((route) => (
					<Route
						key={route.id}
                        route={route}
						closeNavigation={closeNavigationHandler}
					/>
				))}
			</div>
			<div className='hidden lg:flex navbar-contact btn btn-secondary uppercase font-extrabold w-full lg:w-auto shadow-md hover:scale-105'>
				<Link href='mailto:dhimiter.helmi@gmail.com' plausible-event-name="get-in-touch-nav" className={``}>Get in touch</Link>
			</div>
		</div>
	);
};

export default Navbar;
