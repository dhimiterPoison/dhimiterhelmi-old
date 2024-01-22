import React from 'react';

const Gallery = () => {
	return (
		<div className='py-16'>
			<h2 className='pb-4 text-xl tracking-wider'>Gallery</h2>
			<div className='bg-base-200 h-[30rem] flex flex-col p-4 gap-4 md:flex-row rounded-xl'>
				<div className='main-image h-4/5 w-full bg-base-100  md:w-2/3 md:h-full rounded-lg'>
					main
				</div>
				<div className='other-images grid grid-cols-3 gap-4 h-1/5 md:grid-cols-1 md:grid-rows-3 md:w-1/3 md:h-full'>
					<div className=' bg-base-100 rounded-lg'>01</div>
					<div className=' bg-base-100 rounded-lg'>02</div>
					<div className=' bg-base-100 rounded-lg'>03</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
