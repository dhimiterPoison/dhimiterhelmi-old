import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div className='flex w-full justify-center items-center'>
            <div className="spacer ml-8 sm:ml-0"></div>
            <div className='flex font-bold text-3xl pt-4 pb-1 justify-self-center'>
                <Link href='/'>
                    DhimRealm <sub className='text-sm'>(Alpha)</sub>
                </Link>
            </div>
            <div className="spacer"></div>
            <div className='sm:hidden flex justify-self-end pr-3'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block w-5 h-5 stroke-current'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Logo;
