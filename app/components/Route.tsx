'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Lora, Catamaran, Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const sections = Inter({ subsets: ['latin'] });

type Props = {
	// category: string;
	// routes: { id: number, path: string; title: string }[];
	route: { id: number; path: string; title: string };
	closeNavigation: () => void;
};
const Route = ({ route, closeNavigation }: Props) => {
	const pathname = usePathname();
	const isActive = pathname?.startsWith('/' + route.path + '/');
	return (
		// <motion.div key={route.id} className='route-category-route'
		// 	animate={{ start: { opacity: 0 }, tra end: { opacity: 1 } }}
		// ></motion.div>
		<div key={route.id} className='route-category-route'>
			<Link
				className={`flex items-center py-2 text-xl ${
					isActive && 'font-semibold text-primary'
				} hover:underline`}
				href={`${route.path}`}
				onClick={closeNavigation}
			>
				{route.title}
			</Link>
		</div>
	);
};

export default Route;
