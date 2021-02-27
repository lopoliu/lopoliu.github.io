# 第五课：实战打造selenium自动化爬虫

## 简介

web应用自动化测试、爬虫验证码处理，，可见即可爬

- 多浏览器支持：Firefox、Chrome、IE、Opera、Edge;
- 多平台支持：Linux、Windows、MAC;
- 多语言支持：Java、Python、Ruby、C#、JavaScript、C++；

## 环境搭建

### 在python中安装selenium

```shell
pip install selenium
```

### 下载浏览器对应版本的驱动

- firefox:  https://github.com/mozilla/geckodriver/tags

- chrome:  http://npm.taobao.org/mirrors/chromedriver/
- IE、Edge：https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
- Safari：不需要驱动直接运行

### 声明一个浏览器对象

``` python
browser = webdriver.Chrome()
```

## 基本操作

### 打开浏览器并启动一个页面

``` python
from selenium import webdriver

# 启动浏览器
browser = webdriver.Chrome()
# 打开网站
browser.get('https://www.baidu.com')
```

### css元素定位与查找

``` python
# xpath选择器
browser.find_element_by_xpath()
# css选择器
browser.find_element_by_css_selector()
```

### 针对输入框的点击、输入与清空

```python
# 输入
browser.find_element().send_keys()
# 点击
browser.find_element().send_keys()
# 清空
browser.find_element().send_keys()
```

### 获取网页源码

```python
browse.page_source
```

### 执行js

```python
browser.execute_script('window.alert("123123")')
time.sleep(3)
alert = browser.switch_to.alert
alert.dismiss()
```

### 隐式等待

```python
browser.implicitly_wait(10)
```

### 前后和后退

```python
browser.back()
browser.forward()
```

### 窗口新增和切换

```python
browser.execute_script('window.open()')
browser.switch_to_window(browser.window_handles[1])
browser.get('http://www.baidu.com')
browser.switch_to_window(browser.window_handles[0])
browser.get('http://www.bilibili.com')
# 关闭当前标签页
driver.close()
```

### 处理弹出窗

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<input id="alert" value="alert" type="button" onclick="alert('欢迎！请按确认继续！');"/>
<input id="confirm" value="confirm" type="button" onclick="confirm('确定吗？');"/>
<input id="prompt" value="prompt" type="button"
       onclick="var name = prompt('请输入你的名字:','请输入  你的名字'); document.write(name) "/>

</body>
</html>
```

```python
switch_to_alert      --定位弹出对话框
text                 --获取对话框文本值
accept()             --相当于点击“确认”
dismiss()            --相当于点击“取消”
send_keys("12from selenium import webdriver
import time

browser = webdriver.Chrome()

browser.get('file:///C:/Users/lopo/Desktop/%E5%85%AC%E5%BC%80%E8%AF%BE/%E6%BB%91%E5%9D%97%E7%A0%B4%E8%A7%A3/h1.html')
# browser.find_element_by_id('alert').click()
# time.sleep(2)
# alert = browser.switch_to.alert
# text = alert.text
# print(text)
# alert.accept()
# time.sleep(2)

# browser.find_element_by_id('confirm').click()
# alert = browser.switch_to.alert
# time.sleep(2)
# alert.accept()
# print('点击了确认')
# browser.find_element_by_id('confirm').click()
# time.sleep(2)
# alert.dismiss()
# print('点击了取消')
# time.sleep(2)

# browser.find_element_by_id('prompt').click()
# alert = browser.switch_to.alert
# time.sleep(2)
# alert.send_keys('阿三大苏打')
# time.sleep(3)

```

### 截屏

```python
from selenium import webdriver

browser = webdriver.Chrome()
browser.maximize_window()
browser.get('http://localhost/ec/upload/index.php')
browser.save_screenshot('b.png')
```

### 操作cookies，使用cookies进行登录

在这里需要注意，必须先进入页面删除了所有cookie再进行cookie写入操作，否则将抛出domain异常

```python
import json

x = ['123', '123', 'qweqwe']
with open('test.txt', 'w+') as f:
    f.write(json.dumps(x))

with open('test.txt', 'r') as d:
    data = d.read()
    data_list = json.loads(data)
```

### 配置无头浏览器

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless')

browser = webdriver.Chrome(options=chrome_options)
```

### 关闭当前标签页

``` python
browser.close()
```

### 关闭浏览器

```
browser.quit()
```

### 页面滚动

selenium本身不支持页面滚动，但是可以通过执行js代码来实现

```python
js_code = f"window.scrollTo(0,{end});"
browser.execute_script(js_code)
```

