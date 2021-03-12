(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{558:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"scrapy框架简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapy框架简介"}},[s._v("#")]),s._v(" scrapy框架简介")]),s._v(" "),t("p",[s._v("​\tScrapy是用纯Python实现一个为了爬取网站数据、提取结构性数据而编写的应用框架，用途非常广泛。\n框架的力量，用户只需要定制开发几个模块就可以轻松的实现一个爬虫，用来抓取网页内容以及各种图片，非常之方便。\nScrapy 使用了 Twisted['twɪstɪd] 异步网络框架来处理网络通讯，可以加快我们的下载速度，不用自己去实现异步框架，并且包含了各种中间件接口，可以灵活的完成各种需求。\nScrapy架构图")]),s._v(" "),t("p",[s._v("作者：小胡123\n链接：https://www.jianshu.com/p/2f7d7386a440\n来源：简书\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")]),s._v(" "),t("h2",{attrs:{id:"scrapy框架安装与项目创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapy框架安装与项目创建"}},[s._v("#")]),s._v(" scrapy框架安装与项目创建")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("安装scrapy")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("pip install scrapy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.6")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建scrapy项目")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("scrapy startproject ProNmae\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("创建项目")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("scrapy genspider spiderName xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"scrapy框架五大组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapy框架五大组件"}},[s._v("#")]),s._v(" scrapy框架五大组件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Scrapy Engine(引擎): 负责Spider、ItemPipeline、Downloader、Scheduler中间的通讯，信号、数据传递等。")])]),s._v(" "),t("li",[t("p",[s._v("Scheduler(调度器): 负责接收引擎发送过来的Request请求，并按照一定的方式进行整理排列，入队，当引擎需要时，交还给引擎。")])]),s._v(" "),t("li",[t("p",[s._v("Downloader(下载器)：负责下载Scrapy Engine(引擎)发送的所有Requests请求，并将其获取到的Responses交还给Scrapy Engine(引擎)，由引擎交给Spider来处理，")])]),s._v(" "),t("li",[t("p",[s._v("Spider（爬虫）：负责处理所有Responses,从中分析提取数据，获取Item字段需要的数据，并将需要跟进的URL提交给引擎，再次进入Scheduler(调度器)，")])]),s._v(" "),t("li",[t("p",[s._v("Item Pipeline(管道)：负责处理Spider中获取到的Item，并进行进行后期处理（详细分析、过滤、存储等）的地方.")])])]),s._v(" "),t("h2",{attrs:{id:"scrapy框架两大中间件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapy框架两大中间件"}},[s._v("#")]),s._v(" scrapy框架两大中间件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Downloader Middlewares(下载中间件)：你可以当作是一个可以自定义扩展下载功能的组件。")])]),s._v(" "),t("li",[t("p",[s._v("Spider Middlewares(Spider中间件)：你可以理解为是一个可以自定扩展和操作引擎和Spider中间通信的功能组件（比如进入Spider的Responses;和从Spider出去的Requests）")])])]),s._v(" "),t("h2",{attrs:{id:"scrapy框架工作流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scrapy框架工作流"}},[s._v("#")]),s._v(" scrapy框架工作流")]),s._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5Clopo%5CDesktop%5CSnipaste_2020-11-03_20-41-12.png",alt:"Snipaste_2020-11-03_20-41-12"}})]),s._v(" "),t("h2",{attrs:{id:"蜘蛛文件详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#蜘蛛文件详解"}},[s._v("#")]),s._v(" 蜘蛛文件详解")]),s._v(" "),t("blockquote",[t("p",[s._v("spider.py")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" scrapy\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认继承了scrapy.Spider")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TowRoomSpiderSpider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scrapy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Spider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 蜘蛛的名字，整个项目中必须唯一")]),s._v("\n    name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spider_name'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接受的域名，如果链接的域名不是xxx.com, 蜘蛛将不会抓取该链接")]),s._v("\n    allowed_domains "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始url，蜘蛛运行时第一次访问的链接")]),s._v("\n    start_urls "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解析start_urls中链接返回的内容，")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])]),s._v(" "),t("ul",[t("li",[s._v("一个蜘蛛类必须包含name属性")]),s._v(" "),t("li",[s._v("蜘蛛类的name属性在整个项目中必须时唯一的不能重复")]),s._v(" "),t("li",[s._v("一个文件中不能存在多个蜘蛛类")])]),s._v(" "),t("h3",{attrs:{id:"重写start-urls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重写start-urls"}},[s._v("#")]),s._v(" 重写start_urls")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" scrapy\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认继承了scrapy.Spider")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TowRoomSpiderSpider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scrapy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Spider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 蜘蛛的名字，整个项目中必须唯一")]),s._v("\n    name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spider_name'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接受的域名，如果链接的域名不是xxx.com, 蜘蛛将不会抓取该链接")]),s._v("\n    allowed_domains "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始url，蜘蛛运行时第一次访问的链接")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# start_urls = ['xxx.com']")]),s._v("\n    headers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User-Agent"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start_request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" scrapy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解析start_urls中链接返回的内容")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"爬虫启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#爬虫启动"}},[s._v("#")]),s._v(" 爬虫启动")]),s._v(" "),t("p",[s._v("1，通过命令启动")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("scrapy crawl spider_name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2，通过蜘蛛文件启动")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" scrapy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" cmdline\n    cmdline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("execute"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scrapy'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'crawl'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tow_room_spider'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"深度爬取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深度爬取"}},[s._v("#")]),s._v(" 深度爬取")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" scrapy\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TowRoomSpiderSpider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scrapy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Spider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'spider_name'")]),s._v("\n    allowed_domains "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("start_request")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" scrapy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解析start_urls中链接返回的内容")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        links "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//div/a/@href"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("extract"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" link "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" links"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" scrapy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("link"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" callback"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse_detail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse_detail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        title "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'//div/title/text()'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("extract_first"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"请求传参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求传参"}},[s._v("#")]),s._v(" 请求传参")]),s._v(" "),t("p",[s._v("解决在不同页面收集参数")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("meta传参\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"保存结果到mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存结果到mongodb"}},[s._v("#")]),s._v(" 保存结果到MongoDB")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("conn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pymongo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MongoClient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mongodb://127.0.0.1:27017/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" conn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'db'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ntab "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tab'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);