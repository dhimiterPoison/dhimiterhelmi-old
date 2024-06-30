import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://dhimiterhelmi.com',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://dhimiterhelmi.com/career/alfa-sistemi',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: 'https://dhimiterhelmi.com/career/danieli-automation',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.com/career/clavister',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.com/self-glance',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.com/balonade',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.com/natures-serenade',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.com/blog',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.com/about-me',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://dhimiterhelmi.com/r/natures-serenade',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	];
}
