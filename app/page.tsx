import {
    Montserrat,
    Archivo_Black,
    Work_Sans,
    Lora,
    Catamaran,
    Inter
} from 'next/font/google';
import MyCarousel from './components/MyCarousel';
import Image from 'next/image';
import Link from 'next/link';
import MainHero from './components/MainHero';
import ShortPresentation from './components/ShortPresentation';
import CarrerCarousel from './components/CarrerCarousel';
import TvAnimation from './components/TvAnimation';

const monserrat = Montserrat({ subsets: ['latin'] });
const sections = Inter({ subsets: ['latin'] });
// const sections = Lora({ subsets: ['latin'] });

export default function Home() {
    return (
        <main
            //adding w-full fixes the horizontal scroll issue, BUUUT, it also makes the carousels
            //be restricted by the padding, id like it to continue to the end of the screen
            className={`flex flex-col my-4 justify-start ${monserrat.className} scroll-smooth`}
        >
            <ShortPresentation />
            <MainHero />
            <div className='flex flex-col justify-center text-3xl font-bold h-full items-center max-w-full'>
                <div className='flex'>
                    <h1
                        className={`text-xl font-normal tracking-wider mt-4 h-10 ${sections.className}`}
                    >
                        Career
                    </h1>
                </div>
                <CarrerCarousel />
                <div className='flex'>
                    <h1
                        className={`text-xl font-normal tracking-wider mt-8 h-10 ${sections.className}`}
                    >
                        Personal Projects
                    </h1>
                </div>
                <MyCarousel />
            </div>
            <TvAnimation />
        </main>
    );
}
