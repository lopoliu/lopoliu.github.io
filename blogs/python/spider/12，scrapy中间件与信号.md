# 第十二课：scrapy爬虫中间和信号

## 蜘蛛中间件







## 下载中间件

### 修改代理

```python
class Day10ProDownloaderMiddleware(object):
    @classmethod
    def from_crawler(cls, crawler):
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_request(self, request, spider):
		# 拦截请求，并且修改请求参数
        request.headers['User-Agent'] = UserAgent(use_cache_server=False).chrome()
        request.meta['proxy'] = ''
        return None

    def process_response(self, request, response, spider):
		# 拦截响应
        print('process_response')
        return response

    def process_exception(self, request, exception, spider):
		# 请求异常时被调用
        print('process_exception')
		# 可以返回一个修正后的请求
        pass

    def spider_opened(self, spider):
        spider.logger.info('Spider opened: %s' % spider.name)
```

### 对接selenium

```python
def process_request(self, request, spider):
        browse = webdriver.Chrome(executable_path='E:/网络爬虫vip课程/test/se/se/chromedriver.exe')
        browse.get(request.url)
        time.sleep(5)
        body_data = browse.page_source
        return HtmlResponse(url=request.url, body=body_data, request=request, encoding='utf-8')
```



## 信号

Scrapy使用信号来通知scrapy启动和关闭等事情的发生。可以在Scrapy项目中捕捉一些信号(使用 [extension](https://scrapy-chs.readthedocs.io/zh_CN/latest/topics/extensions.html#topics-extensions))来完成额外的工作或添加额外的功能，扩展Scrapy。

```python
from scrapy import signals
class Myextensions(object):
    def __init__(self):
        pass
    
    @classmethod
    def from_crawler(cls,crawler):
        obj=cls()
        crawler.signals.connect(obj.spider_opened,signal=signals.spider_opened)
        crawler.signals.connect(obj.spider_closed,signal=signals.spider_closed)
        return obj

    def spider_opened(self,spider):
        # 爬虫启动后执行
        print('opened')

    def spider_closed(selfs,spider):
        # 爬虫后执行
        print('closed')
```

