import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LinkedinLogo from '../../public/linkedin-svgrepo-com.svg';
import GithubLogo from '../../public/github.svg';
import ProfilePicture from '../../public/profile-picture-test.jpg';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const ShortPresentation = () => {
	return (
		<div
			id='short-presentation'
			className={`presentation flex flex-col items-center justify-center md:flex-row mb-8 md:mb-12 ${montserrat.className}`}
		>
			<div className='flex flex-col sm:flex-row'>
				<div className='profile-image-container flex md:flex-col justify-center mb-2 shrink-0'>
					<Image
						src={ProfilePicture}
						alt='profile picture'
						className='profile-image w-20 h-20 bg-green-950 rounded-full shadow-lg '
					/>
				</div>
				<div className='flex flex-col justify-center pl-4 md:mx-8 md:pl-0'>
					<div className='flex flex-row justify-center sm:justify-start text-xl items-center font-semibold'>
						Dhimiter Helmi
					</div>
					<div className='flex flex-row justify-center sm:justify-start text-xl items-center'>
						FullStack & UX Developer
					</div>
					<div className='flex flex-row justify-center sm:justify-start text-lg items-center'>
						with passion for <i className='mx-2'>analog </i> activities
					</div>
				</div>
			</div>
			<div className='contact-points flex justify-center items-center h-16 gap-4'>
				<div className='contact btn btn-secondary btn-sm font-extrabold '>
					<Link
						href='https://www.linkedin.com/in/dhimiter-helmi-561955200'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Linkedin profile'
					>
						<Image
							src={LinkedinLogo}
							alt='linkedin logo'
							className='w-6 h-6 stroke-white'
						/>
					</Link>
				</div>
				<div className='contact btn btn-secondary btn-sm font-extrabold '>
					<Link
						href='https://github.com/dhimiterPoison'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Github profile'
					>
						<Image
							src={GithubLogo}
							alt='linkedin logo'
							className='w-6 h-6 stroke-white'
						/>
					</Link>
				</div>
				<div className='contact btn btn-secondary btn-sm font-extrabold shadow-md'>
					<Link href='mailto:dhimiter.helmi@gmail.com' aria-label='Email'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ShortPresentation;
