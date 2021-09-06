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
/* 选择「所有」「孩子节点」是「p」的元素 */
. title {
   border: 1px solid red;
}
```
* border-width：表示边框的宽度，可以分别设置上下左右边框为不同的宽度，比如 border-bottom-width；
* border-style: 表示边框的样式，可以分别设置上下左右边框为不同的样式，比如 border-bottom-style，可以取下面几种值：node、hidden、dotted、dashed、solid 等；
* border-color：表示边框的颜色，可以分别设置上下左右边框为不同的颜色。
```css
/* 选择「所有」「孩子节点」是「p」的元素 注:transparent用来指定全透明色彩 */
. border-triangle {
  width:0;
  border:20px,solid;
  border-color:#f00 transparent transparent transparent;
}
```