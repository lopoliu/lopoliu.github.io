# 第十六课：实例讲解分布式爬虫

## 简介

scrapy框架本身不支持分布式，但是可以通过scrapy-redis实现分布式部署

可以理解为多个蜘蛛在多台电脑上同时运行，但是需要避免数据不重复

简而言之就是让多台电脑的上的蜘蛛程序共享一个调度其

**概念**

需要搭建一个分布式的机群，然后在机群的每一台电脑中执行同一组程序，让其对某一个网站的数据进行联合分布爬取



原生scrapy框架本身是不可以实现分布式的、因为调度器数据不可以被共享



如何实现分布式？

- scrapy+scrapy-redis实现分布式

安装scrapy-redis



> setting.py配置
>
> 添加一个去重容器类的配置，作用使用redis的set集合来储存请求的指纹数据，从而实现请求去重的持久化：
>
> ```python
> DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"
> ```
>
> 使用scrapy-redis组件配置自己的调度器
>
> ```python
> SCHEDULER = 'scrapy_redis.scheduler.Scheduler'
> ```
>
> 配置调度器是否需要持久化，也就是说当爬虫结束了，要不要情空Redis中的请求队列和去重指纹的set，如果时True，表示要持久化储存，否则就情况数据
>
> ```python
> SCHEDULER_PERSIST = True
> ```
>
> 使用集合提取数据 
>
> ```python
> REDIS_START_URLS_AS_SET = True
> ```
>
> 在配置文件中配置Redis链接
>
> ```python
> REDIS_HOST = '127.0.0.1'
> REDIS_PORT = 6379
> REDIS_ENCODING = 'utf-8'
> REDIS_PARAMS = {'password': ''}
> ```

运行scrapy分布式：







