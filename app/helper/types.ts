import { StaticImageData } from "next/image";

export type Experience = {
	id: number;
	slug: string;
	company: string;
	logo: StaticImageData;
	cover: string;
	role: string;
	duration: string;
	location: string;
	shortLocation: string;
	flag: string;
	description: string;
	tech: {
		name: string;
		icon: string;
	}[];
	skills: string[];
	contacts?: {
		logo: string;
		link: string;
	}[];
};