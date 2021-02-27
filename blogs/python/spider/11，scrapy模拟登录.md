# 第十一课：scrapy模拟登录

## from_requests

```python
yield scrapy.FormRequest(url, formdata=form_data, callback=self.parse_repo)
```



## FormRequest.from_response

```python
yield scrapy.FormRequest.from_response(response, formdata=form_data, callback=self.parse_repo)
```

