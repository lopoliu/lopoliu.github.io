---
title: scrapy框架工作流
date: 2020-05-02
tags:
 - scrapy
 - spider
categories:
 - python
---

## scrapy框架简介

​	Scrapy是用纯Python实现一个为了爬取网站数据、提取结构性数据而编写的应用框架，用途非常广泛。
 框架的力量，用户只需要定制开发几个模块就可以轻松的实现一个爬虫，用来抓取网页内容以及各种图片，非常之方便。
 Scrapy 使用了 Twisted['twɪstɪd] 异步网络框架来处理网络通讯，可以加快我们的下载速度，不用自己去实现异步框架，并且包含了各种中间件接口，可以灵活的完成各种需求。
 Scrapy架构图



作者：小胡123
链接：https://www.jianshu.com/p/2f7d7386a440
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## scrapy框架安装与项目创建

1. 安装scrapy

   ```python
   pip install scrapy==1.6
   ```

2. 创建scrapy项目

   ```shell
   scrapy startproject ProNmae
   ```

3. 创建项目

   ```python
   scrapy genspider spiderName xxx.com
   ```

## scrapy框架五大组件

- Scrapy Engine(引擎): 负责Spider、ItemPipeline、Downloader、Scheduler中间的通讯，信号、数据传递等。

- Scheduler(调度器): 负责接收引擎发送过来的Request请求，并按照一定的方式进行整理排列，入队，当引擎需要时，交还给引擎。

- Downloader(下载器)：负责下载Scrapy Engine(引擎)发送的所有Requests请求，并将其获取到的Responses交还给Scrapy Engine(引擎)，由引擎交给Spider来处理，

- Spider（爬虫）：负责处理所有Responses,从中分析提取数据，获取Item字段需要的数据，并将需要跟进的URL提交给引擎，再次进入Scheduler(调度器)，

- Item Pipeline(管道)：负责处理Spider中获取到的Item，并进行进行后期处理（详细分析、过滤、存储等）的地方.

## scrapy框架两大中间件

- Downloader Middlewares(下载中间件)：你可以当作是一个可以自定义扩展下载功能的组件。

- Spider Middlewares(Spider中间件)：你可以理解为是一个可以自定扩展和操作引擎和Spider中间通信的功能组件（比如进入Spider的Responses;和从Spider出去的Requests）

## scrapy框架工作流

![Snipaste_2020-11-03_20-41-12](C:\Users\lopo\Desktop\Snipaste_2020-11-03_20-41-12.png)



## 蜘蛛文件详解

> spider.py
>
> ```python
> import scrapy
> 
> # 默认继承了scrapy.Spider
> class TowRoomSpiderSpider(scrapy.Spider):
>     # 蜘蛛的名字，整个项目中必须唯一
>     name = 'spider_name'
>     # 接受的域名，如果链接的域名不是xxx.com, 蜘蛛将不会抓取该链接
>     allowed_domains = ['xxx.com']
>     # 开始url，蜘蛛运行时第一次访问的链接
>     start_urls = ['xxx.com']
> 	
>     # 解析start_urls中链接返回的内容，
>     def parse(self, response, **kwargs):
>         pass
> ```

- 一个蜘蛛类必须包含name属性
- 蜘蛛类的name属性在整个项目中必须时唯一的不能重复
- 一个文件中不能存在多个蜘蛛类

### 重写start_urls

```python
import scrapy

# 默认继承了scrapy.Spider
class TowRoomSpiderSpider(scrapy.Spider):
    # 蜘蛛的名字，整个项目中必须唯一
    name = 'spider_name'
    # 接受的域名，如果链接的域名不是xxx.com, 蜘蛛将不会抓取该链接
    allowed_domains = ['xxx.com']
    # 开始url，蜘蛛运行时第一次访问的链接
    # start_urls = ['xxx.com']
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36"
    }
    
    def start_request(self):
        yield scrapy.Request('xxx.com', headers=self.headers)
	
    # 解析start_urls中链接返回的内容
    def parse(self, response, **kwargs):
        pass
```

### 爬虫启动

1，通过命令启动

```shell
scrapy crawl spider_name
```

2，通过蜘蛛文件启动

```python
if __name__ == '__main__':
    from scrapy import cmdline
    cmdline.execute(['scrapy', 'crawl', 'tow_room_spider'])
```

### 深度爬取

```python
import scrapy

class TowRoomSpiderSpider(scrapy.Spider):
    name = 'spider_name'
    allowed_domains = ['xxx.com']
    
    def start_request(self):
        yield scrapy.Request('xxx.com', headers=self.headers)
	
    # 解析start_urls中链接返回的内容
    def parse(self, response, **kwargs):
        links = response.xpath("//div/a/@href").extract()
        for link in links:
			yield scrapy.Request(link, callback=self.parse_detail)
            
    def parse_detail(self, response, **kwargs):
        title = response.xpath('//div/title/text()').extract_first()
```

### 请求传参

解决在不同页面收集参数

```python
meta传参
```

### 保存结果到MongoDB

```python
conn = pymongo.MongoClient('mongodb://127.0.0.1:27017/')
db = conn['db']
tab = db['tab']
```

