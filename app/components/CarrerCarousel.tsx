import { Catamaran } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import ReactIcon from '../../public/react.svg';
import NextJSIcon from '../../public/nextjs.svg';
import Image from 'next/image';

const icons = {
    react: ReactIcon,
    nextjs: NextJSIcon,
};

const experiences = [
    {
        id: 3,
        company: 'Alfa Sistemi S.p.A.',
        role: 'Mid FullStack Developer',
        duration: '08/2021 - Present',
        location: 'Buttrio, 🇮🇹',
        description: '',
        tech: [icons.react, icons.nextjs],
        skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
    },
    {
        id: 2,
        company: 'Danieli Automation S.p.A.',
        role: 'FrontEnd Developer Intern',
        location: 'Buttrio, 🇮🇹',
        duration: '02/2021 - 04/2021',
        description: '',
        tech: [],
        skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
    },
    {
        id: 1,
        company: 'Clavister AB',
        role: 'Web Development Intern',
        location: 'Örnsköldsvik, 🇸🇪',
        duration: '05/2018 - 06/2018',
        description: '',
        tech: [],
        skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
    },
];

const sections = Catamaran({ subsets: ['latin'] });
const CarrerCarousel = () => {
    return (
        <div className='carousel-slider flex gap-4 items-center justify-start px-4 overflow-auto overscroll-none snap-proximity snap-x scroll-px-10'>
            {experiences.map((experience, index) => {
                return (
                    <div
                        key={experience.id}
                        id={`experience-${index}`}
                        className={`relative flex h-96 w-72 flex-col bg-[#294f38] flex-shrink-0 justify-self-center rounded-xl 
                            snap-always snap-start shadow-xl p-4
                            `}
                    >
                        <span className='text-xl'>{experience.company}</span>
                        <span className='text-lg'>{experience.role}</span>
                        <div className='flex justify-between h-12 items-center'>
                            <div className='flex flex-col'>
                                <span className='text-sm font-normal'>
                                    {experience.duration}
                                </span>
                            </div>
                            <div className='flex text-sm gap-1 items-center'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-4 h-4'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                                    />
                                </svg>
                                {experience.location}
                            </div>
                        </div>
                        <div className='flex h-12 items-center gap-4'>
                                {experience.tech.map((technology, index) => (
                                    <Image
                                        key={index}
                                        src={technology}
                                        alt='React'
                                        className='w-8 h-8 rounded-md'
                                    />
                                ))}
                        </div>
                        <div className='flex'>
                            <ul>
                                {experience.skills.map((skill, index) => (
                                    <li
                                        key={index}
                                        className='text-sm text-white px-2 py-1 flex'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                            className='w-4 h-4'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                        <span className='ml-2'>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='absolute bottom-2 text-sm self-end'>
                            <Link href={`/career/${experience.id}`} className='flex '>
                                <span className='mr-2 cursor-pointer underline'>Read more</span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-6 h-6'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CarrerCarousel;
