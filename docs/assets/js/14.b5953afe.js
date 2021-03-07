(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{505:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("h2",{attrs:{id:"什么是orm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是orm"}},[s._v("#")]),s._v(" 什么是ORM")]),s._v(" "),a("ul",[a("li",[a("strong",[a("code",[s._v("ORM")])]),s._v(" 全拼"),a("code",[s._v("Object-Relation Mapping")]),s._v(".")]),s._v(" "),a("li",[s._v("中文意为 "),a("strong",[a("code",[s._v("对象-关系映射")])]),s._v(".可以理解为代码与数据库的映射，通过代码实现数据库的操作，而不需要使用原生sql语句")]),s._v(" "),a("li",[s._v("在ORM中，一个模型类即表示数据库中的一张数据表，模型类中的属性可以理解为数据库中的字段")]),s._v(" "),a("li",[s._v("在"),a("code",[s._v("MVC")]),s._v("/"),a("code",[s._v("MVT")]),s._v("设计模式中的"),a("code",[s._v("Model")]),s._v("模块中都包括"),a("code",[s._v("ORM")])])]),s._v(" "),a("h2",{attrs:{id:"orm优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orm优势"}},[s._v("#")]),s._v(" ORM优势")]),s._v(" "),a("p",[s._v("（1）只需要面向对象编程, 不需要面向数据库编写代码.")]),s._v(" "),a("ul",[a("li",[s._v("对数据库的操作都转化成对类属性和方法的操作.")]),s._v(" "),a("li",[s._v("不用编写各种数据库的sql语句.")])]),s._v(" "),a("p",[s._v("（2）实现了数据模型与数据库的解耦, 屏蔽了不同数据库操作上的差异.")]),s._v(" "),a("ul",[a("li",[s._v("不在关注用的是"),a("code",[s._v("mysql")]),s._v("、"),a("code",[s._v("oracle")]),s._v("...等.")]),s._v(" "),a("li",[s._v("通过简单的配置就可以轻松更换数据库, 而不需要修改代码.")])]),s._v(" "),a("h2",{attrs:{id:"配置数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库"}},[s._v("#")]),s._v(" 配置数据库")]),s._v(" "),a("p",[s._v("配置项目的数据库")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("DATABASES "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ENGINE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.db.backends.mysql'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dj'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USER'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PASSWORD'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PORT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CHARSET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("因为mysqldb不支持python3，需要使用pymysql代替")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装pymysql")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pymysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("替换mysqldb为pymysql")]),s._v(" "),a("p",[s._v("/proNmae/init.py文件中")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pymysql\npymysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("install_as_MySQLdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"编写一个模型类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写一个模型类"}},[s._v("#")]),s._v(" 编写一个模型类")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" models\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Create your models here.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserModels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"注册app到项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册app到项目"}},[s._v("#")]),s._v(" 注册app到项目")]),s._v(" "),a("p",[s._v("如果app与模型层需要进行交互，那么必须将app注册安装到项目中")]),s._v(" "),a("p",[s._v("在settings.py中配置")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("INSTALLED_APPS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.contrib.admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'apps.login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("生成模型文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("python manage.py makemigrations\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("创建数据表")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("python manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py migrate\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果需要修改模型中的字段，则需要再次运行这两条命令")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" models\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    email "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("EmailField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("blank"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("python manage.py makemigrations\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("python manage.py migrate\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"动态登录实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态登录实现"}},[s._v("#")]),s._v(" 动态登录实现")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("login")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'login.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        check "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/index/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'login.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tips'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名或密码错误'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"模板中使用url反转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板中使用url反转"}},[s._v("#")]),s._v(" 模板中使用url反转")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<a href={% url 'account:signup' %}>前往注册</a>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"注册app到admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册app到admin"}},[s._v("#")]),s._v(" 注册app到admin")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("admin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("register"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"创建超级用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建超级用户"}},[s._v("#")]),s._v(" 创建超级用户")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("python manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py createsuperuser\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("浏览器访问:  http://127.0.0.1:8000/admin")])])}),[],!1,null,null,null);t.default=e.exports}}]);