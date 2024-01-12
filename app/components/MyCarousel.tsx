'use client';
import { useDebouncedState } from '@mantine/hooks';
import { Inter } from 'next/font/google';
import { useRef } from 'react';
import AnalogAdventuresImage from '../../public/images/analog-adventures-card.jpg';
import BalonadeHomescreen from '../../public/images/balonade-card.png';
import CoffeCardImage from '../../public/images/coffidelity-card.png';
import MoneyTrackerCard from '../../public/images/money-tracker-card.png';
import NaturesSerenadeImage from '../../public/images/natures-serenade-card.jpg';
import MyCarouselCard from './MyCarouselCard';

const sections = Inter({ subsets: ['latin'] });

//array made from routes
const cards = [
	{
		id: 1,
		path: 'balonade',
		title: 'Balonade Web App',
		description:
			'Wep app for enrolling the 2023 Balonade Sport Tournament and live checking the match scores.',
		environment: 'Production',
		link: 'https://balonade.it/',
		category: 'Web',
		img: BalonadeHomescreen,
	},
	{
		id: 2,
		path: 'self-glance',
		title: 'Self, your life at a glance',
		description:
			'Dump your thoughts, ideas, and feelings in a safe place and let Self help you organizing your time so you can focus your energies more consciusly.',
		environment: 'Building in public',
		link: 'https://self-glance.it/',
		category: 'Web',
		img: BalonadeHomescreen,
	},
	{
		id: 3,
		path: 'natures-serenade',
		title: "Nature's Serenade",
		description: `A journey in the wonders of the universe, giving importance to the listening and observation to explore that beauty is in the simple things.`,
		environment: 'Coming soon',
		category: 'Multimedia',
		img: NaturesSerenadeImage,
	},
	{
		id: 4,
		path: 'analog-adventures',
		title: 'Analog Adventures',
		description: 'My preferred way to capture magical moments.',
		environment: 'Production',
		link: 'https://instagram.com/dhimanalogadventures',
		category: 'Multimedia',
		img: AnalogAdventuresImage,
	},
	{
		id: 5,
		path: 'coffee-card',
		title: 'Coffeedelity',
		description:
			'Browse coffee shops, purchase your own coffee card and get nice offers and discounts.',
		environment: 'Paused',
		link: '',
		category: 'Web',
		img: CoffeCardImage,
	},
	// {
	//     id: 6,
	//     path: 'money-tracker',
	//     title: 'Money Tracker',
	//     category: 'Web',
	//     img: MoneyTrackerCard,
	// },
];

const MyCarousel = () => {
	const [selectedCard, setSelectedCard] = useDebouncedState(0, 20);
	const containerRef = useRef<HTMLDivElement>(null);
	const lineRef = useRef<HTMLDivElement>(null);

	const selectCardHandler = (id: number) => {
		setSelectedCard(id);
	};

	return (
		<div>
			{/* <div
				ref={containerRef}
				className='carousel-slider flex gap-10 items-center md:justify-center overflow-auto md:overflow-hidden md:max-w-full md:flex-wrap overscroll-none snap-proximity snap-x py-10 md:px-4'
			>
				{cards.map((card, index) => {
					const active = selectedCard === card.id;
					const hasScrollMarginLeft = index === 0;
					const hasScrollMarginRight = index === cards.length - 1;
					return (
						<MyCarouselCard
							key={card.id}
							card={card}
							active={active}
							hasScrollMarginLeft={hasScrollMarginLeft}
							hasScrollMarginRight={hasScrollMarginRight}
							selectCard={selectCardHandler}
						/>
					);
				})}
			</div> */}
			<div
				ref={containerRef}
				className='carousel-slider flex gap-10 items-center md:justify-center overflow-auto md:overflow-hidden md:max-w-full md:flex-wrap overscroll-none snap-proximity snap-x py-10 md:px-4'
			>
				{cards.map((card, index) => {
					const active = selectedCard === card.id;
					const hasScrollMarginLeft = index === 0;
					const hasScrollMarginRight = index === cards.length - 1;
					return (
						<MyCarouselCard
							key={card.id}
							card={card}
							active={active}
							hasScrollMarginLeft={hasScrollMarginLeft}
							hasScrollMarginRight={hasScrollMarginRight}
							selectCard={selectCardHandler}
						/>
					);
				})}
				{/* <div ref={lineRef} className='vertical-line absolute top-0 bottom-0 w-1 bg-red-500'></div> */}
			</div>
		</div>
	);
};

export default MyCarousel;
