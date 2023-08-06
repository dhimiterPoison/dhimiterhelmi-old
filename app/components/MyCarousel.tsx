'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useDebouncedState, useShallowEffect } from '@mantine/hooks';
import { routes } from './Navbar';
import Image from 'next/image';
import CoffeCardImage from '../../public/images/coffidelity-card.png';
import NaturesSerenadeImage from '../../public/images/natures-serenade-card.jpg';
import AnalogAdventuresImage from '../../public/images/analog-adventures-card.jpg';
import MoneyTrackerCard from '../../public/images/money-tracker-card.png';
import BalonadeHomescreen from '../../public/images/balonade-card.png';
import Link from 'next/link';

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
		id: 2,
		path: 'natures-serenade',
		title: "Nature's Serenade",
		img: NaturesSerenadeImage,
	},
	{ id: 3, path: 'coffee-card', title: 'Coffeedelity', img: CoffeCardImage },
	{
		id: 4,
		path: 'analog-adventures',
		title: 'Analog Adventures',
		img: AnalogAdventuresImage,
	},
	{ id: 5, path: 'money-tracker', title: 'Money Tracker', img: MoneyTrackerCard },
];

const MyCarousel = () => {
	const [selectedCard, setSelectedCard] = useDebouncedState(1, 20);
	const containerRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			console.log('scrolling');
			const container = containerRef.current;
			if (!container) {console.log('container not found'); return;}
			console.log('container found');

			// Calculate the center of the container
			// const containerCenter = container.scrollLeft + container.offsetWidth / 2;
			const containerCenter = container.offsetWidth / 2;
			console.log('Container center:', {containerCenter, containerData: container, scrollLeft: container.scrollLeft, offsetWidth: container.offsetWidth});
			const line = lineRef.current;
			if (line) {
				line.style.left = `${containerCenter}px`;
			}

			console.log('CREATING CARD INDEXES ', container.scrollLeft);
			// Calculate the center position of each card and its left position relative to the container center
			const cardIndices = cards.map((_, index) => {
				console.log('Index:', index);
				const card = container.children[index];
				console.log('Card:', card);
				
				if (!card) {console.log('card not found'); return;}
				const cardWidth = (20 * parseFloat(getComputedStyle(document.documentElement).fontSize)) / (3/2); // Calculate the width based on the aspect ratio (height / 0.8 for 80rem height)
				const rect = card.getBoundingClientRect();
				const cardCenter = rect.left + cardWidth / 2;
				const distanceToCenter = Math.abs(containerCenter - cardCenter);
				console.log('Card center:', cardCenter);
				console.log('Distance to center:', distanceToCenter);
				return { index, distanceToCenter };
			});

			

			console.log('Card indices:', cardIndices);
			// // Find the index of the centered card with the smallest distance to the container center
			const centeredCardIndex = cardIndices.reduce(
				(minIndex, card, currentIndex) => {
					console.log("Min index:", minIndex, "Card:", card, "Current index:", currentIndex);
					if (card && card.distanceToCenter < (cardIndices[minIndex]?.distanceToCenter || 0)) {
						console.log("Card is smaller");
						return currentIndex;
					}
					console.log("Card is bigger");
					return minIndex;
				},
				0
			);

			console.log('Centered card index:', centeredCardIndex);

			// // Update the state with the index of the centered card
			setSelectedCard(centeredCardIndex + 1);
		};

		const container = containerRef.current;
		if (!container) return;
		container.addEventListener('scroll', handleScroll);
		handleScroll(); // Check the initial state

		return () => {
			container.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className='carousel-slider flex gap-4 items-center md:justify-center overflow-auto md:overflow-hidden md:max-w-full md:flex-wrap overscroll-none snap-proximity snap-x'
		>
			{cards.map((card, index) => {
				const active = selectedCard === card.id;
				const hasScrollMarginLeft = index === 0;
				const hasScrollMarginRight = index === cards.length - 1;
				return (
					<div
						key={card.id}
						id={`card-${index}`}
						className={`carousel-card relative flex flex-col flex-shrink-0 justify-self-center rounded-xl 
							snap-always snap-center bg-base-200 shadow-xl ${active ? ' h-80' : ' h-60'} 
							${
								hasScrollMarginLeft
									? 'scroll-margin-left md:ml-0'
									: hasScrollMarginRight
									? 'scroll-margin-right md:mr-0'
									: ''
							} 
							ease-in-out duration-200`}
						onMouseOver={() => setSelectedCard(card.id)}
					>
						<Link href={card.path} className={`h-full w-full ${
									active ? '' : 'pointer-events-none md:pointer-events-auto'
								}`}>
							<div
								className={`flex h-full w-full justify-center items-center ${
									active ? '' : ''
								} `}
							>
								<Image
									src={card.img}
									alt='Picture of the author'
									className={`card-image h-full w-full object-cover rounded-xl ${
										active ? '' : ''
									} `}
								/>
								<div
									className={`card-title text-base absolute bottom-2 px-2 flex justify-center ${
										active && 'text-rose-100'
									}`}
								>
									{card.title}
								</div>
							</div>
						</Link>
					</div>
				);
			})}
			{/* <div ref={lineRef} className='vertical-line absolute top-0 bottom-0 w-1 bg-red-500'></div> */}
		</div>
	);
};

export default MyCarousel;
