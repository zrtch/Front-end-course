### HTML 结构
![DOM结构](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGY7kSvshGOqyOOOuiaEX5ibEibLEn9ibpdE4Qyickl3qia0sWib8wqmt7qexufRGvfL0ZxEnFKGaZv5of2hw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
![各个标签的作用](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGY7kSvshGOqyOOOuiaEX5ibEibspw9LtzJvDpMiaDuLAJWcNxBXJIuRgib5z8hTpga8JIaQ0fibj5hJBWFQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
meta 标签用来定义一些元数据，提供网站的基本信息，供搜索引擎抓取，还可以做 SEO
```javascript
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
### 学习前端用过的资源
MDN官网[MDN官网](https://developer.mozilla.org/en-US/#)
* 先从HTML入手
* 再到CSS。推荐书籍《CSS世界》。作者写的demo 网址[官网](https://demo.cssworld.cn/)；以及 [CSS在线手册](https://css.doyoe.com/)
* 接着到JavaScript 可直接看《JavaScript 高级程序设计》
* 较好资源 [github地址](https://github.com/lefex/DSA/issues/45)

### 读懂HTML标签
HTML 其实最初是为了展示文档而发明的，而标签的出现是为了满足文档的需求。比如一个文档包含标题、段落、强调等，而这一切于 HTML 中的标签一一对应，比如标题对应于 H1-H6，段落对应于 p，而这些标签是具有「语义」的，也就是说它们带有一定的感情色彩。
![各个标签的作用](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYsJh7q5m4UpYR7Vc2CTFTeicibFDKrmP6C6NiaNXZb7zLiatnKAGqT13Pv1OWWfWf4QpibKeblDrC9L1A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

### 使用CSS的三种方式
* CSS的加载过程
 ![ CSS 的加载过程](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYJ74yLBd2lwUw3HSD4jI8UzXnicNTibvjYaicFm6STicGk4iawUqJoWDRPLo9LP2LufU49mia0dme3w9UA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
 1. 通过 link 的方式引用 CSS 样式，也就是外部引入，这种方式需要一个 css 文件，比如 css 的名字为 style.css。这种方式可以把样式和HTML分离，方便维护。
```javascript
    <link rel="stylesheet" href="style.css">
```
 2. 内部引入。在 HTML 中的 head 位置添加 style 标签，CSS 样式放到 style 标签中。这种方式把 HTML 和 CSS 样式放到了一起，如果页面太复杂将导致页面代码太臃肿。
   ```css
   <style>
        .title {
            color: red;
            font-size: 18px;
         }
</style>
```
3. 内联样式：直接作用于元素上，只会对一个元素起作用 **（不到万不得已不用）**。
```html
<p style="color: red; font-size: 18px;">《前端小课》是一本关于前端入门到进阶的多媒体电子书</p>
```

### CSS中的选择器详解
 ![ CSS 的加载过程](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYZJHkuia229NRZKiaRTs3NGPJamntPacjB5Mo2mUTDCVJjbVm8EiarsKsgaUVNjzlbWibuyJjyu3qjGg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
 * **class选择器**：以 “.” 开头，后跟一个名字。在一个HTML中，类选择器可以作用于多个 HTML 标签。
```css
.first {
    font-weight: bold;
    text-decoration: line-through;
}
```
* **ID选择器**：以 “#” 开头，后跟一个选择器的名字，名字必须在当前文档唯一
```css
#second {
    color: blue;
}
```
* **通用选择器（Universal selector）**：单独一个“ * ”，作用于所有的标签。下面的例子，清除 HTML 中所有标签的默认边距。
```css
* {
    margin: 0;
    padding: 0;
}
```
* **属性选择器（Attribute selectors)**：根据属性来匹配HTML元素，通过下面的例子你可以明白如何使用属性选择器。
```css
/* 匹配所有使用属性 "lefe" 的元素 */
[lefe] {
    color: green;
}
/*匹配所有使用属性为 "lefe"，且值为 liquid 的元素*/
[lefe="liquid"] {
    background-color: goldenrod;
}
/*匹配所有使用属性为 "lefe"，且值包含 spicy 的元素*/
[lefe~="spicy"] {
    color: red;
}

<li data-quantity="1kg" lefe>Tomatoes</li>
<li data-quantity="25cl" lefe="liquid">White wine</li>
```
* **伪选择器（pseudo-selectors）**：根它包含伪类（pseudo-classes）和伪元素（pseudo-elements）。这类选择器不是真正意义上的选择器，它作为选择器的一部分，**起到选择器匹配元素的限定条件**。比如，匹配 dom 树中某个元素的第一个孩子，匹配鼠标点击后的状态等。
```css
/* 鼠标悬停、点击、聚焦时的样式 */
a:hover,
a:active,
a:focus {
    color: darkred;
    text-decoration: none;
}
```
* **组合选择器（Combinators）**：这种选择器可以作用于多个 HTML 元素，有多种组合方式，下面这些方式，CSS 都会作用于 B 元素。通过下面的例子来讲解这些选择器，例子类似于一个树形，表示不同的层级：
1. **A B { }** : A 元素的所有后代元素 B 都会起作用。下面的例子中 div p {}，它会遍历 div 中所有的子元素 p，只要找到 p 元素就应用对应的 CSS 样式，故所有的  p 元素都变成了红色；
```css
div p {
    color: red;
}
```
2. **A > B { }** : A 元素的直接子节点会起作用，也就是只适用于 A 节点的第一层所有的子节点。例子中 div > p { } , **只会找到 div 的第一层子节点 p；**
```css
div > p {
    color: red;
}
```
3. **A + B { }** : 匹配 A 的下一个兄弟节点，AB具有相同的父节点，并且 B 紧跟在 A 的后面；例子中 div + p { } 只会匹配 div 的下一个兄弟节点 p；
```css
div + p {
    color: red;
}
```
4. **A ~ B { }** : B是 A 之后的任意一个兄弟节点。例子中 div ~ p { } 会匹配 div 的所有兄弟节点 p；
```css
div ~ p {
    color: red;
}
```
* **组选择器 A, B**：A 和 B 元素具有同一规则的 CSS 样式，不同元素使用逗号隔开。
```css
div,p {
    color: red;
}
```
* @规则在CSS中用于**传递元数据、条件信息或其他描述性信息**。它们以at符号（@）开头，后跟一个标识符来说明它是什么类型的规则，然后是某种类型的语法块，以分号（；）结尾。由标识符定义的每种类型的 at 规则都有其自己的内部语法和语义。
```css 
/* 这个 CSS 只适用于屏幕超过 800px 的设备 */
@media (min-width:801px){  
    body{
        margin: 0 auto;
        width:800px
    }
}
```
* :first-child 匹配兄弟姐妹中第一个元素。
```css
/* 选择「所有」「孩子节点」是「p」的元素 */
p:first-child {
  color: lime;
}
```
在 HTML 中，页面是由一颗树组成。想要彻底理解这里面涉及到的知识，需要掌握「树」这种数据结构。
 ![ CSS 的加载过程](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZAH46iapaY0pcYUYGjyOsyIU7P04TklibtPibcctE063dkX59I9wzvHiccg3oN72Voq9Enzb4KRicqSuw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
 从图中可以明确，p:first-child 选择的是孩子节点中第一个元素是 p 的元素。所以被选中的元素为下图中「突出」显示的元素。
  ![ CSS 的加载过程](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZAH46iapaY0pcYUYGjyOsyI506hTcQjcRply8rISmrKxtjyvSpLicfiaOLNYP1SjibEamvRe9iaib6EKTw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

### boder能干啥
它的意思是「边框」。在超越技术官网上有这么一种设计，自我介绍、联系方式和公众号下面有一条横线，它会根据字数的不同，长度在变化。这里恰好用到了 border 这个属性。
* border 是一个简写属性，它由一个或多个属性组成：border-width, border-style, border-color。往往会使用简写的方式，比如：
```css
.title {
   border: 1px solid red;
}
```
* border-width：表示边框的宽度，可以分别设置上下左右边框为不同的宽度，比如 border-bottom-width；
* border-style: 表示边框的样式，可以分别设置上下左右边框为不同的样式，比如 border-bottom-style，可以取下面几种值：node、hidden、dotted、dashed、solid 等；
* border-color：表示边框的颜色，可以分别设置上下左右边框为不同的颜色。
```css
/* 注:transparent用来指定全透明色彩 */
.border-triangle {
  width:0;
  border:20px,solid;
  border-color:#f00 transparent transparent transparent;
}
```
### CSS布局的半壁江山---盒子模型
* **一.块级盒子(block)**:
1. 尽可能扩大可利用的空间，比如 p 标签默认是一个块级标签，它的宽度会填满父元素；

   ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGanPOYkyatiar8tkQxdTYeFfjLdwR5l0jOnjIvfg45p2DxiaZW4LM2nLicFyqTguB6eTwyZ846sU5yOA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
2. 独占一行，也就说一个块级元素占一行；

   ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGanPOYkyatiar8tkQxdTYeFfTum2OSW75w6h3elmRGjw4SoXkWibf30XFDthYGCiawWbIWReXDVwoXVQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
3. 可以使用 width 和 height 属性，比如设置 width 来改变宽度；
   
    ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGanPOYkyatiar8tkQxdTYeFf04bp29j5DlX2Mp29HMsvpOdtoZUpyDReRy227ZcWce87HwwlCiaZloQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
5. 使用 padding、margin 和 border 会影响其它元素的位置，这句话比较抽象，比如当改变元素自己的 padding 的时候，其它元素的位置也会发生变化。
   
     ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGanPOYkyatiar8tkQxdTYeFflFZkhFZbE3I9ibP8t8YW84Vc4ZyQicia0hczZsSgDmLDm83IBehjbHqpA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
* **二.行内盒子(inline box)**:
1. 不会单行显示，除非一行没有足够多的空间，它会一个接一个地排列；
   
      ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGanPOYkyatiar8tkQxdTYeFfrv7WLPc8gEssFhLOWx9p4H8LhAibm18uOsY2Iq8urwiaP7J0vf50gsyg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
2. width 和 height 属性不起作用，**如果给 span 标签设置 width 或 height 时，发现无效**；
3. padding、margin 和 border 会起作用，但不会影响其它元素。
   
标签都会有自己默认的显示方式，可以通过 <u>display</u> 来修改其显示方式，比如把块级元素变成行内元素，比如 p 标签默认的是块级元素，通过 display 来修改为 inline。
```css
.title {
    display:inline;
}
```
比如 span 元素默认的是行内元素，通过 display 来修改为块级元素。
```css
.title {
    display: block;
}
```
**盒模型**:块级元素使用了盒子模型的所有特性，而行内元素只使用了部分特性。
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGanPOYkyatiar8tkQxdTYeFfdHaARiadAUGHH0pfXf0WYzK3avOmMLQBglrvFWl3XMRnfseibF0gHnjQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
1. margin（外边距）：它表示盒子之间的距离，可以通过 margin-top、margin-bottom、 margin-left、margin-right 来控制各个方向的边距，**它们可以为负值**；
2. border（边框）：表示盒子的边框；
3. padding（内边距）：表示与内容之间的距离；
4. content（内容）：表示内容的大小；
   

**1.标准的盒子模型** : 对于这种盒子模式，给它设置的 width 和 height 是 content 的宽高，当给盒子添加 padding 和 border 的时候，会增加盒子的整体大小。*「外边距不会计入盒子的大小，它只是表示外部的边距」*。下面的代码盒子最终的宽 = 100+20+20+10+10 = 160px；
```css
.std-box {
    width: 100px;
    height: 120px;
    padding: 20px;
    border: 10px solid red;
    margin: 30px;
    background-color: antiquewhite;
}
```
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGanPOYkyatiar8tkQxdTYeFfPichmG5XHWE6pLnvM5TMEEqDDAdjJSticTwy8sNnCTdpyG6O0fmCnExA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**1.诡异盒子模型** : 对于这种盒子模式，给它设置的 width 和 height 是盒子的宽高，也就是说内容 content 的宽需要减去 border 和 padding 的宽。谷歌浏览器默认的是标准的盒模型，可以通过：
```css
box-sizing:border-box
```
来修改盒模型为诡异盒模型，把上面的 CSS 修改成诡异盒模型。
```css
.std-box {
    width: 100px;
    height: 120px;
    padding: 20px;
    border: 10px solid red;
    margin: 30px;
    background-color: antiquewhite;
    box-sizing: borde-box;
}
```
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGanPOYkyatiar8tkQxdTYeFfIlMyZibOEqWLMwibhr7G4UH291cvg5AgRI2TuUg0dsVqLI4bMoLm2iasA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
### @规则之@media
@media 通俗地讲就是为了**匹配不同的媒体**，根据条件的不同**使用不同的 CSS 样式**。下面代码中的 **screen 是媒体类型**，在此表示带有屏幕的设备，比如电脑、手机，还有其它的媒体类型，比如 tv；and 用来组合多个条件，这里表示且，还有 not 和 only；**min-width 是媒体功能**
```css
@media screen and (min-width:700){
    //指的是匹配带有屏幕的设备，且最小尺寸是700像素
}
```
### 打破常规之display
* **display:inline** : 使用 inline 告诉浏览器这是一个**行内元素**，布局的时候要按照行内元素的方式布局，比如 span 标签默认的就是这种布局方式。在有足够空间的时候，**它不会换行**。不能使用 width 和 height 属性，margin 只会在水平方向起作用。
* **display:block** : 使用 block 告诉浏览器这是一个**块级元素**，布局的时候要按照块级元素的方式布局，比如 p 、div 标签默认就是这种布局方式。使 span 标签变为块级标签，效果如下：
```css
span{
    display:block
}
```
* **display:inline-block** : 这种布局方式结合了 inline 和 block 这两种元素的特性，它与块级元素不同的是：元素不会单独占用一行；相同的是：可以使用 width 和 height，可以通过 padding、margin 和 border 来控制元素的显示位置。说白了就是**除了不会单独占一行，其余的与块级元素一致。**

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGanPOYkyatiar8tkQxdTYeFfByHgDTCVDzn0dgre9DIpQLLzoBcPE393MF7p4iakqhBibPuM98RK6CEQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
* **display:none** : 这种布局方式会**隐藏元素**。
* **display:flex** : 这是一种 flexbox 布局，它是一维的。
* **display:grid** : 这是一种网格布局，它是二维的。
### CSS中使用图
* **img标签** : img标签比较特殊，它默认属于行内（inline）元素。
  
  ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGbyH7gh9dLjHMy2AFmKbWoYxibMeaGmquIeJJ597Td3ZhSN0HAYVSgSVnPOicSicL8EtngBWDB4GlUOA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
```css
.mini-logo {
    width: 30px;
    /* 指定行内元素的垂直对齐方式 */
    vertical-align: middle;
}
```
```html
<p>我这里有个min版的二维码，扫一扫
    <img class="mini-logo" src="./images/qrcode.jpg">
</p>
```
1. width: **表示设置图片的宽度**，如果只设置宽度，那么 img 标签的高度会根据图片的大小进行等比缩放。只设置高度也是同样的道理。如果即设置了高度又设置了宽度，那么图片的高度和宽度即为设置的宽高。
2. vertical-align: 表示在竖直方向上的对齐方式，它有 top、middle、bottom、baseline、sub 和 text-top 这几个值。
3. src：**表示图片的来源**，可以是「本地」的图片，也可以是「网络」中的图片。
4. alt：**对图片的描述**，供屏幕阅读器或者图片未加载出来时显示。
* **背景图** ： 背景图的**作用是给某个元素添加背景**，不会添加额外的元素。可以设置背景颜色或者背景图
```css
.box {
        width: 200px;
        height: 200px;
        background-color: antiquewhite;
        background-image: url('./logo_suyan.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
}
```
1. **background-postion**: <u>表示背景图的起始位置</u>；
background-postion：top | left | bottom | right，在某个边缘的位置，另一个维度为 50%。比如 top，背景图的起始位置为顶部，在X轴方向为 50%，居中显示；
background-postion：center，居中背景图；
background-postion：25% 75%，设置基于背景区域的开始位置，可以为负值；
2. **background-postion-x**：<u>背景在 x 轴上的位置</u>；
3. **background-postion-y**：<u>背景在 y 轴上的位置</u>；
4. **background-repeat**: <u>背景的重复方式</u>， no-repat 不重复，repeat 重复，repat-x X轴上重复，还有其它关键字，读者可以自行查看
https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat。
5. **background-size**: <u>背景图的大小</u>；</br>
**background-size: cover**，缩放背景图以完全覆盖背景区，保持原图的宽高比，可能背景图部分会看不到，填满背景图；</br>
**background-size: contain**，缩放背景图以完全显示背景图，保持原图的宽高比，可能背景部分区域空白，尽可能把图显示完整；</br>
background-size: 50%，背景图的大小为背景区的百分比；</br>
background-size: 12px，背景图的宽度为 12px，高度按照比例自动缩放；</br>
background-size: 12px 14px，背景图的宽度为 12px，高度14px；
### 在文字前、后插入一个图标之伪类选择器
伪选择分为**伪类选择器**和**伪元素选择器**；伪选择在于「伪」这个字，他很能「伪装」，比如它偶尔伪装成一个DOM中不存在的元素。
1. 伪类选择器（Pseudo-classes）它的作用是**选中某个元素中符合某些条件的元素**。比如鼠标悬停到某个元素后的状态，某个元素的第一个孩子，**使用1个冒号 :** 。它的效果好像*是为元素添加了一个新的选择器*`。**「作用于现有元素，相当于给现有元素添加某些属性」**。对于这类选择器在前面的课程中我们有提到过 群里讨论的一个选择器问题（一定要看），它主要涉及到选择某些孩子节点。常用的伪类选择器有：
```css
:first-child    选择器匹配其父元素中的第一个子元素。
:not   选择器匹配每个元素是不是指定的元素/选择器。 :not(p) 选择所有p以外的元素
:nth-child()    选择器匹配父元素中的第 n 个子元素，元素类型没有限制。
:only-child()   p:only-child：选择所有仅有一个子元素的p元素
:root()  选择文档的根元素
:disabled  选择所有禁用的表单元素
/* 比较常见的 a 标签在不同状态下的展示效果 */
a{
    color: black;
}
a:hover{
    color: blue;
}
a:visited{
    color: gray;
}
```
2. 伪元素选择器（Pseudo-elements）它的作用就是**给现有元素添加某些新的内容，就好比给某个元素添加了一个新的标签**，使用2个冒号 :: ，有些也可以使用1个:，但建议**统一使用2个冒号 : :** 。
   
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYiaXjlAPZ75giaxSwJEa0C8VowTC5f0ia0emeorricEQmTz9ic0oVrYAur0AvYAecz2UaibIcgfMniaTV4g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYiaXjlAPZ75giaxSwJEa0C8VQOroh85ykzJjFKSgzOqPytLrCd4bgt7GNlWBdz4LdicoKWE8bdan6Vw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
```html
<p class="left">前端小课</p>
```
```css
.left{
    color: black;
    font-size: 15px;
}
.left::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    background-image: url('./images/hert.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-right: 4px;
    width: 30px;
    height: 30px;
}
```
通过 **::before 和 ::after 可以给已知元素的前面或者后面拼接新的内容**，好像添加了新的元素，我觉得这应该就是伪元素中“伪”的真正含义吧，它并不是一个真正的元素，但**可以充当元素的角色**。除了这两个伪元素外，还有其它的伪元素，比如：
```css
::first-letter  表示对首字母进行操作	p:first-letter  选择每个<p> 元素的第一个字母
::first-line  对首行内容进行操作	p:first-line    选择每个<p> 元素的第一行
```
### 设计师的要求
* 显示一行内容:无非就是要让显示的内容不这行显示,对超过的可是区域的内容进行隐藏即可.
```css
.singal-line {
    overflow: hidden; 
    white-space: nowrap;   不换行显示
    text-overflow: ellipsis;  
}
```
 text-overflow这个属性只对块级元素起作用,表示对超出指定区域的内容如何显示.
 1.  ellipsis（省略号）: 以 ... 省略号显示
 2.  clip : 截断显示；
* 显示两行且超出部分以省略号显示，这个需要使用 webkit 的 CSS 扩展属性 -webkit-line-clamp ，它用来控制内容的行数，如果想让这个属性起作用，需要满足:
```css
.two-line{
    display: -webket-box;   必须满足display 为 -webkit-box 或者 -webkit-inline-box
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;   表示显示几行内容
    -webkit-box-orient: vertical;    指定一个box子元素是否应按水平或垂直排列。
}
```
### css动画
* **animation：CSS动画，可设置不同帧的动效；** animation 是通过 CSS 给某个 HTML元素设置一个动画，可以通过下面这些属性来控制动画。
1. <u>**animation-name: 动画的名字**</u>，这个是**通过 @keyframes 定义的名字**，比如 @keyframes 定义如下，那么 ***animation-name 就为 move***。@keyframes 指定某一帧的动画如何变化，可通过 % 来控制各个阶段的属性值，比如 0% 的时候，元素的 left 和 top 都为 0。
```css
@keyframes move{
    0% {
        left: 0;
        top: 0;
    }
    100% {
        left: 0;
        top: 0;
    }
}
```
2. **animation-duration：动画的持续时间；**
3. **animation-delay：动画开始时的延迟时间；**
4. **animation-iteration-count：动画循环次数；**
5. **animation-direction：动画的方向**，比如 alternate 表示先正向后逆序，nomal 正向，reverse 逆序；
6. **animation-timing-function：动画的时间曲线**，它的值有 ease、ease-in、ease-out、ease-in-out、linear；
7. **animation-fill-mode：动画执行后的填充模式**，**它的值有 forwards、backwards、none、both；
```html
 <div class="move-box move-box-animation"></div>
```
```css
    .move-box {
        background-color: red;
        position: relative;
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }
    .move-box-animation {
        /* animation: name duration timing-function delay iteration-count direction fill-mode; */
        /* 名字，为 @keyframes 的名字 */
        animation-name: move;
        /*  动画的时间 */
        animation-duration: 5s;
        /* 动画执行函数 */
        animation-timing-function: ease-in-out;
        /* 动画延迟时间 */
        animation-delay: 1s;
        /* 动画重复次数 */
        animation-iteration-count: 10;
        /* 动画的方向，先正向后逆向 */
        animation-direction: alternate;
        /* 动画执行后的填充模式 */
        animation-fill-mode: backwards;
        /* 动画的运行状态 */
        animation-play-state: running;
    }

    @keyframes move {
        0% {
            left: 0;
            top: 0;
        }
        25% {
            left: 100px;
            top: 0;
        }
        50% {
            left: 100px;
            top: 100px;
        }
        75% {
            left: 0;
            top: 100px;
        }
        100% {
            left: 0;
            top: 0;
        }
    }
```
* <u>**transition是过渡动画**</u>，修改某些属性的时候不会立刻生效，**它会以动画的形式逐渐过度到要设置的值**。比如设置某个HTML元素的背景颜色，修改宽度和高度。
1. **transition-property: 指需要使用过渡动画的属性，这里设置了背景色，高度和宽度**。也可以通过关键字 all 设置所有的属性；
2. **transition-duration: 动画持续的时间**，可以单独控制某个属性的时间
transition-duration：1.8s, 1.0s, 1.0s 表示修改 background-color 需要 1.8s, 修改 height 需要 1.0s,  修改 width 需要 1.0s;
3. **transition-delay：动画开始时需要延迟多长时间才开始执行**；
4. **transition-timing-function：表示动画执行时的时间函数，不同函数走过的曲线不一样；**
```html
    <div id="move-transition-box" class="move-transition" onclick="scale()"></div>
```
```css
    #move-transition-box {
        background-color: cornflowerblue;
        width: 120px;
        height: 120px;
    }

    .move-transition {
        transition-property: background-color, height, width;
        transition-duration: 1.8s, 1.0s, 1.0s;
        transition-delay: 0.1s;
        transition-timing-function: linear;
    }
```
```javascript
//transition过渡动画
    function scale() { //当点击方块的时候，方块会变大，颜色逐渐变成红色。
        let tbox = document.getElementById('move-transition-box');
        tbox.style.height = 240 + 'px';
        tbox.style.width = 240 + 'px';
        tbox.style.backgroundColor = 'orange';
    }
```
### 屏幕尺寸之相对单位
相对单位指它的尺寸是**相对于另外一个元素的尺寸**。常用的是 em、rem、vh、vw、vmin、vmax。理解相对单位的时候需要掌握 font-size 这个 CSS 属性，它表示字体的大小，**同时也可以用来计算相对单位的长度**。「避免认为 font-size 就是表示字体大小的思维定势」。
* <u>**em**</u>: 它是相对于「自身或父元素」的 font-size 来计算自身的尺寸：
```html
    <div class="content">
        <div class="title"></div>
    </div>
```
```css
    .content {
        width: 200px;
        height: 300px;
        font-size: 20px;
        background-color: #258BD6;
    }
    .title {
        width: 9em;
        height: 4em;
        background-color: #FE7235;
    }
```
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZVK1Yzmh2rg4gbNX6FbsrelNY1l7lWQp6G0jvGaGGG3oVGnV23JHphl7EzBibg8HaaiatYjQxT7DHg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
选择器 content 的 font-size 是 20px，在选择器 title 的 width 属性的值为 9em，由于 title 所在的 div 标签父元素是 content 所在的标签，所以 width = 9*font-size=9*20=180px；同理 height = 4*20=80px；如果 title 所在的 div 标签 设置了 font-size，那么**em 计算的值将会依据自身的 font-size 计算。**
* <u>**rem**</u>:**这个单位是依据「根元素 html 标签」的 font-size 来计算最终的值**，这个单位***对移动端***web开发十分实用，通过<u>设置 html 的 font-size 来等比缩放元素的大小</u>。**比如下面的代码，title 所在的 div 标签 width=15*9=135px，height=15*4=60px；
```html
<body>
    <div class="content">
        <div class="title"></div>
    </div>
</body>
```
```css
html {
    font-size: 15px;
}
body {
    background-color: #eeeeee;
    font-size: 10px;
}
.content {
    width: 200px;
    height: 300px;
    font-size: 20px;
    background-color: #258BD6;
}
.title {
    font-size: 10px;
    width: 9rem;
    height: 4rem;
    background-color: #FE7235;
}
```
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZVK1Yzmh2rg4gbNX6FbsreonBQjaQI1C5BrQvbibkX6iaQ18tRja2fibELaL8VSia0SDXoT7zK0rf5ug/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
* <u>**vw（viewport width）**</u>，可视区域宽度，**比如设置 50vw，相当于可视区域宽度的一半；**
* <u>**vh（viewport height）**</u>，可视区域高度，**比如设置 50vh，相当于可视区域高度的一半；**
```html
 <div class="content"></div>
```
```css
.content {
    width: 50vw;
    height: 50vh;
    font-size: 20px;
    background-color: #258BD6;
}
```
* vmax: vw 和 vh 中最大的；
* vmin: vw 和 vh 中最小的；
```css
.content{
    width: 10vmax;
    height: 10vh;
    font-size: 20px;
    background: red;
}
```
### CSS中的权重
CSS 的权重可以通过 4 个以 - 分开的数字来表示权重值的大小，比如：1-0-10-0，0-1-1-1，比较的时候先从高位开始对比，如果相同则对比下一位的值。
> 0-0-1-0 大于 0-0-0-1；          1-1-0-0 大于 1-0-12-30；

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGay4XeiaSgTe7dHrQcECbsV05gcmtA9B48TwCiagxsnz7nSGjmMpkdicpC84lzS5xtibDSWbDWJ9oXdyw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
 * **g：直接在元素中使用属性，权重最高**，可以看做 1-0-0-0；
 * **z：id选择器，权重次子**，可以看做 0-1-0-0；
 * **y：类、伪类、属性选择器，权重低**，可以看做 0-0-1-0；
 * **x：元素、伪元素选择器，权重最低**，可以看做 0-0-0-1；

  ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZVK1Yzmh2rg4gbNX6FbsredMIVCWIsPKN44MBl9SEwQiasppQibASM4RmxIZ14riaM0iblRFT2qU9u9A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
  CSS specifical，可以翻译成 CSS 权重，图中通过鱼和鲨鱼来表示选择器的权重。
  * ***：通用选择器，权重最低**，就是 0，第 1 张图就是此意；
  * div、li>ul、body：**元素选择器，有几个值权重值就是几**。li>ul 是两个元素，> 号不会干扰权重计算；第 2、3、4张图能看懂了吧，就是元素选择器，1个元素选择器就是 0-0-1，12个元素选择器就是 0-0-12；
  * .myClass, [type=chekbox], :only-of-type : **类、属性、伪类选择器**。第 5 张图，一个类选择器，权重值表示为 0-1-0；5-15张图能看懂了吧；
  * **#myDiv：id选择器**，一条鲨鱼，权重比较高，权重值为 1-0-0；
  * **style：权重值更高**，权重值为 1-0-0-0；
  * **!important: 无敌**，我是老大，告诉浏览器必须使用我定义的属性；
```html
<div class="box">
    <p id="name" class="title">第1个p</p>
    <p id="name1" class="title">第2个p</p>
    <p id="name2" class="title imp">第3个p</p>
    <!--  style 的权重中为 1-0-0-0 -->
    <p id="name3" class="title" style="color: brown">第4个p</p>
</div>
```
```css
/* 权重值为 0-0-1 （1个元素选择器）*/
p {
    color: purple;
}
/* 权重值为 0-0-2 （2个元素选择器）*/
div p {
    color: bisque;
}
/* 权重值为 0-1-0（ class 选择器） */
.title {
    color: blue;
}
/* 权重值为 1-0-0 （id选择器）*/
#name, #name1, #name2, #name3 {
    color: green;
}
/* important 不会增加权重值，但是使用它的时候浏览器会直接使用这个属性值忽略其它属性值，它是老大 */
.imp {
    color: red !important;
}
/* 权重值为 1-0-1 = 1-0-0（id选择器）+ 0-0-1（伪元素选择器）*/
#name::first-letter {
    color: peru;
}
```
### 写出易复用、易维护、结构清晰的 CSS
> Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。
```less
// 用来定义一些变量，比如字体颜色，背景颜色
@main-color: #1565C0;
@text-color: #222222;
@des-color: #999999;
@backgroud-color: #eeeeee;
@edge-width: 16px;
@small-edge-width: 8px;
@strong-color: red;
@nomal-font-size: 18px;
.wx-border {
    border: solid 1px @main-color;
}
```
```less
// 通过 @import 来导入在 base.less 中定义的变量及选择器：
@import "./base.less";
.header {
    padding: 0 @edge-width;
    background-color: @backgroud-color;
    .title {
       // @text-color 在 base.less 定义好的变量
        color: @text-color;
        font-size: @nomal-font-size;
        &::first-letter {
            font-size: 24px;
            color: @strong-color;
        }
    }
    p a {
        color: @main-color;
        font-size: @nomal-font-size;
        /**&:hover 相当于 a:hover**/
        &:hover {
            color: @strong-color;
        }
    }
    p:nth-child(3) {
        width: 100px;
        text-align: center;
        padding: @small-edge-width;
        /**引用在 base.less 定义好的选择器 **/
        .wx-border();
    }
}
```
```css
/* 很有规律的css代码 */
.dsa-box div:nth-child(1) {
    background-image: url('./images/1.png');
}
.dsa-box div:nth-child(2) {
    background-image: url('./images/2.png');
}
.dsa-box div:nth-child(3) {
    background-image: url('./images/3.png');
}
.dsa-box div:nth-child(4) {
    background-image: url('./images/4.png');
}
.dsa-box div:nth-child(5) {
    background-image: url('./images/5.png');
}
.dsa-box div:nth-child(6) {
    background-image: url('./images/6.png');
}
.dsa-box div:nth-child(7) {
    background-image: url('./images/7.png');
}
.dsa-box div:nth-child(8) {
    background-image: url('./images/8.png');
}
.dsa-box div:nth-child(9) {
    background-image: url('./images/9.png');
}
```
```less
// 代码原理就是使用 rang 生成 1 到 9 这几个数字，通过 each 来遍历，然后生成对应的选择器。
each(range(9),{
    .dsa-box div:nth-child(@{value}){
        background-image: url("./images/@{value}.png")
    }
})
```