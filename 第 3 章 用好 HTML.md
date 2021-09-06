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
4. 使用 padding、margin 和 border 会影响其它元素的位置，这句话比较抽象，比如当改变元素自己的 padding 的时候，其它元素的位置也会发生变化。
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
1. margin（外边距）：它表示盒子之间的距离，可以通过 margin-top、margin-bottom、
2. margin-left、margin-right 来控制各个方向的边距，**它们可以为负值**；
3. border（边框）：表示盒子的边框；
4. padding（内边距）：表示与内容之间的距离；
5. content（内容）：表示内容的大小；
   

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
