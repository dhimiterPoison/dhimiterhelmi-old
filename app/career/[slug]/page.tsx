import { experiences } from '@/app/components/CarrerCarousel';
import Gallery from '@/app/components/Gallery';
import { Metadata, ResolvingMetadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Contacts } from './Contacts';
import Skills from './Skills';

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
		<div className='flex flex-col w-full relative  font-light text-white bg-base-100'>
			<div className='blog-cover'>
				<Image
					src={experience?.cover}
					alt={`${experience?.company} cover image`}
					className='rounded-t-lg'
				/>
				<Link className='esc-button' href='/#career'>
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
							d='M6 18 18 6M6 6l12 12'
						/>
					</svg>
				</Link>
				<div className='absolute -bottom-10 md:-bottom-20 right-4 md:right-16 flex w-28 h-28 md:w-44 md:h-44 bg-base-100 rounded-full border-4 border-primary items-center justify-center'>
					<Image
						src={experience?.profilePicture}
						alt={`${experience?.company} profile image`}
						className='h-full object-cover rounded-full'
						loading='lazy'
						width={100}
						height={100}
					/>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row lg:justify-center px-8 py-10 md:py-8 gap-8'>
				<div className='flex flex-col w-full lg:w-1/2 lg:pr-8 gap-4'>
					<div className='flex justify-start font-bold'>
						<span className='text-2xl'>{experience?.role}</span>
					</div>
					<div className='flex justify-between'>
						<div className='flex gap-2 items-center'>
							<Image
								src={experience.flag}
								alt={`${experience.shortLocation} flag`}
								title={`${experience.shortLocation} flag`}
								className='w-8 h-8'
							/>
							<span className={`${inter.className} text-lg`}>
								{experience.location}
							</span>
						</div>
						<div className='flex flex-col text-lg font-light text-right'>
							{experience?.duration}
						</div>
					</div>
					<div className='text-justify'>
						<p>{experience?.description}</p>
					</div>
				</div>
				<div className='py-2'>
					<h1 className={`text-lg tracking-wider pb-4`}>Technology used</h1>
					{experience?.tech.map((tech, index) => (
						<div
							key={index}
							className='grid grid-cols-[50px_minmax(1rem,_1fr)_100px] py-1 px-4 items-center rounded-lg bg-transparent hover:bg-base-200'
						>
							<div className='columns bg-base-200 w-fit p-1 rounded-md'>
								<Image
									src={tech.icon}
									alt={tech.name}
									title={tech.name}
									className='w-5 h-5'
								/>
							</div>
							<div key={index} className='px-2 py-1 w-fit '>
								{tech.name}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='px-8'>
				<Skills slug={params?.slug}></Skills>
				<Gallery></Gallery>
				<Contacts {...experience}></Contacts>
			</div>
		</div>
	);
};

export default CareerDetail;
