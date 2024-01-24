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

import SwedenFlag from '../../public/flag-sweden.svg';
import ItalyFlag from '../../public/flag-italy.svg';

import AlfaSistemiLogo from '../../public/career/alfasistemi-logo.png';
import AlfaSistemiCover from '../../public/career/alfasistemi-cover.png';
import DanieliLogo from '../../public/career/danieli-logo.png';
import DanieliCover from '../../public/career/danieli-cover.svg';
import ClavisterLogo from '../../public/career/clavister-logo.jpg';
import ClavisterCover from '../../public/career/clavister-cover.png';
import LinkedinLogo from '../../public/linkedin-svgrepo-com.svg';

import Image from 'next/image';
import {LinkedinIcon, GlobeIcon } from '../helper/Icons';

const icons = {
	react: { name: 'React', icon: ReactIcon },
	nextjs: { name: 'Nextjs', icon: NextJSIcon },
	spring: { name: 'Spring Boot', icon: SpringIcon },
	angular: { name: 'Angular', icon: AngularIcon },
	aspnet: { name: 'Asp.Net', icon: AspNet },
	git: { name: 'Git', icon: GitIcon },
	github: { name: 'Github', icon: GithubIcon },
	gitlab: { name: 'Gitlab', icon: GitlabIcon },
	azuredevops: { name: 'Azure DevOps', icon: AzureDevops },
	tailwind: { name: 'Tailwind', icon: TailwindIcon },
	bootstrap: { name: 'Bootstrap', icon: BootstrapIcon },
	javascript: { name: 'Javascript', icon: JavascriptIcon },
	typescript: { name: 'Typescript', icon: TypescriptIcon },
	vercel: { name: 'Vercel', icon: VercelIcon },
	adobeXD: { name: 'Adobe', icon: AdobeXD },
	generalDb: { name: 'General DB', icon: GeneralDb },
};

export const experiences = [
	{
		id: 3,
		slug: 'alfa-sistemi',
		company: 'Alfa Sistemi',
		logo: AlfaSistemiLogo,
		cover: AlfaSistemiCover,
		profilePicture: "/career/alfasistemi/alfa-profile.jpg",
		role: 'Mid FullStack Developer',
		duration: '08/2021 - Present',
		location: 'Buttrio, Italy',
		shortLocation: 'Italy',
		flag: ItalyFlag,
		description: `Combining React + Java to power responsive data-driven single-page applications for different important customers in the Italian industry, allowing them to have a seamless digital transition, saving time and manage safely a considerate amount of money transactions.`,
		tech: [
			icons.javascript,
			icons.react,
			icons.spring,
			icons.git,
			icons.gitlab,
		],
		shortSkills: [
			'React + Java to power responsive single-page applications for different important customers in the Italian industry',
			'Project scope definition, fullstack developement, and fast-paced releases',
			'UX-focused, detail-oriented teamwork',
		],
		skills: [
			{
				type: 'text',
				message:
					'Coded using React.js on front end and Java Spring Boot for backend.',
			},
			{
				type: 'text',
				message:
					'Involved in all the projects phases, from the kickoff meetings with the stakeholders and project scope definition, costs estimation, schema definition and full stack development to the customer presentations.',
			},
			{
				type: 'text',
				message:
					'React + Java (Spring boot) to power responsive single-page applications for different important customers in the Italian industry:',
			},
			{ type: 'indent', message: 'thousands of procedures hosted' },
			{ type: 'indent', message: '10% of time saved for each user' },
			{
				type: 'indent',
				message:
					'considerate amount of money transactions safely registered and',
			},
			{
				type: 'indent',
				message:
					'brought value to our customers time with constant fast support and automated procedures',
			},
			{ type: 'indent', message: 'allowed seamless digital transition' },
			{
				type: 'indent',
				message: 'accessible on both desktop and mobile platforms',
			},
			{
				type: 'text',
				message:
					'Integrated enhancements to improve User Experience, smooth functionalities, and boost performance and provided constant application support and releases.',
			},
			{
				type: 'text',
				message:
					'Developed ability to collaborate in different teams to create innovative and scalable products, with considerate eye for user design and user experience and attention to details.',
			},
		],
		contacts: [
			{
				logo: <LinkedinIcon className='fill-white'/>,
				link: 'https://www.linkedin.com/company/alfa-sistemi-spa/',
				name: "Linkedin"
			},
			{
				logo: <GlobeIcon />,
				link: 'https://www.alfasistemi.net/en/',
				name: "Website"
			},
		],
	},
	{
		id: 2,
		slug: 'danieli-automation',
		company: 'Danieli Automation',
		logo: DanieliLogo,
		cover: DanieliCover,
		profilePicture: "/career/danieli/danieli-profile.jpg",
		role: 'FrontEnd Developer Intern',
		location: 'Buttrio, Italy',
		shortLocation: 'Italy',
		flag: ItalyFlag,
		duration: '02/2021 - 04/2021',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
		tech: [
			icons.angular,
			icons.typescript,
			icons.adobeXD,
			icons.git,
			icons.azuredevops,
		],
		shortSkills: [
			'Scrum methodology, weekly sprints',
			'UI/UX design with Adobe Xd',
			'Developed new features with Angular and Typescript',
			'CI/CD with Azure DevOps',
		],
		skills: [
			{
				type: 'text',
				message: 'Designed new pages and features with Adobe XD',
			},
			{ type: 'text', message: 'Scrum methodology, weekly sprints' },
			{ type: 'text', message: 'Developed the features using Angular' },
			{
				type: 'text',
				message:
					'Worked with Azure Devops to create user stories and version control (git)',
			},
		],
		contacts: [
			{
				logo: <LinkedinIcon className='fill-white'/>,
				link: 'https://www.linkedin.com/company/danieli-digi-met/',
				name: "Linkedin"
			},
			{
				logo: <GlobeIcon />,
				link: 'https://www.dca.it/en/',
				name: "Website"
			},
		],
	},
	{
		id: 1,
		slug: 'clavister',
		company: 'Clavister',
		logo: ClavisterLogo,
		cover: ClavisterCover,
		profilePicture: "/career/clavister/clavister-profile.jpg",
		role: 'Web Development Intern',
		location: 'Örnsköldsvik, Sweden',
		shortLocation: 'Sweden',
		flag: SwedenFlag,
		duration: '05/2018 - 06/2018',
		description: ``,
		tech: [
			icons.generalDb,
			icons.adobeXD,
			icons.aspnet,
			icons.git,
			icons.gitlab,
		],
		shortSkills: [
			'International work experience',
			'Learned how to work and comunicate in a team',
			'Eye-opening experience about the world of work',
		],
		skills: [
			{
				type: 'text',
				message: 'Eye-opening experience about the international world of work',
			},
			{
				type: 'text',
				message:
					'Collaborated in team to define project requirements and scope',
			},
			{
				type: 'text',
				message:
					'Conducted analysis to decide the features and functionalities to integrate into the project',
			},
			{
				type: 'text',
				message:
					'Designed and implemented the database structure, including table relationships and data management',
			},
			{
				type: 'text',
				message: 'Initiated the development process using ASP.NET Framework',
			},
		],
		contacts: [
			{
				logo: <LinkedinIcon className='fill-white'/>,
				link: 'https://www.linkedin.com/company/clavister/',
				name: "Linkedin"
			},
			{
				logo: <GlobeIcon />,
				link: 'https://www.clavister.com/',
				name: "Website"
			},
		],
	},
];

const sections = Inter({ subsets: ['latin'] });
const CarrerCarousel = () => {
	return (
		<div className='carousel-slider career flex gap-4 md:gap-8 items-center justify-start lg:justify-center px-4 py-6 md:p-12 overflow-auto overscroll-none snap-proximity snap-x scroll-px-10'>
			{experiences.map((experience, index) => {
				return (
					<div
						key={experience.id}
						id={`experience-${index}`}
						className={`carousel-card relative flex w-72 flex-col bg-[#294f38] flex-shrink-0 justify-self-center rounded-xl 
                            snap-always snap-start shadow-xl p-4 md:hover:scale-105 ease-in-out duration-200 
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
						<div className='text-xl flex mb-2 text-white'>
							{experience.company}
						</div>
						<span className={`text-base ${sections.className} font-normal`}>
							{experience.role}
						</span>
						<div className='flex justify-between h-16 items-center'>
							<div className='flex text-sm gap-2 items-center'>
								<Image
									src={experience.flag}
									alt={`${experience.shortLocation} flag`}
									title={`${experience.shortLocation} flag`}
									className='w-4 h-4'
								/>
								<span className={`font-normal ${sections.className}`}>
									{experience.shortLocation}
								</span>
							</div>
							<div className='flex flex-col'>
								<span className='text-sm font-normal'>
									{experience.duration}
								</span>
							</div>
						</div>
						<div className='flex h-12 items-center justify-center gap-4 mb-2 text-xs'>
							{experience.tech.map((technology, index) => (
								<div key={index} className='w-9 h-9 rounded-md bg-green-950'>
									<Image
										src={technology.icon}
										alt='React'
										title={technology.name}
										className='h-full w-full p-1 object-cover rounded-md'
									/>
								</div>
							))}
						</div>
						<div className=''>
							<ul>
								{experience.shortSkills.map((skill, index) => (
									<li key={index} className='text-sm text-white py-1 flex'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'
											className='w-4 h-4 shrink-0'
										>
											<path
												fillRule='evenodd'
												d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
												clipRule='evenodd'
											/>
										</svg>
										<span className='ml-2 font-normal'>{skill}</span>
									</li>
								))}
							</ul>
						</div>
						<div className='absolute bottom-2 text-sm self-end text-white'>
							<Link
								href={`/career/${experience.slug}`}
								className='flex items-center btn btn-sm border-base-100'
							>
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
								<span className='mr-2 cursor-pointer underline'>Read more</span>
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CarrerCarousel;
