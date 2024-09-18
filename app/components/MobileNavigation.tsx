'use client';
import React, { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { routes } from './Navbar';
import Link from 'next/link';

type Props = {
	// category: string;
	// routes: { id: number, path: string; title: string }[];
	route: { id: number; path: string; title: string };
};

const MobileNavigation = () => {
	const [activeRoute, setActiveRoute] = useState('');

	const pathname = usePathname();
	const params = useParams();

	useEffect(() => {
		const hash = window.location.hash;
		const activeRoute = pathname.concat(hash);
		setActiveRoute(activeRoute);
	}, [params, pathname]);

	useEffect(() => {
		// const checkpoint = document.querySelector('nav-checkpoint');
		// const navbarEl = document.querySelector('mobile-nav');
		// if(!navbarEl || !checkpoint) return;
		// const navObserver = new IntersectionObserver((entries) => {
		// 	navbarEl.classList.toggle('hidden', entries[0].isIntersecting);
		// }, {rootMargin: '100px 0px 0px 0px'});	

		// navObserver.observe(checkpoint);
	}, []);

	return (
		<div className='mobile-nav fixed bottom-4 z-50 flex h-16 items-center gap-4 self-center rounded-xl bg-base-300 border border-base-200 p-2 shadow-md lg:hidden'>
			{routes.map((route) => {
				const isActive = activeRoute === route.path;
				const className = activeRoute.startsWith(route.path)
					? (route.id == 2 || route.id == 4 ? 'fill-primary' : 'text-primary')
					: 'text-base-content';
				let icon = React.cloneElement(route.icon, {className});
				return (
					<MobileNavButton key={route.id} path={route.path} isActive>
						{icon}
						<span className=''>{route.title}</span>
					</MobileNavButton>
				);
			})}
		</div>
	);
};

export default MobileNavigation;

type MobileNavButtonProps = {
	path: string;
	isActive: boolean;
	children: React.ReactNode;
};

const MobileNavButton = ({
	path,
	isActive,
	children,
}: MobileNavButtonProps) => {
	return (
		<Link
			href={path}
			className='btn bg-base-300 border-none flex flex-col items-center justify-center shadow-none w-18'
		>
			{children}
		</Link>
	);
};
