import React from 'react';
import { experiences } from '@/app/components/CarrerCarousel';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const slug = params.slug;
	const experience = experiences.find(
		(experience) => experience.slug == params?.slug
	);

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = (await parent).openGraph?.images || [];
	const previousDescription = (await parent).description || '';

	return {
		title: `Dhimiter Helmi - ${experience?.company} - ${experience?.role}`,
		description: `Key points of my experience in ${experience?.company}. ${previousDescription} `, //experience?.shortDescription,
		// openGraph: {
			// images: ['/some-specific-page-image.jpg', ...previousImages],
			// description: `${previousDescription} Key points of my experience in ${experience?.company}`, //experience?.shortDescription,
		// },
	};
}

const CareerDetail = ({ params }: { params: { slug: string } }) => {
	console.log('params', params);
	const experience = experiences.find(
		(experience) => experience.slug == params?.slug
	);

	if (!experience)
		//TODO: not working as expected
		return notFound();

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
