// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';

export const Image = defineNestedType(() => ({
	name: 'Image',
	fields: {
		src: { type: 'string', required: true },
		alt: { type: 'string', required: false },
		width: { type: 'number', required: true },
		height: { type: 'number', required: true },
	},
}));

export const Blog = defineDocumentType(() => ({
	name: 'Blog',
	filePathPattern: `**/*.md`,
	fields: {
		title: { type: 'string', required: true },
		tags: { type: 'list', of: {type: 'string'}, required: true },
		cover: { type: 'nested', of: Image, required: true },
		date: { type: 'date', required: true },
		enabled: { type: 'boolean', required: true },
		location: { type: 'string', required: true },
		slug: { type: 'string', required: true },
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/project/${post._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({ contentDirPath: 'content', documentTypes: [Blog] });
