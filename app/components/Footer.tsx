import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return <footer className="footer p-10 bg-base-200">
	<div>
	  <span className="footer-title z-0">Contact me</span> 
	  <Link className="link link-hover" href="https://www.instagram.com/dhimiter_helmi" target='_blank'>Pagina Instagram</Link>
	</div> 
	<div>
	  <span className="footer-title z-0">Legal</span> 
	  <Link className="link link-hover" href="/enroll/privacy">Terms of use</Link>
	  <Link className="link link-hover" href="/enroll/privacy">Privacy policy</Link>
	  <Link className="link link-hover" href="/enroll/privacy">Cookie policy</Link>
	</div>
  </footer>
};

export default Footer;