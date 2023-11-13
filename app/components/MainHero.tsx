import React from 'react';

const MainHero = () => {
	return (
		<div className='flex flex-col mb-8'>
			<div className='flex flex-row justify-center text-3xl md:text-5xl font-bold'>
				unleash Powerful
			</div>
			<div className='flex flex-row justify-center text-3xl md:text-5xl font-bold'>
				{/* //set fist letter to secondary color */}
				<span className='text-primary'>U</span>ser e
				<span className='text-secondary'>X</span>perience
			</div>
			<div className='flex flex-col my-4 justify-center text-xl items-center'>
				<p>Whatever you do,</p>
				<p className='mx-2'>isn&apos;t it better enjoying doing it?</p>
			</div>
			{/* <div className='flex flex-col items-center my-4 prose'>
				Whatever you do, <br /> isn’t it better enjoying doing it? <br /> I help you by
				providing product or services tailored to your needs. <br /> Win win, I create
				and have fun, <br /> you save time and get a smile.
			</div> */}
			{/* <div className='flex flex-row justify-center text-xl md:text-2xl h-12 pt-2 md:h-16 md:items-center md:pt-0 md:pb-4'>
				digital & analog
			</div> */}
			<div className='flex flex-row justify-center text-xs md:text-sm h-12 items-center'>
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
			</div>
		</div>
	);
};

export default MainHero;
