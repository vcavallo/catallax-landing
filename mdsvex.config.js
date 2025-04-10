import rehypeSlug from 'rehype-slug';

const config = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [],
	rehypePlugins: [rehypeSlug]
};

export default config;
