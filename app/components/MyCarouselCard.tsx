import { useIntersection } from '@mantine/hooks';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
	card: {
		id: number;
		path: string;
		title: string;
		description: string;
		category: string;
		img: StaticImageData;
	};
	active: boolean;
	hasScrollMarginLeft: boolean;
	hasScrollMarginRight: boolean;
	selectCard: (id: number) => void;
};

const MyCarouselCard = ({
	card,
	active,
	hasScrollMarginLeft,
	hasScrollMarginRight,
	selectCard,
}: Props) => {
	const desktop = useMediaQuery('(min-width: 768px)');

	const { ref, entry } = useIntersection({
		threshold: 1,
	});

	useEffect(() => {
		if (desktop) return;
		if (entry?.isIntersecting)
		selectCard(card.id);
	}, [entry?.isIntersecting]);

	return (
		<div
			key={card.id}
			id={`card-${card.id}`}
			className={`carousel-card projects relative flex flex-col flex-shrink-0 justify-self-center rounded-xl 
							snap-always snap-center bg-base-200 md:bg-transparent h-80 md:w-3/4 md:hover:scale-110 hover:z-10  ${
								active ? 'active scale-125 md:scale-100 ' : ' '
							}
							
							ease-in-out duration-200`}
			// onMouseOver={() => setSelectedCard(card.id)}
			// onMouseLeave={() => setSelectedCard(0)}
			ref={ref}
		>
			<Link
				href={card.path}
				className={`flex h-full w-full justify-center md:justify-start items-center ${
					active ? '' : 'pointer-events-none md:pointer-events-auto'
				}`}
			>
				<Image
					src={card.img}
					alt='Picture of the author'
					className={`card-image h-full w-full md:w-1/3 object-cover rounded-xl md:rounded-l-xl ${
						active ? 'active' : ''
					} `}
				/>
				<div className='flex flex-col absolute bottom-2 px-8 md:relative md:bottom-0 md:h-full md:w-2/3 md:justify-center md:items-start'>
					<div
						className={`card-extra flex w-fit px-1 rounded font-normal bg-primary text-xs text-black mb-1 md:text-sm`}
					>
						{card.category}
					</div>
					<div
						className={`card-title text-base flex justify-center md:text-2xl ${
							active && 'text-rose-100'
						}`}
					>
						{card.title}
					</div>
					<div className='card-description hidden md:flex text-lg font-normal'>
						{card.description}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default MyCarouselCard;
