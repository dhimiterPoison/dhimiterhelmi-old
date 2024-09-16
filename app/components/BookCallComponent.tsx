'use client'
import { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { BackIcon, XIcon } from '../helper/Icons';

let rootElement: HTMLElement | null;
const BookCallComponent = () => {

	useEffect(() => {
		rootElement = document.getElementById("call-schedule");

		return () => {
		}
	}, [])


	return (
		<div className="gigi w-full flex justify-center">
			<button type='button' className="main-cta btn upp bg-secondary px-6 py-3 border-white hover:bg-primary border-none text-slate-50 hover:text-slate-950 shadow-md  uppercase"
				onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}
			>
				<span>Book call</span>

			</button>
			<dialog id="my_modal_2" className="modal">
				<div className="modal-box text-center">
					<div className='pb-4'>
						<button type='button'
							className='flex gap-2'
							onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.close()}
						>
							<XIcon /> Cancel
						</button>
					</div>
					<InlineWidget
						url="https://calendly.com/dhimiter-helmi/30min"
					/>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button type='button'>close</button>
				</form>
			</dialog>

		</div>
	)
}

export default BookCallComponent