'use client';
import React, { useState } from 'react';
import { routes } from './Navbar';
import Image from 'next/image';
import CoffeCardImage from '../../public/images/Coffe_Card.png';
import AnalogAdventuresImage from '../../public/images/Analog_adventures_image.png';
import BalonadeHomescreen from '../../public/images/balonade-home.png';

const settings = {
	centerMode: true,
	infinite: false,
	centerPadding: '0',
	slidesToShow: 3,
	speed: 500,
	autoplay: true,
	autoplaySpeed: 400,
	focusOnSelect: true,
	className: 'carousel',
};

//array made from routes
const cards = [
	{ id: 1, path: 'balonade', title: 'Balonade Web App', img: BalonadeHomescreen },
	{ id: 4, path: 'natures-serenade', title: "Nature's Serenade", img: CoffeCardImage },
	{ id: 2, path: 'coffee-card', title: 'Coffeedelity', img: CoffeCardImage  },
	{ id: 5, path: 'analog-adventures', title: 'Analog Adventures', img: AnalogAdventuresImage },
	{ id: 3, path: 'money-tracker', title: 'Money Tracker', img: CoffeCardImage},
];

const MyCarousel = () => {
	const [selectedCard, setSelectedCard] = useState(1);
	return (
		// <Slider {...settings}>
		// 	{cards.map((card, index) => (
		// 		<div key={index} className='carousel-card'>
		// 			{/* flex flex-col justify-self-center w-60 h-80 rounded-xl bg-base-200 shadow-xl */}
		// 			<div className='flex h-full justify-center items-center'>
		// 				<svg
		// 					xmlns='http://www.w3.org/2000/svg'
		// 					fill='none'
		// 					viewBox='0 0 24 24'
		// 					strokeWidth={1.5}
		// 					stroke='#194226'
		// 					className='w-20 h-20'
		// 				>
		// 					<path
		// 						strokeLinecap='round'
		// 						strokeLinejoin='round'
		// 						d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
		// 					/>
		// 				</svg>
		// 			</div>
		// 			<div className='flex card-text pl-4 pb-4 h-14'>
		// 				<div className='card-title text-md'>{card}</div>
		// 			</div>
		// 		</div>
		// 	))}
		// </Slider>
		<div className='carousel-slider flex gap-4 items-center overflow-x-auto overscroll-none snap-proximity snap-x scroll-p-4 '>
			{cards.map((card, index) => {
				const active = selectedCard === card.id;
				return (
					<div key={card.id} className={`carousel-card flex flex-col flex-shrink-0 justify-self-center rounded-xl bg-base-200 shadow-xl snap-center ${active ? " h-80" : " h-60"}`}>
						<div className='flex h-full justify-center items-center'>
							<Image
								src={card.img}
								alt='Picture of the author'
								className='card-image w-full h-full object-cover rounded-xl'
							/>
							{/* <svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='#194226'
								className='w-20 h-20'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
								/>
							</svg> */}
						</div>
						<div className={`flex card-text pl-4 py-2 h-14 items-center ${active && "text-rose-100"}`}>
							<div className='card-title text-base'>{card.title}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default MyCarousel;
