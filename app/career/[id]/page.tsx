import React from 'react';
import { experiences } from '@/app/components/CarrerCarousel';
import Image from 'next/image';
import { Inter } from 'next/font/google';

type Props = {
	title: string;
	description: string;
};

const inter = Inter({ subsets: ['latin'] });

const CareerDetail = ({ params }: { params: { id: number } }) => {
	const experience = experiences.find(
		(experience) => experience.id == params?.id
	);

	if (!experience)
		return <div className='flex h-full text-3xl items-center'>Not found</div>;

	console.log('experience', experience, experiences);
	return (
		<div className='flex flex-col w-full px-8'>
			<div className='flex justify-center font-bold h-16 mb-8 items-center'>
				{experience?.logo ? (
					<Image
						src={experience?.logo}
						alt='profile picture'
						className='h-12 object-contain'
					/>
				) : null}
				<span className='text-2xl'>{experience?.company}</span>
			</div>
			<div className='flex flex-col-reverse lg:flex-row '>
				<div className='flex flex-col w-full lg:w-2/3 lg:pr-8 gap-4'>
					<div className='flex justify-start font-bold'>
						<span className='text-2xl'>{experience?.role}</span>
					</div>
					<div className='flex flex-col'>
						<span className='text-lg'>{experience?.duration}</span>
					</div>
					<div className='flex gap-2 items-center'>
						<Image
							src={experience.flag}
							alt={`${experience.shortLocation} flag`}
							title={`${experience.shortLocation} flag`}
							className='w-7 h-7'
						/>
						<span className={`${inter.className} text-base`}>
							{experience.location}
						</span>
					</div>
				</div>
				<div className='flex flex-col w-full lg:w-1/3'>Image maybe</div>
			</div>
		</div>
	);
};

export default CareerDetail;
