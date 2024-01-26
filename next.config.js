/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible');

const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.tenor.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = withPlausibleProxy()(nextConfig);
