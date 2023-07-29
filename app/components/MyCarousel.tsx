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
	{
		id: 1,
		path: 'balonade',
		title: 'Balonade Web App',
		img: BalonadeHomescreen,
	},
	{
		id: 4,
		path: 'natures-serenade',
		title: "Nature's Serenade",
		img: CoffeCardImage,
	},
	{ id: 2, path: 'coffee-card', title: 'Coffeedelity', img: CoffeCardImage },
	{
		id: 5,
		path: 'analog-adventures',
		title: 'Analog Adventures',
		img: AnalogAdventuresImage,
	},
	{ id: 3, path: 'money-tracker', title: 'Money Tracker', img: CoffeCardImage },
];

const MyCarousel = () => {
	const [selectedCard, setSelectedCard] = useState(1);
	return (
		<div className='carousel-slider flex gap-4 items-center  overflow-x-auto overscroll-none snap-proximity snap-x scroll-px-10 '>
			{cards.map((card, index) => {
				const active = selectedCard === card.id;
				return (
					<div
						key={card.id}
						className={`carousel-card relative flex flex-col flex-shrink-0 justify-self-center rounded-xl 
							snap-always snap-center bg-base-200 shadow-xl ${active ? ' h-80   ' : ' h-60'}`}
					>
						<div className={`flex h-full justify-center items-center ${active ? "" : ""} `}>
							<Image
								src={card.img}
								alt='Picture of the author'
								className={`card-image h-full object-cover rounded-xl ${active ? "" : ""} `}
							/>
							<div className='card-title text-base absolute bottom-2 px-2 flex justify-center'>{card.title}</div>
						</div>
						{/* <div
							className={`flex card-text pl-4 h-14 items-center ${
								active && 'text-rose-100'
							}`}
						>
							<div className='card-title text-base'>{card.title}</div>
						</div> */}
					</div>
				);
			})}
		</div>
	);
};

export default MyCarousel;
