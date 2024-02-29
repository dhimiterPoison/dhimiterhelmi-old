// @ts-check

const NotionParse = require('@kodaps/notion-parse');
const dotenv = require('dotenv')

dotenv.config({ path: `.env.local` })


const go = async () => {
	console.log('Start',  process.env.NODE_ENV, process.env.NOTION_TOKEN);
	if (process.env.NOTION_TOKEN && process.env.NOTION_BLOG_DATABASE_ID) {
		await NotionParse.parseNotion(process.env.NOTION_TOKEN, 'content', [
			{
				databaseId: process.env.NOTION_BLOG_DATABASE_ID,
				contentType: 'Blog',
			},
		]);
	} else {
		console.log('Please set NOTION_TOKEN in .env');
	}
};

go().then(() => {
	console.log('Done');
});
