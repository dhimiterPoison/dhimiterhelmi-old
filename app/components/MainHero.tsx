import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

const MainHero = () => {
	return (
		<div className='flex flex-col mb-8'>
			<div className={` flex flex-col`}>
				<h1 className='flex tracking-wide flex-row justify-center text-4xl md:text-5xl font-bold'>
					unleash <span className='ml-2 tracking-wider'>Powerful</span>
				</h1>
				<div className='flex flex-row justify-center text-4xl md:text-5xl font-bold'>
					{/* //set fist letter to secondary color */}
					<h1 className='text-primary'>U</h1>ser e
					<h1 className='text-secondary'>X</h1>perience
				</div>
				<div className='flex flex-col my-4 justify-center text-xl items-center'>
					{/* <p>Whatever you do,</p>
					<p className='mx-2'>isn&apos;t it better enjoying doing it?</p> */}
					<span className='text-center'>Empower Your <i>users</i> with tailored interactivity!</span>
				</div>
				<div className='flex navbar-contact btn btn-secondary uppercase font-extrabold self-center w-fit shadow-md hover:scale-105'>
					<Link href='mailto:dhimiter.helmi@gmail.com' plausible-event-name="get-in-touch-nav" className={``}>Book a call</Link>
				</div>
			</div>
			{/* <div className='flex flex-col items-center my-4 prose'>
				Whatever you do, <br /> isn’t it better enjoying doing it? <br /> I help you by
				providing product or services tailored to your needs. <br /> Win win, I create
				and have fun, <br /> you save time and get a smile.
			</div> */}
			{/* <div className='flex flex-row justify-center text-xl md:text-2xl h-12 pt-2 md:h-16 md:items-center md:pt-0 md:pb-4'>
				digital & analog
			</div> */}


			{/* <div className='flex flex-row justify-center text-xs md:text-sm h-12 items-center'>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-100 '>
					<div className='font-normal leading-none max-w-full flex-initial'>
						Listen
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-200 '>
					<div className='font-normal leading-none max-w-full flex-initial'>
						Change perspective
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-100 '>
					<div className='font-normal leading-none max-w-full flex-initial'>
						Reset limits
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-200 '>
					<div className='font-normal leading-none max-w-full flex-initial'>
						Create
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default MainHero;
