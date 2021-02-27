## 第一课：django快速入门

## Django简介

Django是一个由Python编写的具有完整架站能力的开源Web框架。使用Django，只要很少的代码，开发人员就可以轻松地完成一个正式网站所需要的大部分内容，并进一步开发出全功能的Web服务。并且django拥有自己的模板语言	



Django本身基于MVC架构，即Model（模型）+View（视图）+ Controller（控制器）设计模式，因此天然具有MVC的出色基因：开发快捷、部署方便、可重用性高、维护成本低等优点。



Django是一个全栈Web框架。所谓全栈框架，是指除了封装网络和线程操作，还提供HTTP请求和响应、数据库读写管理、HTML模板渲染等一系列功能的框架。你可以不太准确地理解为全栈工程师包办了前后端和数据库访问的所有开发工作，整个网站都是一个人搭建的。

## 课程内容概要

- django2.2简介与环境搭建
- 路由系统
- 视图层
- 模型层
- 表单类

## django安装与项目创建

### 安装django

```python
pip install django
```

### 创建项目

```python
django-admin startapp project
```

### 项目文件解析

project/

​			settings.py	项目配置文件

​			urls.py		   项目主路由系统

​			wsgi.py		  部署相关

manage.py			  项目管理工具入口，对项目的操作



项目运行命令

1，进入项目文件夹

2，运行命令

默认运行在本机8000端口

```python
python manage.py runserver
```

3，指定可访问的主机和端口

``` python
python manage.py runserver 0.0.0.0：9000
```

创建App

```python
python manage.py startapp news
```

app文件解析

​		init.py			 这是一个python包（不能在init中进行导入操作）

​		admin.py  	 用于将app注册到django的后台

​		apps.py  		用户将app注册到项目中

​		models.py 	当前app的模型层，与数据库交互

​		test.py			用于app的单元测试

​		views.py		 视图层，用户处理app的功能逻辑并于模型层交互

​		urls.py			子路由





## 通过Pycharm创建项目



使用一个apps文件夹归纳所有app



子路由和主路由通信

```
include()
```

尝试修改跟路由文件名



模拟百度