# 第十三课：Redis基本使用

## 安装redis

配置环境变量

连接redis数据库

```python
redis-cli -h 127.0.0.1 -p 6379 -a "password"
```

测试

```python
ping测试命令
```

## Redis基本操作

### 键操作

1. 创建一个键

   ```python
   set name test
   ```

2. 删除一个键

   ```python
   del name    # 删除成功返回1，失败返回0
   ```

3. 检查键是否存在

   ```python
   exists key    # 如果存在返回1， 不存在返回0
   ```

6，字符串操作

1. 设置指定key的值

   ```python
   set key value
   ```

2. 获取指定key的值

   ```python
   get key    # key 不存在返回nil
   ```

### 操作Hash

1. 创建hash

   ```python
   hmset info name "lopo" age 18 height "180cm" sex "man"
   ```

2. 删除一个或者多个hash中的字段

   ```python
   hdel info sexheight
   ```

3. 查看hash表中指定的字段是否存在

   ```python
   hexists info name
   ```

4. 获取哈希表中的所有字段

   ```python
   hkeys info
   ```

5. 查看hash的长度

   ```python
   hlen info
   ```

6. 重新赋值哈希表中字段的值

   ```python
   hset info name test
   ```

7. 查看哈希表中的所有值

   ```python
   hvals info
   ```

### 列表

1. 创建列表

   ```python
   lpush names lopo1
   ```

2. 删除并返回列表中的第一个值

   ```python
   lpop name
   ```

3. 删除并返回列表中的最后一个值

   ```python
   rpop name
   ```

4. 在列表最后插入值

   ```python
   rpush names test1
   ```

5. 查看列表长度

   ```python
   llen names
   ```

6. 通过索引获取值

   ```python
   lindex names 0
   ```

### 集合

1. 创建集合

   ```python
   sadd user_id 1
   ```

2. 获取集合的长度

   ```python
   scrad user_id
   ```

3. 判断成员是否在集合中

   ```python
   sismember user_id 1
   ```

4. 删除并返回集合中的一个随机元素

   ```python
   spop user_info
   ```

5. 删除集合中的成员

   ```python
   srem user_id 1
   ```

## python操作redis

### 安装redis

```python
pip install redis
```

### 连接redis服务

```python
import redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True) 
```

...