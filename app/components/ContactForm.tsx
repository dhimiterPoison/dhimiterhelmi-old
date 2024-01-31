"use client"

import React from 'react';
import { sendMail } from '../actions/contactForm';
import { Todo } from '../helper/types';

const ContactForm = () => {

	const submit = async (e:Todo) => {
		// e.preventDefault();
		
		const answer = await sendMail(e);
		console.log('answer', answer);
		window.location.href = answer.message;

	}

	return (
		<div className='flex flex-col w-full lg:w-2/3 py-16 px-8 gap-4 text-center'>
			<div className='text-lg font-light leading-3'>
				Did you find my work interesting?
			</div>
			<div className='text-2xl md:text-3xl font-semibold  leading-10'>Let&apos;s get in touch!</div>
			<div className='text-lg font-light leading-8'>
				Contact me and I&apos;ll reach you out ASAP.
				<br />
				let&apos;s create something awesome together!
			</div>
			<form 
				action={submit}
				// action="mailto:dhimiter.helmi@gmail.com" 
				className='flex flex-col gap-4 '
			>
				<div className='flex pt-2 justify-between gap-4'>
					<input
						id='subject'
						name='subject'
						type='text'
						placeholder='Subject'
						defaultValue="Hey, I'm interested in your services!"
						className='input input-bordered w-full font-semibold '
					/>
					<button type='submit' className='btn text-lg btn-primary' plausible-event-name="contact-form" >
						Send
					</button>
				</div>
				<textarea
					id='content'
					name='content'
					placeholder='Your message'
					className='textarea textarea-bordered w-full h-32 text-base font-normal resize-y'
				></textarea>
			</form>
		</div>
	);
};

export default ContactForm;
