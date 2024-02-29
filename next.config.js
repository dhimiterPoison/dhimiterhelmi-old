/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible');
const { withContentlayer } = require('next-contentlayer')


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

module.exports = withContentlayer(withPlausibleProxy(nextConfig));
