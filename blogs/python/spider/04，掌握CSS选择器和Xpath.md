---
title: 掌握CSS选择器和Xpath
date: 2020-03-19
tags:
 - scrapy
 - spider
categories:
 - python
---

## 一、CSS选择器

### 简介

CSS是前端中的一个重要的内容,主要负责的是前端内容的样式美化,但是想要让页面中的标签变样子,得先通过一定的手段找到页面标签元素,才可以控制其样式,这个找元素的手段,在CSS中叫做选择器,常见的选择器有标签选择器(tagname),ID选择器(#id),类名选择器(.classname):

id选择器: 通过id属性值来选择页面元素,一般id属性的值在页面上是唯一的所以,使用id选择器能够唯一的确定页面的元素

class选择器 :通过标签的class属性中指定的类名选择页面元素,由于class属性中可以同时指定多个类名,所以每次只能指定一个类名;同时由于不同标签可能有相同的类名,所以类名选择器选中的元素一般也是多个

标签选择器: 通过页面的标签名选择页面元素,由于页面标签一般都是重复的,所以使用标签选择器选中的元素一般是多个标签组成

#### 在python中使用css选择器

安装parsel:

pip install parsel

```python
from parsel import Selector

html = Selector(text=html)
```

### 基本使用

```python
import requests
from parsel import Selector

response = requests.get('http://localhost/ec/upload/index.php')
result = response.content.decode()

html = Selector(result)
# 获取页面标题
# ::text表示提取内容
# extract表示提取所有
print(html.css('title::text').extract()) 
```

1，class选择器，ECshop首页销量排行

```python
print(html.css('.top10List').extract())
```

2，id选择器，ECshop首页品牌链接

```python
print(html.css('#brands').extract())
```

3，标签选择器

```python
print(html.css('li').extract())
```

4，同时选择两个标签

```python
for i in html.css('li, a').extract():
    print(i)
```

5，选择一个标签内的所有指定标签, ECshop首页分类树

```python
print(html.css('category_tree a').extract())
```

6，选择指定父标签下的所有指定子级标签

```python
print(html.css('#category_tree > dl > dd > a').extract())
```

7，选择一个元素后的另一个同级元素 Ecshop首页手机分类

```python
print(html.css('dt + dd').extract())
```

8，选择带有指定属性的元素

```python
print(html.css('[title]').extract())
```

9，选择属性指定值的元素

```python
print(html.css('[src="images/200905/thumb_img/9_thumb_G_1241511871555.jpg"]').extract())
```

10，属性包含指定的值  ecshop商店公告

```python
print(html.css("[class~='boxCenterList']").extract())
```

11，选择指定属性以指定值开头的所有元素

```python
print(html.css("[class~='boxCenterList']").extract())
```

12，选取最后一个元素

```jsx
last-child()
```

13，选择指定位置的元素

```jsx
nth-child(1)
```

## 二、Xpath

### 简介

XPath 是一门在 XML 文档中查找信息的语言。XPath 可用来在 XML 文档中对元素和属性进行遍历

在Xpath中，标签被称为节点

### 基本使用

一、常用的路径表达式：

1，从根节点选取，根节点就是html的父亲，所以根节点之有html一个子节点

```python
print(html.xpath('/div').extract())
print(html.xpath('/html').extract())
```

2，选取所有的节点，不考虑位置

```python
print(html.xpath('//li').extract())
```

3，选取节点名的所有子节点

```python
print(html.xpath('//head').extract())
```

4，选取当前节点，默认为根节点

```python
print(html.xpath('.').extract())
```

5，选择当前节点的上一个节点

```python
print(html.xpath('//head/..').extract())
```

6，获取属性

```python
print(html.xpath('/html/body/div[1]/@class').extract())
```

### 谓词

被嵌在方括号内，用来查找某个特定的节点或包含某个制定的值的节点

7，选取body下的第一个div节点

```python
print(html.xpath('/html/body/div[1]').extract())
```

8，选取body下最后一个div节点

```python
print(html.xpath('/html/body/div[last()]').extract())
```

9，选取body下倒数第二个div节点

```python
print(html.xpath('/html/body/div[last()-1]').extract())
```

10，选取所有带有href属性的a节点

```python
print(html.xpath('//a[@href]').extract())
```

11，选取所有id属性为mallNews的div节点

```python
print(html.xpath('//div[@id="mallNews"]').extract())
```

### 通配符（表达式）

* 表示任意

选取div下的所有子节点

```python
print(html.xpath('//div/*').extract())
# 等价于
print(html.xpath('//div').extract())
```

选取所有带属性的div节点

```python
print(html.xpath('//div[@*]').extract())
```

### 功能函数

contains

获取站内快讯节点下的内容

```python
print(html.xpath('//div[contains(@class, "NewsList")]').extract())
```

and

条件

```python
print(html.xpath('//form[contains(@id, "searchForm") and contains(@name, "searchForm")]').extract())
```

text()

```python
print(html.xpath('//form[contains(@id, "searchForm") and contains(@name, "searchForm")]').extract())
```

五、提取数据

提取节点内的文本

```python
print(html.xpath('//p[contains(text(), "咨询电话")]/text()').extract())
```

提取节点内的属性

```python
print(html.xpath('//div[@class="goodsItem"]/a/img/@src').extract())
```