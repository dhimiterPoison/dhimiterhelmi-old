import React from 'react';

const MainHero = () => {
	return (
		<div className='flex flex-col mb-4'>
			<div className='flex flex-row justify-center text-3xl font-bold'>
				unleash Powerful
			</div>
			<div className='flex flex-row justify-center text-3xl font-bold'>
				{/* //set fist letter to secondary color */}
				<span className='text-primary'>U</span>ser e
				<span className='text-secondary'>X</span>perience
			</div>
			<div className='flex flex-row justify-center text-xl h-12 pt-2 md:h-16 md:items-center md:pt-0 md:pb-4'>
				digital & analog
			</div>
			<div className='flex flex-row justify-center text-xl h-12 items-center'>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-100 '>
					<div className='text-xs font-normal leading-none max-w-full flex-initial'>
						Listen
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-200 '>
					<div className='text-xs font-normal leading-none max-w-full flex-initial'>
						Change perspective
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-100 '>
					<div className='text-xs font-normal leading-none max-w-full flex-initial'>
						Reset limits
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-200 '>
					<div className='text-xs font-normal leading-none max-w-full flex-initial'>
						Feel
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHero;
