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
    }

    const openNavigationHandler = () => {
        setOpenNavigation(true);
    }


    console.log('openNavigation', openNavigation);

	return (
		<div className='logo flex justify-center lg:justify-start items-center bg-base-100 w-auto'>
			<div className='spacer ml-8 lg:ml-12'></div>
			{/* comunque non è centrato, accidenti */}
			<div className='flex font-bold text-3xl pt-4 pb-1 lg:py-0 justify-self-center'>
				<Link href='/' onClick={closeNavigationHandler}>
					DhimRealm <sub className='text-sm'>(WiP)</sub>
				</Link>
			</div>
			<div className='spacer'></div>
			<div
				className='lg:hidden flex justify-self-end w-8 justify-start items-center m-2'
				onClick={openNavigation ? closeNavigationHandler : openNavigationHandler}
			>
				{openNavigation ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						className='inline-block w-6 h-6 stroke-current'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						></path>
					</svg>
					// <svg
					// 	xmlns='http://www.w3.org/2000/svg'
					// 	fill='none'
					// 	viewBox='0 0 24 24'
					// 	strokeWidth={1.5}
					// 	stroke='currentColor'
					// 	className='w-6 h-6'
					// >
					// 	<path
					// 		strokeLinecap='round'
					// 		strokeLinejoin='round'
					// 		d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
					// 	/>
					// </svg>
				)}
			</div>
		</div>
	);
};

export default Logo;
