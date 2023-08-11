import React from 'react';
import { experiences } from '@/app/components/CarrerCarousel';
import Image from 'next/image';

type Props = {
    title: string;
    description: string;
};

const CareerDetail = ({ params }: { params: { id: number } }) => {
    const experience = experiences.find(
        (experience) => experience.id == params?.id
    );

    if(!experience) return (<div className='flex h-full text-3xl items-center'>Not found</div>);

    console.log('experience', experience, experiences);
    return (
        <div className='flex flex-col w-full px-8'>
            <div className='flex justify-center font-bold h-16 mb-8 items-center'>
                {experience?.logo ? <Image
                        src={experience?.logo}
                        alt='profile picture'
                        className='h-12 object-contain'
                    />
                : null}
                <span className='text-2xl'>{experience?.company}</span>
            </div>
            <div className='flex'>
                <div className='flex flex-col w-2/3 pr-8 gap-4'>
                    <div className='flex justify-start font-bold'>
                        <span className='text-xl'>{experience?.role}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm font-normal'>
                            {experience?.duration}
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
                        {experience?.location}
                    </div>
                </div>
                <div className='flex flex-col w-1/3'>bro</div>
            </div>
        </div>
    );
};

export default CareerDetail;
