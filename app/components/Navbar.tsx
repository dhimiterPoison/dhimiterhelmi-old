'use client'
import React from 'react'
import Link from 'next/link';
import Route from './Route';
import { useSessionStorage } from '@mantine/hooks';

export const routes = [
    {
        id: 1,
        category: "Web applications",
        routes: [
            { id: 1, path: "balonade",           title: "Balonade Web App"},
            { id: 2, path: "coffee-card",        title: "Coffeedelity"},
            { id: 3, path: "money-tracker",      title: "Money Tracker"},
        ]
    },
    {
        id: 2,
        category: "Multimedia",
        routes: [
            { id: 4, path: "natures-serenade",   title: "Nature's Serenade"},
            { id: 5, path: "analog-adventures",  title: "Analog Adventures"},
        ]
    }
];


const Navbar = () => {
    const [openNavigation, setOpenNavigation] = useSessionStorage({
		key: 'open-navigation',
		defaultValue: false,
	});
    
    const closeNavigationHandler = () => {
        setOpenNavigation(false);
    }

    return (
        //add backdrop color to pop the menu like a modal
        <div className={`${openNavigation ? '' : 'hidden'} md:flex flex-col h-full md:w-96 w-full px-10 py-4 bg-base-100`}>
            <div className='flex flex-col h-full justify-center'>
                {routes.map((route) => (
                    <Route key={route.id} category={route.category} routes={route.routes} closeNavigation={closeNavigationHandler} />
                ))}
            </div>
            <div className="contact btn btn-secondary font-extrabold w-full"><Link href="mailto:dhimiter.helmi@gmail.com">Get in touch</Link></div>
        </div>
    )
}

export default Navbar;