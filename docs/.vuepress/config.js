module.exports = {
    base: '/',
    title: '学习记录文档',
    description: `魏亚飞个人文档`,
    head: [
        ['link', {rel: 'icon', href: `/ico/favicon.ico`}]
    ],
    repo: 'https://github.com/lewiscutey/blog',
    ga: '',
    serviceWorker: true,
    evergreen: true,
    markdown: {
        lineNumbers: true
    },
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //         }
    //     }
    // },
    themeConfig: {
        background: `/img/`,
        github: 'lewiscutey',
        logo: '/img/indexBc.png',
        accentColor: '#ac3e40',
        per_page: 6,
        date_format: 'yyyy-MM-dd HH:mm:ss',
        nav: [
            {
                text: 'JavaScript',
                items: [
                    {text: '30seconds', link: '/30seconds/base/Array'},
                ]
            },
            {text: '项目工程API', link: '/Vue/'},
            {
                text: 'Vue',
                items: [
                    {text: '学习笔记', link: '/blog/'},
                    {text: '项目组件', link: '/language/chinese'},
                    {text: 'TUI组件', link: '/language/japanese'},
                    {text: '项目框架', link: '/language/chinese'},
                    {text: '组件封装笔记', link: '/language/chinese'},
                    {text: '源代码分析', link: '/language/chinese'},
                    {text: 'webpack4笔记', link: '/language/chinese'},
                    {text: 'Vuepress笔记', link: '/language/chinese'},
                ]
            },
            {
                text: '分享',
                items: [
                    {text: 'JS读书总结(红宝书犀牛书)', link: '/language/chinese'},
                    {text: '项目JS常用函数', link: '/language/japanese'}
                ]
            },
            {
                text: '后端',
                items: [
                    {text: 'JS读书总结(红宝书犀牛书)', link: '/language/chinese'},
                    {text: '项目JS常用函数', link: '/language/japanese'}
                ]
            },
            {
                text: '前端',
                items: [
                    {text: 'css', link: '/language/chinese'},
                    {text: 'scss', link: '/language/japanese'},
                    {text: 'TypeScript', link: '/language/japanese'},
                ]
            },
        ],
        sidebar: {
            '/30seconds/': [
                {
                    title: '30seconds of ES6',
                    collapsable: false,
                    children: [
                        'base/Array',
                        'base/Function',
                    ]
                },
            ],
            '/Vue/': [
                {
                    title: '项目工程文件',
                    collapsable: false,
                },
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',

    },
}
