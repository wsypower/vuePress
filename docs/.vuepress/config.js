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
                    {text: 'JavaScript常用函数（ES6）', link: '/es6/fun/fun'},
                ]
            },
            {text: 'Leetcode', link: '/Leetcode/javascript/leetcode'},
            {text: 'Vue全家桶', link: '/Vue/'},
            {text: 'React全家桶', link: '/react/study/react'},
            {
                text: '分享',
                items: [
                    {text: 'JS读书总结(红宝书犀牛书)', link: '/language/chinese'},
                    {text: '项目JS常用函数', link: '/language/japanese'}
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
            '/es6/': [
                {
                    title: 'JavaScript常用函数（ES6）',
                    collapsable: false,
                    children: [
                        'fun/fun',
                    ]
                },
            ],
            '/Leetcode/': [
                {
                    title: 'Leetcode',
                    collapsable: false,
                    children: [
                        'javascript/leetcode',
                    ]
                },
            ],
            '/Vue/': [
                {
                    title: '项目工程文件',
                    collapsable: false,
                },
            ],
            '/react/': [
                {
                    title: 'React学习',
                    collapsable: false,
                    children: [
                        'study/react',
                    ]
                },
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',

    },
}
