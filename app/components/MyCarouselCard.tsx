import { useIntersection } from '@mantine/hooks';
import Link from 'next/link';
import React, {useEffect} from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
    card: {
        id: number;
        path: string;
        title: string;
        category: string;
        img: StaticImageData;
    },
    active: boolean,
    hasScrollMarginLeft: boolean,
    hasScrollMarginRight: boolean,
    selectCard: (id: number) => void
};

const MyCarouselCard = ({card, active, hasScrollMarginLeft, hasScrollMarginRight, selectCard} : Props) => {

    const { ref, entry } = useIntersection({
        threshold: 1,
    });


    useEffect(() => {
        selectCard(card.id);
    }, [entry?.isIntersecting])
    

    return (
        <div
            key={card.id}
            id={`card-${card.id}`}
            className={`carousel-card relative flex flex-col flex-shrink-0 justify-self-center rounded-xl 
							snap-always snap-center bg-base-200 shadow-xl h-80 md:hover:scale-110 hover:z-10  ${
                                active ? 'active scale-125 md:scale-100' : ' '
                            } 
							${
                                hasScrollMarginLeft
                                    ? 'scroll-margin-left md:ml-0'
                                    : hasScrollMarginRight
                                    ? 'scroll-margin-right md:mr-0'
                                    : ''
                            } 
							ease-in-out duration-200`}
            // onMouseOver={() => setSelectedCard(card.id)}
            // onMouseLeave={() => setSelectedCard(0)}
            ref={ref}
        >
            <Link
                href={card.path}
                className={`h-full w-full ${
                    active ? '' : 'pointer-events-none md:pointer-events-auto'
                }`}
            >
                <div
                    className={`flex h-full w-full justify-center items-center ${
                        active ? '' : ''
                    } `}
                >
                    <Image
                        src={card.img}
                        alt='Picture of the author'
                        className={`card-image h-full w-full object-cover rounded-xl ${
                            active ? 'active' : ''
                        } `}
                    />
                    <div className='flex flex-col absolute bottom-2 px-2'>
                        <div
                            className={`card-extra flex w-fit  px-1 rounded font-normal bg-primary text-xs text-black`}
                        >
                            {card.category}
                        </div>
                        <div
                            className={`card-title text-base flex justify-center ${
                                active && 'text-rose-100'
                            }`}
                        >
                            {card.title}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MyCarouselCard;
