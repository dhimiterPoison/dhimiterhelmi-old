import { Montserrat } from 'next/font/google';
import BookCallComponent from './BookCallComponent';

const montserrat = Montserrat({ subsets: ['latin'] });

const MainHero = () => {
	return (
		<div className='mb-8 flex flex-col'>
			<div className={` flex flex-col`}>
				{/* <div className="absolute inset-0 overflow-hidden">
					<div className="absolute left-1/2 top-32 -translate-x-1/2  w-3/4 h-96 rounded-full blur-md animate-pulse"
						style={{
							background: 'radial-gradient(circle at center, transparent 50%, #2d6a4f 50%, #3d8a6f 100%)',
							backgroundSize: '120% 120%',
							backgroundPosition: 'center',
						}}
					></div>
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-md animate-pulse"
						style={{
							background: 'radial-gradient(circle at center, transparent 50%, #2d6a4f 50%, #3d8a6f 100%)',
							backgroundSize: '120% 120%',
							backgroundPosition: 'center',
							animationDelay: '-1.5s',
						}}
					></div>
				</div> */}
				<h2 className='self-center text-xl my-6'>Empower your <strong>users</strong>,</h2>
				<h1 className='flex flex-row justify-center text-4xl font-bold leading-tight tracking-wide md:text-5xl '>
					unleash <span className='ml-2 '>Powerful</span>
				</h1>
				<div className='flex flex-row justify-center  text-4xl font-bold leading-tight md:text-5xl '>
					{/* //set fist letter to secondary color */}
					<h1 className='u-letter text-primary'>U</h1>ser e
					<h1 className='x-letter text-secondary'>X</h1>perience
				</div>
				<div className='my-4 flex flex-col items-center justify-start text-xl '>
					{/* <p>Whatever you do,</p>
					<p className='mx-2'>isn&apos;t it better enjoying doing it?</p> */}
					<span className='text-center text-xl font-light leading-tight'>
						
						Let&apos;s discuss your idea and see how we can bring it
						to life!
					</span>
					<br />
				</div>
				{/* <div id='call-schedule' className='flex navbar-contact btn btn-secondary uppercase font-extrabold self-center w-fit shadow-md hover:scale-105'>
					<button plausible-event-name="get-in-touch-nav" className={`uppercase`}>Book a call</button>
					</div> */}
				<BookCallComponent></BookCallComponent>
				{/* <div className='my-4 flex flex-col items-center justify-start text-xl '>
					<span className='p-4 text-center text-lg font-light leading-tight'>
						Let&apos;s discuss your idea and see how we can bring it
						to life!
					</span>
				</div> */}
			</div>
			{/* <div className='flex flex-col items-center my-4 prose'>
				Whatever you do, <br /> isn’t it better enjoying doing it? <br /> I help you by
				providing product or services tailored to your needs. <br /> Win win, I create
				and have fun, <br /> you save time and get a smile.
			</div> */}
			{/* <div className='flex flex-row justify-center text-xl md:text-2xl h-12 pt-2 md:h-16 md:items-center md:pt-0 md:pb-4'>
				digital & analog
			</div> */}

			{/* <div className='flex flex-row justify-center text-xs md:text-sm h-12 items-center'>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-100 '>
					<div className='font-normal leading-none max-w-full flex-initial'>
						Listen
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-200 '>
					<div className='font-normal leading-none max-w-full flex-initial'>
						Change perspective
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-100 '>
					<div className='font-normal leading-none max-w-full flex-initial'>
						Reset limits
					</div>
				</div>
				<div className='flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-gray-700 bg-lime-200 '>
					<div className='font-normal leading-none max-w-full flex-initial'>
						Create
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default MainHero;
