(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{563:function(s,a,t){"use strict";t.r(a);var e=t(6),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("scrapy框架本身不支持分布式，但是可以通过scrapy-redis实现分布式部署")]),s._v(" "),t("p",[s._v("可以理解为多个蜘蛛在多台电脑上同时运行，但是需要避免数据不重复")]),s._v(" "),t("p",[s._v("简而言之就是让多台电脑的上的蜘蛛程序共享一个调度其")]),s._v(" "),t("p",[t("strong",[s._v("概念")])]),s._v(" "),t("p",[s._v("需要搭建一个分布式的机群，然后在机群的每一台电脑中执行同一组程序，让其对某一个网站的数据进行联合分布爬取")]),s._v(" "),t("p",[s._v("原生scrapy框架本身是不可以实现分布式的、因为调度器数据不可以被共享")]),s._v(" "),t("p",[s._v("如何实现分布式？")]),s._v(" "),t("ul",[t("li",[s._v("scrapy+scrapy-redis实现分布式")])]),s._v(" "),t("p",[s._v("安装scrapy-redis")]),s._v(" "),t("blockquote",[t("p",[s._v("setting.py配置")]),s._v(" "),t("p",[s._v("添加一个去重容器类的配置，作用使用redis的set集合来储存请求的指纹数据，从而实现请求去重的持久化：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("DUPEFILTER_CLASS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scrapy_redis.dupefilter.RFPDupeFilter"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用scrapy-redis组件配置自己的调度器")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("SCHEDULER "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scrapy_redis.scheduler.Scheduler'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("配置调度器是否需要持久化，也就是说当爬虫结束了，要不要情空Redis中的请求队列和去重指纹的set，如果时True，表示要持久化储存，否则就情况数据")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("SCHEDULER_PERSIST "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用集合提取数据")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("REDIS_START_URLS_AS_SET "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在配置文件中配置Redis链接")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("REDIS_HOST "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),s._v("\nREDIS_PORT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\nREDIS_ENCODING "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")]),s._v("\nREDIS_PARAMS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("p",[s._v("运行scrapy分布式：")])])}),[],!1,null,null,null);a.default=r.exports}}]);