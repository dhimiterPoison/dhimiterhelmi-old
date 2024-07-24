'use client'
import { useEffect, useState } from 'react'
import { InlineWidget, PopupModal } from 'react-calendly'

let rootElement: HTMLElement | null;
const BookCallComponent = () => {

	useEffect(() => {
		rootElement = document.getElementById("call-schedule");

		return () => {
		}
	}, [])


	return (
		<div className="gigi w-full flex justify-center">
			<button className="btn upp bg-secondary hover:bg-primary border-none text-slate-50 hover:text-slate-950 shadow-md  uppercase"
				onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}
			>
				Book call

			</button>
			<dialog id="my_modal_2" className="modal">
				<div className="modal-box">
					<InlineWidget
						url="https://calendly.com/dhimiter-helmi/30min"
					/>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>

		</div>
	)
}

export default BookCallComponent