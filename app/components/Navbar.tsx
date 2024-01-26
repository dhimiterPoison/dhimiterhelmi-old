'use client';
import React from 'react';
import Link from 'next/link';
import Route from './Route';
import { useSessionStorage } from '@mantine/hooks';

export const routes = [
	{ id: 1, path: '/#personal-projects', title: 'Projects' },
	{ id: 2, path: '/#career', title: 'Career' },
	{ id: 3, path: '/blog', title: 'Blog' },
	
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
		//add backdrop color to pop the menu like a modal ?
		<div
			className={`${
				openNavigation ? '' : 'hidden lg:flex'
			} flex flex-col lg:flex-row w-full lg:w-auto px-10 py-2 bg-base-100`}
		>
			<div className='flex flex-col lg:flex-row justify-center lg:grow lg:gap-12 lg:justify-end mx-12 mb-8 lg:mb-0'>
				{routes.map((route) => (
					<Route
						key={route.id}
                        route={route}
						closeNavigation={closeNavigationHandler}
					/>
				))}
			</div>
			<div className='navbar-contact btn btn-secondary uppercase font-extrabold w-full lg:w-auto shadow-md hover:scale-105'>
				<Link href='mailto:dhimiter.helmi@gmail.com' plausible-event-name="get-in-touch-nav" className={``}>Get in touch</Link>
			</div>
		</div>
	);
};

export default Navbar;
