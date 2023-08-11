import {
    Montserrat,
    Archivo_Black,
    Work_Sans,
    Lora,
    Catamaran,
} from 'next/font/google';
import MyCarousel from './components/MyCarousel';
import Image from 'next/image';
import Link from 'next/link';
import MainHero from './components/MainHero';
import ShortPresentation from './components/ShortPresentation';
import CarrerCarousel from './components/CarrerCarousel';

const monserrat = Montserrat({ subsets: ['latin'] });
const sections = Catamaran({ subsets: ['latin'] });
// const sections = Lora({ subsets: ['latin'] });

export default function Home() {
    return (
        <main
            className={`flex flex-col my-4 justify-start ${monserrat.className}`}
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
                        className={`text-xl font-normal tracking-wider mt-8 md:mt-12 h-10 ${sections.className}`}
                    >
                        Personal Projects
                    </h1>
                </div>
                <MyCarousel />
            </div>
        </main>
    );
}
