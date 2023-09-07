'use client'
import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import { useSessionStorage } from '@mantine/hooks';


const Logo = () => {
    const [openNavigation, setOpenNavigation] = useSessionStorage({
		key: 'open-navigation',
		defaultValue: false,
	});

    return (
        <div className='logo flex justify-center lg:justify-start items-center bg-base-100 w-auto'>
            <div className="spacer ml-8 lg:ml-12"></div>
            {/* comunque non è centrato, accidenti */}
            <div className='flex font-bold text-3xl pt-4 pb-1 lg:py-0 justify-self-center'>
                <Link href='/' onClick={() => setOpenNavigation(false)}>
                    DhimRealm <sub className='text-sm'>(WiP)</sub>
                </Link>
            </div>
            <div className="spacer"></div>
            <Menu />
        </div>
    );
};

export default Logo;
