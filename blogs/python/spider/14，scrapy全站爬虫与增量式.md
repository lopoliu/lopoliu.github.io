# 第十四课：scrapy全站爬取与增量式

## 简介

CrawlSpider其实是Spider的一个子类，除了继承到Spider的特性和功能外，还派生除了其自己独有的更加强大的特性和功能。其中最显著的功能就是”LinkExtractors链接提取器“。Spider是所有爬虫的基类，其设计原则只是为了爬取start_url列表中网页，而从爬取到的网页中提取出的url进行继续的爬取工作使用CrawlSpider更合适。

- 链接提取器：LinkExtractor
- 规则解析器：Rule

```python
# -*- coding: utf-8 -*-

from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
import scrapy.cmdline
from img_pro.items import RRCItem

# 网站 易班

class SunSpider(CrawlSpider):
    name = 'sun'
    start_urls = ['https://www.yiban.cn/square/index']

    rules = (
        Rule(LinkExtractor(allow=r'/square/index/page/\d+'), follow=True),
        Rule(LinkExtractor(allow=r'/school/index/id/\d+'), callback='parse_detail'),
    )

    def parse_detail(self, response):
        title = response.xpath('//h2/text()').extract_first()
        num = response.xpath('//span[@class="member-number"]/text()').extract_first()
        print(title, num)


if __name__ == '__main__':
    scrapy.cmdline.execute(['scrapy', 'crawl', 'sun'])
```



## 增量式

**核心：去重（通过redis集合实现）**

- 在发送请求之前判断这个URL之前是不是爬取过
- 在解析内容之后判断该内容之前是否爬取过
- 在写入存储介质时判断内容是不是在该介质中

**转md5后存入Redis**

```python
import hashlib

def str_to_md5(string: str):
    m = hashlib.md5()
    m.update(string.encode('utf-8'))
    md5 = m.hexdigest()
    return md5
```





