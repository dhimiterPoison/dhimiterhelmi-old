import {
	Montserrat,
	Archivo_Black,
	Work_Sans,
	Lora,
	Catamaran,
	Inter,
} from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import MainHero from './components/MainHero';
import ShortPresentation from './components/ShortPresentation';
import TvAnimation from './components/TvAnimation';
import { sectionTitleClassname } from './helper/typography';
import { GeistSans } from 'geist/font/sans';
import ContactForm from './components/ContactForm';

const MyCarousel = dynamic(() => import('./components/MyCarousel'));
const CarrerCarousel = dynamic(() => import('./components/CarrerCarousel'));

const monserrat = Montserrat({ subsets: ['latin'] });
const sections = Inter({ subsets: ['latin'] });
// const sections = Lora({ subsets: ['latin'] });

export default function Home() {
	return (
		<main
			//adding w-full fixes the horizontal scroll issue, BUUUT, it also makes the carousels
			//be restricted by the padding, id like it to continue to the end of the screen
			className={`landing-page flex w-full flex-col justify-start py-8 scroll-smooth md:p-8 ${GeistSans.className}`}
		>
			<ShortPresentation />
			<MainHero />
			<div className='flex h-full w-full flex-col items-center justify-center text-3xl font-bold'>
				<div id='career' className='flex'>
					<h1 className={`mt-4 h-10 ${sectionTitleClassname}`}>
						Career
					</h1>
				</div>
				<CarrerCarousel />
				<div id='personal-projects' className='flex'>
					<h1 className={`mt-8 h-10 ${sectionTitleClassname}`}>
						Projects
					</h1>
				</div>
				<MyCarousel />
				<ContactForm />
			</div>
			{/* <TvAnimation />  */}
			{/* <div id='section1' className='w-full h-screen bg-blue-200'>sectiopn 1</div>
			<div id='section2' className='w-full h-screen bg-green-200'>sectiopn 2</div>
			<div id='section3' className='w-full h-screen bg-red-200'>sectiopn 3</div>
			<div id='section4' className='w-full h-screen bg-violet-200'>sectiopn 4</div>
			<div className="fixed flex bottom-0 left-0 h-20 w-full bg-blue-200">
				<Link href="#section1">Sectioon 1</Link>
				<Link href="#section2">Sectioon 2</Link>
				<Link href="#section3">Sectioon 3</Link>
				<Link href="#section4">Sectioon 4</Link>
			</div> */}
		</main>
	);
}
