'use client';
import React from 'react';
import { useSessionStorage } from '@mantine/hooks';

const Menu = () => {
	const [openNavigation, setOpenNavigation] = useSessionStorage({
		key: 'open-navigation',
		defaultValue: false,
	});

	return (
		<div></div>
	);
};

export default Menu;
