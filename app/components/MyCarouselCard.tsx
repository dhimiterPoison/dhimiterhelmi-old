import { GeistSans } from 'geist/font/sans';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
	card: {
		id: number;
		path: string;
		title: string;
		description: string;
		category: string;
		img: StaticImageData;
	};
	active?: boolean;
	hasScrollMarginLeft?: boolean;
	hasScrollMarginRight?: boolean;
	selectCard?: (id: number) => void;
};

const MyCarouselCard = ({
	card,
	active,
	hasScrollMarginLeft,
	hasScrollMarginRight,
	selectCard,
}: Props) => {
	// const desktop = useMediaQuery('(min-width: 768px)');

	// const { ref, entry } = useIntersection({
	// 	threshold: 1,
	// });

	// useEffect(() => {
	// 	if (desktop) return;
	// 	if (entry?.isIntersecting) selectCard(card.id);
	// }, [entry?.isIntersecting]);

	return (
		<div
			className={`project-card flex flex-col p-2 gap-2 bg-green-800 rounded-xl ${GeistSans.className}`}
		>
			<Image
				src={card.img}
				aria-label='{`Image cover for ${card.title}'
				alt={`Image cover for ${card.title} project`}
				className='image h-2/3 object-cover rounded-md'
			></Image>
			<div className='content flex flex-col h-1/3 '>
				<h2 className='title text-xl font-bold'>{card.title}</h2>
				<span className='description text-lg font-normal'>
					{card.description}
				</span>
				<Link
					href={`/${card.path}`}
					className='flex items-center self-end text-base mt-auto'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='w-6 h-6'
					>
						<path
							fillRule='evenodd'
							d='M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z'
							clipRule='evenodd'
						/>
					</svg>
					<span className='mr-2 cursor-pointer underline'>Read more</span>
				</Link>
			</div>
		</div>
	);
};

export default MyCarouselCard;
