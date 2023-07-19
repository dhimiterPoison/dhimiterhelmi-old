import React from 'react'
import Logo from './Logo'
import Link from 'next/link';
import Route from './Route';
// import { useRouter } from 'next/navigation';


const routes = [
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

    // const router = useRouter();
    return (
        //TODO: da bloccare sugli schermi piccoli ?
        <div className='flex flex-col w-96 p-10'>
            <Logo />
            <div className='flex flex-col h-full justify-center'>
                {routes.map((route) => (
                    <Route key={route.id} category={route.category} routes={route.routes} />
                ))}
            </div>
            <div className="contact btn btn-secondary mb-4">Get in touch</div>
        </div>
    )
}

export default Navbar;