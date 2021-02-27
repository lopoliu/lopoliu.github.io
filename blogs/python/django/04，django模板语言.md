---
title: django模板语言
date: 2019-04-01
tags:
 - django
 - web开发
categories:
 - python
---

## 加载静态文件

```html
# html文件开头写入
{% load static %}

# head中写入
<link rel="stylesheet" href="{% static 'css/style.css' %}">

# css中
a{
    text-decoration: none;
}
```

## 处理字符串变量

``` python
def temp_fun(request):
    date = time.ctime()
    return render(request, 'temp_test.html', context={'date': date,})
```

```html
<h3>当前时间: {{ date }}</h3>
```

## 处理列表

```python
def temp_fun(request):
    language = ['python', 'java', 'c++', 'golang', 'objective-C']
    return render(request, 'temp_test.html', {'language': date},)
```

```html
<ul>
    # 遍历列表
    {% for item in language %}
        <li>{{ item }}</li>
    {% endfor %}
</ul>
# 列表取值
<p>{{ language.0 }}</p>
<p>{{ language.1 }}</p>
<p>{{ language.2 }}</p>
<p>{{ language.3 }}</p>

```

## 处理字典

```python
def temp_fun(request):
    info = {'name': 'lopo', 'age': 18, 'birth': '2002-12-12'}
    return render(request, 'temp_test.html', {'info': info})
```

```html
{% for k,v in info.items %}
    <p>{{ k }}: {{ v }}</p>
{% endfor %}
```

## 处理对象

```python
class Student(object):
    def __init__(self, name, age, classes):
        self.name = name
        self.age = age
        self.classes = classes

    def info(self):
        s = f'我叫{self.name}, 今年{self.age}岁, 我是{self.classes}班级的'
        return s


def temp_fun(request):
    t1 = Student('lopo', 18, 'python-21期')
    return render(request, 'temp_test.html', {'t': t1})

```

```html
<p>姓名：{{ t.name }}</p>
<p>年龄：{{ t.age }}</p>
<p>班级：{{ t.classes }}</p>
<p>{{ t.info }}</p>
```

## 处理动态路径

```python
path('index', views.index, name='index'),
path('news/<int:n_id>/', views.news, name='news')
```

```html
<p><a href={% url "temp:index" %}>点我跳转到index</a></p>
<p><a href={% url "temp:news" 1 %}>点我跳转news详情页</a></p>
```

## 条件判断

```python
def temp_fun(request):
    t1 = 9
    return render(request, 'temp_test.html', {'t': t1})
```

```html
{% if t > 10 %}
    <p>t大于10</p>
{% elif t < 10 %}
    <p>t小于10</p>
{% else %}
    <p>t等于10</p>
{% endif %}
```

## 母版

### 一、继承

```html
### master.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
{% block body %}
    我是母版的body
{% endblock %}
</body>
</html>
```

```html
### slave.html
{% extends 'mastr.html' %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
{% block body %}
我是子版，我替换了母版的body内容
{% endblock %}
</body>
</html>
```

### 二、引用

```
### master.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
{% block body %}
    我是母版的body
{% endblock %}
</body>
</html>
```

```
### slave.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
{% include 'mastr.html' %}
<h1>我是子版， 我引用了母版</h1>
</body>
</html>
```







