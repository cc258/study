# StoryBook project

> 先创建一个支持ts的react项目

```
// npx
// 1、临时安装可执行依赖包，不用全局安装，不用担心长期的污染。
// 2、可以执行依赖包中的命令，安装完成自动运行。
// 3、自动加载node_modules中依赖包，不用指定$PATH。
// 4、可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题。

npx create-react-app my-app --scripts-version=react-scripts-ts
npm i
```

> 安装 storybook

```
npm i -g @storybook/cli
cd my-app
getstorybook

npm run storybook
```

可以看到storybook界面








[利用StoryBook开发UI组件管理](http://haoqiao.me/2017/10/23/storybook.html#post__title)