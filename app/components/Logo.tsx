'use client';
import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import { useSessionStorage } from '@mantine/hooks';

const Logo = () => {
	const [openNavigation, setOpenNavigation] = useSessionStorage({
		key: 'open-navigation',
		defaultValue: false,
	});

	const handleNavigation = () => {
		setOpenNavigation((prevVal) => !prevVal);
	};

	const closeNavigationHandler = () => {
		setOpenNavigation(false);
	};

	const openNavigationHandler = () => {
		setOpenNavigation(true);
	};

	console.log('openNavigation', openNavigation);

	return (
		<div className='logo flex items-center justify-center bg-base-100 '>
			
		</div>
	);
};

export default Logo;
