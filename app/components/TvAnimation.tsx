'use client';
import React, { useEffect } from 'react';

const TvAnimation = () => {
	useEffect(() => {
		const upperDiv = document.querySelector('.upper');
		const lowerDiv = document.querySelector('.lower');
		const sideDiv = document.querySelector('.left-side');
		
		if (!upperDiv || !lowerDiv) {
			console.log('No divs found');
			return;
		} else {
			console.log('divs found');
		}

		upperDiv.classList.add('slide-exit');
		lowerDiv.classList.add('slide-exit');
		if(sideDiv) sideDiv.classList.add('slide-exit');
	}, []);

	return (
		<div className='tv-animation z-50'>
			<div className='upper bg-base-100 fixed left-0 top-0 w-full'></div>
			<div className='lower bg-base-100 fixed left-0 bottom-0 w-full'></div>
			<div className='left-side bg-base-100 fixed top-0 left-0'></div>
		</div>
	);
};

export default TvAnimation;
