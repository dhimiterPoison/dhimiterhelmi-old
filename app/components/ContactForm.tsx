'use client';

import React from 'react';
import { sendMail } from '../actions/contactForm';
import { Todo } from '../helper/types';
import BookCallComponent from './BookCallComponent';

const ContactForm = () => {

	const submit = async (e: Todo) => {
		// e.preventDefault();

		const answer = await sendMail(e);
		console.log('answer', answer);
		window.location.href = answer.message;
	};

	return (
		<div className='flex w-full flex-col gap-4 px-4 py-16 text-center lg:w-2/3'>
			<div className='text-lg font-light leading-3'>
				Did you find my work interesting?
			</div>
			<div className='text-2xl md:text-3xl font-semibold  leading-10'>let&apos;s get in touch</div>
			<div className='text-lg font-light leading-8'>
				and create something awesome together!
			</div>
			<div className=" grid h-20 place-items-center">
				<BookCallComponent></BookCallComponent>
			</div>
			<div className="divider text-base">OR</div>
			<form
				action={submit}
				// action="mailto:dhimiter.helmi@gmail.com"
				className='flex flex-col gap-4 '
			>
				<div className='flex justify-between gap-4 pt-2'>
					<input
						id='subject'
						name='subject'
						type='text'
						placeholder='Subject'
						defaultValue="Hey, I'm interested in your services!"
						className='input input-bordered w-full font-semibold '
					/>
					<button
						type='submit'
						className='btn btn-primary text-lg'
						plausible-event-name='contact-form'
					>
						Send
					</button>
				</div>
				<textarea
					id='content'
					name='content'
					placeholder='Your message'
					className='textarea textarea-bordered h-32 w-full resize-y text-base font-normal'
				></textarea>
			</form>
			<div className='flex w-full flex-col border-slate-300 text-slate-300'>
				
				<div className='divider'>OR</div>
				
			</div>
			<ContactLinks size="md"></ContactLinks>
		</div>
	);
};

export default ContactForm;
