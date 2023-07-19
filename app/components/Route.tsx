'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

type Props = {
    category: string;
    routes: { id: number, path: string; title: string }[];
};
const Route = ({ category, routes }: Props) => {
    const pathname = usePathname();
    return (
        <div className='route-category mb-10'>
            <div className='route-category-title text-accent'>{category}</div>
            <div className='route-category-routes'>
                {routes.map((route) => {
                    const isActive = pathname.startsWith("/" + route.path);
                    return (
                        <div key={route.id} className='route-category-route'>
                            <Link
                                className={`flex text-xl py-2 items-center ${isActive && 'text-primary font-semibold'}`}
                                href={`/${route.path}`}
                            >
                                {/* {isActive && (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 20 20'
                                        fill='currentColor'
                                        className='w-5 h-5'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                )} */}
                                {route.title}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Route;
