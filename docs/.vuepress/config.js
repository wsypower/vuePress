module.exports = {
	base: '/',
	title: '天翼智慧城市',
	description: `智慧城管事业部文档`,
	head: [
		['link', { rel: 'icon', href: `/favicon.ico` }]
	],
	repo: 'https://github.com/lewiscutey/blog',
	ga: '',
	serviceWorker: true,
	evergreen: true,
	themeConfig: {
		background: `/img/`,
		github: 'lewiscutey',
		logo: '/img/logo.png',
		accentColor: '#ac3e40',
		per_page: 6,
		date_format: 'yyyy-MM-dd HH:mm:ss',
		nav: [
			{text: 'Blog', link: '/blog/'},
			{text: 'About', link: '/about/'},
			{text: 'CSDN', link: 'http://www.cnblogs.com/lewiscutey/'},
			{text: 'Github', link: 'https://github.com/lewiscutey'}
		],

         sidebarDepth : 2,
         lastUpdated: 'Last Updated',
	},
}
