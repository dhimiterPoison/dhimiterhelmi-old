'use client';
import { experiences } from '@/app/components/CarrerCarousel';
import React, { useEffect } from 'react';
let additionalScroll = 0;

const Skills = ({ slug }: { slug: string }) => {
	const notes = experiences.find((company) => company.slug === slug)?.skills;
	useEffect(() => {
		console.log('useEffect');

		window.onscroll = function () {
			const glowContainer = document.getElementsByClassName('snake-container');
			const line = document.getElementById('glow-line');
			if (!line) return;

			let winScroll = document.documentElement.scrollTop;

			const glowContainerHeight = glowContainer[0]?.getBoundingClientRect().height;
			const glowContainerTop = glowContainer[0]?.getBoundingClientRect().top;

			let glowScroll = 0;

			glowScroll = winScroll;

			if (window.document.documentElement.clientHeight - glowContainerTop < 100 ) {
				additionalScroll = window.document.documentElement.clientHeight / 2;
			}
			var scrolled = ((glowScroll - additionalScroll) * 100) / glowContainerHeight;

			if (scrolled < 100) line.style.height = scrolled + '%';
		};
	}, []);

	return (
		<div className='w-full'>
			<h2 className=' py-8 text-xl tracking-wider text-center'>Matured skills</h2>
			<div className='snake-container md:px-28 flex justify-center'>
				<div id='line'></div>
				<div id='glow-line' className='ease-linear duration-75'></div>
				<ul className='px-8 last:has-[:indent]:pb-4 lg:w-4/5 text-lg'>
					{notes?.map((note, index) => (
						<div
							key={index}
							className={`list-disc flex items-center gap-4 bg-base-100 rounded-lg my-2 ${
								note.type === 'indent' ? ' p-1 list-inside pl-12' : 'p-2'
							}`}
						>
							{note.type === 'indent' ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
									className='w-5 h-5 shrink-0'
								>
									<path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='w-6 h-6 shrink-0'
								>
									<path
										fillRule='evenodd'
										d='M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z'
										clipRule='evenodd'
									/>
								</svg>
							)}
							{note.message}
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Skills;
