import { Montserrat } from 'next/font/google';
import BookCallComponent from './BookCallComponent';

const montserrat = Montserrat({ subsets: ['latin'] });

const MainHero = () => {
	return (
		<div className='relative mb-8 flex w-full lg:w-2/3 lg:self-center flex-col items-center justify-center dark:bg-grid-white/[0.2]'>
			{/* Radial gradient for the container to give a faded look */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-base-100'></div>
			<h2 className='z-10 my-6 self-center text-xl'>
				Empower your <strong>users</strong>,
			</h2>
			<h1 className='z-10 flex flex-row justify-center text-4xl font-bold leading-tight tracking-wide md:text-5xl'>
				unleash <span className='ml-2'>Powerful</span>
			</h1>
			<div className='z-10 flex flex-row justify-center text-4xl font-bold leading-tight md:text-5xl'>
				{/* //set fist letter to secondary color */}
				<h1 className='u-letter text-primary'>U</h1>ser e
				<h1 className='x-letter text-secondary'>X</h1>perience
			</div>
			<div className='z-10 my-4 flex flex-col items-center justify-start text-xl'>
				{/* <p>Whatever you do,</p>
					<p className='mx-2'>isn&apos;t it better enjoying doing it?</p> */}
				<span className='z-10 text-center text-xl font-light leading-tight'>
					Let&apos;s discuss your idea and see how we can bring it to
					life!
				</span>
				<br />
			</div>
			<BookCallComponent className={`z-10`} />
		</div>
		// <div className='mb-8 flex flex-col'>
		// 	<div className={` flex flex-col`}>
		// 		<h2 className='self-center text-xl my-6'>Empower your <strong>users</strong>,</h2>
		// 		<h1 className='flex flex-row justify-center text-4xl font-bold leading-tight tracking-wide md:text-5xl '>
		// 			unleash <span className='ml-2 '>Powerful</span>
		// 		</h1>
		// 		<div className='flex flex-row justify-center  text-4xl font-bold leading-tight md:text-5xl '>
		// 			{/* //set fist letter to secondary color */}
		// 			<h1 className='u-letter text-primary'>U</h1>ser e
		// 			<h1 className='x-letter text-secondary'>X</h1>perience
		// 		</div>
		// 		<div className='my-4 flex flex-col items-center justify-start text-xl '>
		// 			{/* <p>Whatever you do,</p>
		// 			<p className='mx-2'>isn&apos;t it better enjoying doing it?</p> */}
		// 			<span className='text-center text-xl font-light leading-tight'>

		// 				Let&apos;s discuss your idea and see how we can bring it
		// 				to life!
		// 			</span>
		// 			<br />
		// 		</div>
		// 		<BookCallComponent></BookCallComponent>
		// 	</div>
		// </div>
	);
};

export default MainHero;
