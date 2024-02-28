import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import AnalogAdventuresImage from '../../public/images/analog-adventures-card.jpg';
import BalonadeHomescreen from '../../public/images/balonade-card-bg.png';
import CoffeCardImage from '../../public/images/coffidelity-card.png';
import NaturesSerenadeImage from '../../public/images/natures-serenade-card.jpg';
import SelfGlanceImage from '../../public/images/self-glance.png';
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
		categories: ['Web', "UX", "Mobile", "Production"],
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
		categories: ["AI", "UX", "#BuildInPublic"],
		img: SelfGlanceImage,
	},
	{
		id: 3,
		path: 'natures-serenade',
		title: "a Human Experience",
		description: `A journey in the wonders of the universe, giving importance to the listening and observation to explore that beauty is in the simple things.`,
		environment: 'Coming soon',
		categories: ['Immersive', 'Multimedia', ],
		img: NaturesSerenadeImage,
	},
	{
		id: 4,
		path: 'analog-adventures',
		title: 'Analog Adventures',
		description: 'My preferred way to capture magical moments.',
		environment: 'Production',
		link: 'https://instagram.com/dhimanalogadventures',
		categories: ['Multimedia',],
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
		categories: ["Deprioritized", "Web"],
		img: CoffeCardImage,
	},
	// {
	//     id: 6,
	//     path: 'money-tracker',
	//     title: 'Money Tracker',
	//     categories: ['Web',
	//     img: MoneyTrackerCard,
	// },
];

const MyCarousel = () => {
	// const [selectedCard, setSelectedCard] = useDebouncedState(0, 20);
	// const containerRef = useRef<HTMLDivElement>(null);
	// const lineRef = useRef<HTMLDivElement>(null);

	// const selectCardHandler = (id: number) => {
	// setSelectedCard(id);
	// };

	return (
		<div
			// ref={containerRef}
			// className='carousel-slider flex flex-col gap-32 items-center justify-center overflow-hidden md:max-w-full flex-wrap overscroll-none py-10 md:px-4'
			className='flex flex-col gap-16 items-center py-4'
		>
			{cards.map((card, index) => {
				// const active = selectedCard === card.id;
				// const hasScrollMarginLeft = index === 0;
				// const hasScrollMarginRight = index === cards.length - 1;
				return (
					<MyCarouselCard
						key={card.id}
						card={card}
						// active={active}
						// hasScrollMarginLeft={hasScrollMarginLeft}
						// hasScrollMarginRight={hasScrollMarginRight}
						// selectCard={selectCardHandler}
					/>
				);
			})}
			{/* <div ref={lineRef} className='vertical-line absolute top-0 bottom-0 w-1 bg-red-500'></div> */}
		</div>
	);
};

export default MyCarousel;
