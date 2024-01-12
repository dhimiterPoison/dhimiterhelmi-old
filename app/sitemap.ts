import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://dhimiterhelmi.it',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://dhimiterhelmi.it/career/alfa-sistemi',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: 'https://dhimiterhelmi.it/career/danieli-automation',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.it/career/clavister',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.it/self-glance',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.it/balonade',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.it/natures-serenade',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.it/blog',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.it/about-me',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	];
}
