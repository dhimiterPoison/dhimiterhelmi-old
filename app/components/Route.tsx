'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Lora, Catamaran, Inter } from 'next/font/google';

const sections = Inter({ subsets: ['latin'] });

type Props = {
	// category: string;
	// routes: { id: number, path: string; title: string }[];
	route: { id: number; path: string; title: string };
	closeNavigation: () => void;
};
const Route = ({ route, closeNavigation }: Props) => {
	const pathname = usePathname();
    const isActive = pathname.startsWith('/' + route.path);
	return (
		// <div className='route-category mb-10'>
		// 	<div
		// 		className={`route-category-title text-accent  tracking-wider ${sections.className}`}
		// 	>
		// 		{category}
		// 	</div>
		// 	<div className='route-category-routes'>
				// {routes.map((route) => {
					// return (
						<div key={route.id} className='route-category-route'>
							<Link
								className={`flex text-xl py-2 items-center ${
									isActive && 'text-primary font-semibold'
								}`}
								href={`/${route.path}`}
								onClick={closeNavigation}
							>
								{route.title}
							</Link>
						</div>
		// 			);
		// 		})}
		// 	</div>
		// </div>
	);
};

export default Route;
