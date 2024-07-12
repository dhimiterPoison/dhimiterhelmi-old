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
			className={`landing-page flex w-full flex-col justify-start scroll-smooth py-4 transition ease-linear md:p-8 ${GeistSans.className}`}
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
			{/* <TvAnimation /> */}
		</main>
	);
}
