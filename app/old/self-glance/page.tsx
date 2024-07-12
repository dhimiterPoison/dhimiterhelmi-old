import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = (await parent).openGraph?.images || [];
	const previousTitle = (await parent).title || '';
	const previousDescription = (await parent).description || '';

	return {
		title: `Self, your life at a glance - Dhimiter Helmi`,
		description: `Store your thoughts, ideas, and feelings in a safe place and let Self help you organizing your time so you can focus your energies more consciusly. ${previousDescription} `, //experience?.shortDescription,
		// openGraph: {
			// images: ['/some-specific-page-image.jpg', ...previousImages],
			// description: `${previousDescription} Key points of my experience in ${experience?.company}`, //experience?.shortDescription,
		// },
	};
}

const SelfGlance = () => {
	return <div>Self, your life at a glance</div>;
};

export default SelfGlance;
