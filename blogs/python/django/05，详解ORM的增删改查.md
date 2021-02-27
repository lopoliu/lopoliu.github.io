# ORM中的增删改查

案例实现增删改查

## 查询

urls.py

```python
path('', views.lang, name='lang'),
```

views.py

```python
def lang_add(request):
    if request.method == 'GET':
        return render(request, 'add.html')
    elif request.method == 'POST':
        new_data = request.POST.get('lang')
        if new_data:
            models.LanguageModel.objects.create(lang=new_data)
        return redirect(reverse('language:lang'))
```

list.html

```
    <button><a href={% url 'language:lang_add' %}>新增</a></button>
    {% for item in languages %}
        <p>{{ item.lang }}----
            <a href="{% url "language:lang_del" item.l_id %}">删除</a>
            <a href="{% url "language:lang_edit" item.l_id %}">编辑</a>
        </p>
    {% endfor %}
```

## 新增

urls.py

```python
path('add/', views.lang_add, name='lang_add'),
```

views.py

```python
def lang_add(request):
    if request.method == 'GET':
        return render(request, 'add.html')
    elif request.method == 'POST':
        new_data = request.POST.get('lang')
        if new_data:
            models.LanguageModel.objects.create(lang=new_data)
        return redirect(reverse('language:lang'))
```

add.html

```html
<form style="margin-left: 100px" action="{% url "language:lang_add" %}" method="post">
    <input type="text" placeholder="请输入语言" name="lang">
    <button>提交</button>
</form>
```

## 删除

urls.py

```python
path('<int:l_id>/', views.lang_del, name='lang_del'),
```

views.py

```python
def lang_del(request, l_id):
    models.LanguageModel.objects.get(pk=l_id).delete()
    return redirect(reverse('language:lang'))
```

## 修改

urls.py

```python
path('edit/<int:l_id>', views.lang_edit, name='lang_edit'),
```

views.py

```python
def lang_edit(request, l_id):
    if request.method == 'GET':
        return render(request, 'edit.html')
    elif request.method == 'POST':
        lang = request.POST.get('lang')
        models.LanguageModel.objects.filter(l_id=l_id).update(lang=lang)
    return redirect(reverse('language:lang'))
```

edit.html

```html
<form style="margin-left: 100px"  method="post">
    <input type="text" placeholder="请输入语言" name="lang">
    <button>更新</button>
</form>
```