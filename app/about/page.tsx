import React from 'react';
import ShortPresentation from '../components/ShortPresentation';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

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
					the young me wrote in the motivation letter for my Erasmus{' '}
					<Link href='/career/clavister'>Internship at Clavister</Link>{' '}
					in Sweden when I was 17:
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
					find fascinating the psychology behind the Human interaction
					with these little robots we use in our daily life and want
					to learn as much as possible to be able to create great
					products and experiences. <br /><br />
					During this time I get to partecipate in 2 internships at {' '}
					<Link href='/career/danieli-automation'>Danieli Automation</Link>
					, where i get noticed by an external consultant i was working with in the Dev team.
				</p>
				<p>
					<strong>(2021-2023)</strong> - After being hired my journey continues then in{' '}
					<Link href='/career/alfa-sistemi'>Alfa Sistemi</Link>, where
					I found myself to face the &quot;business world&quot; of
					software development, the one where you have to deal with
					different clients, quality of the product aaaand .... deadlines.
					<br />
				</p>
				<p>
					I had the opportunity work in every phase of the projects,
					from the kickoff meetings with the stakeholders and project
					scope definition, costs estimation, schema definition and
					full stack development to the customer presentation demos.
				</p>
				<p>
					As imaginable, being my first time with those kind of
					responsibilities, it was a bit overwhelming at first, but I
					managed to get the hang of it and now I feel more confident
					in my skills. <br />
					This experience was a great opportunity to
					learn, grow and build a solid foundation for my future
					career.
				</p>
				<p>
					<strong>(2023, November)</strong> - As a result of a well thought decision,
					I left my job and moved in Amsterdam. <br />
					Why? I really appreciated how this city made me feel,
					i could sense the growth opportunities that living in a multicultural
					place like this could offer. <br />
					I enjoy 2 months of Dolcevita getting to know the city and the people
				</p>
				<p>
					<strong>(2024, January)</strong> - I start working on{' '}
					<Link href='/project/self-glance'>Self</Link>, a portal working as an extension of the human mind.
				</p>
				<p>
					<strong>(2024, 15 August)</strong> - I legally founded{' '}
					<Link href='/project/a-human-experience'>a Human Experience</Link>, my company. <br />
					Under this umbrella, I am developing Self and supporting the business by taking on freelance projects and jobs.
				</p>
			</div>
			<ContactForm></ContactForm>
		</div>
	);
};

export default AboutPage;
