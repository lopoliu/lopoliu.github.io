module.exports = {
    "title": "波波波的blog",
    "description": "时间就是金钱，效率就是生命。",
    "dest": "docs",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "nav": [
            {
                "text": "首页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间轴",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "简历",
                "icon": "reco-message",
                "link": "/resume/",
            },
            {
                "text": "联系我",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/lopoliu",
                        "icon": "reco-github"
                    }
                ]
            }
        ],
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        // "friendLink": [
        //   {
        //     "title": "午后南杂",
        //     "desc": "Enjoy when you can, and endure when you must.",
        //     "email": "1156743527@qq.com",
        //     "link": "https://www.recoluan.com"
        //   },
        //   {
        //     "title": "vuepress-theme-reco",
        //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        //     "link": "https://vuepress-theme-reco.recoluan.com"
        //   }
        // ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "lopo",
        "authorAvatar": "/avatar.png",
        "record": "xxxx",
        "startYear": "2017"
    },
    "markdown": {
        "lineNumbers": true
    },
    plugins: [
        ['@vuepress/plugin-back-to-top', true],
        // [
        //     'vuepress-plugin-gotop-plus'
        // ],
    ]
}