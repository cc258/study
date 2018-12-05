夜空中最亮的星 —— canvas 动画

* 简单动画
* 易于理解
* 由浅入深

## 画一个矩形## 

![](https://github.com/cc258/frontend/blob/master/canvas/images/step_static.gif)

```
ctx.fillRect(50,70,25,25);
```
简单吧



## 让矩形移动## 

![](https://github.com/cc258/frontend/blob/master/canvas/images/step_active.gif)

* 三要素：更新，清除，绘制
* 准确记忆图形的内容和位置
* 如果要绘制多个动画，该怎么办？

```
var x=50;

playAnimate = setInterval(function() {

        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);//清除整个canvas
        x++; //更新x轴的位置
        ctx.fillRect(x,70,25,25);//新位置绘制矩形

}, 50);
```



## 移动多个矩形## 

![](https://github.com/cc258/frontend/blob/master/canvas/images/step_simple.gif)

* 怎样记忆多个内容位置值————对象
* 不复制代码的情况下，绘制多个矩形————数组
* 代码自动地让对象产生动画效果，才是使用代码实现动画的真正原因。

```
var playRec = [];

//单个矩形的对象信息
function ArrayData(x, y) {
    this.x = x;
    this.y = y;
}
//初始化30个矩形
function randomData() {
    for (var i = 0; i < 30; i++) {
        var x = 20 + Math.random() * (canvas.width - 40);
        var y = 20 + Math.random() * (canvas.height - 40);
        playRec.push(new ArrayData(x, y));
    }
}

playAnimate = setInterval(function() {

        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < playRec.length; i++) {
            var tmpRec = playRec[i];
            tmpRec.x += 3;
            tmpRec.y += 1;


            ctx.fillRect(tmpRec.x,tmpRec.y,25,25);
        }

}, 50);
```



## 添加更多的属性

* 可以随机产生矩形的宽度和高度，矩形运动的速度
* 发散一下，如果是矩形之外的任何物体形状，随机类型。。。

```
function randomData() {
    for (var i = 0; i < 30; i++) {
        var x = 20 + Math.random() * (canvas.width - 40);
        var y = 20 + Math.random() * (canvas.height - 40);

        //速度
        var vX = Math.random() * 4 - 2;
        var vY = Math.random() * 4 - 2;
        //宽，高
        var w = Math.random() * 25+10;
        var h = w;

        playRec.push(new ArrayData(x, y,vX,vY,w,h));
    }
}
```

![](https://github.com/cc258/frontend/blob/master/canvas/images/step_group.gif)



## 改变方向

* 比直线运动更丰富，产生不可预测+无序性
* 更新x,y坐标

```
tmpRec.x += Math.random() * 4 - 2;
tmpRec.y += Math.random() * 4 - 2;
```
![](https://github.com/cc258/frontend/blob/master/canvas/images/step_rock.gif)



## 反弹
![](https://github.com/cc258/frontend/blob/master/canvas/images/step_border.gif)

```
function ArrayData(x, y, vX, vY, w, h) {
    this.x = x;
    this.y = y;

    this.vX = vX;
    this.vY = vY;

    this.w = w;
    this.h = h;
    this.reverseX = 0;
    this.reverseY = 0;
}


    var tmpRec = playRec[i];

    if(tmpRec.x < 0){
        tmpRec.reverseX = 0;
    }else if(tmpRec.w+tmpRec.x>canvas.width){
        tmpRec.reverseX = 1;
    }

    if(tmpRec.y < 0){
        tmpRec.reverseY = 0;
    }else if(tmpRec.h+tmpRec.y>canvas.height){
        tmpRec.reverseY = 1;
    }

    if(!tmpRec.reverseX){
        tmpRec.x += Math.abs(tmpRec.vX);
    }else{
        tmpRec.x -= Math.abs(tmpRec.vX);
    }

    if(!tmpRec.reverseY){
        tmpRec.y += 2;
    }else{
        tmpRec.y -= 2;
    }

    ctx.fillRect(tmpRec.x,tmpRec.y,tmpRec.w,tmpRec.h);
```


## 圆周运动

![](https://github.com/cc258/frontend/blob/master/canvas/images/step_round.gif)

* 三角函数的知识

```
    this.radius = Math.random()*30+50;
    this.angle = 0;



    var tmpRec = playRec[i];

    var x = tmpRec.x+(tmpRec.radius*Math.cos(tmpRec.angle*(Math.PI/180)));
    var y = tmpRec.y+(tmpRec.radius*Math.sin(tmpRec.angle*(Math.PI/180)));

    tmpRec.angle +=5;
    if(tmpRec.angle>360){
        tmpRec.angle = 0;
    }

    ctx.fillRect(x,y,tmpRec.w,tmpRec.h);

```



## 作业

* 《捕鱼达人》

![](https://github.com/cc258/frontend/blob/master/canvas/images/step_fish.gif)



# Canvas API study


## 绘制路径

    ctx.beginPath();


## 移动笔触

    ctx.moveTo(75,50);
    ctx.moveTo(x,y);


## 线

    ctx.lineTo(100,75);
    ctx.lineTo(x,y);


## 填充

    ctx.fill();

## 填充一个矩形


    ctx.fillRect(25,25,100,100);
    ctx.fillRect(x,y,width,height);


## 清除一个矩形

    ctx.clearRect(45,45,60,60);


## 描边一个矩形

    ctx.strokeRect(50,50,50,50);



## 绘制圆弧

    ctx.arc(100,75,50,0,2*Math.PI);
    ctx.arc(100,75,50,0,2*Math.PI,true);
    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);


* arc()函数中的角度单位是弧度，不是度数。角度与弧度的js表达式:radians=(Math.PI/180)*degrees
* startAngle:开始弧度
* anticlockwise:逆时钟绘制，默认为false


## 贝塞尔（bezier）

    ctx.quadraticCurveTo(cp1x, cp1y, x, y)
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)


* 绘制二次贝塞尔曲线，x,y为结束点，cp1x,cp1y为控制点。
* 绘制三次贝塞尔曲线，x,y为结束点，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二。


# Using images

引入图像到canvas里需要以下两步基本操作：

* 获得一个指向HTMLImageElement的对象或者另一个canvas元素的引用作为源，也可以通过提供一个URL的方式来使用图片
* 使用drawImage()函数将图片绘制到画布上

## 获得相同页面内的图片
    document.images
    document.getElementsByTagName()
    document.getElementById()

## 使用其它域名下的图片
在 HTMLImageElement上使用crossOrigin属性，你可以请求加载其它域名上的图片。如果图片的服务器允许跨域访问这个图片，那么可以使用这个图片而不污染canvas，否则，使用这个图片将会污染canvas。


## 通过 data: url 方式嵌入图像

我们还可以通过 data: url 方式来引用图像。Data urls 允许用一串 Base64 编码的字符串的方式来定义一个图片。
其优点就是图片内容即时可用，无须再到服务器兜一圈。（还有一个优点是，可以将 CSS，JavaScript，HTML 和 图片全部封装在一起，迁移起来十分方便。）缺点就是图像没法缓存，图片大的话内嵌的 url 数据会相当的长：

## 使用视频帧
function getMyVideo() {
    return document.getElementById('myvideo');
}

## 绘制图片


* 其中 image 是 image 或者 canvas 对象, x 和 y 是其在目标 canvas 里的起始坐标。
    ```
    drawImage(image, x, y)
    ```

* 缩放 Scaling width 和 height 是图像在 canvas 中显示大小。
    ```
    drawImage(image, x, y, width, height)
    ```

* 切片 Slicing  s:图片资源,d:画布展示 x,y起点,width,height宽高

    ```
    drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ```


## 运用样式与颜色


```
fillStyle = color
strokeStyle = color

ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255,165,0)";
ctx.fillStyle = "rgba(255,165,0,1)";
```

* 设置线条的样式

```
lineWidth = value
lineCap = type
lineJoin = type
miterLimit = value
```

* lineWidth `1`,`2`,`3`
* lineCap `butt`，`round` 和 `square`
* lineJoin `miter`, `bevel` 和 `round` miter:直角


##  渐变 Gradients

我们可以用线性或者径向的渐变来填充或描边。我们用下面的方法新建一个 canvasGradient 对象，并且赋给图形的 fillStyle 或 strokeStyle 属性。

```
createLinearGradient(x1,y1,x2,y2)
createRadialGradient(x1,y1,r1,x2,y2,r2)

var lineargradient = ctx.createLinearGradient(0,0,150,150);
lineargradient.addColorStop(0,'white');
lineargradient.addColorStop(1,'black');

ctx.fillStyle = lineargradient;
ctx.strokeStyle = lineargradient;
```

##  图案 Patterns

    createPattern(image,type)

Type 必须是下面的字符串值之一：repeat，repeat-x，repeat-y 和 no-repeat。
创建出一个 pattern 之后，赋给 fillStyle 或 strokeStyle 属性即可。


##  阴影 Shadows 文字阴影

ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

```
ctx.font = "intalic 20px Times New Roman";
ctx.fillStyle = "Black";
ctx.fillText("Sample String", 5, 30);
```


## 基本动画的步骤 Basic animation steps

画一帧，你需要以下一些步骤：

* 清空 canvas
除非接下来要画的内容会完全充满 canvas （例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。
* 保存 canvas 状态
如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
* 绘制动画图形（animated shapes）
这一步才是重绘动画帧。
* 恢复 canvas 状态
如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。


## 操控动画 Controlling an animation

```
setInterval(animateShape,500);
setTimeout(animateShape,500);
```


## 组合 Compositing

* 我们不仅可以在已有图形后面再画新图形，还可以用来遮盖，清除（比 clearRect 方法强劲得多）某些区域。
```
globalCompositeOperation = type
```

* source-over (default)  这是默认设置，新图形会覆盖在原有内容之上。
* destination-over  会在原有内容之下绘制新图形。

* source-in  新图形会仅仅出现与原有内容重叠的部分。其它区域都变成透明的。
* destination-in  原有内容中与新图形重叠的部分会被保留，其它区域都变成透明的。

* source-out  结果是只有新图形中与原有内容不重叠的部分会被绘制出来。
* destination-out  原有内容中与新图形不重叠的部分会被保留。

* source-atop  新图形中与原有内容重叠的部分会被绘制，并覆盖于原有内容之上。
* destination-atop  原有内容中与新内容重叠的部分会被保留，并会在原有内容之下绘制新图形

* lighter  两图形中重叠部分作加色处理。
* darker  两图形中重叠的部分作减色处理。

* xor  重叠的部分会变成透明。
* copy  只有新图形会被保留，其它都被清除掉。


## 裁切路径 Clipping paths
```
clip()
```


## 变形 Transformations

## 状态的保存和恢复 Saving and restoring state

```
save()
restore()
```

* save()：用来保存Canvas的状态,save()方法之后的代码，可以调用Canvas的平移、放缩、旋转、裁剪等操作！

* restore()：用来恢复Canvas之前保存的状态,防止save()方法代码之后对Canvas执行的操作，继续对后续的绘制会产生影响，通过该方法可以避免连带的影响！


## 移动 Translating

```
translate(x, y)
```

## 旋转 Rotating

```
rotate(Math.PI*2/(j*40))
rotate(angle)
```

* 这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。
* 旋转的中心点始终是 canvas 的原点(左上角)，如果要改变它，我们需要用到 translate 方法。

## 缩放 Scaling
```
scale(x, y)
```
* x,y 分别是横轴和纵轴的缩放因子
* 必须是正数


## 变形 Transforms
```
transform(m11, m12, m21, m22, dx, dy)
```
* 这个方法必须将当前的变形矩阵乘上下面的矩阵：
```
m11 	m21 	dx
m12 	m22 	dy
0 	0 	1
```
* 如果任意一个参数是无限大，变形矩阵也必须被标记为无限大，否则会抛出异常。