---
title: 爬虫开山urllib和requests
date: 2020-03-15
tags:
 - scrapy
 - spider
categories:
 - python
---

## 一、urllib

- urllib：是Python3中内置的HTTP请求库，不需要单独安装，urllib包含4个模块

- request: 最基本的HTTP请求模块，可以用来发送http请求，并接受服务的的响应数据，这个过程和在浏览器地址栏输入url，然后按下回车键一样

- error: 异常处理模块，如果出现请求错误，可以捕获这些异常，然后根据实际情况，进行重试或其他操作

- parse：工具模块，提供了很多处理url的api，比如拆分、解析、合并等

- robotsparser: 主要用来识别robot.txt文件，然后判断那些网站可以抓取，那些网站不可以抓取

### request(请求相关)

request模块主要负责构造和发起网络请求，并在其中添加Headers，参数等。 利用它可以模拟浏览器的请求发起过程。urllib最基本的操作就是发送http请求，而在urllib中一个urlopen就可以搞定发送请求。

- 用urllib发送一个get请求

```python
from urllib import request
response = request.urlopen(url='http://www.httpbin.org/get')
print(response.read().decode())
```

- urlopen第一个参数接收一个需要访问的url，默认的urlopen为get方法的请求，如果传入了data参数，那么urlopen会以post发送请求

```python
from urllib import request

data = bytes(json.dumps({'name': 'lopo', 'age': 18}), encoding='utf-8')
response = request.urlopen(url='http://www.httpbin.org/post', data=data)
print(response.read().decode())
```

- 发送一个带参数的get请求（红岭创投）

```jsx
data = {
  'type': '1',
  'id': '20092717-4539-9769-1799-090287056326'
}

param = parse.urlencode(data)

full_url = 'https://www.my089.com/disclosure/listMoreNews?'+param
print(full_url)
response = request.urlopen(full_url)
print(response.read().decode())
```

如果需要自定义请求头，那么需要就需要使用Rquests方法重新构建请求

```python
from urllib import request
from urllib import parse
import json

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36',
}

data_dict = {
    'from': 'zh', 'to': 'en', 'query': '学校', 'transtype': 'realtime', 'simple_means_flag': '3', 'sign': '674929.962368',
    'token': 'd5be4223957680b72a80ef4855948cd5', 'domain': 'common'
}
data_parse = parse.urlencode(data_dict)

data_bytes = bytes(data_parse, encoding='utf-8')

req = request.Request(url='https://fanyi.baidu.com/v2transapi?from=zh&to=en', data=data_bytes, headers=headers)
response = request.urlopen(req)
# decode:解码
print(json.loads(response.read().decode()))
```

### Request模块高级用法

- 代理：

    ```python
    from urllib.request import ProxyHandler, build_opener
    import urllib

    proxy_handler = ProxyHandler({"https": "118.171.162.212:8088",})

    opener = build_opener(proxy_handler)
    request = urllib.request.Request(method='GET', url='http://httpbin.org/ip')
    response = opener.open(request)
    print(response.read().decode())
    ```

- 操作Cookie

    1、获取cookie

    ```python
    import http.cookiejar
    import urllib.request

    cookie = http.cookiejar.CookieJar()
    handler = urllib.request.HTTPCookieProcessor(cookie)
    opener = urllib.request.build_opener(handler)
    response = opener.open('https://www.baidu.com')
    for item in cookie:
	print(item.name+"="+item.value)
    ```
    
    首先我们必须声明一个CookieJar对象，接下来就需要利用HTTPCookieProcessor来构造一个Handler，最后利用build_opener()方法构建出open()，最后在执行open函数。

    2、保存cookie

    ```python
import http.cookiejar, urllib.request
    
    cookie = http.cookiejar.MozillaCookieJar()
handler = urllib.request.HTTPCookieProcessor(cookie)
    opener = urllib.request.build_opener(handler)
    response = opener.open('https://www.baidu.com')
    cookie.save(filename='cookie.txt', ignore_discard=True, ignore_expires=True)
    ```
    
    只需要将CookieJar改为MozillaCookieJar即可

    3 ，读取cookie

    ```python
import http.cookiejar, urllib.request
    
    cookie = http.cookiejar.MozillaCookieJar()
cookie.load('cookie.txt', ignore_expires=True, ignore_discard=True)
    handler = urllib.request.HTTPCookieProcessor(cookie)
    opener = urllib.request.build_opener(handler)
    response = opener.open('http://www.baidu.com')
    print(response.read().decode())
    ```

### parse(解析模块)

- urlsplit()

用于解析链接

 #位置的标识符  代表网页中浏览器滚动条的位置

这个方法会对url进行解析，拆分出url的各个部分，这个方法包含了scheme、netloc、path、query、fragment属性，可通过这些属性获取对应部分的值

```python
from urllib import parse
# urlparse实现了url的识别和分段
result = parse.urlsplit("https://baidu.com/s?wd=python#comment")
print(result)
print(result.path)
print(result.query)
```

- urlunsplit()

urlunsplit和urlsplit相反，用于构造url，urlunsplit接收一个长度为5的可迭代对象：分别是协议、域名、路径、参数、位置

```python
data = ['http', 'www.baidu.com', '/s', 'wd=python', 'comment']
result = parse.urlunsplit(data)
print(result)
```

urlencode()和parse_qs()

urlencode用于构造url中的参数部分，可以将一个字典转换成get请求中的参数，与之相反的是parse_qs()和parse_qsl()

```python
base_url = 'https://www.baidu.com?'

params = {
    'name': 'lopo',
    'age': '18'
}

result = parse.urlencode(params)
print(base_url + result)
#################parse_qs 以字典形式返回
info = 'name=lopo&age=18'
rev_info = parse.parse_qs(info)
print(rev_info)

#################parse_qsl，返回元组的形式
rev_info2 = parse.parse_qsl(info)
print(rev_info2)
```

### error(异常处理)

urllib提供了异常处理模块，他们分别是URLError和HTTPError，HTTPError是URLError的子类，在这里不做过多的讲解，自作简单示范

- HTTPError，如果是request引发的错误都可以通过URLError，包含三个属性,code（状态码）headers(请求头)，reason(错误文本)

```python
try:
    rq = urllib.request.urlopen('https://blog.csdn.net/xc_zhou/article/details/aasd')
except HTTPError as e:
    print(e.code, e.headers, e.reason)
```

### robotparser（Robots协议解析）

利用urllib中的robotparser模块我们可以实现网站Robot协议的分析，我们简单了解下

Robot协议也称之为爬虫协议、机器人协议、全名 网络爬虫排除标准，作用是用来告诉爬虫，那些也页面可以抓取，那些页面不能抓取，通常在网站中有一个robot.txt文本文件，一般在网站根目录下

演示：简书、知乎

## 二、Requests

Requests是用python语言基于urllib编写的，开源的HTTP库 如果你学习过关于urllib库的使用，你就会发现，其实urllib还是非常不方便的，而Requests它会比urllib更加方便，可以节约我们大量的工作。（用了requests之后，你基本都不愿意用urllib了）一句话，requests是python实现的最简单易用的HTTP库，建议爬虫使用requests库。 默认安装好python之后，是没有安装requests模块的，需要单独通过pip安装。

### Requests请求

发送get请求和post请求

```python
base_url = 'http://httpbin.org/'

response = requests.get(base_url+'/get')
print(response.content.decode())

post_response = requests.post(base_url+'/post')
print(post_response.content.decode())

带参数的请求和设置timeout

```

带参数的请求和设置timeout

```python
import reuqests

payload = {'name': 'lopo','age': 18}

base_url = 'http://httpbin.org/'

get_response = requests.get(base_url+'/get', params=payload, timeout=10)
print(get_response.content.decode())

post_response = requests.post(base_url+'/post', data=payload, timeout=5)
print(post_response.content.decode())
```

自定义请求头

```python
import requests

# 了解httpbin.org，http测试网站

payload = {'name': 'lopo', 'age': 18}

base_url = 'http://httpbin.org/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
}

get_response = requests.get(base_url+'/get', params=payload, timeout=10, headers=headers)
print(get_response.content.decode())

post_response = requests.post(base_url+'/post', data=payload, timeout=5, headers=headers)
print(post_response.content.decode())
```

上传文件

```python
import requests

# 了解httpbin.org，http测试网站

payload = {'name': 'lopo', 'age': 18}

base_url = 'http://httpbin.org/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
}

file = {'file': open('C:\\Users\\lopo\\Desktop\\Snipaste_2020-09-09_16-35-57.jpg', mode='rb')}

post_response = requests.post(base_url+'/post', data=payload, timeout=5, headers=headers, files=file)
print(post_response.content.decode())
```

### Response中的常用属性

```python
print(post_response.text)       # 读取响应内容
print(post_response.content.decode())   # 以二进制的方式读取响应内容
print(post_response.json())     # 以json格式读取数据，如果返回的不是json数据就会报错

print(post_response.headers)    # 返回响应头的信息
print(post_response.status_code)    # 返回状态码
print(post_response.reason)     # 返回状态文本

print(post_response.request)    # 获取请求相关的信息，比如请求头post_response.request.headers

print(post_response.ok)         # 如果响应状态不是4开头或者5开头则返回True，否则返回False
```

### cookie与Session保存状态

在浏览网页的时过程中，我们经常会遇到需要登录的情况，有些页面只有登录之后才能访问，
而且登录之后可以连续访问很多次网站，但是有时候过一段时间就需要重新登录，还有以下网站在打开浏览器时就自动登录了，而且很长时间不会失效，这种情况又是为什么？这里其实涉及到会话和cookie的相关知识，现在就来学习一下cookie和session

Cookie使用场景：登录，记录在浏览器上的用户标识，有过期时间

http特点：无状态的，http无状态也就是说http协议对事物处理是没有记忆能力的，也就是服务器不知道客户端是什么状态，当我们向服务器发送请求后，服务器解析请求，然后返回对应的响应，服务器负责完成这个过程，而且这个过程是完全独立的，服务器解析完成后就断开了连接，再次发送请求到服务器时，服务器并不知道你是否已经请求了，为了解决这个问题，我们就需要使用到cookie：

cookie将会在你访问服务器的时候，服务器在你的客户端（浏览器）储存了一个凭证，并且保存在浏览器中，而且这个凭证也会保存在服务器中的数据库或缓存中，当你再次来访问的时候，只需要将这个凭证发送给服务器，服务器就能识别你之前是否来访问过

因此在爬虫过程中，有时候需要处理登录才能访问的页面时，我们一般会直接将登录成功后获取的cookie放在请求的请求头里面直接请求，而不必重新登录

Session场景：用于记录用户的行为，每当有一个用户访问服务器则分配一个id给他，通过sessionID来表示这个用户的操作，比如打电话，从拨号-接通-挂断电话这中间的一系列过程可以称为一个会话，

总结： cookie：就是把Cookie储存到浏览器中，浏览器关闭cookie就立即被删除， 持久cookie则会将cookie保存在客户端的硬盘中，关闭浏览器不会受到影响，下次可继续使用

     session：当客户端访问服务器时，服务器为客户端分配的临时id，服务器通过这个id记录这个客户端的一系列操作

乱码问题

### 配置代理ip

爬虫过程中配置代理是经常的，而在requests中配置代理比较简单

```python
import requests

response = requests.get('http://httpbin.org/ip', proxies={'http': 'http://12.123.12.15:8001'})
```

免费代理池爬虫  proxy_pool