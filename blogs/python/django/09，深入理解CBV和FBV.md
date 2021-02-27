---
title: CBV和FBV
date: 2019-04-22
tags:
 - django
 - web开发
categories:
 - python
---

# CBV和FBV

FBV：基于函数视图

CBV：基于类视图



## CBV的基本使用

views.py

```python
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

class SignIn(View):
    def post(self, request):
        u = request.POST.get('username')
        p = request.POST.get('password')
        print(u,p)
        return HttpResponse('sss')

    def get(self, request):
        return render(request, 'signin.html')
```

urls.py

```python
from django.urls import path
from . import views

app_name = 'account'
urlpatterns = [
    path('signin/', views.SignIn.as_view(), name='sign_in'),
]
```



1，在as_view中返回了一个函数，所以本质上，views.SignIn.as_view() 就是一个函数

2，这个函数首先判断请求方法是否在http_method_names中，如果不存在则会报错

3，如果方法可被接受，那么在自身的实例self中通过反射获取请求方法对应的函数

4，并且将这个函数返回

