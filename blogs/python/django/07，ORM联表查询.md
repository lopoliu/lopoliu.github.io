---
title: 双下划线的使用
date: 2019-04-06
tags:
 - django
 - web开发 
categories:
 - python
---

## 双下划线的使用

```python
from django.db import models

# Create your models here.
class Student(models.Model):
    s_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)
    age = models.IntegerField(null=True)
    birth = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'Student'
```

1、查询s_id大于等于3的数据

```python
# 查询s_id大于3的数据
print(stu_obj.filter(s_id__gt=3).values()) gt: gerater than
# 查询s_id大于等于3的数据
print(stu_obj.filter(s_id__gte=3).values()) e: equal gerater than
```

2、查询s_id小于等于3的数据

```python
# 查询s_id小于3的数据
print(stu_obj.filter(s_id__lt=3).values())  lt: less than
# 查询s_id小于等于3的数据
print(stu_obj.filter(s_id__lte=3).values())
```

3、查询s_id 为2-4的数据range（范围）

```python
# 包含s_id 2 和 4
print(stu_obj.filter(s_id__range=[2, 4]).values())
```

4、成员方法in，查询s_id 为1和5的数据

```python
# 查询s_id是否存在数据表中，存在则返回QuerySet对象列表，否则返回空
print(stu_obj.filter(s_id__in=[2, 4， 5]).values())
```

5、contains包含、模糊查询、完全匹配

```python
# 查询name中包含 '马' 的所有数据 相当于mysql中额like
print(stu_obj.filter(name__contains='马').values())
```

6、contains包含、模糊查询、忽略大小写  (存在问题)

```python
print(stu_obj.filter(name__icontains='lopo'))
```

7、以某个字符开头

```python
print(stu_obj.filter(name__startswith='马').values())
```

8、以某个字符结尾

```python
print(stu_obj.filter(name__endswith='2').values())
```

9、以某个字符开头或结尾、忽略大小写

```python
print(stu_obj.filter(name__iendswith='q'))
print(stu_obj.filter(name__istartswith='q'))
```

10、date查询

```python
# 单独查询年份或月份
print(stu_obj.filter(birth__year=2019))
# 查询年月
print(stu_obj.filter(birth__year=2019, birth__month=11))
# 查询年月日
print(stu_obj.filter(birth__year=2019, birth__month=11, birth__day=20))
```

11、查询null

```python
# 查询所有为null的数据
print(stu_obj.filter(age__isnull=True))
# 查询所有非null的数据
print(stu_obj.filter(age__isnull=False))
```

## 外键操作

```PYTHON
classStudent(models.Model):
    # 设置外键
    classes = models.ForeignKey('Classes', on_delete=models.DO_NOTHING, null=True)

class Classes(models.Model):
    c_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=32)

    class Meta:
        db_table = 'classes'
```

### 基于对象查询

正向查询（通过一张存在ForeignKey字段的表查询其他表为正向查询）

1、通过学生名获取对应班级名

```python
# 获取到该学生对应的班级对象, 关系管理对象
print(models.Student.objects.get(pk=1).classes)
# 通过这个对象可以获取班级表中的数据
print(models.Student.objects.get(pk=1).classes.c_id)
print(models.Student.objects.get(pk=1).classes.name)
```

2、通过班级获取当前班级对应的学生信息

反向查询

```python
cla_obj = models.Classes.objects

print(cla_obj.get(pk=2).name)
# 获取当前班级对象对应的所有学生
print(cla_obj.get(pk=2).student_set.all())
```

3、使用 related_name，基于对象进行反向查询

```python
classes = models.ForeignKey('Classes', on_delete=models.CASCADE, related_name='students')
# 指定related_name后student_set则无法使用
```

### 基于字段查询

```python
# 通过班级名字查询所有学生
stu_obj = models.Student.objects
# classes为外键字段名
print(stu_obj.filter(classes__name='java').all())
```

使用包含

```python
print(stu_obj.filter(classes__name__contains='java').all())
```

不指定related_name 通过学生名字查询对应的班级

```python
print(cla_obj.filter(students__name='刘德华').values())
```

指定related_name, 指定related_name后无法使用类名

```python
print(cla_obj.filter(students__name='刘德华').values())
```

指定related_query_name后无法使用related_name，基于字段的反向查询

```python
classes = models.ForeignKey('Classes', on_delete=models.CASCADE, related_name='students', related_query_name='student')
print(cla_obj.filter(student__name='刘德华').values())
```

### 外键关系管理

1、set修改关联关系（外键中关系管理对象 必须传入对象）

修改学生id为3的课程为1

```python
models.ClassesModel.objects.get(pk=1).students.set(models.StudentModel.objects.filter(s_id__in=[1, 2, 3]))
```

2、通过班级创建学生并建立关联关系

```python
cls_obj = models.Classes.objects
cls_obj.get(pk=1).students.create(name='张柏芝')
```

3、删除班级和学生的关联关系

```python
models.Classes.objects.get(pk=2).students.clear()

models.Classes.objects.get(pk=2).students.set(models.Student.objects.filter(s_id__in=[2, 4, 5, 7]))
```

3、建立班级和学生的关联关系

```python
models.ClassesModel.objects.get(pk=2).students.set(models.StudentModel.objects.filter(s_id__in=[1, 2, 3]))
```

### 级联删除

级联删除选项

Django模型中的on_delete属性具有如下选项：

##### CASCADE

级联删除，也就是被引用的实体被删除后，相关的记录信息都会被删除。

##### PROTECT(保护)

阻止删除被引用的实体，除非先把所有引用的记录删除。抛出ProtectedError类

##### SET_NULL

把字段设置成null，但是必须允许为null的情况下。

##### SET_DEFAULT

把字段设置成默认值，这时这个字段必须设置了默认值。

##### SET

可以传递一个函数给SET()方法作为参数，当字段引用的记录被删除后，此字段的值由给定的方法决定。

## DO_NOTHING

什么都不做，保持之前的值。如果你的数据库后端设置了外键约束，那么就抛出一个IntegrityError。

## 多对多关系

### 多对多字段查询

```python
class Course(models.Model):
    r_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=32)
    student = models.ManyToManyField('Student')

    class Meta:
        db_table = 'course'

    def __str__(self):
        return f"{self.r_id}--{self.name}"
```

基于对象

1、通过课程对象获取当前课程的所有学生

```python
cou_obj = models.Course.objects.get(pk=1).student.all()
```

2、通过学生对象获取当前学生的所有课程

```python
print(models.Student.objects.get(pk=1).course_set.all())
```

3、使用related_name

基于字段

3、通过学生名字段获取所有当前学生的课程

```python
print(models.Course.objects.filter(student__name='刘德华'))
```

5、通过课程名字段获取当前课程的所有学生

```python
print(models.Student.objects.filter(course__name='java'))
```

6、通过课程名字段获取当前课程的所有学生（related_query_name）

```python
student = models.ManyToManyField('Student', related_name='courses', related_query_name='course')

print(models.Student.objects.filter(course__name='java'))
```

### 对多对关系管理

1、修改关系

修改学生对应的课程

```python
models.Student.objects.get(pk=1).courses.set([2, 4])
```

通过对象的方式

```python
models.Student.objects.get(pk=1).courses.set([*models.Course.objects.filter(r_id__in=[1, 3])])
```

2、新增关系

```python
# 新增学生和课程的关系
# 先课程id再学生id
models.Student.objects.get(pk=1).courses.add(1)
```

通过对象的方式

```python
models.Student.objects.get(pk=1).courses.add(*models.Course.objects.filter(r_id__in=[1, 2]))
```

3、删除关系

```
models.Student.objects.get(pk=1).courses.remove(1, 2)
```

4、清空关系

```python
models.Student.objects.get(pk=1).courses.clear()
```

5、通过课程创建一个学生并建立关联关系

```python
models.Course.objects.get(name='java').student.create(classes_id=2, name='梁静茹')
```

6、通过学生创建一个课程并建立关联关系

```python
models.Student.objects.get(s_id=1).courses.create(name='JS')
```















