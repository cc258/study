# Great plan of 2017

# Preact
# React
# Koa
# Vue
# Node
# Git
# CI
# UAE
# Mongodb
# npm


# Great Plan of 2017

---

# ES6

> [ECMAScript 6 入门](http://es6.ruanyifeng.com/?search=values&x=0&y=0#docs/let)

> Promise精简写法

下面两种写法一样：

```js
// demo1
new Promise(function(resolve, reject) {
  resolve('value');
}).then(function(data) {});

// demo2
Promise.resolve('value').then(function(data) {});
```

> 时间转换

```js
Date.parse(Date());
// 1488372059000 时间戳

const today = new Date();
today.toISOString().slice(0,10);

// "2017-03-01"

today.toISOString();

// "2017-03-01T12:44:09.787Z"
// 该标准称为 ISO-8601 与中国的时间有差异+0800
// toISOString() 方法可以使用ISO标准将 Date 对象转换为字符串。
// 格式为: (注意毫秒数是3位数)
// YYYY-MM-DDTHH:mm:ss.sss

// 也可以通过以下方式获得

today.getFullYear()
today.getMonth() + 1
today.getDate()
today.getHours()
today.getMinutes()
```

> 字符串提取


```
slice() - 提取字符串的片断，并在新的字符串中返回被提取的部分。
('hello world').slice(6,11);
// 从位置6，到位置11
```

> uri编码


```
var p = '?keyword=' + encodeURIComponent('hello');
var p = encodeURI('http://www.uc.cn');
```

* encodeURIComponent() 部分URI进行编码，它输出符号的utf-8形式，不编译的特殊字符 - _ . ! ~ * ’ ( )
* encodeURI() 完整的URI进行编码，不编译的特殊字符 - _ . ! ~ * ’ ( ) ;/?:pout:&=+$,#


> uri解码


```
decodeURIComponent()
decodeURI()
```

> 数组去重——使用Set特性


```markup
const arr1 = [1, 3, 5, 5, 8];
const arr2 = Array.from(new Set(arr1))
[1, 3, 5, 8]
```


# CSS

> 有序列表数字符号


```css
ol{
  	counter-reset: section;
  	>li{
  		position: relative;
  		padding: 0 0 0 30px;
  		line-height: 30px;
  		margin: 0 0 48px;
  		counter-increment: section;
  	}
  	>li:before{
  		display: block;
  		position: absolute;
  		top: 7px;
  		left: 5px;
  		font-size: 12px;
  		width: 15px;
  		height: 15px;
  		line-height: 15px;
  		color: #fff;
  		background: #0081ff;
  		text-align: center;
  		content: counter(section);
  	}
  }
```

> Flex 垂直中齐


```css
.cont {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

> Flex 兼容样式，添加到父元素


```css
display -webkit-box
display -moz-box
display -ms-flexbox
display -webkit-flex
display flex
-webkit-box-flex 1
-moz-box-flex 1
-webkit-flex 1
-ms-flex 1
flex 1
-moz-box-pack: center; /*Firefox*/
-webkit-box-pack: center; /*Safari,Opera,Chrome*/
box-pack: center;
vertical-align middle
-moz-box-align: center; /*Firefox*/
-webkit-box-align: center; /*Safari,Opera,Chrome*/
-moz-box-orient: horizontal; /*Firefox*/
-webkit-box-orient: horizontal; /*Safari,Opera,Chrome*/
box-orient: horizontal;
box-align: center;
-webkit-box-align: center;
-moz-align-items: center;
-webkit-align-items: center;
align-items center
-webkit-box-pack: center;
-moz-justify-content: center;
-webkit-justify-content: center;
justify-content center
```

> 一行显示，超出隐藏

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```


# Chai

# MySQL

[MySQL教程](http://www.yiibai.com/mysql/show-databases.html)

### Mac配置MySQL

* Mac配置MySQL


推荐去官网上直接下载dmg包，下一步，安装后，记录下root用户的初始密码。

* 启动MySQL


在系统偏好设置里面找到Mysql,并点击start mysql server：running表示成功

* 配置路径


打开「默认」终端配置文件，（如果你的终端是Zsh,对应的配置文件是~/.zshrc)

`vi ~/.zshrc`

在最后一行添加

```
export PATH=$PATH:/usr/local/mysql/bin
```

保存后，之后在命令行输入

```
source ~/.bash_profile
```

ok

* 登陆


```shell
mysql -u root -p
```

接下来输入安装时的默认密码，回车之后成功进入mysql；
在当前环境下输入

* 修改密码

```sql
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123');
```

`123` 你的密码。

完成后，重新登陆验证。

* 登陆后使用mysql语句

先执行登陆语句

```
mysql -u root -p
```

再显示已有的数据库

```
mysql> SHOW DATABASE;
```

** 注意一条语句，是必须要用;结束 **







# Mock

# Webpack

> [webpack中library和libraryTarget与externals的使用](https://github.com/zhengweikeng/blog/issues/10)


> [webpack使用优化（基本篇）](https://github.com/lcxfs1991/blog/issues/2)


> js-xlsx导出Excel文件时，添加支持浏览器补丁


Forked version of js-xlsx to add browserify support. See [https://github.com/SheetJS/js-xlsx/issues/143](https://github.com/SheetJS/js-xlsx/issues/143) for details on the original issue, and this commit for the fix.

$ npm install xlsx-browserify-shim

# Preact

> [Preact – React的轻量解决方案](https://github.com/lcxfs1991/blog/issues/13)


# React

> [React 中文文档@编程思想](https://chenyitian.gitbooks.io/react-docs/content/docs/thinking-in-react.html)


> [React小书](http://huziketang.com/books/react/lesson2)
> [基于webpack + react + react-router + redux + less + flex.css + ES6 的React版cnode社区](http://react-china.org/t/webpack-react-react-router-redux-less-flex-css-es6-react-cnode/6332)


> [分享一个 react + redux 完整的项目，同时写一下个人感悟](http://react-china.org/t/react-redux/9072/13)


### 查看安装的React版本

```shell
npm ls react
```

### 组件的生命周期

> 组件在初始化时会触发5个钩子函数：


* `getDefaultProps()`
  设置默认的props，也可以用defaultProps设置组件的默认属性。

* `getInitialState()`
  在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props。

* `componentWillMount()`
  组件初始化时只调用一次，此时可以修改state。

* `render()`
  react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。

* `componentDidMount()`
  组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次。


> 组件还有其他5个钩子函数：


* `componentWillReceiveProps(nextProps)`
  组件初始化时不调用，组件接受新的props时调用。

* `shouldComponentUpdate(nextProps, nextState)`
  react性能优化非常重要的一环。组件接受新的state或者props时调用，
  我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候。不过调用this.forceUpdate会跳过此步骤。

* `componentWillUpdata(nextProps, nextState)`
  组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state

* `render()`
  不多说

* `componentDidUpdate()`
  组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。

* `componentWillUnmount()`
  组件将要卸载时调用，一些事件监听和定时器需要在此时清除。


以上可以看出来react总共有10个周期函数（render重复一次），这个10个函数可以满足我们所有对组件操作的需求，利用的好可以提高开发效率和组件性能。

### 项目搭建

上面说了react，react-router和redux的知识点。但是怎么样将它们整合起来，搭建一个完整的项目。

1. 先引用 react.js，redux，react-router 等基本文件，建议用npm安装，直接在文件中引用。

2. 从 react.js，redux，react-router 中引入所需要的对象和方法。


```js
import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
```

1. 根据需求创建顶层ui组件，每个顶层ui组件对应一个页面。

2. 创建actionCreators和reducers，并用combineReducers将所有的reducer合并成一个大的reduer。利用createStore创建store并引入combineReducers和applyMiddleware。

3. 利用connect将actionCreator，reuder和顶层的ui组件进行关联并返回一个新的组件。

4. 利用connect返回的新的组件配合react-router进行路由的部署，返回一个路由组件Router。

5. 将Router放入最顶层组件Provider，引入store作为Provider的属性。

6. 调用render渲染Provider组件且放入页面的标签中。


可以看到顶层的ui组件其实被套了四层组件，Provider，Router，Route，Connect，这四个并不会在视图上进行任何改变，它们只是功能性的。

上图的顶层ui组件属性总共有18个，如果刚刚接触react，可能对这些属性怎么来的感到困惑，其实这些属性来自五个地方：

组件自定义属性1个，actionCreator返回的对象6个，reducer返回的state4个，Connect组件属性0个，以及Router注入的属性7个。

### 总结react中遇到的坑和一些小的知识点

在使用react 中经常会遇到各种个样的问题，如果对react不熟悉则会对遇到的问题感到莫名其妙而束手无策，接下来分析一下react中容易遇到的问题和注意点。

* setState()是异步的
  this.setState()会调用render方法，但并不会立即改变state的值，state是在render方法中赋值的。所以执行this.setState()后立即获取state的值是不变的。同样的直接赋值state并不会出发更新，因为没有调用render函数。

* 组件的生命周期
  componentWillMount，componentDidMount 只有在初始化的时候才调用。
  componentWillReceiveProps，shouldComponentUpdate，componentWillUpdata，componentDidUpdate 只有组件在更新的时候才被调用，初始化时不调用。

* reducer必须返回一个新的对象才能触发组件的更新
  因为在connect函数中会对新旧两个state进行浅对比，如果state只是值改变但是引用地址没有改变，connect会认为它们相同而不触发更新。

* 组件命名的首字母必须是大写，这是类命名的规范。

* 组件卸载之前，加在dom元素上的监听事件，和定时器需要手动清除，因为这些并不在react的控制范围内，必须手动清除。

* 按需加载时如果组件是通过export default 暴露出去，那么require.ensure时必须加上default。

* componentWillUpdate中可以直接改变state的值，而不能用setState。

* 如果使用es6class类继承react的component组件，constructor中必须调用super，因为子类需要用super继承component的this，否则实例化的时候会报错。


### 组件的所有子节点（this.props.children）

this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点.

```jsx
var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        this.props.children.map(function (child) {
          return <li>{child}</li>
        })
      }
      </ol>
    );
  }
});

React.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.body
);
```

上面代码的 NoteList 组件有两个 span 子节点，它们都可以通过 this.props.children 读取，运行结果如下。

这里需要注意，只有当子节点多于1个时，this.props.children 才是一个数组，否则是不能用 map 方法的， 会报错。


### React中使用HTML展示

```jsx
<div dangerouslySetInnerHTML={{__html: '<sup>xx</sup>'}} />
```



# Koa

> [《一起学 Node.js》-express blog](https://github.com/nswbmw/N-blog/blob/master/book/2.1%20require.md)

> [《一起学 Node.js》-koa blog](https://nswbmw.github.io/N-club/7/7.3.html)

> [一步步学KOA【死马】： learn koa step by step](https://github.com/dead-horse/koa-step-by-step#generator)

> [Koa2进阶学习笔记](https://chenshenhai.github.io/koa2-note/)

有助于基础理解


## Koa1

- co 也是 Koa 1 选择的底层异步库，所有的 Koa 1 的中间件都必须是一个 generator function。

## Koa2




# Vue
# Node

* `>version`
* `>=version`
* `<version`
* `<=version`
* `~version` 大致版本
* `^version` 兼容版本


语义化版本（semver）

即 dependencies、devDependencies 和 peerDependencies 里的如：`"co": "^4.6.0"`。

semver 格式：主版本号.次版本号.修订号。版本号递增规则如下：

* `主版本号`：做了不兼容的 API 修改
* `次版本号`：做了向下兼容的功能性新增
* `修订号`：做了向下兼容的 bug 修正


作为 Node.js 的开发者，我们在发布 npm 模块的时候一定要遵守语义化版本的命名规则，即：有 breaking change 发大版本，有新增的功能发小版本，有小的 bug 修复或优化则发修订版本。

* `dependencies` 产品依赖
* `devDependencies` 开发依赖


npm i -S egg 安装产品依赖
npm i -D egg-bin 安装开发依赖


如果执行 `npm i` 会安装所有模块
如果执行 `npm install --production` 只会安装 `dependencies` 产品依赖

# Markdown

> metalsmith API［Markdown 转 HTML工具］


* [metalsmith API & 插件](http://www.metalsmith.io/)


### 使用API做一个真正的实例。

.use(plugin)

添加插件函数处理中间件队列，Metalsmith支持使用多个中间件，所以插件需要遵守相同的模式附带参数 (files, metalsmith, callback), 推荐修改文件或数据参数，并回调进入下个步骤。

Add the given plugin function to the middleware stack. Metalsmith uses ware to support middleware, so plugins should follow the same pattern of taking arguments of (files, metalsmith, callback), modifying the files or metalsmith.metadata() argument by reference, and then calling callback to trigger the next step.

.build(fn)

使用给定的设置和具有签名fn（err，files）的回调来构建。

.source(path)

设置资源相对路径，或指定一个不存在的目录，默认目录是./src

Set the relative path to the source directory, or get the full one if no path is provided. The source directory defaults to ./src.

.destination(path)

设置输出相对路径，或指定一个不存在的目录，默认目录是./build

Set the relative path to the destination directory, or get the full one if no path is provided. The destination directory defaults to ./build.

.concurrency(max)

指定文件第一次打开或编辑时的最大值， 默认无限制。避免一次打开太多文件，将并发设置为低于ulimit -n的值。

Set the maximum number of files to open at once when reading or writing. Defaults to Infinity. To avoid having too many files open at once (EMFILE errors), set the concurrency to something lower than ulimit -n.

.clean(boolean)

设置在写入目标目录之前是否删除目标目录，或获取当前设置。 默认为true。

Set whether to remove the destination directory before writing to it, or get the current setting. Defaults to true.

.frontmatter(boolean)

设置是否解析YAML frontmatter。 默认为true

.ignore(path)

忽略文件/路径加载到Metalsmith。

路径可以是字符串，函数或字符串和/或函数的数组。

字符串使用glob语法从minimatch匹配文件和目录忽略。

函数以文件的完整路径作为它们的第一个参数，

以及Node的fs.lstat函数返回的lstat对象作为它们的第二个参数来调用，

并且必须返回true来忽略该文件，否则返回false来保留它。

.metadata(json)

获取全局元数据。 这对于想要设置可应用于所有文件的全局级元数据的插件非常有用。

Get the global metadata. This is useful for plugins that want to set global-level metadata that can be applied to all files.

.path(paths…)

解析相对于工作目录的任何数量的路径…。 这对于希望从其他目录读取额外资源的插件（例如./layouts）非常有用。

Resolve any amount of paths… relative to the working directory. This is useful for plugins who want to read extra assets from another directory, for example ./layouts.

.run(files, fn)

在文件的字典上运行所有中间件函数，并使用fn（err，files）回调函数，其中文件是更改的字典。

Run all of the middleware functions on a dictionary of files and callback with fn(err, files), where files is the altered dictionary.

---


### Plan I：

1. 建立配置文件 metalsmith.json

2. 配置项

   ```
   {
     "source": "./src",
     "destination": "./dest",
     "plugins": {
       "metalsmith-markdown": {},
       "metalsmith-layouts":{
         "engine": "ejs",
         "directory": "template"
       }
     }
   }
   ```

3. 建立配置好的目录和ejs模版文件

4. package.json 安装对应的插件

   ```
   npm i --save metalsmith-markdown
   npm i --save metalsmith-layouts
   npm i --save ejs
   ...
   ```

5. 运行 `metalsmith`


---

> [Raneto](https://github.com/gilbitron/Raneto)--支持Markdown的开源知识库

- 本地新增文档
- 可视化编辑markdown
- 管理用户，管理本地文档



### API

免费开源API发布系统，书写官方文档，发布与展示

RAML vs. Swagger vs. API Blueprint


# Git
* [https://github.com/Gazler/githug](https://github.com/Gazler/githug)
* [http://www.jianshu.com/p/482b32716bbe](http://www.jianshu.com/p/482b32716bbe)
* [http://backlogtool.com/git-guide/cn/](http://backlogtool.com/git-guide/cn/)


### 标签
* 轻标签

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

[官方文档](http://doc.ucweb.local/pages/viewpage.action?pageId=41194515)

# 活动开发流程

### 需求评审
### 需求测试用例编写
### 巴比塔文案模型
### 构建开发环境
### 前端组件
* [所有组件](http://gitlab.alibaba-inc.com/bread)
* [国际前端业务全家桶](http://gitlab.alibaba-inc.com/bread/bucket)
* [Preact多语言组件](http://gitlab.alibaba-inc.com/bread/preact-intl)
* [Preact Router](http://gitlab.alibaba-inc.com/bread/preact-router)


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

# 戒烟

* 早晨的口臭，喉咙干燥

* 夜间的猛力咳嗽和干呕

* 抽烟没有好处，再好的烟也是毒

* 注意心脏和肺部健康


自打我们懂事时起，潜意识无时无刻不遭到各种信息的狂轰滥炸，其中许多信息都告诉我们：香烟是世界上最好的东西，能让我们放松，给我们信心和勇气。你觉得我是在夸大？看电影、话剧或动画片时，如果一个角色即将被处自打我们懂事时起，潜意识无时无刻不遭到各种信息的狂轰滥炸，其中许多信息都告诉我们：香烟是世界上最好的东西，能让我们放松，给我们信心和勇气。你觉得我是在夸大？看电影、话剧或动画片时，如果一个角色即将被处以死刑，他的最后遗愿通常是什么？没错，吸一支烟。这样的情节并不会对我们的意识造成任何影响，但是我们的潜意识却会吸收其中的隐含信息，也就是：“香烟是世界上最好的东西，所以我才会把它作为临终选择。”在绝大多数战争片中，受伤的人都会得到一支香烟。

年复一年，这样的信息轰炸并没有改变。今天青少年的潜意识，仍然要承受各种信息的狂轰滥炸。尽管电视香烟广告已遭禁止，但在播放电视剧的黄金时间，屏幕上的明星们却都在吞云吐雾。体育运动也是一样。许多参加一级方程式大赛的赛车都以香烟品牌命名——或者是反过来，香烟品牌是以赛车命名？我曾看到过这样的插播广告：一对裸体的夫妇在做爱之后，躺在床上共吸一支香烟。广告的暗示意味再明显不过了。尽管我无法赞同广告商的动机，但却不得不佩服他们的宣传手段。经常会有这样的宣传片：一个人正面临危急关头——他的热气球即将起火坠落，或者摩托车侧厢即将栽进峡谷，或者他是哥伦布，他的船马上就要从海洋的尽头掉进深渊之中。轻音乐响起，没有任何话语说明，那个人点起一支烟，脸上洋溢着幸福的表情。我们的主观意识或许会直接忽略这样的场面，但是潜意识却难免受其影响。

的确，反对吸烟的宣传也不是不存在——强调吸烟有害健康，提倡大众戒烟的宣传——但是单纯强调吸烟的危害，并不能为吸烟者提供戒烟的动力，更无法阻止青少年尝试吸烟。我自己还是个烟鬼的时候一直以为，当年我如果知晓吸烟与肺癌之间的关系，绝对不会开始吸烟。事实是，就算那样也不会有任何区别。吸烟的陷阱在今天，跟在文艺复兴时代没有任何区别。反对吸烟的宣传不仅于事无补，反而会把事情弄糟。所有的烟盒上都印有“吸烟有害健康”的字样，然而有人会去看吗？
我相信，关于吸烟有害健康的宣传，甚至会增加香烟的销量。吸烟者看到这样的宣传，无疑会心情紧张，于是抽掉更多的烟。

只有当我们决心戒烟，或是弄不到香烟，或是身处禁止吸烟的地方（学校、医院、超市、剧院、教堂等）时，才会觉得吸烟很重要。
吸烟者必须意识到，禁止吸烟的地方会越来越多。总有一天，任何公共场合都不允许吸烟。
过去吸烟者迈进朋友或陌生人家里时，还可以问一句“你介意我吸烟吗”？现在，社会礼仪已经不允许他开口，他只能绝望地打量周围，希望看到一个留有烟痕的烟灰缸。如果看不到，他只能强忍烟瘾，直到实在忍不住，不得不征求主人的同意。主人的回答有可能是“实在忍不住就吸吧”，也有可能是“最好还是不要，烟味很长时间都散不掉”。

可怜的吸烟者，原本已经感觉十分糟糕了，现在更是无地自容。

过去冬天打室内保龄球时，我经常假装上厕所，然后偷偷点一支烟。这样的事原本只有14岁的男孩子会做，而我却是个40岁的会计师。真是可怜！就算回到球场上，我也无法享受打球的过程，只是在强忍着等球打完，好重获“自由”。保龄球原本是一种休闲，却因为吸烟成为一种负担。

对我来说，戒烟的最大快乐就是，我终于可以自由享受生活，不必再忍受烟瘾的奴役。不必再花一半的时间盼望着吸烟，另一半时间则一边吸烟，一边希望自己当初没有染上烟瘾。
吸烟者应该时刻记住，当他们在非吸烟者家里或禁止吸烟的场所忍受折磨时，折磨他们的并不是非吸烟者，而是尼古丁这个恶魔。

我们必须消除洗脑作用的影响。否则，吸烟者终其一生，都无法好好享受：

·良好的健康
·充沛的精力
·心灵的安宁
·财富
·自信
·勇气
·自尊
·幸福
·自由

我已经解释过，吸烟者认为吸烟是一种享受，能帮他们放松，或是能起到别的什么正面作用。这是一种错觉，吸烟的真正作用是对尼古丁戒断症状的暂时缓解。
过去，吸烟曾经是社会地位的标志。不过，那样的时代早已一去不复返。如今，我们的潜意识整天都在接受暗示：在恰当的时机点上一支烟是一种享受。

2017-04-06
一天没有吸烟，有几个瞬间想吸烟，我倒是看看不抽会怎么样，抱着对自己的好奇心，泡上一杯柠檬水，就这么不经意间过了，时常觉得柠檬水是很神奇的东西，有人说也会像烟一样上瘾，我想如果真会这样，应该也不差吧。

2017-04-07
有些担心被烟吸引，要懂得照顾自己，今天没有咳嗽，早早的起床洗澡，感觉萌萌达，在路上感官向远处延伸，天色不错，感触空气中饱饱的水份。\

2017-04-10
第四天，在超市买了些菜，看到背景里五颜六色的小盒子，联想起烟雾飘渺的场景，差点就要伸出手时，低头间一串串娇艳欲滴的红提，勾起了我的味蕾，不如水果来得美好。

# 减肥

* 最近两天晚上没东西吃，小肚子仿佛消瘦了一些，注意坚持过9点不再吃零食，防蛀牙，也能保持好身材


分享我理解的减肥十件事：

1.不要减少用餐数量

2.把用餐的碟子从12寸改为10寸，可以少吃22%食物

3.计算卡路里数量，人体需求2000卡路里/天，超过需要的热量将变成脂肪

4.吃蛋白质食物可以饱腹更长时间

5.粥可饱腹长时间（增大食物体积，延长消化时间

6.人类天生食物多样化，多样化催生占有欲，导致进食量加大

7.吃低脂乳制品，因为钙会与食物脂肪结合，变成皂质的物质，肠道不能吸收，从身体排出。

8.运动，可燃烧脂肪，运动后持续燃烧脂肪24小时

9.保持活跃，相同的饮食

10.不要节食，饥饿会让你选择高热量的食物

# 咳嗽-治疗

1. 茄子把冰冻5小时，再煮水喝
2. 煲点老鸭汤
3. 冰糖雪梨不能治疗有痰咳嗽
4. 橙子削顶后抹盐，蒸



# Atom

[80个有趣且好用的Atom插件](https://github.com/kompasim/atom-plugins)

# 信息流专题页-插件开发

初始化插件：rpg sample component-preact-compat

# 信息流专题页

> 看图模式


* 需要前后端配合，实现完全符合的数据格式
* 达到的效果和预期不一致
* 在业务纯熟的时候实现该功能


## 信息流专题页遇到的问题

> 开发环境不一样


* 开发环境不能良好的对接，编译，部署，发布

* 配置环境，引入前端JS，CSS和预期不一致，在导入阿里包文件时，找不到对应的包文件。

* 手动拷贝需要的JS，CSS文件到指定的路径，实现。

* 部署到测试环境每次需要10-20分钟，不方便调试和测试，过程不顺利，花费时间多。

* 在测服发现模版问题后，请求后台协助排查没有得到支持，前端多方协助，排查问题后，定位到后台模版问题，得到解决。

* 前期不习惯用插件开发的方式，每次修改比较花时间，以后的开发中，建议还是先开发功能，后提取。


> 对需求的理解


* 本来是由前端提供前端文件，最终包括了开发JSP文件，部署新专题入口，配置前端文件。

* 【评论模块】

1. 不能直接接入——（广耀整理了一份，协助接入）
2. 很多细节配置，页面报错——（已经处理）
3. 专题没有评论的数据——（评论功能由前端开发，存在一些问题，经讨论后，暂不上线）


> 后期增加的需求


* 【看图模式】功能——1.提供了开发文档，数据格式有误，不完全标准规范。2.没有告知需要引入JSSDK，是找到刘威龙了解时发现的问题。3.真实数据与所需数据不匹配，不能按照API展示数据，需要前后端配合，实现完全符合的数据格式，达到的效果和预期不一致，在业务纯熟的时候实现该功能，经过产品讨论后，暂时不实现该功能。

* 【预览模式】功能——1.需求经过讨论后由后端实现，在项目快结束时，后端研发提出前端再实现另外一种方案。临近发布，暂时不实现该功能。


---


已经提测，发布到测服，等待发布上线

1. 希望后端发布到release预发布环境看效果，没有得到相应的支持。
2. 记录所有开发的问题，注意事项，方便后期维护与迭代
3. 项目结束开发阶段，后续跟进上线情况。


# Broccoli

## Broccoli开发组件

通过脚手架初始化项目，然后安装依赖，最后直接启动。

```
$ rpg sample component-react
$ tnpm i
$ tnpm run dev
```

## Broccoli下创建组件

### 发布组件

> 【组件】发布到tnpm


```
tnpm run build
tnpm publish
```

> 【组件】更新到Broccoli正式, 开发, 测试环境


```
npm run pub && npm run pub:dev && npm run pub:test
```

> 【构建服务】代码库 (build-service)


* 拉取构建服务代码，checkout release分支
* [添加需要的依赖包到ci-build.sh](http://xn--ci-build-612ms6sf9ax8as74ub8yajs3ds2mtx2b.sh)
* 提交到任意release分支，都会触发打包

* 更新[UAE构建服务](http://uae.ucweb.local/apps/3958/status)上的最新包。
* 【后台服务】[后台开发服务](http://broccoliadmin.dev.uae.uc.cn/web/)，就能用上你的最新组件啦。


> 组件可视化配置


* 进入adminn项目
* 在 install_components.sh, builder/webpack.config.components.js 文件中添加插件名称
* npm run build:components
* npm run build:components:prod


需要定义的内容：

1. 文本


点击后行为
选择字体类型；
选择字体大小；
选择字体颜色；
是否加粗；
是否倾斜；
是否加下划线；
选择对齐方式；
选择间距（默认有）；
选择背景颜色

1. 图片


点击后行为
宽度100%
高度适应
上传
替换

1. 全景图


点击后行为
支持滑动，陀螺仪方向 360度旋转
上传
替换

1. 视频


点击后行为
全屏／非全屏
上传替换

1. 轮播图


点击后行为
不无限循环
上传，
替换，
增加，
删除，

1. 按钮


点击后行为
选择字体类型；
选择字体大小；
选择字体颜色；
是否加粗；
选择背景颜色；
填写按钮宽度；
填写按钮高度；

伟大的组件库

* broccoli-show-star-topic-loading
* broccoli-tpl-rule
* broccoli-tpl-draw-prize


# 幻幕广告

7-3

* 幻幕广告同步问题给产品-播放器进度条已播放进度不生效
  1. input range 拖动条before after不被支持
  2. IOS下按钮太小不触发拖动
* 确认金桥区域下载页详细需求
  完成金桥区域下载页详细需求，确认通过。


7-4

* 幻幕广告
  1. 发布失败 —— 全流程多次调试，发布成功
  2. 按钮SVG图像不能正常显示—— 尝试了多钟方式，定位到的原因是，SVG传上SDN后，通过地址栏访问报错，解决方案：SVG换成PNG图像
  3. 视频Android版本，界面测试通过。
  4. 界面可视化失败 —— 分析原因，可能是组件的衔接问题，需要验证，改写
  5. 整理统计埋点内容，同步产品
* 发布哥伦布第一个试用组件


7-5

* 幻幕广告
  1. 按钮SVG图像不能正常显示—— SVG换成PNG图像
  2. 视频IOS版本，界面测试通过。
     安装特别包，生成二维码扫描：
     UMax:{“document”:“[http://render.test.uae.uc.cn/umax/apps/xuanjingguanggao/routes/image](http://render.test.uae.uc.cn/umax/apps/xuanjingguanggao/routes/image)”}
     UMax:{“document”:“[http://100.84.247.216:5001/examples/](http://100.84.247.216:5001/examples/)”}
  3. 界面可视化失败，改写动画模块，测试后，不能达到可视化。原因：组件可视化编辑需要兼容处理功能，已由铭浩添加
  4. 新增需求——前端接收客户端数据，设定页面第一元素是否动画，动画延迟时长。
* UC开放平台
  完成pfId项添加，上线


7-6

* 幻幕广告
  1. 新增需求——前端接收客户端数据，设定页面第一元素是否动画，动画延迟时长。
* UClite灵动版-落地页优化
  1. 测试定位问题


7-7

* 幻幕广告
  1. 抽取组件作为Broccoli基本组件调用。
* UClite灵动版-落地页优化
  1. 测试定位问题


7-8
* 图片要有默认尺寸
*
本周工作：
* []幻幕广告接入Broccoli平台，配置了可视化环境，方便产品设计师更新，上线
* []抽取通用组件，供Broccoli自由拖拽，并应用到以后的项目中。
* []UC开放平台完成渠道功能，发布上线
* []UClite灵动版-落地页优化
* []完成了通用视频组件，在IOS,Android平台下UC浏览器，能达到理想效果【跨多个平台，效果一致，操作一致，功能一致】。


# 开放平台

> 问题


* 审批后台U4应用列表,XXL应用列表无数据显示


可能的原因：旧数据或非法操作导致列表不能展示

# 金桥区域下载页

## 运营配置后台

* [链接进入](http://broccoliadmin.zc.uae.uc.cn/web/apps/0003)


## 发布后访问

* [正式地址](http://broccoli.uc.cn/apps/jqqyxzy/routes/cash_redpack)


#

# 开放平台本周工作报道

1、信息流移动端本周一发布上线
2、更新处理完反馈的问题，同步到线上环境
3、完成H5详情页定制

今天1:30的云栖大会上演示

4、同步U盟账号，旧数据打通
5、开发第三方平台登录，正在联调，预计本周完成



11.6——11.10
站点头部调整，账号登录后展示优化，添加用户中心账号管理入口
信息流，U4文档更新，改变文档UI
后台管理，增加应用对应的用户信息展示。


NODE化后台管理服务


流年似水化成河，记忆辗转化成歌

优秀是一种习惯

将来的你会感激现在努力的自己

所有的生命都值得温柔以待

知世俗而不世俗，是最善良的成熟。

如果我走过你走过的路,看过你看过的风景,会不会离你更近一些

有多逗逼，就有多深情。

浪漫了时光，温柔了岁月

我许你万千宠爱，你回我翻脸无情

两个人的回忆，现在只被我一个人想起

我捧你的时候你是杯子，松手的时候你就是个玻璃碴子

昨天的我你爱理不理,今天的我你高攀不起

我能把你宠上天，也能杀你不眨眼

写一封信给从前的自己：我很好，只是想你。

从你的世界路过，晴时满树花开，雨天一湖涟漪

曾经我也小鹿乱撞过，现在可能是撞死了吧

有没有一盏灯，恰好让你心有悸动?

有梦不觉寒


# 健康

 1.健康生活方式：
（1）饮食---会吃就是会养生。A.早餐要吃够五种颜色，五谷杂粮粥（大米，小米，糙米，燕麦，红豆，绿豆，薏米熬粥），或者吃够五种颜色的蔬菜，肉类在早上吃最好；午餐吃饱，有荤有素；晚餐吃少（不吃最好），米饭+粥+薯类，不要吃肉和油；B.一顿三餐，主食要占到50%以上，最好在70-80%，蔬菜20-30%，肉类5-30%，绝对不要超过30%；
（2）起居---跟着太阳公公的节奏。早上6:00之前要起床（升阳气），不加班的话，22:30之前一定要睡觉，23:00-3:00是肝胆经回血的时候，要熟睡；每天要7次小便，早9:00前大便；
（3）运动---运动是健康向上的阶梯。推荐传统健身方法：站桩（大成桩），八段锦，太极拳和禅坐，女同学推荐瑜伽。无论男女，一定要有一项持之以恒的运动健身方法，哪怕是跑步也好。“日有百痛（运动痛），可度百岁而无病痛，日无一痛则一病呜呼”；
 2.常见疾病的缓解调理方法：
（1）颈椎肩周疾病：每坐1-2个小时，起来远眺窗外，双手带双臂从胸前环绕到头顶最后到身后画圆数十次；也可以练八段锦前四式；早晚练两次：身体直立，两臂自然下垂，头向身体的左右前后上五个方向最大限度的放松倾斜拉伸1分钟；揉手上的后溪穴和肩上的肩井穴；艾灸大椎穴；
（2）习惯性便秘：晚餐不吃油腻，多吃薯类和蔬菜，早餐吃五谷杂粮粥，早5:00-7:00敲两臂的大肠经，早起一杯阴阳水（前晚的凉白开和刚烧的开水混合）；
（3）小儿湿疹：隔衣服艾灸双臂尺泽穴和合谷穴各7分钟；
（4）小儿免疫力低下，便秘，脾胃虚弱：每晚睡前捏脊9/21次，上下捋脊柱及两侧，抹按摩油从内向外拔捋四肢，顺时针揉肚子49次；常吃北京同仁堂产的“小儿健脾丸”
（5）甲状腺结节：每天喝三杯黑茶或普洱茶+玫瑰花+陈皮泡水，晨起空腹运动或快走至少30分钟，早晚两次翘脚跟远眺10分钟；
（6）预防老人突发性中风：70岁以上老人，每天出门前用力空掌拍腋下极泉、肩膀尖、肩井穴各36次；家里常备、随身携带北京同仁堂产的“安宫牛黄丸”，发现中风马上热水服下；
（7）脾胃虚寒、大便不成型：晨起喝一杯红糖姜水，吃附子理中丸+桂附地黄丸；
（8）饭水分离养生法：每顿饭前后各两个小时不喝任何汤和水，先吃米饭再吃菜，每口饭细嚼慢咽，让食物与唾液充分搅拌；
（9）肾虚：两手空拳放置腰眼处，两腿与肩同宽站立微曲带动身体颤动5分钟；八段锦的“两手攀足固肾腰”；睡前练“还阳卧”；
（10）失眠：睡前泡脚，搓脚底涌泉穴，深呼吸法（连续深呼吸几十次，然后自然呼吸数呼吸次数），自我暗示放松法（观想从头到脚，默念放松，放松。。。），推荐用软管枕（头凉脚暖睡得香，天猫有卖）；
 好了，就写这些吧。以上均为验证过的方法，至少本人和家人是有效的。大家日后如果有疑问和需要，可以加我随问随答！祝各位看官及家人，吉祥安康！！！最后唠叨一句，再忙再累，也不要忽视健康！
