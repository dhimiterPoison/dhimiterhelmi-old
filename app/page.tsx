import { Montserrat } from 'next/font/google';
import MyCarousel from './components/MyCarousel';
import LinkedinLogo from '../public/linkedin-svgrepo-com.svg';
import ProfilePicture from '../public/profile-picture.jpeg';
import Image from 'next/image';
import Link from 'next/link';

const monserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`flex flex-col my-4 justify-start ${monserrat.className}`}>
			<div className='presentation flex flex-col mb-4'>
				<div className='profile-image-container flex justify-center mb-2'>
					<div className='profile-image w-20 h-20 bg-green-950 rounded-full'>
						<Image
							src={ProfilePicture}
							alt='profile picture'
							className='w-full rounded-full'
						/>
					</div>
				</div>
				<div className='flex flex-row justify-center text-xl items-center font-semibold'>
					Dhimiter Helmi
				</div>
				<div className='flex flex-row justify-center text-xl items-center'>
					Front End & UX Developer
				</div>
				<div className='contact-points flex justify-center items-center h-16 gap-4'>
					{/* <div className='linkedin'>
						<Image
							src={LinkedinLogo}
							alt='linkedin logo'
							className='w-6 h-6 stroke-white'
						/>
					</div>
					<div className='mail'>
					</div> */}
					<div className='contact btn btn-secondary btn-sm font-extrabold'>
						<Link
							href='https://www.linkedin.com/in/dhimiter-helmi-561955200'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
								src={LinkedinLogo}
								alt='linkedin logo'
								className='w-6 h-6 stroke-white'
							/>
						</Link>
					</div>
					<div className='contact btn btn-secondary btn-sm font-extrabold'>
						<Link href='mailto:dhimiter.helmi@gmail.com'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={2.5}
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
			<div className='flex flex-row justify-center text-3xl font-bold'>
				unleash Powerful
			</div>
			<div className='flex flex-row justify-center text-3xl font-bold'>
				{/* //set fist letter to secondary color */}
				<span className='text-primary'>U</span>ser e
				<span className='text-secondary'>X</span>perience
			</div>
			<div className='flex flex-row justify-center text-xl h-20 items-center'>
				digital & analog
			</div>
			<div className='flex flex-row justify-center text-xl h-12 items-center'>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-100 '>
					<div className='text-xs font-normal leading-none max-w-full flex-initial'>
						Listen
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-200 '>
					<div className='text-xs font-normal leading-none max-w-full flex-initial'>
						Change perspective
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-100 '>
					<div className='text-xs font-normal leading-none max-w-full flex-initial'>
						Reset limits
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-200 '>
					<div className='text-xs font-normal leading-none max-w-full flex-initial'>
						Feel
					</div>
				</div>
			</div>
			<div className='flex flex-row justify-center text-3xl font-bold h-full items-center max-w-full'>
				<MyCarousel />
			</div>
		</main>
	);
}
