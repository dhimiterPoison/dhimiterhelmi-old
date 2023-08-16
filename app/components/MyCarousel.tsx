'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useDebouncedState, useShallowEffect } from '@mantine/hooks';
import { routes } from './Navbar';
import Image from 'next/image';
import CoffeCardImage from '../../public/images/coffidelity-card.png';
import NaturesSerenadeImage from '../../public/images/natures-serenade-card.jpg';
import AnalogAdventuresImage from '../../public/images/analog-adventures-card.jpg';
import MoneyTrackerCard from '../../public/images/money-tracker-card.png';
import BalonadeHomescreen from '../../public/images/balonade-card.png';
import Link from 'next/link';
import { Catamaran, Inter } from 'next/font/google';
import { useIntersection } from '@mantine/hooks';
import MyCarouselCard from './MyCarouselCard';

const sections = Inter({ subsets: ['latin'] });

//array made from routes
const cards = [
    {
        id: 1,
        path: 'balonade',
        title: 'Balonade Web App',
        category: 'Web',
        img: BalonadeHomescreen,
    },
    {
        id: 2,
        path: 'natures-serenade',
        title: "Nature's Serenade",
        category: 'Multimedia',
        img: NaturesSerenadeImage,
    },
    {
        id: 3,
        path: 'coffee-card',
        title: 'Coffeedelity',
        category: 'Web',
        img: CoffeCardImage,
    },
    {
        id: 4,
        path: 'analog-adventures',
        title: 'Analog Adventures',
        category: 'Multimedia',
        img: AnalogAdventuresImage,
    },
    {
        id: 5,
        path: 'money-tracker',
        title: 'Money Tracker',
        category: 'Web',
        img: MoneyTrackerCard,
    },
];

const MyCarousel = () => {
    const [selectedCard, setSelectedCard] = useDebouncedState(0, 20);
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    const selectCardHandler = (id: number) => {
        setSelectedCard(id);
    };

    return (
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
    );
};

export default MyCarousel;
