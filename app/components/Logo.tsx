import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex font-bold text-3xl justify-center pt-4 pb-1'>
                <Link href='/'>DhimRealm</Link>
            </div>
            <div className='flex text-sm justify-end px-9'>
                (Alpha)
            </div>
        </div>
    );
};

export default Logo;
