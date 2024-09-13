// contentlayer.config.js

import { makeSource, defineDatabase } from 'contentlayer-source-notion';
import * as notion from '@notionhq/client';

const client = new notion.Client({ auth: process.env.NOTION_TOKEN });

export const Post = defineDatabase(() => ({
	name: 'Blog',
	databaseId: process.env.NOTION_BLOG_DATABASE_ID || '',
	query: {
		filter: {
			property: 'Status',
			status: {
				equals: 'Published',
			},
		},
	},
	properties: {
		date: {
			key: 'date',
			name: 'Date',
			required: true,
		},
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/posts/${post._id}`,
		},
	},
}));

export default makeSource({
	client,
	databaseTypes: [Post],
});
