---
title: scrapy进阶item和pipelines使用
date: 2020-05-08
tags:
 - scrapy
 - spider
categories:
 - python
---


## 终端指令保存文件

```shell
scrapy crawl 爬虫名称 -o xxx.json
scrapy crawl 爬虫名称 -o xxx.xml
scrapy crawl 爬虫名称 -o xxx.csv
```

## item作用

用于定义数据结构

## pipelines作用

用于编写持久化代码

### 保存本地文件

```python
class LianjiaFilePipeline:
    f = None
    file = 'data.txt'

    def open_spider(self, spider):
        self.f = open(self.file, 'a+', encoding='utf-8')
        print(f'open file {self.file}')

    def process_item(self, item, spider):
        info = {
            'title': item['title'],
            'price': item['price'],
            'house_type': item['house_type'],
						'floor': item['floor']
            'size': item['size'],
            'structure': item['structure'],
        }
        self.f.write(json.dumps(info, ensure_ascii=False) + '\n')
        return item

    def close_spider(self, spider):
        self.f.close()
        print(f'closed file {self.file}')
```

### 保存到Mysql

```python
class LianjiaMysqlPipeline:
    db = None
    cousor = None

    def open_spider(self, spider):
        # 爬虫启动时连接mysql数据
        self.db = pymysql.connect('127.0.0.1', 'root', 'root', 'test', charset='utf8')
        self.cousor = self.db.cursor()
        print('MySQL service connected')

    def process_item(self, item, spider):
        # 储存数据到mysql
        sql = """INSERT INTO `test`.`tow_room`(`title`, `price`, `floor`, `house_type`, `size`, `structure`) 
        VALUES ("{}", "{}", "{}", "{}", "{}", "{}")""".format(
            item['title'], item['price'], item['floor'], item['house_type'], item['size'], item['structure']
        )
        self.cousor.execute(sql)
        return item

    def close_spider(self, spider):
        # 断开mysql连接,并提交
        self.db.commit()
        self.db.close()
        print('mysql server closed')
```

### 保存到Mongodb

```python
class LianjiaMongoDBPipeline:
    tb = None
    my_client = None

    def open_spider(self, spider):
        # mongodb客户端连接服务
        self.my_client = pymongo.MongoClient("mongodb://localhost:27017/")
        print('MySQL service connected')
        db = self.my_client['test']
        self.tb = db['tow_room']

    def process_item(self, item, spider):
        # 保存数据
        info = {
            'title': item['title'],
            'price': item['price'],
            'floor': item['floor'],
            'house_type': item['house_type'],
            'size': item['size'],
            'structure': item['structure'],
        }
        self.tb.insert_one(info)
        return item

    def close_spider(self, spider):
        # 断开db连接
        self.my_client.close()
        print('mysql server closed')
```

### 保存图片

```python
# 获取当前目录绝对路径
PROJECT_DIR = os.path.abspath(os.path.dirname(__file__))
# 获取images存储路径
IMAGES_STORE = os.path.join(PROJECT_DIR, 'images')


import scrapy
from scrapy.pipelines.images import ImagesPipeline


class ImgProPipeline(ImagesPipeline):
    def get_media_requests(self, item, info):
        yield scrapy.Request(item.get('src'))

    def file_path(self, request, response=None, info=None):
        return request.url.split('/')[-1]

    def item_completed(self, results, item, info):
        return item
```

