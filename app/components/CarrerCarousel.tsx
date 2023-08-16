import { Catamaran, Inter } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import ReactIcon from '../../public/react.svg';
import NextJSIcon from '../../public/nextjs.svg';
import GithubIcon from '../../public/github.svg';
import VercelIcon from '../../public/vercel.svg';
import TailwindIcon from '../../public/tailwind.webp';
import AngularIcon from '../../public/angular.svg';
import AspNet from '../../public/asp-net.png';
import BootstrapIcon from '../../public/bootstrap.svg';
import GitIcon from '../../public/git.svg';
import GitlabIcon from '../../public/gitlab.svg';
import AzureDevops from '../../public/azure-devops.svg';
import JavascriptIcon from '../../public/javascript.svg';
import TypescriptIcon from '../../public/typescript.svg';
import SpringIcon from '../../public/spring.svg';
import AdobeXD from '../../public/adobe-xd.svg';
import GeneralDb from '../../public/general-db.svg';

import AlfaSistemiLogo from '../../public/career/alfasistemi-logo.png';
import DanieliLogo from '../../public/career/danieli-logo.png';
import ClavisterLogo from '../../public/career/clavister-logo.jpg';
import Image from 'next/image';

const icons = {
    react: ReactIcon,
    nextjs: NextJSIcon,
    spring: SpringIcon,
    angular: AngularIcon,
    aspnet: AspNet,
    git: GitIcon,
    github: GithubIcon,
    gitlab: GitlabIcon,
    azuredevops: AzureDevops,
    tailwind: TailwindIcon,
    bootstrap: BootstrapIcon,
    javascript: JavascriptIcon,
    typescript: TypescriptIcon,
    vercel: VercelIcon,
    adobeXD: AdobeXD,
    generalDb: GeneralDb
  
};

export const experiences = [
    {
        id: 3,
        company: 'Alfa Sistemi',
        logo: AlfaSistemiLogo,
        role: 'Mid FullStack Developer',
        duration: '08/2021 - Present',
        location: 'Buttrio, 🇮🇹',
        description: '',
        tech: [
            icons.javascript,
            icons.react,
            icons.spring,
            icons.git,
            icons.gitlab
        ],
        skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
    },
    {
        id: 2,
        company: 'Danieli Automation',
        logo: DanieliLogo,
        role: 'FrontEnd Developer Intern',
        location: 'Buttrio, 🇮🇹',
        duration: '02/2021 - 04/2021',
        description: '',
        tech: [
            icons.angular,
            icons.typescript,
            icons.adobeXD,
            icons.git,
            icons.azuredevops,
        ],
        skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
    },
    {
        id: 1,
        company: 'Clavister',
        logo: ClavisterLogo,
        role: 'Web Development Intern',
        location: 'Örnsköldsvik, 🇸🇪',
        duration: '05/2018 - 06/2018',
        description: '',
        tech: [icons.generalDb, icons.adobeXD, icons.aspnet, icons.git, icons.gitlab],
        skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
    },
];

const sections = Inter({ subsets: ['latin'] });
const CarrerCarousel = () => {
    return (
        <div className='carousel-slider career flex gap-4 md:gap-8 items-center justify-start 2xl:justify-center px-4 overflow-auto overscroll-none snap-proximity snap-x scroll-px-10'>
            {experiences.map((experience, index) => {
                return (
                    <div
                        key={experience.id}
                        id={`experience-${index}`}
                        className={`relative flex h-96 w-72 flex-col bg-[#294f38] flex-shrink-0 justify-self-center rounded-xl 
                            snap-always snap-start shadow-xl p-4
                            `}
                    >
                        <div className='flex justify-center -mt-10 mb-4'>
                            {experience?.logo ? (
                                <Image
                                    src={experience?.logo}
                                    alt='profile picture'
                                    className='h-12 object-contain z-20'
                                />
                            ) : null}
                        </div>
                        <div className='text-xl flex mb-2 text-white'>{experience.company}</div>
                        <span className={`text-lg ${sections.className}`}>{experience.role}</span>
                        <div className='flex justify-between h-12 items-center'>
                            <div className='flex text-sm gap-1 items-center'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-4 h-4'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                                    />
                                </svg>
                                <span className={`${sections.className}`}>{experience.location}</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-sm font-normal'>
                                    {experience.duration}
                                </span>
                            </div>
                        </div>
                        <div className='flex h-12 items-center justify-center gap-4 mb-2 text-xs'>
                            {experience.tech.map((technology, index) => (
                                <Image
                                    key={index}
                                    src={technology}
                                    alt='React'
                                    className='w-7 h-full object-contain rounded-md'
                                />
                            ))}
                        </div>
                        <div className='flex'>
                            <ul>
                                {experience.skills.map((skill, index) => (
                                    <li
                                        key={index}
                                        className='text-sm text-white px-2 py-1 flex'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                            className='w-4 h-4'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                        <span className='ml-2'>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='absolute bottom-2 text-sm self-end'>
                            <Link
                                href={`/career/${experience.id}`}
                                className='flex '
                            >
                                <span className='mr-2 cursor-pointer underline'>
                                    Read more
                                </span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    fill='currentColor'
                                    className='w-6 h-6'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CarrerCarousel;
