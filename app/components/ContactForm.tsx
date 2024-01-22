"use client"

import React from 'react';
import { sendMail } from '../actions/contactForm';

const ContactForm = () => {

	const submit = async (e:any) => {
		// e.preventDefault();
		
		const answer = await sendMail(e);
		console.log('answer', answer);
		window.location.href = answer.message;

	}

	return (
		<div className='flex flex-col w-full py-16 px-8 gap-4 justify-start'>
			<div className='text-2xl font-semibold '>Want to get in touch?</div>
			<div className='text-lg font-normal'>
				Contact me and I&apos;ll reach you out ASAP
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
						value="Hey, I'm interested in your services!"
						className='input input-bordered w-full font-semibold '
					/>
					<button type='submit' className='btn text-lg '>
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
