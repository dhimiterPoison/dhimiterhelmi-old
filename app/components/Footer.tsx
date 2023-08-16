import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='footer p-10 bg-base-200'>
			<div>
				{/* need to change this footer to a more sexy one */}
				<span className='footer-title z-0'>Contact me</span>
				{/* <Link className="link link-hover" href="https://www.instagram.com/dhimiter_helmi" target='_blank'>Pagina Instagram</Link> */}
				<Link
					className='link link-hover'
					href='https://www.linkedin.com/in/dhimiter-helmi-561955200'
					target='_blank'
					rel='noopener noreferrer'
				>
					LinkedIn
				</Link>
			</div>
			{/* <div>
	  <span className="footer-title z-0">Legal</span> 
	  <Link className="link link-hover" href="/privacy">Terms of use</Link>
	  <Link className="link link-hover" href="/privacy">Privacy policy</Link>
	  <Link className="link link-hover" href="/privacy">Cookie policy</Link>
	</div> */}
		</footer>
	);
};

export default Footer;
