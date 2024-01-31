import React from 'react';
import ShortPresentation from '../components/ShortPresentation';
import Link from 'next/link';

const AboutPage = () => {
	return (
		<div className='w-full flex-col px-4 py-8'>
			<ShortPresentation></ShortPresentation>
			<div className='prose prose-lg mx-auto text-justify text-white md:px-8'>
				<h2>So what?</h2>
				<p>
					Well i don&apos;t really know how to describe myself, but
					there is one <em className='underline'>Key</em> point about
					me:
				</p>
				<p>
					I&apos;m <em className='font-bold'>curious</em>.
				</p>
				<p>
					Being curious made me fall in love with code developing, as
					the young me wrote in the motivation letter for my{' '}
					<Link href='/career/clavister'>Erasmus Internship</Link>{' '}
					when i was 17:
				</p>
				<blockquote>
					I chose computer science because I wanted to learn
					programming and I love technology. <br /> After some time, I
					found out that programming is a way to create your personal
					world. You can do everything you want. In my opinion the
					only one limit is your fantasy.
				</blockquote>
				{/* <p>And at this day, I&apos;d say that this is still drives me to learn and create new things.</p> */}
				<p>
					<strong>(2019-2021)</strong> - I then specialized in
					Frontend & UX Development at ITS Alto Adriatico, because I
					find fascinating the psychology behind the human interaction
					with these little robots we use in our daily life and want
					to learn as much as possible to be able to create great
					products and experiences.
				</p>
				<p>
					<strong>(2021-2023)</strong> - My journey continues in{' '}
					<Link href='/career/alfa-sistemi'>Alfa Sistemi</Link>, where
					I found myself to face the "business world" of software
					development, the one where you have to deal with clients,
					quality of the product aaaand .... deadlines.
					<br />
				</p>
				<p>
					As imaginable, being my first time with those kind of
					responsibilities, it was a bit overwhelming at first, but I 

					This experience was a great opportunity to learn, grow and
					build a solid foundation for my future career. <br />
				</p>
			</div>
		</div>
	);
};

export default AboutPage;
