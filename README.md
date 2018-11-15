
# Great plan of 2017

# Preact
# React
# Koa
# Vue
# Node
# Git
  - https://github.com/Gazler/githug
  - http://www.jianshu.com/p/482b32716bbe
  - http://backlogtool.com/git-guide/cn/


## 标签
  - 轻标签

  ```
  $ git tag <tagname>
  ```

  添加apple标签

  ```
  $ git tag apple
  ```
  如果没有使用参数而执行tag，可以显示已有标签列表。

  ```
  $ git tag
  ```
* 注解标签

  若要添加注解标签，可以在tag命令指定 -a选项执行。
  执行后会启动编辑区，请输入注解，
  也可以指定-m选项来添加注解。
  ```
  $ git tag -a <tagname>
  ```

  在HEAD指向的提交里添加名为banana的标签，请执行以下的命令。

  ```
  $ git tag -am "连猴子都懂的Git" banana
  ```

  如果在tag命令指定-n选项执行，可以显示标签的列表和注解。

  ```
  $ git tag -n
  apple           first commit
  banana          连猴子都懂的Git
  ```

  － 删除标签

  ```
  $ git tag -d <tagname>
  ```


### 新建分支

新建一个开发分支 develop
```
$ git branch develop
```

### 提交分支

分支修改后，就可以提交commit了。
```
$ git add .
$ git status
$ git commit --verbose
```

### 合并分支

该命令将 **指定分支** 导入到HEAD指定的分支。
```
$ git merge <commit>
```

合并 develop 分支到 release
1. 切换到release分支
2. 拉取最新代码
3. 合并 develop 分支到 release
4. 提交最新代码
5. 切换回 develop 分支


```
$ git checkout release
$ git pull
$ git merge develop
$ git push origin release
$ git checkout develop
```

### 删除分支

branch命令指定-d选项，删除指定分支.
```
$ git branch -d <branchname>

// 删除temp分支
$ git branch -d temp
```

### 关联远程分支

git branch --set-upstream-to=origin/release-admin-v1.4.0 release-admin-v1.4.0
git branch --set-upstream-to=origin/relase dev



### Git规范

** 提交 commit 的类型，包括以下几种: **

* feat: 新功能
* fix: 修复问题
* docs: 修改文档
* style: 修改代码格式，不影响代码逻辑
* refactor: 重构代码，理论上不影响现有功能
* perf: 提升性能
* test: 增加修改测试用例
* chore: 修改工具相关（包括但不限于文档、代码生成等）
* deps: 升级依赖


修改文件的范围（包括但不限于 doc, middleware, proxy, core, config, plugin）
用一句话清楚的描述这次提交做了什么

** 分支的划分 **

* 主分支(master)
* 开发分支(develop)
* 特征分支(feature)
* 发布分支(release)
* 修复分支(hotfix)


master和develop是长期分支，master分支上是稳定版本的演进，develop保持最新代码；而feature/release/hotfix是研发过程中的短期辅助分支，开发后需要清除；

** 约定版本号 **

简单而言，在这个版本规范中，版本以X.Y.Z的形式存在，其中X表示不向下兼容的框架级改动版本，Y表示向下兼容的功能性新增版本，Z表示向下兼容的内部问题修复版本。

```
v1.2.4
```

# Design
* [UI设计有哪些规范？](https://www.zhihu.com/question/32216660)
* [移动端设计最佳实践](https://zhuanlan.zhihu.com/p/24097113)
* [文字排版规范](http://huaban.com/pins/958880888/)
* [普惠生活](http://huaban.com/pins/920390067/)
* [Visual pecification](http://huaban.com/pins/920384025/)
* [网易云音乐](http://huaban.com/pins/833856117/)
* [给设计师和开发者的参考手册](http://huaban.com/pins/38541070/)
* [移动应用UI规范](http://www.zcool.com.cn/article/ZMzc5MTQ0.html)


# omelette

> [煎蛋🍳](http://gitlab.alibaba-inc.com/omelette/wiki/blob/master/docs/GettingStarted/HelloWorld.md)


> [从入门到放弃 —— 手把手 Omelette 开发指南](http://gitlab.alibaba-inc.com/omelette/wiki#buildin-plugins)


脚手架使用:
* preact添加页面 rpg view xxx --preact
* preact添加组件 rpg cmp preact xxx
* 安装前端组件 rpg install xxx
* 更新多语言 rpg sync

* react添加页面 rpg view xxx --react
* react添加组件 rpg cmp react xxx

* 插件开发脚手架 rpg sample component


> 组件


* [活动项目日志组件](http://git.ucweb.local/pffe/log)
* [性能统计和前端错误收集 组件 - perf](http://git.ucweb.local/pffe/perf)


# CI
# UAE
* [UAE文档](http://doc.ucweb.local/pages/viewpage.action?pageId=13435490)
* [发布到UAE](http://gitlab.alibaba-inc.com/omelette/wiki/blob/master/docs/Guide/AllInOmelette.md)


> UAE配置

### 申请机器 —— 线下申请

### UAE配置文件

主要是为了配置不同环境下的参数

- config.json
- config.default.js
- config.local.js

* [印度签到](http://uae.ucweb.local/apps/3429/services)

* KeyValue项对应了项目代码的config.json, config.default.js, config.local.js

  如：action.path

  “/indonesiasignin” —— 注意要有双引号

  路径地址

  配置 /conf

* 活动项目中配置文件夹包含一下几个分类的配置文件：

* 路由

  routes //路由表

* 配置

  application.conf //配置文件入口，存放活动平台相关的配置

  business.conf //业务性配置，如抽奖次数等

  environment.conf //环境性配置，如：数据库地址，MC 地址等

  play_common.conf //通用 play 配置(不常改动)

  play_origin.conf //原有 play 项目配置，用于帮助理解

* 日志

  log4j.properties //Log4j 配置，已包含常用打日志功能

* 其他

  messages //用于 play 的 i18n 功能

### UAE配置文件起效

1. 找到应用的UAE
2. 点击：「配置文件」 —— 「config.json」 —— 编辑文件中的内容「严格的JSON模式，最后不能有逗号」
3. 点击「保存」
4. 点击上面的「应用配置」
5. 选择想要生效的包
6. 重启

以后的包不再需要进行操作，也能应用到配置文件。



# Mongodb

# npm

### 什么是npm?

js开发者可以通过npm方便地分享，更新，和重复使用代码。


### 使用介绍

* 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
* 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
* 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:

```js
$ npm -v
2.3.0
```

### 本地安装/全局安装

npm 安装 Node.js 模块语法格式如下：

```
$ npm install <Module Name>
```

以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 express:

```
$ npm install express
```

```
npm install express   //本地安装
npm install express -g   //全局安装
```

### 本地安装

  1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
  2. 可以通过 require() 来引入本地安装的包。

### 全局安装

  1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
  2. 可以直接在命令行里使用。

### 查看安装信息

你可以使用以下命令来查看所有全局安装的模块：

```
$ npm list -g
```

如果要查看某个模块的版本号，可以使用命令如下：

```
$ npm list grunt

projectName@projectVersion /path/to/project/folder
└── grunt@0.4.1
```

### Package.json 属性说明

name - 包名。

version - 包的版本号。

description - 包的描述。

homepage - 包的官网 url 。

author - 包的作者姓名。

contributors - 包的其他贡献者姓名。

dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。

repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。

main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。

keywords - 关键字


### 卸载模块

我们可以使用以下命令来卸载 Node.js 模块。

```
$ npm uninstall express
卸载后，你可以到 /node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：
```

```
$ npm ls
```

### 更新模块

我们可以使用以下命令更新模块：

```
$ npm update express
```

### 搜索模块

使用以下来搜索模块：

```
$ npm search express
```

### 创建模块

创建模块，package.json 文件是必不可少的。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。

```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (node_modules) runoob                   # 模块名
version: (1.0.0)
description: Node.js 测试模块(www.runoob.com)  # 描述
entry point: (index.js)
test command: make test
git repository: https://github.com/runoob/runoob.git  # Github 地址
keywords:
author:
license: (ISC)
About to write to ……/node_modules/package.json:      # 生成地址

{
  "name": "runoob",
  "version": "1.0.0",
  "description": "Node.js 测试模块(www.runoob.com)",
  ……
}


Is this ok? (yes) yes
```

在最后输入 "yes" 后会生成 package.json 文件。



# NPM 包应用

### axios 处理ajax请求

跨域post实例，用到了qs组件来避开ajax信使请求，并兼容Android。
信使请求:post请求中，请求头部带有OPTIONS

```
import axios from axios;
import qs from qs;

...

axios.post(chapter_url, qs.stringify(params))
.then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
});
```

### xml-js 解析XML文件

解析XML文件，安装NPM插件

```
npm i -S xml-js
```

引入文件

```
import xmljs from 'xml-js';
```

使用

```js
// 请求载入XML的函数

_loadXMLDoc = u => {
  const self = this;
  let xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  }
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {

      // JSON.parse,格式化为JSON
      // xmljs.xml2json,xmljs转xml为json方法
      // this.response,返回值
      // alwaysChildren属性, 有更多属性可以选择

      let txt = JSON.parse(xmljs.xml2json(this.response, { alwaysChildren: true }));
      if (txt && txt.elements && txt.elements[0] && txt.elements[0].elements && txt.elements[0].elements[0] && txt.elements[0].elements[0].cdata) {
        txt = txt.elements[0].elements[0].cdata;
        // 凯撒解密
        txt = rot13(txt);
        /*
        * atob - base64解密
        * escape - 已经不推荐使用，不能直接用于URL编码，它的真正作用是返回一个字符的Unicode编码值
        * decodeURIComponent - URL解码，
        * 下面的这一句话，让你避开小说的天坑
        * 一定需要 decodeURIComponent + escape 才能解，原因未知
        */
        txt = decodeURIComponent(escape(atob(txt)));
      }
      self.setState({
        chapterCont: txt,
      });
    }
  };
  xmlhttp.open('GET', u, true);
  xmlhttp.setRequestHeader('Content-Type', 'text/xml');
  xmlhttp.send(null);
}
```

### 日期处理类库 —— moment.js

[API](http://momentjs.cn/)




### 复制按钮——将文本剪切到粘贴板

```shell
npm i -S copy-to-clipboard

import copy from 'copy-to-clipboard';

<Button onClick={copy('url')} />
```


### [富文本编辑器——Simditor](http://simditor.tower.im/docs/doc-event.html#anchor-decorate)

```js
// uc-open-admin project code
import React, { Component } from 'react';
import Simditor from 'simditor';
// var $ = require('jquery');
import '../../../../node_modules/simditor/styles/simditor.css';

class Editor extends Component {
  componentDidMount() {
    const textbox = this.refs.textarea;
    this.editor = new Simditor({
      textarea: textbox,
      toolbar: [
        'title',
        'bold',
        'italic',
        'underline',
        // 'strikethrough',
        // 'fontScale',
        'color',
        'ol',
        'ul',
        'blockquote',
        'code',
        'table',
        'link',
        'image',
        // 'indent',
        // 'outdent',
        'alignment',
        // 'hr',
        // '|',
        // 'html',
      ],
    });

    this.editor.on('valuechanged', () => {
      this.props.onHandle(this.editor.getValue());
    });
  }

  render() {
    const val = this.props.val;
    return (
      <div>
        <textarea className="form-control" ref='textarea' rows="30">{val}</textarea>
      </div>
    );
  }
}

export default Editor;
```

```js
// react调用
<Editor onHandle={this._handle} />
```





# [WA统计](http://wa.ucdns.uc.cn:8888/)

### 添加管理权限

* ‘应用管理’ -> ‘权限设置’ -> 添加阿里邮箱


### WA参数解析

* 定义统计类型

```
lt=click : 点击日志
lt=event : 事件日志
lt=xxxxx : 自定义日志
```

* 使用自定义日志，需要2步操作


### 添加自定义统计记录

# UC News

> 开发完成后，


> 在PC端测试时希望识别为UC News，


> 可以在原来的链接后面加上参数，


> 就能体验UC News下的测试体验啦，


> UCBrowser怎么没有想到 ？ // todo


```
&pf=178&ut=AAKUj5W%2BQ928%2FdAiH8%2FMuMMJu3TCCW%2FAjvMxSqu4QrdECw%3D%3D
```

# Egg

* [egg是什么](https://eggjs.org/zh-cn/intro/index.html)
* [egg buc](http://gitlab.alibaba-inc.com/egg/egg-buc-login)

### Part A 快速初始化

我们推荐直接使用脚手架，只需几条简单指令，即可快速生成项目:

$ npm i egg-init -g
$ egg-init egg-example --type=simple
$ cd egg-example
$ npm i



### Part B 正常的初始化

注意：实际项目中，我们推荐使用上一节的脚手架直接初始化。

```
mkdir egg-example
cd egg-example
npm init
npm i -S egg
npm i -D egg-bin
```

 添加 npm scripts 到 package.json:

```
{
  "scripts": {
    "dev": "egg-bin dev"
  }
}
```

### 编写 Controller

第一步需要编写的是 ```Controller``` 和 ```Router```。

```
// app/controller/home.js
module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'Hello world';
    }
  }
  return HomeController;
};
```

配置路由映射：

```
// app/router.js
module.exports = app => {
  app.get('/', app.controller.home.index);
};

```

加一个配置文件：

```
// config/config.default.js
exports.keys = <此处改为你自己的 Cookie 安全字符串>;

```

Config 有 module.exports 和 exports 的写法:
- module.exports.hello = true;
- exports.hello = true



启动项目:

$ npm run dev
$ open localhost:7001


### 静态资源

Egg 内置了 static 插件，线上环境建议部署到 CDN，无需该插件。
static 插件默认映射 /public/* -> app/public/* 目录

此处，我们把静态资源都放到 app/public 目录即可：


### 模板渲染

```
$ npm i egg-view-nunjucks --save
```


开启插件：

```js
// config/plugin.js
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};
```

```js
// config/config.default.js
exports.keys = <此处改为你自己的 Cookie 安全字符串>;
// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
```

为列表页编写模板文件，一般放置在 app/view 目录下

```html
<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <div class="news-view view">
      {% for item in list %}
        <div class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
        </div>
      {% endfor %}
    </div>
  </body>
</html>
```

添加 Controller 和 Router

```js
// app/controller/news.js
module.exports = app => {
  class NewsController extends app.Controller {
    * list() {
      const dataList = {
        list: [
          { id: 1, title: 'this is news 1', url: '/news/1' },
          { id: 2, title: 'this is news 2', url: '/news/2' }
        ]
      };
      yield this.ctx.render('news/list.tpl', dataList);
    }
  }
  return NewsController;
};
// app/router.js
module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/news', app.controller.news.list);
};
```

** 提示：开发期默认开启了 ```development``` 插件，修改后端代码后，会自动重启 Worker 进程。**


### 编写 service

在实际应用中，```Controller``` 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 ```Service```。

我们来添加一个 Service 抓取 Hacker News 的数据 ，如下：

```js
// app/service/news.js
module.exports = app => {
  class NewsService extends app.Service {
    * list(page = 1) {
      // read config
      const { serverUrl, pageSize } = this.app.config.news;
      // use build-in http client to GET hacker-news api
      const { data: idList } = yield this.ctx.curl(`${serverUrl}/topstories.json`, {
        data: {
          orderBy: '"$key"',
          startAt: `"${pageSize * (page - 1)}"`,
          endAt: `"${pageSize * page - 1}"`,
        },
        dataType: 'json',
      });
      // parallel GET detail, see `yield {}` from co
      const newsList = yield Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json' });
      });
      return newsList.map(res => res.data);
    }
  }
  return NewsService;
};
```

框架提供了内置的 ```HttpClient``` 来方便开发者使用 HTTP 请求。


### MySQL连接

在 Web 应用方面 MySQL 是最常见，最好的关系型数据库之一。非常多网站都选择 MySQL 作为网站数据库。本篇文档介绍了如何使用 Egg 框架及其插件来访问数据库。

[egg-mysql](https://github.com/eggjs/egg-mysql)

- 安装与配置

```
$ npm i --save egg-mysql
```

- 开启插件：

```
// config/plugin.js
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
```

在 config/config.${env}.js 配置各个环境的数据库连接信息。








# Node读写Excel文件探究实践

[Node读写Excel文件探究实践](https://aotu.io/notes/2016/04/07/node-excel/)

# Zsh

### 添加环境变量

* 很多时候需要为系统添加应用，如果默认的终端是zsh，

  通过vi修改对应的配置文件是：

  ```
  $ vi ~/.zshrc
  ```
  按下 i 表示进入编辑状态

* 给 Linux/Unix 系统增加环境变量，是使用 export 命令。

  ```
  # Java默认路径配置,#是注释，不会生效
  export JAVA_HOME=$(/usr/libexec/java_home/bin)
  export PATH=$JAVA_HOME:$PATH
  ```

  解释：

  环境变量中，各个值是以冒号分隔开的。

  上面的语句表示给 PATH 这个变量重新赋值，让它等于  $JAVA_HOME 同时后面加上原来的 $PATH

  * 退出vi编辑


  按下 ESC 退出编辑状态

  按下 :wq 表示保存并退出vi

* 使配置生效


```
$ source ~/.zshrc
```

### 开启好用的插件

其实我用了 oh-my-zsh 原来他自带了很多插件没有开启。。。

如何开启？
zsh配置文件 `~/.zshrc` 有一行 `plugins=(git)`，想加什么插件就把名字放里面就是了
比如 `plugins=(npm git)` 就开启了`npm`，`git`插件。

更多插件?
[Plugins Overview](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins-Overview)
或者进入 ~/.oh-my-zsh/plugins文件夹探索，每个人的需求不一样，里面有一些比较神奇的插件，比如敲两下esc 它会给你自动加上 sudo 的 sudo 插件，让复制显示进度条的cp插件，解压用的 extract 插件（有没有觉得在命令行下敲一大堆选项才能解压有点奇怪？），vi 粉的vi-mode npm等等


### git 插件

| Alias                | Command                                                                                                                                 |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| g                    | git                                                                                                                                     |
| ga                   | git add                                                                                                                                 |
| gaa                  | git add --all                                                                                                                           |
| gapa                 | git add --patch                                                                                                                         |
| gb                   | git branch                                                                                                                              |
| gba                  | git branch -a                                                                                                                           |
| gbda                 | git branch --merged \| command grep -vE "^(\*\|\s*master\s*$)" \| command xargs -n 1 git branch -d                                      |
| gbl                  | git blame -b -w                                                                                                                         |
| gbnm                 | git branch --no-merged                                                                                                                  |
| gbr                  | git branch --remote                                                                                                                     |
| gbs                  | git bisect                                                                                                                              |
| gbsb                 | git bisect bad                                                                                                                          |
| gbsg                 | git bisect good                                                                                                                         |
| gbsr                 | git bisect reset                                                                                                                        |
| gbss                 | git bisect start                                                                                                                        |
| gc                   | git commit -v                                                                                                                           |
| gc!                  | git commit -v --amend                                                                                                                   |
| gca                  | git commit -v -a                                                                                                                        |
| gcam                 | git commit -a -m                                                                                                                        |
| gca!                 | git commit -v -a --amend                                                                                                                |
| gcan!                | git commit -v -a -s --no-edit --amend                                                                                                   |
| gcb                  | git checkout -b                                                                                                                         |
| gcf                  | git config --list                                                                                                                       |
| gcl                  | git clone --recursive                                                                                                                   |
| gclean               | git clean -df                                                                                                                           |
| gcm                  | git checkout master                                                                                                                     |
| gcd                  | git checkout develop                                                                                                                    |
| gcmsg                | git commit -m                                                                                                                           |
| gco                  | git checkout                                                                                                                            |
| gcount               | git shortlog -sn                                                                                                                        |
| gcp                  | git cherry-pick                                                                                                                         |
| gcpa                 | git cherry-pick --abort                                                                                                                 |
| gcpc                 | git cherry-pick --continue                                                                                                              |
| gcs                  | git commit -S                                                                                                                           |
| gd                   | git diff                                                                                                                                |
| gdca                 | git diff --cached                                                                                                                       |
| gdt                  | git diff-tree --no-commit-id --name-only -r                                                                                             |
| gdw                  | git diff --word-diff                                                                                                                    |
| gf                   | git fetch                                                                                                                               |
| gfa                  | git fetch --all --prune                                                                                                                 |
| gfo                  | git fetch origin                                                                                                                        |
| gg                   | git gui citool                                                                                                                          |
| gga                  | git gui citool --amend                                                                                                                  |
| ggf                  | git push --force origin $(current_branch)                                                                                                                  |
| ghh                  | git help                                                                                                                                |
| ggpull               | ggl                                                                                                                                     |
| ggpur                | ggu                                                                                                                                     |
| ggpush               | ggp                                                                                                                                     |
| ggsup                | git branch --set-upstream-to = origin/$(current_branch)                                                                                 |
| gpsup                | git push --set-upstream origin $(current_branch)                                                                                        |
| gignore              | git update-index --assume-unchanged                                                                                                     |
| gignored             | git ls-files -v \| grep "^[[:lower:]]"                                                                                                  |
| git-svn-dcommit-push | git svn dcommit && git push github master:svntrunk                                                                                      |
| gk                   | \gitk --all --branches                                                                                                                  |
| gke                  | \gitk --all $(git log -g --pretty = format:%h)                                                                                          |
| gl                   | git pull                                                                                                                                |
| glg                  | git log --stat --color                                                                                                                  |
| glgg                 | git log --graph --color                                                                                                                 |
| glgga                | git log --graph --decorate --all                                                                                                        |
| glgm                 | git log --graph --max-count = 10                                                                                                        |
| glgp                 | git log --stat --color -p                                                                                                               |
| glo                  | git log --oneline --decorate --color                                                                                                    |
| glog                 | git log --oneline --decorate --color --graph                                                                                            |
| glol                 | git log --graph --pretty = format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit       |
| glola                | git log --graph --pretty = format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all |
| glp                  | _git_log_prettily                                                                                                                       |
| gm                   | git merge                                                                                                                               |
| gmom                 | git merge origin/master                                                                                                                 |
| gmt                  | git mergetool --no-prompt                                                                                                               |
| gmtvim               | git mergetool --no-prompt --tool = vimdiff                                                                                              |
| gmum                 | git merge upstream/master                                                                                                               |
| gp                   | git push                                                                                                                                |
| gpd                  | git push --dry-run                                                                                                                      |
| gpoat                | git push origin --all && git push origin --tags                                                                                         |
| gpristine            | git reset --hard && git clean -dfx                                                                                                      |
| gpu                  | git push upstream                                                                                                                       |
| gpv                  | git push -v                                                                                                                             |
| gr                   | git remote                                                                                                                              |
| gra                  | git remote add                                                                                                                          |
| grb                  | git rebase                                                                                                                              |
| grba                 | git rebase --abort                                                                                                                      |
| grbc                 | git rebase --continue                                                                                                                   |
| grbi                 | git rebase -i                                                                                                                           |
| grbm                 | git rebase master                                                                                                                       |
| grbs                 | git rebase --skip                                                                                                                       |
| grh                  | git reset HEAD                                                                                                                          |
| grhh                 | git reset HEAD --hard                                                                                                                   |
| grmv                 | git remote rename                                                                                                                       |
| grrm                 | git remote remove                                                                                                                       |
| grset                | git remote set-url                                                                                                                      |
| grt                  | cd $(git rev-parse --show-toplevel \|\| echo ".")                                                                                       |
| gru                  | git reset --                                                                                                                            |
| grup                 | git remote update                                                                                                                       |
| grv                  | git remote -v                                                                                                                           |
| gsb                  | git status -sb                                                                                                                          |
| gsd                  | git svn dcommit                                                                                                                         |
| gsi                  | git submodule init                                                                                                                      |
| gsps                 | git show --pretty = short --show-signature                                                                                              |
| gsr                  | git svn rebase                                                                                                                          |
| gss                  | git status -s                                                                                                                           |
| gst                  | git status                                                                                                                              |
| gsta                 | git stash save                                                                                                                              |
| gstaa                | git stash apply                                                                                                                         |
| gstd                 | git stash drop                                                                                                                          |
| gstl                 | git stash list                                                                                                                          |
| gstp                 | git stash pop                                                                                                                           |
| gstc                 | git stash clear                                                                                                                         |
| gsts                 | git stash show --text                                                                                                                   |
| gsu                  | git submodule update                                                                                                                    |
| gts                  | git tag -s                                                                                                                              |
| gunignore            | git update-index --no-assume-unchanged                                                                                                  |
| gunwip               | git log -n 1 \| grep -q -c "\-\-wip\-\-" && git reset HEAD~1                                                                            |
| gup                  | git pull --rebase                                                                                                                       |
| gupv                 | git pull --rebase -v                                                                                                                    |
| glum                 | git pull upstream master                                                                                                                |
| gvt                  | git verify-tag                                                                                                                          |
| gwch                 | git whatchanged -p --abbrev-commit --pretty = medium                                                                                    |
| gwip                 | git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit -m "--wip--"






# Mac 80端口使用

Mac OS X 因为要绑定80端口需要ROOT权限,

让连接到本机80端口的请求， 都转发到9090端口;

注意,Mac OS 会使用80端口做网络文件共享， 要先关闭掉

修改/etc/pf.conf, 使用sudo vim /etc/pf.conf

pf.conf是对顺序强要求的， 所以注意添加的内容放的顺序

rdr-anchor “com.apple/*”

rdr on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 9090

添加rdr on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 9090

到pf.conf文件的rdr-anchor “com.apple/*” 这一行后面。

lo0 通过ifconfig 看自己那个设备绑定的是127.0.0.1, lo0是这个网络设备的名字。 修改好pf.conf之后执行一下命令，让端口转发生效

```
sudo pfctl -d
sudo pfctl -f /etc/pf.conf
sudo pfctl -e
```

在tomcat的配置中，设定启动端口为9090

好了这样只需要普通权限启动tomcat在9090端口即可， 访问本地应用时直接访问80端口即可。

# Mac 修改hosts

```
$ vi /etc/hosts
```

press `i` 修改

press `esc` 结束

press `:wq` 保存并退出

press `:q!` 不保存并退出

# Homebrew的安装及使用

[官网](https://brew.sh/index_zh-cn.html)

### Homebrew的安装

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Homebrew的使用

* 安装软件：brew install 软件名，例：brew install wget
* 搜索软件：brew search 软件名，例：brew search wget
* 卸载软件：brew uninstall 软件名，例：brew uninstall wget
* 更新Homebrew：brew update

* 更新具体软件：brew upgrade 软件名 ，例：brew upgrade git
* 显示已安装软件：brew list
* 查看软件信息：brew info／home 软件名 ，例：brew info git ／ brew home git

* 查看那些已安装的程序需要更新： brew outdated
* 显示包依赖：brew reps


# 浏览器JSSDK


# 活动开发流程

### 需求评审
### 需求测试用例编写
### 巴比塔文案模型
### 构建开发环境
### 前端组件


# Project

### 印度好写手活动

问题

* 需求文档不详细，缺少细节，比较多功能需要与产品再次确认。
* 需求的逻辑场景不合理，例如，产品希望点击移动端页面按钮后，去到PC页面，事实上，移动端玩家看PC端页面没有实际意义。
* 时间排期和真实的开发有差距，排期预估的时间较理想化，偶尔会相互影响和调整，例如打点统计，添加分享功能。
* 文档初期定义了全部采用FB分享，开发过程中“分享功能”经历多次变化：FB和客户端分享混合模式，能够分享随机文案，最后希望加上随机图像的功能。
* 物料和设计稿没有按进度提供，影响开发进度。


解决
* 根据详实的需求来排期，项目初期可优先完成测试用例，与产品确认好功能细节，有利于项目评估和排期。
* 产品问题, 如果有测试用例，也能提前暴露明显的问题
* 开发功能，还有测试，体验，部署等需要排期时间。
* 时间花费在重要的功能上，实现功能复杂的分享，投入和产出值得考虑？


### 签到活动

心得记录
* 产品提供的文案质量高，芭比塔上文案版本不到50，就已经完成了活动发布，极大的节省了的研发调整时间。
* 设计师对整体效果，有非常强的把控能力，采用扁平化卡通风格，结合光线效果，凸显出丰富多彩的活动氛围，带给用户较大的视觉冲击力，同时占用最少的图像资源。
* 多方沟通与默契配合，提高了整体质量加快研发进度，达到较高的加载成功率。


# Platform

> 前端UI组件


* [material-ui](http://www.material-ui.com/#/)
* [iview](https://www.iviewui.com/)
* [AntD](https://ant.design/index-cn)


# vs code

[教程](https://github.com/i5ting/vsc)
