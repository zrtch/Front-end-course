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