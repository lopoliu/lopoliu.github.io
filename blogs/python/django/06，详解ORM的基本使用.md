# 详解ORM的基本使用

## 一、ORM的字段

### 将数据库设置为mysql

```python
class Student(models.Model):
    s = (
        ('1', '男'),
        ('2', '女')
    )
    s_id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=64, null=True)  # varchar(64)
    age = models.IntegerField(blank=True)
    sex = models.CharField(max_length=10, choices=s, default=1)
    # 新增数据时保存当前时间
    # create_time = models.DateField(auto_now_add=True, default='2018-12-21')
    # # 新增和编辑数据时保存当前时间
    # update_time = models.DateField(auto_now=True, default='2018-12-21')
    is_vip = models.BooleanField(default=False)
    my_field = MyField(max_length=5)
    classes = models.ForeignKey('Classes', on_delete=models.CASCADE)
```

### 约束

唯一、主键

```
s_id = models.AutoField(primary_key=True, unique=True)
```

默认值

```
is_vip = models.BooleanField(default=False)
```

可以为null

```
name = models.CharField(max_length=64, null=True)  # varchar(64)
```

可以为空白

```
age = models.IntegerField(blank=True)
```

选择

```
s = (('1', '男')， ('2', '女'))
sex = models.CharField(max_length=10, choices=s, default=1)
```

### 常用字段

AutoField

```
自增，一般用于数据表的住建
s_id = models.AutoField(primary_key=True)
如果定义模型的字段时手动设置了primary_key django则不会自动创建
```

CharField

```
字符串类型 相当于数据库中的varchar(64)， max_length必填
name = models.CharField(max_length=64)
```

IntegerField

```
age = models.IntegerField()
用于定义整数类型，有范围限制
```

DateField（日期）

```
# 新增数据时保存当前时间
create_time = models.DateField(auto_now_add=True)
# 新增和编辑数据时保存当前时间
update_time = models.DateField(auto_now=True)
# 不能同时指定
```

DateTimeField（日期与时间）

```python
与DateField使用方法一致
```

BooleanField（布尔类型）

```
is_vip = models.BooleanField(default=False)
```

### 其他字段

forms中包含了djangoORM中所有内置的字段

```python
from django.forms import Field
```

### 自定义字段

```python
class MyField(models.Field):
    def __init__(self, max_length, **kwargs):
        super(MyField, self).__init__(max_length=max_length, **kwargs)

    def db_type(self, connection):
        return f"char({self.max_length})"
```

```
my_field = MyField(max_length=5)
```

## 二、数据表参数

```python
class Classes(models.Model):
    """班级表"""
    c_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=32)

    class Meta:
        # 数据库中生成的表名， app名称_类名
        db_table = 'classes'
        # admin中显示的表名称
        verbose_name = '班级表'
        # verbose_name的复数
        verbose_name_plural = '所有班级'

    def __str__(self):
        return self.name
```



## 三、查询方法

操作ORM

```python
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoProject.settings')

import django

django.setup()

from school import models
```

1、all方法

```python
# 查询表中所有数据  返回：QuerySet对象列表
print(stu_obj.all())
```

2、get方法

```python
# 获取一个存在并且唯一的数据, 没有或者存在多个则报错
# pk是指住建primary key
print(stu_obj.get(pk=1))   # 返回：QuerySet对象
```

3、filter方法

```python
# filter获取满足条件的数据 返回：QuerySet对象列表
print(stu_obj.filter(age=18))
```

4、order_by排序

```python
print(stu_obj.all().order_by('age'))    # 升序 从小到大
print(stu_obj.all().order_by('-age'))    # 降序 从大到小
print(stu_obj.all().order_by('-age', 's_id')) 	# 先按age降序排列，在按s_id升序排列
```

5、reverse数据反转

```python
# 对已经排序的对象列表进行反转
print(stu_obj.all().order_by('s_id').reverse())
```

6、values 

```python
# 以字典的返回查询到的数据
print(stu_obj.all().values())
# 以字典的返回查询到的数据只查询s_id和name
d = stu_obj.all().values('s_id', 'name')
for i in d:
    print(i['name'])
```

7、values_list

```python
# 以列表的形式返回查询到的数据、与values使用方法一致
print(stu_obj.all().values_list('age'))
```

8、distinct 去重

```python
# 去重
print(stu_obj.all().values('age'))
print(stu_obj.all().values('age').distinct())
```

9、first 获取第一个元素

```python
print(stu_obj.all().first())
```

10、count 计数

```python
print(stu_obj.all().count())
```

11、last获取最后一个元素

```python
print(stu_obj.all().last())
```

12、exists检查数据是否存在

```python
# 检查元素是否存在、存在则返回Ture 不存在返回False、只能在filter中使用
print(stu_obj.filter(pk=4).exists())
```

13、exclude排除

```python
print(stu_obj.exclude(pk=1))
```

