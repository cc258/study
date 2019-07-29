# CleanCode-代码整洁之道

"小处诚实非小事"——把握每一件小事，是很难的事情。

神在细节之中，建筑师专注于效用和基于宏伟架构之上的永恒建筑形式。然而，他也为自己设计的每所房屋挑选每个门把手，为什么，因为宏大建筑中最细小的部分，比如关不紧的门、没铺平的地板，凌乱的桌面，都将会毁灭整个大局的魅力，也是为什么讲整洁代码。

如何写出整洁代码的指南。鲍勃大叔认为，“写整洁代码，需要遵循大量的小技巧，贯彻刻苦练习得到的整洁感。这种代码感就是关键所在……它不仅让我们看到代码的优劣，还给我们化劣为优的攻略。”

作者阐述了在命名、函数、注释、代码格式、对象和数据结构、错误处理、边界问题、单元测试、类、系统、并发编程等方面如何做到整洁的经验与最佳实践。

# 目录

1. [简介](#简介)
2. [变量](#变量)
3. [函数](#函数)
4. [对象和数据结构](#对象和数据结构)
5. [类](#类)
6. [SOLID](#solid)
7. [测试](#测试)
8. [并发](#并发)
9. [错误处理](#错误处理)
10. [格式化](#格式化)
11. [注释](#注释)
12. [Translation](#translation)

# 简介

![一张用你阅读代码时吐槽的数量来评估软件质量的搞笑图片](./cleancode.jpeg)

第一部分：掌握原则、模式和实践的知识，穷尽应知之事，并且要了如指掌。看大量代码

第二部分：案例研究，分析理解代码，整理代码

第三部分：从案例中得到启示与灵感，理解自己对阅读和修改代码的反应，尽力了解为什么如此，得到一套描述在编写、阅读、清理代码时思维方式的知识库。

# 整洁的代码

糟糕的代码
Later equals never 稍后等于永远

混乱的代价
混乱越多，生产力持续下降

华丽新设计
花时间保持代码整洁有关效率，也有关生存

- 态度
- 需求变化
- 进度太紧张
- 愚蠢的 XX
- 苛求的 XX

不该羞于告知自己的想法，护卫进度和需求，与项目规划。
如果是位医生，病人请求你在给他做手术前别洗手，因为那会花太多时间，你会照办吗？如果按照病人说的办，就是一种不专业的态度了。

什么是整洁代码

简单直接，如同优美的散文，几乎没有改进的余地。

1. 能通过测试
2. 没有重复代码
3. 体现体统的全部设计理念
4. 尽量少的实体，比如类、方法、函数等

思想流派
百家所长

我们是代码的作者，也是读者
写一遍，看几十遍。
读的过程变得轻松，编写过程更容易。

# 有意义的命名

给项目命名，包，组件，函数，变量，参数命名，取个好名的几条简单规则。

名副其实
发现更好的名称，就换掉旧的，读起来更开心。如果名称需要注释来补充，那就不算是名副其实。

```java
int d;	// 消逝的时间，以日计算
int elapsedTimeInDays;
```

避免误导

accountList，因为 List 是有特殊的意义，可能引起错误的判断。
accounts，或者 accountGroup 更合适。

做有意义的区分
如果是为了满足编译器或解释器的需要而写代码，就会制造麻烦。
a1,a2, product, productInfo, productData;

使用读的出来的名称
编程是一种社交活动，使用通俗易读的名称，有利于沟通。

使用可搜索的名称

避免思维映射

类名和对象应该是名词或者名词短语

方法名应该是动词或动词短语

程序员通常是聪明人，有时候会运用聪明和幽默在代码中，需要同样具有幽默的人才能看懂，专业的程序员会写别人能看懂的代码。

每个概念对应一个词
如：fetch, get

不要用多义词

只有程序员才会读你的代码，尽量用计算机科学术语，算法名，模式，数学术语，避免依据问题所涉领域来命名。

精确是命名的要点。

好名字的难点是需要良好的描述技巧和共有的文化背景，使用现代工具对付这些细节，让自己集中精力把代码写得像文章，或是表和结构，提升代码可读性。

# 变量

### 使用有意义并且可读的变量名称

**不好的：**

```javascript
const yyyymmdstr = moment().format("YYYY/MM/DD");
```

**好的：**

```javascript
const currentDate = moment().format("YYYY/MM/DD");
```

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

### 为相同类型的变量使用相同的词汇

**不好的：**

```javascript
getUserInfo();
getClientData();
getCustomerRecord();
```

**好的：**

```javascript
getUser();
```

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

### 使用可搜索的名称

我们要阅读的代码比要写的代码多得多， 所以我们写出的代码的可读性和可搜索性是很重要的。 使用没有
意义的变量名将会导致我们的程序难于理解， 将会伤害我们的读者， 所以请使用可搜索的变量名。 类似
[buddy.js](https://github.com/danielstjules/buddy.js) 和 [ESLint](https://github.com/eslint/eslint/blob/660e0918933e6e7fede26bc675a0763a6b357c94/docs/rules/no-magic-numbers.md)
的工具可以帮助我们找到未命名的常量。

**不好的：**

```javascript
// 86400000 是什么鬼？
setTimeout(blastOff, 86400000);
```

**好的：**

```javascript
// 将它们声明为全局常量 `const` 。
const MILLISECONDS_IN_A_DAY = 86400000;

setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
```

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

### 使用解释性的变量

**不好的：**

```javascript
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);
```

**好的：**

```javascript
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

### 避免心理映射

显示比隐式更好

**不好的：**

```javascript
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // 等等， `l` 是啥？
  dispatch(l);
});
```

**好的：**

```javascript
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});
```

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

### 不添加不必要的上下文

如果你的类名/对象名有意义， 不要在变量名上再重复。

**不好的：**

```javascript
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};

function paintCar(car) {
  car.carColor = "Red";
}
```

**好的：**

```javascript
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};

function paintCar(car) {
  car.color = "Red";
}
```

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

### 使用默认变量替代短路运算或条件

**不好的：**

```javascript
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}
```

**好的：**

```javascript
function createMicrobrewery(breweryName = "Hipster Brew Co.") {
  // ...
}
```

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

## **函数**

第一规则短小，第二规则短小

应该做一件事，做好这件事，只做一件事
自顶向下读代码：向下规则

函数参数
最理想的个数是零, 如果有多个参数，将会有多种参数的组合，测试变的困难。

参数对象
如果函数看来需要 3 个参数，就说明其中一些参数应该封装为类了

写代码和写文章一样，想到什么写什么，然后再打磨它，直至心中的样子。

作者写函数时，一开始都是冗余而复杂，有太多缩进和潜逃循环，有过长的参数列表，名称是随意取的，也会有重复的代码片段。
然后打磨这些代码，分解函数，修改名称，消除重复，重新安置函数，拆散类，保持测试通过。
最后遵循规则，组装好这些函数。
我并不从一开始就按照规则写函数，我想没人能做到。

大师级程序员把系统当作故事来讲，而不是程序来写，函数是语言的动词，类是名词，形成一种精确而清晰的语言，帮你讲故事。

由于 JavaScript 允许我们不定义类型/模板就可以创建对象， 当你发现你自己需要大量的参数时， 你可以使用一个对象。

**不好的：**

```javascript
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
```

**好的：**

```javascript
const menuConfig = {
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
};

function createMenu(config) {
  // ...
}
```

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

### 函数应当只做一件事情

这是软件工程中最重要的一条规则， 当函数需要做更多的事情时， 它们将会更难进行编写、 测试和推理。
当你能将一个函数隔离到只有一个动作， 他们将能够被容易的进行重构并且你的代码将会更容易阅读。 如
果你严格遵守本指南中的这一条， 你将会领先于许多开发者。

**不好的：**

```javascript
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```

**好的：**

```javascript
function emailClients(clients) {
  clients.filter(isClientActive).forEach(email);
}

function isClientActive(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

### 函数名称应该说明它要做什么

**不好的：**

```javascript
function addToDate(date, month) {
  // ...
}

const date = new Date();

// 很难从函数名看出加了什么
addToDate(date, 1);
```

**好的：**

```javascript
function addMonthToDate(month, date) {
  // ...
}

const date = new Date();
addMonthToDate(1, date);
```

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

# 注释

也许根本不需要

注释是为了弥补代码表达的失败，如果发现自己要写注释，再想想是否有办法翻盘，用代码来表达。

注释会撒谎，注释存在的时间越长，离它描述的代码越远，原因是程序员不能坚持维护注释。

不准确的注释要比没注释坏的多。

有必要的注释

- 法律信息
- 帮助阐释第三方库的含义。
- 警示，用于告知其他程序员
- TODO 注释，需要做，而因为某些原因还没做的工作。
- 编写 API doc

坏的注释

残留的注释代码，其他人不敢删除注释掉的代码，他们会想，代码依旧在哪儿，一定有其原因。

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

# 格式

良好的代码格式，体现项目对细节的关注。使用自动化工具会很有帮助。

格式的目的

今天编写代码，可能在明天被修改，代码格式关系到程序员之间的沟通，可读性会对以后的修改产生深远影响。

短的文件易于理解。

用空白行进行文件内部的区隔。

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

# 错误处理

使用异常代替返回错误码

使用错误码会导致更深层次的嵌套结构

使用异常，错误处理代码可以从主路径代码中分离出来。

给出异常发生的环境说明，以便判断错误的来源和处所，包括失败的操作和失败的类型。传递足够的信息给 Catch 模块，并记录下来。

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**

## Translation

This is also available in other languages:

- ![br](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Brazil.png) **Brazilian Portuguese**: [fesnt/clean-code-javascript](https://github.com/fesnt/clean-code-javascript)
- ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/China.png) **Chinese**:
  - [alivebao/clean-code-js](https://github.com/alivebao/clean-code-js)
  - [beginor/clean-code-js](https://github.com/beginor/clean-code-javascript/blob/master/README-zh-CN.md)
- ![de](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Germany.png) **German**: [marcbruederlin/clean-code-javascript](https://github.com/marcbruederlin/clean-code-javascript)
- ![kr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/South-Korea.png) **Korean**: [qkraudghgh/clean-code-javascript-ko](https://github.com/qkraudghgh/clean-code-javascript-ko)
- ![ru](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Russia.png) **Russian**:
  - [BoryaMogila/clean-code-javascript-ru/](https://github.com/BoryaMogila/clean-code-javascript-ru/)
  - [maksugr/clean-code-javascript](https://github.com/maksugr/clean-code-javascript)
- ![vi](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Vietnam.png) **Vietnamese**: [hienvd/clean-code-javascript/](https://github.com/hienvd/clean-code-javascript/)

**[⬆ 返回顶部](#CleanCode-代码整洁之道)**
