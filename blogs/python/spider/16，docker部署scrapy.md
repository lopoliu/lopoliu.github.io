# 第十五课：docker部署scrapy

## docker简介

### 镜像

类似于操作系统的镜像

### 容器

运行一个系统的

### 仓库

顾名思义，docker仓库即为存储镜像的地方，我们可以将镜像上传至仓库，也可以从仓库下载镜像。这个比较简单，没什么好说的。

## 安装配置docker

1. 下载安装：http://get.daocloud.io/

2. 配置阿里云镜像加速器

   1. 登录阿里云

   2. 搜索容器于镜像服务器

   3. 选择镜像加速

   4. 复制加速器地址

   5. 在docker设置中配置

      ```json
      {
        "registry-mirrors": [
          "https://s65hs4ko.mirror.aliyuncs.com"
        ],
        "insecure-registries": [],
        "debug": false,
        "experimental": false,
        "features": {
          "buildkit": true
        }
      }
      ```

## docker基本使用

搜索镜像

```powershell
docker search
```

查看已下载镜像：

```powershell
docker images
```

查看正在运行的容器：

```powershell
dokcer ps
```

停止容器：

```powershell
docker stop 
```

运行容器

```shell
docker run -it -d -p 3306:3306 centos7:last /bin/bash
```

进入正在运行的容器

```python
docker exec -it con_id bash
```

退出容器

```shell
ctrl + p + q(后台运行)
```

## docker下载centos

1. 下载docker镜像

   ```powershell
   docker pull centos:7.6.1810
   ```

2. 启动一个容器（注意开放端口）

   ```powershell
   docker run -it centos:centos:7.6.181 /bin/bash
   ```

3. 安装wget

   ```powershell
   yum install wget
   ```

4. 配置阿里云yum源

   ```powershell
   # CentOS 5
   wget -O /etc/yum.repos.d/CentOS-Base.repo <http://mirrors.aliyun.com/repo/Centos-5.repo>
   # CentOS 6
   wget -O /etc/yum.repos.d/CentOS-Base.repo <http://mirrors.aliyun.com/repo/Centos-6.repo>
   # CentOS 7
   wget -O /etc/yum.repos.d/CentOS-Base.repo <http://mirrors.aliyun.com/repo/Centos-7.repo>
   
   # 之后运行yum makecache生成缓存
   ```

## centos中配置python3.6

1. 安装python3

   ```powershell
   yum -y install epel-release
   yum repolist
   yum -y install python36
   ```

2. 安装python虚拟环境管理工具

   ```powershell
   pip3 install virtualenv
   ```

3. 配置pip国内源

   ```powershell
   vi ~/.pip/pip.conf
   
   # pip.conf
   [global]
   index-url = https://pypi.tuna.tsinghua.edu.cn/simple
   [install]
   trusted-host = https://pypi.tuna.tsinghua.edu.cn
   ```

4. 安装Python虚拟环境管理工具

   1. 安装

      ```python
      pip3 install virtualenv
      ```

   2. 创建虚拟选举

      ```python
      virtualenv test_env
      ```

   3. 激活虚拟环境

      ```python
      cd test_env
      source bin/activate
      ```

   4. 退出虚拟环境

      ```python
      deactivate
      ```

## 部署scrapy框架

```python
pip install scrapy==1.6
```

### 部署scrapyd服务

```python
pip install scrapyd
```

### 部署gerapy图形化管理界面

```python
pip install gerapy
```

