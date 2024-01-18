import Image from 'next/image';
import React from 'react';
import BalonadeBGLarge from '../../public/images/balonade-card-bg-lg.png';
import Link from 'next/link';

const Balonade = () => {
	return (
		<div className='flex flex-col w-full text-white bg-base-100'>
			<div className='blog-cover-image'>
				<Image
					src={BalonadeBGLarge}
					alt='Balonade cover image'
					className='h-full object-cover rounded-xl'
				/>
				<Link className='esc-button' href="/#personal-projects">
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18 18 6M6 6l12 12'
						/>
					</svg>
				</Link>
			</div>
			<div className='px-4 prose-lg py-4 lg:px-20'>
				{/* <h3>Balonade Web App</h3> */}
				<h2>Balonade Web App</h2>
				<p>
					Best things happen casually. <br />I was helping some friends
					organizing the <u>Buttrio</u> 's summer sport torunament (Balonade),
					and we were discussing about how to manage teams subriptions.
				</p>
				<p>
					First idea was to build a form, but being honest, the result was a bit{' '}
					<u>clumsy</u>.
				</p>
				<p>Example of the form mentioned earlier</p>
				<p>
					Then I realized that, as a Frontend developer with a considerate eye
					for UX, i couldn't live with that. If I was a user and had to enroll
					the tournament using that form, i would have gone crazy.
					<br />
				</p>
				Situation:
				<ol>
					<li className=''>Not much time</li>
					<li>First time to launch something in production on my own</li>
					<li>Didn't know what tech stack to use</li>
				</ol>
				<p>GAAADAMIT (Why do i love putting myself in this situations)</p>
				<p>After some research, I decided to use the following tech stack:</p>
				<table>
					<thead>
						<tr>
							<th>Experience</th>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className='badge badge-primary font-semibold'>New</div>
							</td>
							<td>Next JS</td>
						</tr>
						<tr>
							<td>
								<div className='badge badge-secondary font-semibold' title='2 years experience'>
									2y exp
								</div>
							</td>
							<td>React</td>
						</tr>
						<tr>
							<td>
								<div className='badge badge-primary font-semibold'>New</div>
							</td>
							<td>Tailwind CSS</td>
						</tr>
						<tr>
							<td>
								<div className='badge badge-primary font-semibold'>New</div>
							</td>
							<td>Xata.io</td>
						</tr>
					</tbody>
				</table>
				<h3>Sketching time</h3>
				<p>
					Focus points:
					<ul>
						<li>One</li>
						<li>Two</li>
						<li>Three</li>
					</ul>
					--- Image ui sketch --- <br />
					I asked for some feedback from the organizing body and they were
					really hyped.
					<br /> I had my green light to start building.
				</p>
				<h3>Love and hate</h3>
				<p>
					Nextjs seemed a great choice in order to build and deploy both
					frontend and backend at light speed.
					<br />
					After a few tutorials, and some Bestemmie, i realized that they had
					just released the 13th version, and the tutorials were{' '}
					<strong>
						<u>outdated</u>.
					</strong>
				</p>
				<div className='flex w-full justify-center'>
					<Image
						src='https://media.tenor.com/VOf_IsXVKfsAAAAC/meme-elmo.gif'
						alt=''
						width={300}
						height={280}
						className='self-center'
					/>
				</div>
				<p>
					Ookay, never mind. I got it. After that i really loved NextJs and it
					Developer experience.
					<br />
					Also its <u>documentation</u> is really well explained and easy to
					follow.
				</p>
			</div>
		</div>
	);
};

export default Balonade;
