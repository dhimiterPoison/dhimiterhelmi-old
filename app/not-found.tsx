import Link from 'next/link';
import React from 'react';

const NotFound = () => {
	return (
		<div className='flex flex-col gap-4 min-w-screen min-h-screen items-center justify-center prose'>
			<h1>uuups...</h1>
			<h3>This page may be under revision.</h3>

			<div className='flex gap-8 items-center'>
				<Link href='mailto:dhimiter.helmi@gmail.com'>Let me know</Link>
				<Link href="/" className='btn btn-primary text-base-100 no-underline'>Home Page</Link>
			</div>
		</div>
	);
};

export default NotFound;
