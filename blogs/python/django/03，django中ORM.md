# 初识Django中的ORM

## 什么是ORM

- **`ORM`** 全拼`Object-Relation Mapping`.
- 中文意为 **`对象-关系映射`**.可以理解为代码与数据库的映射，通过代码实现数据库的操作，而不需要使用原生sql语句
- 在ORM中，一个模型类即表示数据库中的一张数据表，模型类中的属性可以理解为数据库中的字段
- 在`MVC`/`MVT`设计模式中的`Model`模块中都包括`ORM`

## ORM优势

（1）只需要面向对象编程, 不需要面向数据库编写代码.

- 对数据库的操作都转化成对类属性和方法的操作.
- 不用编写各种数据库的sql语句.

（2）实现了数据模型与数据库的解耦, 屏蔽了不同数据库操作上的差异.

- 不在关注用的是`mysql`、`oracle`...等.
- 通过简单的配置就可以轻松更换数据库, 而不需要修改代码.

## 配置数据库

配置项目的数据库

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'dj',
        'USER': 'root',
        'PASSWORD': 'root',
        'PORT': 3306,
        'CHARSET': 'utf8',
    }
}
```

因为mysqldb不支持python3，需要使用pymysql代替

- 安装pymysql

  ```shell
  pip install pymysql
  ```

- 替换mysqldb为pymysql

  /proNmae/init.py文件中

  ```python
  import pymysql
  pymysql.install_as_MySQLdb()
  ```

## 编写一个模型类

```python
from django.db import models

# Create your models here.
class UserModels(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=200)
```

## 注册app到项目

如果app与模型层需要进行交互，那么必须将app注册安装到项目中

在settings.py中配置

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'apps.login',
]
```

生成模型文件

```shell
python manage.py makemigrations
```

创建数据表

```python
python manage.py migrate
```

如果需要修改模型中的字段，则需要再次运行这两条命令

```python
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=128)
    password = models.CharField(max_length=128)
    email = models.EmailField(blank=True)
```

```shell
python manage.py makemigrations
```

```shell
python manage.py migrate
```

## 动态登录实现

```python
def login(request):
    if request.method == 'GET':
        return render(request, 'login.html',)
    elif request.method == 'POST':
        u = request.POST.get('username')
        p = request.POST.get('password')
        check = models.User.objects.filter(username=u).first()
        if check:
            if check.password == p:
                return redirect('/index/')
        return render(request, 'login.html', context={'tips': '用户名或密码错误'
```

## 模板中使用url反转

```
<a href={% url 'account:signup' %}>前往注册</a>
```

## 注册app到admin

```python
admin.site.register(models.Account)
```

## 创建超级用户

```python
python manage.py createsuperuser
```

浏览器访问:  http://127.0.0.1:8000/admin
