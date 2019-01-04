# Great plan

## <a href="#es6">ES6</a>

## <a href="#css">CSS</a>

## <a href="#react">React</a>

## <a href="#koa">Koa</a>

## <a href="#vue">Vue</a>

## <a href="#node">Node</a>

## <a href="#npm">NPM</a>

## <a href="#git">Git</a>

## <a href="#mysql">MySQL</a>

## <a href="#mongodb">Mongodb</a>

## <a href="#ci">CI</a>

## <a href="#habit">Good Habit</a>



# <p id="es6">ES6</p>

> [ECMAScript 6 入门](http://es6.ruanyifeng.com/?search=values&x=0&y=0#docs/let)

> Promise 精简写法

下面两种写法一样：

```js
// demo1
new Promise(function(resolve, reject) {
  resolve("value");
}).then(function(data) {});

// demo2
Promise.resolve("value").then(function(data) {});
```

> 时间转换

```js
Date.parse(Date());
// 1488372059000 时间戳

const today = new Date();
today.toISOString().slice(0, 10);

// "2017-03-01"

today.toISOString();

// "2017-03-01T12:44:09.787Z"
// 该标准称为 ISO-8601 与中国的时间有差异+0800
// toISOString() 方法可以使用ISO标准将 Date 对象转换为字符串。
// 格式为: (注意毫秒数是3位数)
// YYYY-MM-DDTHH:mm:ss.sss

// 也可以通过以下方式获得

today.getFullYear();
today.getMonth() + 1;
today.getDate();
today.getHours();
today.getMinutes();


today.setDate(today.getDate() + 1);
// 返回明天的日期
```

> 字符串提取

```
slice() - 提取字符串的片断，并在新的字符串中返回被提取的部分。
('hello world').slice(6,11);
// 从位置6，到位置11

('hello world').slice(-2);
// ld 返回最后2个字符
```

> uri 编码

```
var p = '?keyword=' + encodeURIComponent('hello');
var p = encodeURI('http://www.uc.cn');
```

- encodeURIComponent() 部分 URI 进行编码，它输出符号的 utf-8 形式，不编译的特殊字符 - \_ . ! ~ \* ’ ( )
- encodeURI() 完整的 URI 进行编码，不编译的特殊字符 - \_ . ! ~ \* ’ ( ) ;/?:pout:&=+\$,#

> uri 解码

```
decodeURIComponent()
decodeURI()
```

> 数组去重——使用 Set 特性

```markup
const arr1 = [1, 3, 5, 5, 8];
const arr2 = Array.from(new Set(arr1))
[1, 3, 5, 8]
```

# <p id="css">CSS</p>

> 有序列表数字符号

```css
ol {
  counter-reset: section;
  > li {
    position: relative;
    padding: 0 0 0 30px;
    line-height: 30px;
    margin: 0 0 48px;
    counter-increment: section;
  }
  > li:before {
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

# <p id="mysql">MySQL</p>

[MySQL 教程](http://www.yiibai.com/mysql/show-databases.html)

### Mac 配置 MySQL

- Mac 配置 MySQL

推荐去官网上直接下载 dmg 包，下一步，安装后，记录下 root 用户的初始密码。

- 启动 MySQL

在系统偏好设置里面找到 Mysql,并点击 start mysql server：running 表示成功

- 配置路径

打开「默认」终端配置文件，（如果你的终端是 Zsh,对应的配置文件是~/.zshrc)

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

- 登陆

```shell
mysql -u root -p
```

接下来输入安装时的默认密码，回车之后成功进入 mysql；
在当前环境下输入

- 修改密码

```sql
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123');
```

`123` 你的密码。

完成后，重新登陆验证。

- 登陆后使用 mysql 语句

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

> [webpack 中 library 和 libraryTarget 与 externals 的使用](https://github.com/zhengweikeng/blog/issues/10)

> [webpack 使用优化（基本篇）](https://github.com/lcxfs1991/blog/issues/2)

> js-xlsx 导出 Excel 文件时，添加支持浏览器补丁

Forked version of js-xlsx to add browserify support. See [https://github.com/SheetJS/js-xlsx/issues/143](https://github.com/SheetJS/js-xlsx/issues/143) for details on the original issue, and this commit for the fix.

\$ npm install xlsx-browserify-shim

# React

> [React 中文文档@编程思想](https://chenyitian.gitbooks.io/react-docs/content/docs/thinking-in-react.html)

> [React 小书](http://huziketang.com/books/react/lesson2) > [基于 webpack + react + react-router + redux + less + flex.css + ES6 的 React 版 cnode 社区](http://react-china.org/t/webpack-react-react-router-redux-less-flex-css-es6-react-cnode/6332)

> [分享一个 react + redux 完整的项目，同时写一下个人感悟](http://react-china.org/t/react-redux/9072/13)

## 查看安装的 React 版本

```shell
npm ls react
```

## 组件的生命周期

> 组件在初始化时会触发 5 个钩子函数：

- `getDefaultProps()`
  设置默认的 props，也可以用 defaultProps 设置组件的默认属性。

- `getInitialState()`
  在使用 es6 的 class 语法时是没有这个钩子函数的，可以直接在 constructor 中定义 this.state。此时可以访问 this.props。

- `componentWillMount()`
  组件初始化时只调用一次，此时可以修改 state。

- `render()`
  react 最重要的步骤，创建虚拟 dom，进行 diff 算法，更新 dom 树都在此进行。此时就不能更改 state 了。

- `componentDidMount()`
  组件渲染之后调用，可以通过 this.getDOMNode()获取和操作 dom 节点，只调用一次。

> 组件还有其他 5 个钩子函数：

- `componentWillReceiveProps(nextProps)`
  组件初始化时不调用，组件接受新的 props 时调用。

- `shouldComponentUpdate(nextProps, nextState)`
  react 性能优化非常重要的一环。组件接受新的 state 或者 props 时调用，
  我们可以设置在此对比前后两个 props 和 state 是否相同，如果相同则返回 false 阻止更新，因为相同的属性状态一定会生成相同的 dom 树，这样就不需要创造新的 dom 树和旧的 dom 树进行 diff 算法对比，节省大量性能，尤其是在 dom 结构复杂的时候。不过调用 this.forceUpdate 会跳过此步骤。

- `componentWillUpdata(nextProps, nextState)`
  组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改 state

- `render()`
  不多说

- `componentDidUpdate()`
  组件初始化时不调用，组件更新完成后调用，此时可以获取 dom 节点。

- `componentWillUnmount()`
  组件将要卸载时调用，一些事件监听和定时器需要在此时清除。

以上可以看出来 react 总共有 10 个周期函数（render 重复一次），这个 10 个函数可以满足我们所有对组件操作的需求，利用的好可以提高开发效率和组件性能。

# 项目初始化

```
npm init
```

# React 安装

```
npm install -S react react-dom
```

# Redux 安装

```
npm install -S redux react-redux redux-thunk
npm install -D redux-logger
```

# 项目搭建

上面说了 react，react-router 和 redux 的知识点。但是怎么样将它们整合起来，搭建一个完整的项目。

1. 先引用 react.js，redux，react-router 等基本文件，建议用 npm 安装，直接在文件中引用。

2. 从 react.js，redux，react-router 中引入所需要的对象和方法。

```js
import React, { Component, PropTypes } from "react";
import ReactDOM, { render } from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory,
  hashHistory
} from "react-router";
```

1. 根据需求创建顶层 ui 组件，每个顶层 ui 组件对应一个页面。

2. 创建 actionCreators 和 reducers，并用 combineReducers 将所有的 reducer 合并成一个大的 reduer。利用 createStore 创建 store 并引入 combineReducers 和 applyMiddleware。

3. 利用 connect 将 actionCreator，reuder 和顶层的 ui 组件进行关联并返回一个新的组件。

4. 利用 connect 返回的新的组件配合 react-router 进行路由的部署，返回一个路由组件 Router。

5. 将 Router 放入最顶层组件 Provider，引入 store 作为 Provider 的属性。

6. 调用 render 渲染 Provider 组件且放入页面的标签中。

可以看到顶层的 ui 组件其实被套了四层组件，Provider，Router，Route，Connect，这四个并不会在视图上进行任何改变，它们只是功能性的。

上图的顶层 ui 组件属性总共有 18 个，如果刚刚接触 react，可能对这些属性怎么来的感到困惑，其实这些属性来自五个地方：

组件自定义属性 1 个，actionCreator 返回的对象 6 个，reducer 返回的 state4 个，Connect 组件属性 0 个，以及 Router 注入的属性 7 个。

### 总结 react 中遇到的坑和一些小的知识点

在使用 react 中经常会遇到各种个样的问题，如果对 react 不熟悉则会对遇到的问题感到莫名其妙而束手无策，接下来分析一下 react 中容易遇到的问题和注意点。

- setState()是异步的
  this.setState()会调用 render 方法，但并不会立即改变 state 的值，state 是在 render 方法中赋值的。所以执行 this.setState()后立即获取 state 的值是不变的。同样的直接赋值 state 并不会出发更新，因为没有调用 render 函数。

- 组件的生命周期
  componentWillMount，componentDidMount 只有在初始化的时候才调用。
  componentWillReceiveProps，shouldComponentUpdate，componentWillUpdata，componentDidUpdate 只有组件在更新的时候才被调用，初始化时不调用。

- reducer 必须返回一个新的对象才能触发组件的更新
  因为在 connect 函数中会对新旧两个 state 进行浅对比，如果 state 只是值改变但是引用地址没有改变，connect 会认为它们相同而不触发更新。

- 组件命名的首字母必须是大写，这是类命名的规范。

- 组件卸载之前，加在 dom 元素上的监听事件，和定时器需要手动清除，因为这些并不在 react 的控制范围内，必须手动清除。

- 按需加载时如果组件是通过 export default 暴露出去，那么 require.ensure 时必须加上 default。

- componentWillUpdate 中可以直接改变 state 的值，而不能用 setState。

- 如果使用 es6class 类继承 react 的 component 组件，constructor 中必须调用 super，因为子类需要用 super 继承 component 的 this，否则实例化的时候会报错。

### 组件的所有子节点（this.props.children）

this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点.

```jsx
var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
        {this.props.children.map(function(child) {
          return <li>{child}</li>;
        })}
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

这里需要注意，只有当子节点多于 1 个时，this.props.children 才是一个数组，否则是不能用 map 方法的， 会报错。

### React 中使用 HTML 展示

```jsx
<div dangerouslySetInnerHTML={{ __html: "<sup>xx</sup>" }} />
```

> JSX 简介

JSX， 一种 JavaScript 的语法扩展。
推荐在 React 中使用 JSX 来描述用户界面
JSX 乍看起来可能比较像是模版语言
事实上它完全是在 JavaScript 内部实现的。

我们书写 JSX 的时候一般都会带上换行和缩进，这样可以增强代码的可读性。与此同时，我们同样推荐在 JSX 代码的外面扩上一个小括号，这样可以防止 分号自动插入 的 bug。

JSX 本身其实也是一种表达式

在编译之后呢，JSX 其实会被转化为普通的 JavaScript 对象。

这也就意味着，你其实可以在 if 或者 for 语句里使用 JSX，将它赋值给变量，当作参数传入，作为返回值都可以

因为 JSX 的特性更接近 JavaScript 而不是 HTML , 所以 React DOM 使用 camelCase 小驼峰命名 来定义属性的名称，而不是使用 HTML 的属性名称。

React DOM 在渲染之前默认会 过滤 所有传入的值。它可以确保你的应用不会被注入攻击。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS(跨站脚本) 攻击。

# [Redux](https://www.redux.org.cn/)

# Koa

> [《一起学 Node.js》-express blog](https://github.com/nswbmw/N-blog/blob/master/book/2.1%20require.md)

> [《一起学 Node.js》-koa blog](https://nswbmw.github.io/N-club/7/7.3.html)

> [一步步学 KOA【死马】： learn koa step by step](https://github.com/dead-horse/koa-step-by-step#generator)

有助于基础理解

## Koa1

- co 也是 Koa 1 选择的底层异步库，所有的 Koa 1 的中间件都必须是一个 generator function。

## Koa2

> [Koa2 源码](https://github.com/koajs/koa)

> [Koa2 搭建 Node.js 实战项目教程](https://github.com/ikcamp/koa2-tutorial)

> [Koa2 进阶学习笔记](https://chenshenhai.github.io/koa2-note/)

## 使用 Koa.js，离不开这十个中间件

随着 ES6 的普及，async/await 的语法受到更多 JS 开发者的青睐，Koa.js 作为比较早支持使用该语法的 Node 框架越来越受到大家的喜爱，虽然 Koa.js 本身支持的功能很有限，但官方和社区提供了很多各种功能的中间件，本文精选了其中的十个，对于我们开发应用程序或者框架将会特别有用。

- No.1 koa-router

路由是 Web 框架必不可少的基础功能，koa.js 为了保持自身的精简，并没有像 Express.js 自带了路由功能，因此 koa-router 做了很好的补充，作为 koa 星数最多的中间件，koa-router 提供了全面的路由功能，比如类似 Express 的 app.get/post/put 的写法，URL 命名参数、路由命名、支持加载多个中间件、嵌套路由等。其他可选路由中间件：koa-route, koa-joi-router, koa-trie-router

- No.2 koa-bodyparser

koa.js 并没有内置 Request Body 的解析器，当我们需要解析请求体时需要加载额外的中间件，官方提供的 koa-bodyparser 是个很不错的选择，支持 x-www-form-urlencoded, application/json 等格式的请求体，但不支持 form-data 的请求体，需要借助 formidable 这个库，也可以直接使用 koa-body 或 koa-better-body

- No.3 koa-views

koa-views 对需要进行视图模板渲染的应用是个不可缺少的中间件，支持 ejs, nunjucks 等众多模板引擎。

- No.4 koa-static

Node.js 除了处理动态请求，也可以用作类似 Nginx 的静态文件服务，在本地开发时特别方便，可用于加载前端文件或后端 Fake 数据，可结合 koa-compress 和 koa-mount 使用。

- No.5 koa-session

HTTP 是无状态协议，为了保持用户状态，我们一般使用 Session 会话，koa-session 提供了这样的功能，既支持将会话信息存储在本地 Cookie，也支持存储在如 Redis, MongoDB 这样的外部存储设备。

- No.6 koa-jwt

随着网站前后端分离方案的流行，越来越多的网站从 Session Base 转为使用 Token Base，JWT(Json Web Tokens)作为一个开放的标准被很多网站采用，koa-jwt 这个中间件使用 JWT 认证 HTTP 请求。

- No.7 koa-helmet

网络安全得到越来越多的重视，helmet 通过增加如 Strict-Transport-Security, X-Frame-Options, X-Frame-Options 等 HTTP 头提高 Express 应用程序的安全性，koa-helmet 为 koa 程序提供了类似的功能，参考 Node.js 安全清单。

- No.8 koa-compress

当响应体比较大时，我们一般会启用类似 Gzip 的压缩技术减少传输内容，koa-compress 提供了这样的功能，可根据需要进行灵活的配置。

- No.9 koa-logger

koa-logger 提供了输出请求日志的功能，包括请求的 url、状态码、响应时间、响应体大小等信息，对于调试和跟踪应用程序特别有帮助，koa-bunyan-logger 提供了更丰富的功能。

- No.10 koa-convert

对于比较老的使用 Generate 函数的 koa 中间件(< koa2)，官方提供了一个灵活的工具可以将他们转为基于 Promise 的中间件供 Koa2 使用，同样也可以将新的基于 Promise 的中间件转为旧式的 Generate 中间件。

原文链接：https://www.jianshu.com/p/c1e0ca3f9764

# Node

- `>version`
- `>=version`
- `<version`
- `<=version`
- `~version` 大致版本
- `^version` 兼容版本

语义化版本（semver）

即 dependencies、devDependencies 和 peerDependencies 里的如：`"co": "^4.6.0"`。

semver 格式：主版本号.次版本号.修订号。版本号递增规则如下：

- `主版本号`：做了不兼容的 API 修改
- `次版本号`：做了向下兼容的功能性新增
- `修订号`：做了向下兼容的 bug 修正

作为 Node.js 的开发者，我们在发布 npm 模块的时候一定要遵守语义化版本的命名规则，即：有 breaking change 发大版本，有新增的功能发小版本，有小的 bug 修复或优化则发修订版本。

- `dependencies` 产品依赖
- `devDependencies` 开发依赖

npm i -S egg 安装产品依赖
npm i -D egg-bin 安装开发依赖

如果执行 `npm i` 会安装所有模块
如果执行 `npm install --production` 只会安装 `dependencies` 产品依赖

# NVM —— node 版本管理工具

## 开始安装(Linux 系统下)

curl 方式

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

## 可能遇到的问题

安装完后，如果是用 xshell 连远程主机的话，先重连一次，不然会发现提示找不到 nvm 命令

如果是 zsh 的话，请用

```bash
source ~/.zshrc
```

## 常用命令一览

- 终端输入 nvm，会看到帮助信息

```
nvm
```

- 列出全部可以安装的版本号

```
nvm ls-remote
```

- 安装指定版本

```
nvm install 7.9.0  #命令后加版本号就可以进行安装，字母v可以不写
```

- 切换指定版本，切换效果是全局的

```
nvm use v7.8.0
```

- 查看当前使用的版本
- ** 非常重要 **，安装后必须运行一下，确保安装好了

```
nvm current
```

- 查看该系统已经安装的版本，这个命令也能看到当前使用的是哪个版本

```
nvm ls
```

# Markdown

> metalsmith API［Markdown 转 HTML 工具］

- [metalsmith API & 插件](http://www.metalsmith.io/)

### 使用 API 做一个真正的实例。

.use(plugin)

添加插件函数处理中间件队列，Metalsmith 支持使用多个中间件，所以插件需要遵守相同的模式附带参数 (files, metalsmith, callback), 推荐修改文件或数据参数，并回调进入下个步骤。

Add the given plugin function to the middleware stack. Metalsmith uses ware to support middleware, so plugins should follow the same pattern of taking arguments of (files, metalsmith, callback), modifying the files or metalsmith.metadata() argument by reference, and then calling callback to trigger the next step.

.build(fn)

使用给定的设置和具有签名 fn（err，files）的回调来构建。

.source(path)

设置资源相对路径，或指定一个不存在的目录，默认目录是./src

Set the relative path to the source directory, or get the full one if no path is provided. The source directory defaults to ./src.

.destination(path)

设置输出相对路径，或指定一个不存在的目录，默认目录是./build

Set the relative path to the destination directory, or get the full one if no path is provided. The destination directory defaults to ./build.

.concurrency(max)

指定文件第一次打开或编辑时的最大值， 默认无限制。避免一次打开太多文件，将并发设置为低于 ulimit -n 的值。

Set the maximum number of files to open at once when reading or writing. Defaults to Infinity. To avoid having too many files open at once (EMFILE errors), set the concurrency to something lower than ulimit -n.

.clean(boolean)

设置在写入目标目录之前是否删除目标目录，或获取当前设置。 默认为 true。

Set whether to remove the destination directory before writing to it, or get the current setting. Defaults to true.

.frontmatter(boolean)

设置是否解析 YAML frontmatter。 默认为 true

.ignore(path)

忽略文件/路径加载到 Metalsmith。

路径可以是字符串，函数或字符串和/或函数的数组。

字符串使用 glob 语法从 minimatch 匹配文件和目录忽略。

函数以文件的完整路径作为它们的第一个参数，

以及 Node 的 fs.lstat 函数返回的 lstat 对象作为它们的第二个参数来调用，

并且必须返回 true 来忽略该文件，否则返回 false 来保留它。

.metadata(json)

获取全局元数据。 这对于想要设置可应用于所有文件的全局级元数据的插件非常有用。

Get the global metadata. This is useful for plugins that want to set global-level metadata that can be applied to all files.

.path(paths…)

解析相对于工作目录的任何数量的路径…。 这对于希望从其他目录读取额外资源的插件（例如./layouts）非常有用。

Resolve any amount of paths… relative to the working directory. This is useful for plugins who want to read extra assets from another directory, for example ./layouts.

.run(files, fn)

在文件的字典上运行所有中间件函数，并使用 fn（err，files）回调函数，其中文件是更改的字典。

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

3. 建立配置好的目录和 ejs 模版文件

4. package.json 安装对应的插件

   ```
   npm i --save metalsmith-markdown
   npm i --save metalsmith-layouts
   npm i --save ejs
   ...
   ```

5. 运行 `metalsmith`

---

> [Raneto](https://github.com/gilbitron/Raneto)--支持 Markdown 的开源知识库

- 本地新增文档
- 可视化编辑 markdown
- 管理用户，管理本地文档

### API

免费开源 API 发布系统，书写官方文档，发布与展示

RAML vs. Swagger vs. API Blueprint


# CMD

```
# 创建文件

md <folderName>
mkdir <folderName>

# 删除文件

del <folderName>

# 删除目录

rmdir <dirName>
rmdir /s /q [盘符:\][路径\]目录名

/s  直接删除
/q  不再询问 quiet 模式

```




# Git

- [https://github.com/Gazler/githug](https://github.com/Gazler/githug)
- [http://www.jianshu.com/p/482b32716bbe](http://www.jianshu.com/p/482b32716bbe)
- [http://backlogtool.com/git-guide/cn/](http://backlogtool.com/git-guide/cn/)

## 标签

- 轻标签

  ```
  $ git tag <tagname>
  ```

  添加 apple 标签

  ```
  $ git tag apple
  ```

  如果没有使用参数而执行 tag，可以显示已有标签列表。

  ```
  $ git tag
  ```

- 注解标签

  若要添加注解标签，可以在 tag 命令指定 -a 选项执行。
  执行后会启动编辑区，请输入注解，
  也可以指定-m 选项来添加注解。

  ```
  $ git tag -a <tagname>
  ```

  在 HEAD 指向的提交里添加名为 banana 的标签，请执行以下的命令。

  ```
  $ git tag -am "连猴子都懂的Git" banana
  ```

  如果在 tag 命令指定-n 选项执行，可以显示标签的列表和注解。

  ```
  $ git tag -n
  apple           first commit
  banana          连猴子都懂的Git
  ```

  - 删除标签

  ```
  $ git tag -d <tagname>
  ```

## 查看配置

git config --list

### 用户配置

学习git的时候, 大家刚开始使用之前都配置了一个全局的用户名和邮箱

```
$ git config --global user.name "your Name"
$ git config --global user.email "github@xx.com"
$ git config --list

```

如果你不进行配置用户名和邮箱的话, 则会使用全局的, ,
正确的做法是针对公司的项目, 在项目根目录下进行单独配置

```
// 不要引号

$ git config user.name your name
$ git config user.email zzz@xx.com
$ git config --list

```

.git文件夹
open config 命令打开，添加如下配置：

```
[user]
    name = XXX(自己的名称英文)
    email = XXXX(邮箱)
```
保存，command+s 即可。

## 克隆一个仓库

- 克隆一个仓库

```
// https://github.com/Gazler/cloneme

```
- 克隆一个仓库, 改名为 clonemy

```
git clone https://github.com/Gazler/cloneme clonemy
```


## .gitignore 文件

用来忽略Git中不想提交的文件

lib.a 文件，其他所有的 .a 后缀名的文件都忽略

```
#               表示此为注释,将被Git忽略
*.a             表示忽略所有 .a 结尾的文件
!lib.a          表示但lib.a除外
/TODO           表示仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
build/          表示忽略 build/目录下的所有文件，过滤整个build文件夹；
doc/*.txt       表示会忽略doc/notes.txt但不包括 doc/server/arch.txt
 
bin/:           表示忽略当前路径下的bin文件夹，该文件夹下的所有内容都会被忽略，不忽略 bin 文件
/bin:           表示忽略根目录下的bin文件
/*.c:           表示忽略cat.c，不忽略 build/cat.c
debug/*.obj:    表示忽略debug/io.obj，不忽略 debug/common/io.obj和tools/debug/io.obj
**/foo:         表示忽略/foo,a/foo,a/b/foo等
a/**/b:         表示忽略a/b, a/x/b,a/x/y/b等
!/bin/run.sh    表示不忽略bin目录下的run.sh文件
*.log:          表示忽略所有 .log 文件
config.php:     表示忽略当前路径的 config.php 文件
 
/mtk/           表示过滤整个文件夹
*.zip           表示过滤所有.zip文件
/mtk/do.c       表示过滤某个具体文件

```


## 删除文件


使用 ```--cached``` 选项可以仅从索引中取消索引和删除路径。

工作树文件，无论修改与否，都将保持不变。

```
git rm --cached deleteme.txt
```

## 重命名文件

```
git mv oldname.md newname.md
```

## 移动文件

PS: CMD中一次只能移动一个文件，移动多个会报错

```
git mv oldname.md src
```

## 新建分支

新建一个开发分支 develop

```
$ git branch develop
$ git branch test_branch HEAD~1     // 使用上次的提交创建分支
```

## 提交分支

分支修改后，就可以提交 commit 了。

```
$ git add .
$ git status
$ git commit -m 'feat'

// 定时提交
$ git commit --date=00.03.2019T18:14:00

```


## 合并分支

该命令将 **指定分支** 导入到 HEAD 指定的分支。

```
$ git merge <commit>
```

git merge命令或者git rebase命令，在本地分支上合并远程分支。

```
$ git merge origin/master
$ git rebase origin/master
```

合并 develop 分支到 release

1. 切换到 release 分支
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

## rebase

## 删除分支

branch 命令指定-d 选项，删除指定分支.

```
$ git branch -d <branchname>

// 删除temp分支
$ git branch -d temp
```

## 关联远程分支

git branch --set-upstream-to=origin/release-admin-v1.4.0 release-admin-v1.4.0
git branch --set-upstream-to=origin/release dev

## 暂存

```
$ git stash
$ git stash pop
$ git stash apply @{0}
```

## 重置

```
$ git reset head

// 撤销上一次的提交
$ git reset head~1 --soft

--soft 参数将上一次的修改放入 staging area
--mixed 参数将上一次的修改放入 working directory
--hard 参数直接将上一次的修改抛弃
```

## 签出和重置文件

有时候改了一些代码，结果发现这个需求取消了，怎么能快速扔掉所有的变更，回到没有修改之前的状态呢？

```
$ git checkout abc.md
```

## 远程分支

```
$ git remote    // 远程分支的名称
$ git remote    // 远程分支链接

$ git remote add <主机名> <网址>    // 添加远程主机
$ git remote add origin https://github.com/githug/githug


```

## 拉取分支

```
$ git pull    // 拉取分支
$ git pull origin master    // 拉取master分支

```

## 查看某个文件的修改人

```
$ git blame abc.md
```

## git branch
## git repack




## Git 规范

** 提交 commit 的类型，包括以下几种: **

- feat: 新功能
- fix: 修复问题
- docs: 修改文档
- style: 修改代码格式，不影响代码逻辑
- refactor: 重构代码，理论上不影响现有功能
- perf: 提升性能
- test: 增加修改测试用例
- chore: 修改工具相关（包括但不限于文档、代码生成等）
- deps: 升级依赖


```
feat(Epic#ECFDEV-1234, US#ECFDEV-1234): add page
fix(Bug#ECFDEV-2768, US#ECFDEV-1234): add ellipsis

```

修改文件的范围（包括但不限于 doc, middleware, proxy, core, config, plugin）
用一句话清楚的描述这次提交做了什么

** 分支的划分 **

- 主分支(master)
- 开发分支(develop)
- 特征分支(feature)
- 发布分支(release)
- 修复分支(hotfix)

master 和 develop 是长期分支，master 分支上是稳定版本的演进，develop 保持最新代码；而 feature/release/hotfix 是研发过程中的短期辅助分支，开发后需要清除；

** 约定版本号 **

简单而言，在这个版本规范中，版本以 X.Y.Z 的形式存在，其中 X 表示不向下兼容的框架级改动版本，Y 表示向下兼容的功能性新增版本，Z 表示向下兼容的内部问题修复版本。

```
v1.2.4
```

# Design

- [UI 设计有哪些规范？](https://www.zhihu.com/question/32216660)
- [移动端设计最佳实践](https://zhuanlan.zhihu.com/p/24097113)
- [文字排版规范](http://huaban.com/pins/958880888/)
- [普惠生活](http://huaban.com/pins/920390067/)
- [Visual pecification](http://huaban.com/pins/920384025/)
- [网易云音乐](http://huaban.com/pins/833856117/)
- [给设计师和开发者的参考手册](http://huaban.com/pins/38541070/)
- [移动应用 UI 规范](http://www.zcool.com.cn/article/ZMzc5MTQ0.html)

# Typescript

> [TypeScript 入门教程](https://ts.xcatliu.com/)

> [Typescript 官网——语句都不通顺，读起来很吃力](https://typescript.bootcss.com/)

## 安装

```
npm install -g typescript
npm install -D typescript ts-loader source-map-loader
```

- 这些依赖会让 TypeScript 和 webpack 在一起良好地工作。
- ts-loader 可以让 Webpack 使用 TypeScript 的标准配置文件 tsconfig.json 编译 TypeScript 代码。
  -source-map-loader 使用 TypeScript 输出的 sourcemap 文件来告诉 webpack 何时生成自己的 sourcemaps。 这就允许你在调试最终生成的文件时就好像在调试 TypeScript 源码一样。

## 使用 tsconfig.json

如果一个目录下存在一个 tsconfig.json 文件，那么它意味着这个目录是 TypeScript 项目的根目录。 tsconfig.json 文件中指定了用来编译这个项目的根文件和编译选项。

```
{
    "compileOnSave": true,
    "extends": "./configs/base",
    "compilerOptions": {
        "module": "system",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "outFile": "../../built/local/tsc.js",
        "sourceMap": true
    },
    "files": [
        "core.ts",
        "sys.ts",
        "types.ts"
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}
```

可以通过以下方式之一来编译：

- `tsc` 编译器会从当前目录开始去查找 tsconfig.json 文件，逐级向上搜索父目录。
- `tsc -p 目录` 指定一个包含 tsconfig.json 文件的目录。
- `tsc tsconfig.json`

## `compileOnSave`

最顶层设置 compileOnSave 标记，可以让 IDE 在保存文件的时候根据 tsconfig.json 重新生成文件。

## `files`

"files"或"include"文件的引用文件也会包含进来

## `include`

使用"include"引入的文件可以使用"exclude"属性过滤。

## `exclude`

如果没有特殊指定，"exclude"默认情况下会排除 node_modules，bower_components，jspm_packages 和<outDir>目录。

## `extends`

tsconfig.json 文件可以利用 extends 属性从另一个配置文件里继承配置。

## [配置选项文档](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Compiler%20Options.html)

### JavaScript 中的 基本类型 ：Boolean, Number, String, Null, Undefined, Symbol.

### TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。TypeScript 编译的时候即使报错了，还是会生成编译结果。

### 如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可。

# Jest

## Install

```shell
npm install jest -D
```

## Additional Configuration

> Generate a basic configuration file

```
jest --init
```

> Using Babel

To use Babel, install the `babel-jest` and `regenerator-runtime` packages:

> Using Matchers

Jest uses "matchers" to let you test values in different ways. This document will introduce some commonly used matchers. For the full list, see the expect [API doc](https://jestjs.io/docs/en/expect).

> Common Matchers

> Using webpack

> Using TypeScript

## API

> describe(name, fn)

describe(name, fn) creates a block that groups together several related tests in one "test suite". For example, if you have a myBeverage object that is supposed to be delicious but not sour, you could test it with:

```js
const myBeverage = {
  delicious: true,
  sour: false
};

describe("my beverage", () => {
  test("is delicious", () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test("is not sour", () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
```

> test(name, fn, timeout)

Also under the alias: it(name, fn, timeout)

All you need in a test file is the test method which runs a test. For example, let's say there's a function inchesOfRain() that should be zero. Your whole test could be:

```js
test("did not rain", () => {
  expect(inchesOfRain()).toBe(0);
});
```

- The first argument is the test name;
- The second argument is a function that contains the expectations to test.
- The third argument (optional) is timeout (in milliseconds) for specifying how long to wait before aborting. Note: The default timeout is 5 seconds.

> expect(value)

The expect function is used every time you want to test a value. You will rarely call expect by itself. Instead, you will use expect along with a "matcher" function to assert something about a value.

It's easier to understand this with an example. Let's say you have a method bestLaCroixFlavor() which is supposed to return the string 'grapefruit'. Here's how you would test that:

```js
test("the best flavor is grapefruit", () => {
  expect(bestLaCroixFlavor()).toBe("grapefruit");
});
```

In this case, `toBe` is the matcher function. There are a lot of different matcher functions, documented below, to help you test different things.

# Webpack

## 配置 Typescript

- 安装

```
npm install ts-loader -D
```

- 基本 webpack.config.js 配置

```js
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
```

# Home

- address: 805 Rooms, 8 Blocks, Fengjing Street, Hesheng Hushan International Community, Xintang Town, Zengcheng District,Guangzhou,China

## 区块链

### 作用与意义：

第三方，用于价值传递，一种特殊的分布式数据库，没有中心，无管理员，全民记账，只能增查，转账会改变数据，但不能删除。

### 区块链的特点

- 不可篡改
- 可追溯
- 去中心化

### 区块链分类：

- 公有链：比特币 以太坊 EOS
- 私有链： 开发节点 测试节点
- 联盟链： Fabric R3 联盟 EEA 阳光链

### 区块链的架构模型

- 应用层：应用场景与案例
- 合约层：电子合同，达到条件时自动生效
- 激励层：激励遵守规则的节点，惩罚不遵守的节点
- 共识层：网络节点计算算法
- 网络层：P2P 组网技术，自动组网功能
- 数据层：底层数据结构，非对称公私钥加密技术，时间戳技术

# 慢性咽炎

- 海金沙，用量 5g,煮水喝，3 次可好
- 按摩天突穴（锁骨中心，轻轻揉按）主治气喘、咳嗽、暴喑、咽喉肿痛、呕逆、瘿瘤、梅核气，现代常用于治疗支气管哮喘、支气管炎、咽喉炎、甲状腺肿大、食道炎、癔病等。
- 生吃白萝卜
- 生吃贡梨
- 金银花 10g，胎菊 10g，胖大海 10g，山楂 10g，用闷烧杯闷烂，一口气喝下去(只喝水)，难闻难喝，但有奇效。

# 鼻炎

- 每天跑步 20 分钟左右,多运动可以增加自身免疫力，对鼻炎能起到很好的抑制作用，跑步或者运动过后，鼻子会突然变得不塞了
- 按摩迎香穴效果显著，5 分钟见效。

# 使用 CNPM

$ npm install -g cnpm --registry=https://registry.npm.taobao.org
  $ npm config set registry https://registry.npm.taobao.org
这样就可以使用 cnpm 命令来安装模块了：

\$ cnpm install [name]

# Movie

磁力 Pro

<<美丽心灵的永恒阳光>>

# App

google calender

# Mongodb

# NPM

### 什么是 npm?

js 开发者可以通过 npm 方便地分享，更新，和重复使用代码。

### npx npm

npm v5.2.0引入的一条命令（npx），引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。

1. 临时安装可执行依赖包，不用全局安装，不用担心长期的污染。

2. 可以执行依赖包中的命令，安装完成自动运行。

3. 自动加载node_modules中依赖包，不用指定$PATH。

4. 可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题。

# NPM 包应用

### axios 处理 ajax 请求

跨域 post 实例，用到了 qs 组件来避开 ajax 信使请求，并兼容 Android。
信使请求:post 请求中，请求头部带有 OPTIONS

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

### xml-js 解析 XML 文件

解析 XML 文件，安装 NPM 插件

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

      let txt = JSON.parse(
        xmljs.xml2json(this.response, { alwaysChildren: true })
      );
      if (
        txt &&
        txt.elements &&
        txt.elements[0] &&
        txt.elements[0].elements &&
        txt.elements[0].elements[0] &&
        txt.elements[0].elements[0].cdata
      ) {
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
        chapterCont: txt
      });
    }
  };
  xmlhttp.open("GET", u, true);
  xmlhttp.setRequestHeader("Content-Type", "text/xml");
  xmlhttp.send(null);
};
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
import React, { Component } from "react";
import Simditor from "simditor";
// var $ = require('jquery');
import "../../../../node_modules/simditor/styles/simditor.css";

class Editor extends Component {
  componentDidMount() {
    const textbox = this.refs.textarea;
    this.editor = new Simditor({
      textarea: textbox,
      toolbar: [
        "title",
        "bold",
        "italic",
        "underline",
        // 'strikethrough',
        // 'fontScale',
        "color",
        "ol",
        "ul",
        "blockquote",
        "code",
        "table",
        "link",
        "image",
        // 'indent',
        // 'outdent',
        "alignment"
        // 'hr',
        // '|',
        // 'html',
      ]
    });

    this.editor.on("valuechanged", () => {
      this.props.onHandle(this.editor.getValue());
    });
  }

  render() {
    const val = this.props.val;
    return (
      <div>
        <textarea className="form-control" ref="textarea" rows="30">
          {val}
        </textarea>
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

# Egg

- [egg 是什么](https://eggjs.org/zh-cn/intro/index.html)

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

第一步需要编写的是 `Controller` 和 `Router`。

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
static 插件默认映射 /public/_ -> app/public/_ 目录

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
  package: "egg-view-nunjucks"
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
      <div class="item"><a href="{{ item.url }}">{{ item.title }}</a></div>
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
    *list() {
      const dataList = {
        list: [
          { id: 1, title: "this is news 1", url: "/news/1" },
          { id: 2, title: "this is news 2", url: "/news/2" }
        ]
      };
      yield this.ctx.render("news/list.tpl", dataList);
    }
  }
  return NewsController;
};
// app/router.js
module.exports = app => {
  app.get("/", app.controller.home.index);
  app.get("/news", app.controller.news.list);
};
```

** 提示：开发期默认开启了 `development` 插件，修改后端代码后，会自动重启 Worker 进程。**

### 编写 service

在实际应用中，`Controller` 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 `Service`。

我们来添加一个 Service 抓取 Hacker News 的数据 ，如下：

```js
// app/service/news.js
module.exports = app => {
  class NewsService extends app.Service {
    *list(page = 1) {
      // read config
      const { serverUrl, pageSize } = this.app.config.news;
      // use build-in http client to GET hacker-news api
      const { data: idList } = yield this.ctx.curl(
        `${serverUrl}/topstories.json`,
        {
          data: {
            orderBy: '"$key"',
            startAt: `"${pageSize * (page - 1)}"`,
            endAt: `"${pageSize * page - 1}"`
          },
          dataType: "json"
        }
      );
      // parallel GET detail, see `yield {}` from co
      const newsList = yield Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: "json" });
      });
      return newsList.map(res => res.data);
    }
  }
  return NewsService;
};
```

框架提供了内置的 `HttpClient` 来方便开发者使用 HTTP 请求。

### MySQL 连接

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

在 config/config.\${env}.js 配置各个环境的数据库连接信息。

# Node 读写 Excel 文件探究实践

[Node 读写 Excel 文件探究实践](https://aotu.io/notes/2016/04/07/node-excel/)

# Zsh

### 添加环境变量

- 很多时候需要为系统添加应用，如果默认的终端是 zsh，

  通过 vi 修改对应的配置文件是：

  ```
  $ vi ~/.zshrc
  ```

  按下 i 表示进入编辑状态

- 给 Linux/Unix 系统增加环境变量，是使用 export 命令。

  ```
  # Java默认路径配置,#是注释，不会生效
  export JAVA_HOME=$(/usr/libexec/java_home/bin)
  export PATH=$JAVA_HOME:$PATH
  ```

  解释：

  环境变量中，各个值是以冒号分隔开的。

  上面的语句表示给 PATH 这个变量重新赋值，让它等于 $JAVA_HOME 同时后面加上原来的 $PATH

  - 退出 vi 编辑

按下 ESC 退出编辑状态

按下 :wq 表示保存并退出 vi

- 使配置生效

```
$ source ~/.zshrc
```

### 开启好用的插件

其实我用了 oh-my-zsh 原来他自带了很多插件没有开启。。。

如何开启？
zsh 配置文件 `~/.zshrc` 有一行 `plugins=(git)`，想加什么插件就把名字放里面就是了
比如 `plugins=(npm git)` 就开启了`npm`，`git`插件。

更多插件?
[Plugins Overview](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins-Overview)
或者进入 ~/.oh-my-zsh/plugins 文件夹探索，每个人的需求不一样，里面有一些比较神奇的插件，比如敲两下 esc 它会给你自动加上 sudo 的 sudo 插件，让复制显示进度条的 cp 插件，解压用的 extract 插件（有没有觉得在命令行下敲一大堆选项才能解压有点奇怪？），vi 粉的 vi-mode npm 等等

### git 插件

| Alias                | Command                                                                                                                                 |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| g                    | git                                                                                                                                     |
| ga                   | git add                                                                                                                                 |
| gaa                  | git add --all                                                                                                                           |
| gapa                 | git add --patch                                                                                                                         |
| gb                   | git branch                                                                                                                              |
| gba                  | git branch -a                                                                                                                           |
| gbda                 | git branch --merged \| command grep -vE "^(\*\|\s*master\s*\$)" \| command xargs -n 1 git branch -d                                     |
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
| ggf                  | git push --force origin \$(current_branch)                                                                                              |
| ghh                  | git help                                                                                                                                |
| ggpull               | ggl                                                                                                                                     |
| ggpur                | ggu                                                                                                                                     |
| ggpush               | ggp                                                                                                                                     |
| ggsup                | git branch --set-upstream-to = origin/\$(current_branch)                                                                                |
| gpsup                | git push --set-upstream origin \$(current_branch)                                                                                       |
| gignore              | git update-index --assume-unchanged                                                                                                     |
| gignored             | git ls-files -v \| grep "^[[:lower:]]"                                                                                                  |
| git-svn-dcommit-push | git svn dcommit && git push github master:svntrunk                                                                                      |
| gk                   | \gitk --all --branches                                                                                                                  |
| gke                  | \gitk --all \$(git log -g --pretty = format:%h)                                                                                         |
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
| glp                  | \_git_log_prettily                                                                                                                      |
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
| grt                  | cd \$(git rev-parse --show-toplevel \|\| echo ".")                                                                                      |
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
| gsta                 | git stash save                                                                                                                          |
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
| gwip                 | git add -A; git rm \$(git ls-files --deleted) 2> /dev/null; git commit -m "--wip--"                                                     |

# Mac 80 端口使用

Mac OS X 因为要绑定 80 端口需要 ROOT 权限,

让连接到本机 80 端口的请求， 都转发到 9090 端口;

注意,Mac OS 会使用 80 端口做网络文件共享， 要先关闭掉

修改/etc/pf.conf, 使用 sudo vim /etc/pf.conf

pf.conf 是对顺序强要求的， 所以注意添加的内容放的顺序

rdr-anchor “com.apple/\*”

rdr on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 9090

添加 rdr on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 9090

到 pf.conf 文件的 rdr-anchor “com.apple/\*” 这一行后面。

lo0 通过 ifconfig 看自己那个设备绑定的是 127.0.0.1, lo0 是这个网络设备的名字。 修改好 pf.conf 之后执行一下命令，让端口转发生效

```
sudo pfctl -d
sudo pfctl -f /etc/pf.conf
sudo pfctl -e
```

在 tomcat 的配置中，设定启动端口为 9090

好了这样只需要普通权限启动 tomcat 在 9090 端口即可， 访问本地应用时直接访问 80 端口即可。

# Mac 修改 hosts

```
$ vi /etc/hosts
```

press `i` 修改

press `esc` 结束

press `:wq` 保存并退出

press `:q!` 不保存并退出

# Homebrew 的安装及使用

[官网](https://brew.sh/index_zh-cn.html)

### Homebrew 的安装

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Homebrew 的使用

- 安装软件：brew install 软件名，例：brew install wget
- 搜索软件：brew search 软件名，例：brew search wget
- 卸载软件：brew uninstall 软件名，例：brew uninstall wget
- 更新 Homebrew：brew update

- 更新具体软件：brew upgrade 软件名 ，例：brew upgrade git
- 显示已安装软件：brew list
- 查看软件信息：brew info／home 软件名 ，例：brew info git ／ brew home git

- 查看那些已安装的程序需要更新： brew outdated
- 显示包依赖：brew reps

# Platform

> 前端 UI 组件

- [material-ui](http://www.material-ui.com/#/)
- [iview](https://www.iviewui.com/)
- [AntD](https://ant.design/index-cn)

# vs code

[教程](https://github.com/i5ting/vsc)

# No Smoking

- 早晨的口臭，喉咙干燥

- 夜间的猛力咳嗽和干呕

- 抽烟没有好处，再好的烟也是毒

- 注意心脏和肺部健康

否则，吸烟者终其一生，都无法好好享受：

·良好的健康

·充沛的精力

·心灵的安宁

·财富

·自信

·勇气

·自尊

·幸福

·自由

# 减肥

- 最近两天晚上没东西吃，小肚子仿佛消瘦了一些，注意坚持过 9 点不再吃零食，防蛀牙，也能保持好身材

分享我理解的减肥十件事：

1.不要减少用餐数量

2.把用餐的碟子从 12 寸改为 10 寸，可以少吃 22%食物

3.计算卡路里数量，人体需求 2000 卡路里/天，超过需要的热量将变成脂肪

4.吃蛋白质食物可以饱腹更长时间

5.粥可饱腹长时间（增大食物体积，延长消化时间

6.人类天生食物多样化，多样化催生占有欲，导致进食量加大

7.吃低脂乳制品，因为钙会与食物脂肪结合，变成皂质的物质，肠道不能吸收，从身体排出。

8.运动，可燃烧脂肪，运动后持续燃烧脂肪 24 小时

9.保持活跃，相同的饮食

10.不要节食，饥饿会让你选择高热量的食物

# 咳嗽-治疗

1. 茄子把冰冻 5 小时，再煮水喝

2. 煲点老鸭汤

3. 冰糖雪梨不能治疗有痰咳嗽

4. 橙子削顶后抹盐，蒸

# Some words

流年似水汇成河，记忆辗转化成歌

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

# Health

1.健康生活方式：
（1）饮食---会吃就是会养生。A.早餐要吃够五种颜色，五谷杂粮粥（大米，小米，糙米，燕麦，红豆，绿豆，薏米熬粥），或者吃够五种颜色的蔬菜，肉类在早上吃最好；午餐吃饱，有荤有素；晚餐吃少（不吃最好），米饭+粥+薯类，不要吃肉和油；B.一顿三餐，主食要占到 50%以上，最好在 70-80%，蔬菜 20-30%，肉类 5-30%，绝对不要超过 30%；
（2）起居---跟着太阳公公的节奏。早上 6:00 之前要起床（升阳气），不加班的话，22:30 之前一定要睡觉，23:00-3:00 是肝胆经回血的时候，要熟睡；每天要 7 次小便，早 9:00 前大便；
（3）运动---运动是健康向上的阶梯。推荐传统健身方法：站桩（大成桩），八段锦，太极拳和禅坐，女同学推荐瑜伽。无论男女，一定要有一项持之以恒的运动健身方法，哪怕是跑步也好。“日有百痛（运动痛），可度百岁而无病痛，日无一痛则一病呜呼”； 2.常见疾病的缓解调理方法：
（1）颈椎肩周疾病：每坐 1-2 个小时，起来远眺窗外，双手带双臂从胸前环绕到头顶最后到身后画圆数十次；也可以练八段锦前四式；早晚练两次：身体直立，两臂自然下垂，头向身体的左右前后上五个方向最大限度的放松倾斜拉伸 1 分钟；揉手上的后溪穴和肩上的肩井穴；艾灸大椎穴；
（2）习惯性便秘：晚餐不吃油腻，多吃薯类和蔬菜，早餐吃五谷杂粮粥，早 5:00-7:00 敲两臂的大肠经，早起一杯阴阳水（前晚的凉白开和刚烧的开水混合）；
（3）小儿湿疹：隔衣服艾灸双臂尺泽穴和合谷穴各 7 分钟；
（4）小儿免疫力低下，便秘，脾胃虚弱：每晚睡前捏脊 9/21 次，上下捋脊柱及两侧，抹按摩油从内向外拔捋四肢，顺时针揉肚子 49 次；常吃北京同仁堂产的“小儿健脾丸”
（5）甲状腺结节：每天喝三杯黑茶或普洱茶+玫瑰花+陈皮泡水，晨起空腹运动或快走至少 30 分钟，早晚两次翘脚跟远眺 10 分钟；
（6）预防老人突发性中风：70 岁以上老人，每天出门前用力空掌拍腋下极泉、肩膀尖、肩井穴各 36 次；家里常备、随身携带北京同仁堂产的“安宫牛黄丸”，发现中风马上热水服下；
（7）脾胃虚寒、大便不成型：晨起喝一杯红糖姜水，吃附子理中丸+桂附地黄丸；
（8）饭水分离养生法：每顿饭前后各两个小时不喝任何汤和水，先吃米饭再吃菜，每口饭细嚼慢咽，让食物与唾液充分搅拌；
（9）肾虚：两手空拳放置腰眼处，两腿与肩同宽站立微曲带动身体颤动 5 分钟；八段锦的“两手攀足固肾腰”；睡前练“还阳卧”；
（10）失眠：睡前泡脚，搓脚底涌泉穴，深呼吸法（连续深呼吸几十次，然后自然呼吸数呼吸次数），自我暗示放松法（观想从头到脚，默念放松，放松。。。），推荐用软管枕（头凉脚暖睡得香，天猫有卖）；
好了，就写这些吧。以上均为验证过的方法，至少本人和家人是有效的。大家日后如果有疑问和需要，可以加我随问随答！祝各位看官及家人，吉祥安康！！！最后唠叨一句，再忙再累，也不要忽视健康！

# <p id="habit">Good Habit</p>

1.读书 —— 读书可以改变气质

2.旅游 —— 旅游可以增加视野

3.早睡 —— 早睡可以使人自律

4.保持好身材 —— 保持身材使人有强大的吸引力

良性循环

你会越来越美丽
