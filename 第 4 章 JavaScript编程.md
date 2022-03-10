### 让 JavaScript 跑起来+函数

JavaScript 既可以在浏览器中执行，也可以在服务端执行，还可以在移动 App 中执行，这一切其实归功于 JavaScript 引擎，比如 V8、JavaScriptCore。 V8 引擎被应用于谷歌浏览器 Chrome 和 Node.js 。V8 很牛逼，是一个开源项目，**使用 C++ 实现了 JavaScript 和 WebAssembly**，应用于 Windows、macOS、Linux 系统，Chrome 和 Node.js 都是采用它实现的。

-   JavaScript 通过 function 关键字定义函数，定义函数名为 sum 的函数：

```JavaScript
function sum(a, b) {
    return a + b
}
```

-   也可以通过函数表达式定义函数，下面定义的函数未指定名字：**函数其实是「对象」，每一个函数实际上是 Function 的实例，函数有自己方法和属性**。这一点与其它语言有很大的不同。打印 sub：

```JavaScript
let sub = function(a,b){
    return a - b
}
console.log(sub);  // [Function: sub]
```

-   通过 Function 创建一个函数，通过这种方式只是说明函数是 Function 的实例，不推荐使用。

```JavaScript
let sub2 = new Function('a','b','return a - b');
console.log(sun2(8,6))
```

-   函数可以作为函数参数传递，也可以作为函数返回值。

```JavaScript
function invoke(a,b,fun){
    if(!a || !b){
        return
    }
    return fun(a,b)
}
let ret = invoke(5,2,function(a,b){
    return a + b
})
console.log(ret); //7
```

-   函数有一个内部参数 arguments，它保存了函数调用时的所有参数，它不是一个数组。

```javascript
function kill(a, b) {
    console.log(arguments) // { '0': 3, '1': 2 }
    return a * a - b
}
kill(3, 2) //调用函数不传递参数就是空对象
```

### JavaScript 中的对象

-   new 关键字后紧跟一个函数调用，这个函数被称为构造函数：

```javascript
let person = new Object()
person.name = "前端"
person.age = 15
person.welcome = function () {
    console.log("he name is" + this.name + "age is" + this.age)
}
person.welcome() //he name is 前端 age is 15
```

-   通过对象直接量的方式创建，**由若干键/值组成的映射表，中间使用冒号分割，键/值对使用逗号分割，整个映射表使用花括号括起来**：

```javascript
let person2 = {
    name: "前端",
    age: 18,
    welcome: function () {
        console.log("He name is " + this.name + " age is " + this.age)
    },
}
person2.welcome() //He name is 前端 age is 18
```

-   基于构造函数来创建对象：

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
    this.welcome = function () {
        console.log("He name is " + this.name + " age is " + this.age)
    }
}

// 通过 new 来调用函数，这个函数便成为了构造函数，并没有特定的方法来定义一个构造函数。
// 通过构造函数创建对象也有它的缺点，在每个 person 下都存在一个 welcome 函数。

let person4 = new Person("lefex", 20)
person4.welcome() //He name is lefex age is 20
let person5 = new Person("suyan", 30)
person5.welcome() //He name is suyan age is 30
```

### var 很傻、let 很亲切 、const 更坚定

-   **var 的作用域是全局和函数作用域**，在程序设计语言中，**作用域是指变量能够作用的范围**。全局作用域这个好理解，它伴随着页面的整个生命周期。函数作用域指在函数体内定义，可在函数体内任意地方使用。

```javascript
var name = "suyan"
function callVar(isNew) {
    // 使用 var 在函数作用域申明变量 age
    if (isNew) {
        var age = 20
        var age = 24
    }
    // 可以正常访问 if {} 块级作用域中定义的 age 变量
    console.log(age)
}
callVar(true)
// console.log(age); //age is not defined  会报错
var name = "elx" //name还可以继续声明
console.log(name) //elx
```

总之 var 申明变量有很大弊端。**它会使变量提升**，也就是说在 JavaScript 代码执行之前，**JavaScript 引擎把变量和函数的声明部分提升到对应作用域的开始位置**。对于 var 声明的变量，变量提升后，它的初始值是 undefined

```javascript
//call这个函数被提升了
call()
function call() {
    // name 被提升了
    console.log(name) //undefined
    var name = "前代"
}
```

-   ES6 中提出了 let，**使用 let 声明的变量是块级作用域**，也就是说**在 { // 变量 } 声明的变量只能在这个块内部使用**。同一变量不可以重复申明。关于块可以这样理解：

```javascript
for (let i = 0; i < 2; i++) {
    // 块
}
if (true) {
    // 块
}
function call() {
    // 块
}
```

```javascript
//let是块级作用域
function callLet(isNew) {
    if (isNew) {
        let address = "shangrao"
        // 可以再次被赋值
        address = "xinjiang"
        // 不能再次被定义  Identifier 'address' has already been declared
        // let address = 'BaoTou';
        console.log(address) //xinjiang
    }
    // 在不同的作用域中是可以重复定义的
    let address = "hushi"
    console.log(address) //hushi
}
callLet(true)
```

对于 let 声明的变量，如果在未申明时使用会报错，比如下面的代码：

```javascript
//如果在未声明时使用会报错
call()
function call() {
    console.log(name) //Cannot access 'name' before initialization
    let name = "大苏打"
}
```

-   **const，也是常量声明最常用的手段。在日常开发中能用 const 就要 const，它能保证程序的状态更稳定**。const 与 let 类似，`不同之处在于它的不变性，使用 const 声明的变量，声明时就要设定初始值。`

```javascript
// const 也是块级作用域，它与 let 不同的是它的值一旦被指定是不能修改的
function callConst(isNew) {
    if (isNew) {
        const job = "ios"
        // job = 'fe';  //const 变量不能修改 Assignment to constant variable.
        console.log(job) //ios
        const info = {
            top: "123",
            sex: "男",
        }
        info.sex = "女"
        console.log(info) //{ top: '123', sex: '女' }
    }
    const job = "android"
    console.log(job) //android
}
callConst(true)
```

1. var 声明的变量的**作用域是全局或者函数级别的**，而 let 和 const 声明的**变量是块级的**，一个 { } 表示一个块；

2. var 声明的变量可以更新，重新声明；let 声明的变量可以更新但不可以重新声明；**const 声明的变量既不能更新也不能重新声明**；

3. var 和 let 申明的变量可以不初始化，但是**const 声明的变量必须初始化**；

4. var、let、const **申明的变量都会发生变量提升（先使用后定义），var 申明的变量被初始化为 undefined，而 let 和 const 声明的变量不会被初始化，会报错**。

#### JavaScript 中的作用域

作用域：说的通俗点就是**一个变量它能够在那个区域起作用**，如果在这个区域访问外部作用域的变量就会报错。JS 中有 3 种作用域。

-   **全局作用域**：就是在全局都能够访问，在 App 开发中，一个 App 就是一个进程，那么全局作用域就是在这个 App 的任意地方都可以访问某个变量，而且这个变量一直在执行环境中，不会被释放。

*   **函数作用域**：定义在函数体内的变量属于函数作用域，下面代码中的变量 name 属于函数作用域

```javascript
function call() {
    var name = "ch"
}
```

-   **块级作用域**：理解块级作用域要先理解什么是块，块就是两个大括号包起来的内容{}。也就是说只要有两个大括号就属于一个块

```javascript
function call() {
    //块
}
for (let i = 0; i < 1; i++) {
    //块
}
```

1. 变量提升：在代码执行前需要有一个编译阶段，**无论你在那申明的变量都会被提前申明，这样你就可以使用未申明的变量**，这种现象就是变量提升。这里需要强调一点，变量提升相当于把变量的申明放到「本作用域」的顶部，比如在全局作用域申明的变量，它的申明放到了全局作用域的顶部；在函数作用域声明的变量，它的声明放到了函数作用域的顶部，不会放到全局作用域的顶部。

2. 在 JavaScript 中使用 let 和 const 申明的变量会存在一个**暂时性死区的机制**，这种机制只有**变量被申明后才会被解除**。总之使用 let 申明的变量不能在定义之前使用它，这才符合一贯的编码风格。

3. 使用 var 声明的变量会被**挂载到 window 对象上**，而使用 let 和 const 不会。

```javascript
let from = "bj"
console.log(window.from) //undefined
var type = 1
console.log(window.type) //1
```

### JavaScript 内置对象数组

数组 Array 是 JavaScript 内置对象，它其实是一个函数。在 Chrome 开发者工具 Console 中输入 Array，按回车键，得到以下结果：

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYGnd0Fxj6rObsicULviatAPOGfHIIQwXBKxrAkL9Udml7wHUa0seHSLN2RbhbAR8aZRiaEn24cicPYaw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**既然是函数，那么它就有一个原型属性 prototype**，打印一下它的值，发现差不多有 30 多个函数，这些函数将在我们后续开发者扮演着重要的角色：
「温馨提示，如果你不知道某个对象有哪些方法，可以在浏览器的开发者工具的 Console 中输入 xxx.prototype，比如 String.prototype」

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYGnd0Fxj6rObsicULviatAPOt8mISWibzFUJfeSjBesibTrLQ4rNklfuXSWe13E2cToyKuY3Eor4ict7g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

通常创建数组有 2 种方式，<u>**一种是通过数组直接量 [] ，另一种是通过 new Array。**</u>下面是创建数组的两种方式:

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYGnd0Fxj6rObsicULviatAPOTCIoupFRicjjruib42bYPFp3kiaorXQECg8veKiaCc293wJGn1uuJH3rtg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

如何利用原型对象中的 API 对数组进行操作了。一起看看这些 API。

-   **concat，有拼接的意思，把多个数组中的值合并到一起。**

```javascript
let cities = ["shangrao", "guangfeng"]
cities = cities.concat(["xinzhou"], ["wannian"])
console.log(cities) //[ 'shangrao', 'guangfeng', 'xinzhou', 'wannian' ]
```

-   **fill ,给某个区间填充指定的值，这个比较有用，下面给数组中所有元素设置为 1。**

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYGnd0Fxj6rObsicULviatAPOoCMCvdLamPvmrmibjzKCQ6hhaE4APkwVzwGc7eKNltMefEUAryckUSA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

-   **copyWithin: 复制数组中某个区间的数据到指定位置，会修改原数组。array.copyWithin(target：必需。复制到指定目标索引位置。, start：可选。元素复制的起始位置。, end：可选。停止复制的索引位置)：**

```javascript
//复制数组的前面两个元素到第三和第四个位置上：
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"]
console.log(fruits.copyWithin(2, 0, 2)) //[ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'Papaya' ]
```

-   **find，查找第一个符合条件的元素，返回值为元素的值；**

*   **findIndex，查找第一个符合条件的元素，返回值为元素在数组中的索引**；参数是一个函数。

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYGnd0Fxj6rObsicULviatAPOkP44oWiaPD72DrQP1T9ERvDuLalGEtgsdjv6H5HClO4RwoZc8AayaZg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

```javascript
let numbers = [0, 5, 3, 6, 2]
let e = numbers.findIndex(function (e, index, arr) {
    return e > 5
})
console.log(e) //3
```

-   **forEach**(callback(currentValue [, index [, array]])[,thisArg])，**遍历数组，这种遍历不能暂停，只能遍历到结尾自动结束；**

```javascript
let arr = ["apple", "banner", "pear"]
arr.forEach((e) => {
    console.log(e) //apple banner pear
})
```

-   **includes, 数组中是否包含某个数据；**

```javascript
let cities = [1, 2, 3]
console.log(cities.includes(1)) //true
```

**indexOf，某个 item 在数组中的下标，如果下标为 -1 说明数组中不存在这个元素，常用这个判断数组中是否包含某个元素；**

```javascript
let cities = [1, 2, 3]
console.log(cities.indexOf(2)) //1
```

-   **join, 数组中的元素以某个字符串拼接起来；**

```javascript
let cities = [1, 2, 4, 5]
console.log(cities.join(".")) //1.2.4.5
```

-   **lastIndexOf，某个 item 在数组中的下标，如果下标为 -1 说明数组中不存在这个元素，从末尾开始遍历；**

```javascript
let cities = [1, 2, 3, 7]
console.log(cities.lastIndexOf(0)) //-1
```

-   **map，遍历数组中的元素，重新组成一个数组；**

```javascript
const array1 = [1, 3, 5, 7, 9]
const map1 = array1.map((x) => x * 2)
console.log(map1) //[ 2, 6, 10, 14, 18 ]
```

-   **pop 删除数组中最后一个元素，返回值为删除的元素；**

```javascript
const array1 = [1, 3, 5, 7, 9]
console.log(array1.pop()) //9
```

-   **push 在数组末尾插入一个元素，返回值为数组的长度；**

```javascript
const array = [1, 2, 3]
array.push(4, 5)
console.log(array) //[ 1, 2, 3, 4, 5 ]
```

-   **reverse 翻转一个数组；**

```javascript
const arr = [1, 2, 3, 4]
console.log(arr.reverse()) // [ 4, 3, 2, 1 ]
const obj = [{ name: 1 }, { name: 2 }]
console.log(obj.reverse()) //[ { name: 2 }, { name: 1 } ]
```

-   **shift 删除数组中第一个元素，返回值为删除的元素；**

```javascript
const array = [1, 2, 3, 4]
console.log(array.shift()) //1
```

-   **slice(beg, end)，取数组中某个范围内的元素组合成一个新的数组，不会改变原数组；**

```javascript
const nums = ["one", "two", "three", "four"]
console.log(nums.slice(1, 4)) // ['two','three','four']
```

-   **some 查询数组中是否有符合某个条件的元素，比如查看数组是否存在偶数。**

```javascript
const array = [1, 2, 3, 4, 5]
const even = (e) => e % 2 === 0
console.log(array.some(even)) //true
```

-   **splice(start[, deleteCount[, item1[, item2[, ...]]]])，删除或插入元素到指定的位置。在数组第二个位置插入元素 drum，不进行删除。**

```javascript
let myFish = ["one", "two", "three", "four"]
let removed = myFish.splice(2, 0, "drum")
console.log(myFish) //["one", "two", "drum","three", "four"]
```

-   **unshift 从头在数组中插入元素。**

```javascript
let array = [3, 4, 5]
array.unshift(1, 2)
console.log(array) //[ 1, 2, 3, 4, 5]
```

### 用故事说透 JavaScript 中的原型

本故事纯属虚构，旨在搞懂原型。<br>在地球的一角，荒无人烟，就在 2020 年的时候，这里奇迹般地出现了一位神人，此人生来便拥有一身本领，起名为 Object，寓意为创造万物，万物之源。<br>「公众号素燕注」这里的 Object 就是 JavaScript 中的 Object 对象，所有对象都会指向它。<br> 一天，Object 想着自己活在这个地方太孤单，心想：“如果能造一些和我一样的人类该多好，这样他们就可以帮我干活了。他们需要继承我的能力，这样他们可以直接干活，不需要后续培养干活的能力”。<br>Object 身怀绝技，他把自己的能力交给了一个叫 prototype 的家伙管理着。如果想获取自己的能力，直接输入指令 Object.prototype 即可获取到。<br>「公众号素燕注」这里的 prototype 就是函数原型，Object 其实是一个函数。下面这张图是在 Chrome 浏览器 Console 工具中输入 Object.prototype 得到。

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGaCXZYic5LygOZiakpGWr2NnNC0xsIY3Ms6Zx0ys8mr2xhKcHSroUZ6saPzPViaKgyMk6yd2VUQJeqFQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

-   每一个函数都会有一个原型属性 prototype
-   通过 new + [函数] 的方式会创建一个对象，这个函数被称为构造函数，浏览器会给被创建的对象添加一个属性**proto**属性，这个属性指向构造函数的 prototype。
-   通过**proto**属性可以实现 Js 中的继承，不过在 ES6 中可以通过关键字 class 定义类来实现

### 从源码到抽象语法树可视化

JavaScript 代码被执行的时候大致过程如图：
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGbFpLbj7qicdq50aJ9u0yDRTkcDJ9Yp5dHx19x5VHBoTkaUqUkUWx64NlPcAfTyUcOD4olEib22L87A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

其中关键的一个环节是生成抽象语法树（AST）。在词法分析的过程中，JavaScript 引擎把源代码转换成一个个 Token，有人可能就会问什么是 Token。
https://resources.jointjs.com/demos/javascript-ast 使用它可以轻松把 JavaScript 转换成抽象语法树，这有助于分析 JavaScript 代码。

### 字节码与二进制的“样貌”

ByteCode（字节码） 和 Mechine Code（机器码）
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGaI0QhLCEcymhYrNy8wia4iapatkR5tzP473zA9oibXDgFbfOMqwEyD9QFiaMAXRY2hZRXus87RHDAzWg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGbsHeTcsfAZObGfsE64rIJrSlhyOTGmJ6UpCSHTtHts4W3PgRzDAr2bdq61GJW1jkHmfmnOhLtib8Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

V8 是谷歌开源的 JavaScript 引擎，被用于 Chrome 和 Node.js ，主要由上图中的一些「零件」组成，不同「零件」的分工不同，犹如炒菜的时候盘子、锅、勺子、铲子的作用，分工明确。

程序最终会被 CPU 执行，不同架构 CPU 提供的指令是不同的，而我们写的**一套代码需要跑到不同架构的 CPU 上**，这就需要 JavaScript 引擎来做这件事情。最初的时候 V8 直接**通过 AST 生成对应机器码**，后来爆出一堆问题，比如内存占用大、启动时间长等。

为了解决直接生成机器码的缺点，引入了字节码（图中的 ByteCode）。当别人问你什么是字节码的时候，你脑海中需要捕捉到一个“面貌”。从图中可以看到 ByteCode 是通过 Ignition 生成。

**字节码是机器码的（二进制）一种抽象**，你可以把它理解为一种到机器码的中间码。由字节码转换成机器码非常容易。我们看一段代码被转换成字节码的“面貌”（注：只有函数被调用时才会生成字节码，下面的代码如果不调用 lefex 函数，将不会生成字节码）：

```javascript
function lefex(name, age) {
    var lef_name = name
    if (lef_name) {
        lef_name = "suyan work again"
    }
    let lef_age = age
}
lefex()
```

通过 node 添加参数 --print-bytecode 生成字节码：node --print-bytecode bcode2.js > ./test.txt，生成的字节码如下，是不是有一种汇编的感觉：
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGaI0QhLCEcymhYrNy8wia4iapZ0gQHRdNmXXSZZC79pLvUe8zz4ia8JkNyIY8jsaBv8yOoobCpkIzWJQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

那机器码又长什么样子呢？通过 node 加参数 --print-code 运行 JavaScript 文件：
node --print-code bcode2.js > ./tcode.js

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGbsHeTcsfAZObGfsE64rIJrYmm8a08LzS6abeO8oXEXg0SIgB8VAScyVnzgKVUM3OmGA2Y3d8BTeg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

### 执行上下文与调用栈

当 JavaScript 代码被执行的时候，首先会创建一个「全局执行上下文」，你可以把执行上下文理解为一段代码要执行时需要准备的环境，它主要包含**变量环境、词法环境、this 等**。

代码执行时需要经历两个阶段：**编译、执行**。编译完成后需要创建全局执行上下文。var 定义的变量和函数声明会被保存到变量环境中，let、const 定义的变量会保存到词法环境中。**变量提升的原理就是把变量的声明提前注入到执行上下文中**

```javascript
function log(){
    console.log(name)
}
function welcome(){
    var name = 'world',
    log()
}
var name = 'hello',
welcome() //hello
```

上面这段代码会存在一个全局作用域，log 函数作用域和 welcome 函数作用域，JavaScript 代码执行的时候，会从当前作用域查找变量，如果未找到会到它的外层作用域中查找。log 函数的外层作用域是全局作用域，故 log 函数的打印值为全局作用域定义的变量。打印结果为 "hello"。
当 log 和 welcome 函数执行完后，它们的**执行上下文会依次出栈，并释放它使用的内存空间**。全局执行上下文的内存空间会随着页面的生命周期一直保留着。

### 看透变量提升与块级作用域实现的原理

JavaScript 是如何实现变量提升的，ES6 中又是如何通过 let、const 实现块级作用域的？

在 JavaScript 主要有两种情况会创建执行上下文，一种是全局 JavaScript 代码，另一种是函数。而「变量提升」和「块级作用域」主要依托于执行上下文。

```javascript
function look() {
    var name = "素燕"
    let age = 19
    if (age > 18) {
        let money = 0
        var from = "home"
        if (money <= 0) {
            money += 10
            let isNeedMore = money <= 10
            if (isNeedMore) {
                money += 10
                let isEnd = money > 10
                var canGo = isEnd
            }
            isNeedMore = false
        }
        money = 0
    } else {
        let needAge = 18 - age
        var add = age + needAge
    }
}
look()
```

1. 创建全局执行上下文并压入调用栈，全局只定义了一个函数 look；
   ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGb6J47fAHniam3hoj8ygvRKME34RG4tic4tUIowfAfnGErqOzL1nHQ1ZCjyictgjFGJVSA9mFWyZpBDQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
2. 创建函数 look 的执行上下文；

    第一步：把通过 var 申明的变量加入到变量环境中，并初始化为 undefined。使用 var 声明的变量有 name、from、canGo、addd。把 let 声明的变量加入到词法环境中，let 申明的变量属于块级作用域，此时在当前块中只有 age。在词法环境中，**利用栈来管理不同的块级作用域，当有新的块级作用域时会入栈，块级作用域中的代码执行完后会进行出栈操作。**
    ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGb6J47fAHniam3hoj8ygvRKMLBEperTIicVPxOVWt0pQic5nTHqyiaJBga7iaJp02W2cic2nxJ05EaeINicw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    此时的调用栈为：
    ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGb6J47fAHniam3hoj8ygvRKMJ0XCLbY1ict9eRUjj5ibalnGa1cR0hJMOyP6Id3crtAwBPzatDlicMtBA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    第二步：当执行到第 5 句的时候，此时出现了一个新的块。创建一个新的块。此时只有一个变量 money，加入词法环境中。需要强调一点，块级作用域的变量是在代码块要执行时才会被加入到词法环境中，块与块之间相互独立，通过栈来管理同一个执行上下文的块。

    ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGb6J47fAHniam3hoj8ygvRKMR3zdgK2n0iaVExNic3ugiaNfx49icncic4sBYibyF9uyDFtcNZ7BhcW2pUCw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    第三步，执行到第 8 句的时候，又遇到一个块，此时有一个变量 isNeedMore，加入到词法环境中。
    ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGb6J47fAHniam3hoj8ygvRKM1omVJcdzRD4emsqvEw1OUUJicj12dgXG4ib8bIFP4SZad8fX5iajwEHhA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    第四步，执行到第 11 句的时候，又遇到一个块，此时有一个变量 isEnd，加入到词法环境中。
    ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGb6J47fAHniam3hoj8ygvRKMIGxubkbmfniaEEvMCqThJqVLiaFNL0AGUDatwl9sriaib7fSR6AickrqmKQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    第五步，这是函数 look 执行上下文中最后一个块。当执行到第 15 句的时候，词法环境中最顶端的块将被出栈。
    ![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGb6J47fAHniam3hoj8ygvRKMMNVPhr9PuNkGlMnKnIJXUPczmoial9Q6iccdoQZJbicgxwdRjvppLP44Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
    第六步，块级作用域中的块依次出栈。当 look 函数执行完成后，look 执行上下文从调用栈中出栈。最终调用栈只剩下了全局执行上下文。

    本文结合执行上下文分析了变量提升与块级作用域的实现，**变量提升其实就是在编译阶段把 var 声明的变量注入到变量环境中，而块级作用域的实现其实是通过不同的块来保存块中使用 let、const 声明的变量，通过栈的机制来处理不同的块**。执行上下文对理解 this，闭包有很大的作用。

### JS 学习资源

书籍：《JavaScript 高级程序设计（第三版）》 ， 《JavaScript 指南 原书第七版》

课程：李兵 【浏览器工作原理与实践】 [链接一](https://blog.poetries.top/browser-working-principle/) ， 周爱民 【JavaScript 核心原理解析】

### 让 JS 文件代码相互独立

在 JS 的世界，函数是一等公民，在没有 let,const 的时候，JS 中申明的变量只能是全局作用域或者函数作用域，根本没有块级作用域。这样很难避免变量**命名冲突**。比如在一个很大的项目中张三创建了一个 js 文件 block1.js，定义了一个变量 name：

```javascript
var name = "hello"
```

李四创建了一个 js 文件 block2.js，同样也定义了变量 name：

```javascript
var name = "world"
```

在 html 文件中引用，name 的值是什么呢？

```html
<body>
    <script src="./block1.js"></script>
    <script src="./block2.js"></script>
    <script>
        console.log(name)
    </script>
</body>
```

name 的值是“前端小课”，变量 name 在彼此不知情的情况下被修改了，这种开发体验非常糟糕。**程序开发的最佳体验是保证结果的唯一性，也就是说程序在同一条件下结果只有一个。**

解决这个问题只要为张三和李四提供一个「独立的环境」，保证自己声明的变量在自己毫不知情的情况下不会被修改。可以使用「函数」来解决这个问题。

```javascript
//文件 block1.js:
function zhangsan(){
    var name = 'zhangsan',
    console.log(name)
}
zhangsan()

//文件 block2.js：
function lisi(){
    var name = 'lisi';
    console.log(name)
}
lisi()
```

这样把两个文件中的变量都**隔离到一个独立的函数中**，但是如果函数名重复呢？又回到了前面提到的问题。还有一种更好的方式。

```javascript
//文件 block1.js:
;(function () {
    var name = "zhangsan"
    console.log(name)
})()

// 文件 block2.js:
;(function () {
    var name = "lisi"
    console.log(name)
})()
```

JavaScript 可以省略分号，比如下面的代码是无法执行的：

```javascript
var name = "suyan"(function () {
    console.log("call self")
})()
```

所以通常写成：也就是所谓的常见的 JavaScript 代码隔离方法

```javascript
;(function () {
    console.log("call self")
})
```

```javascript
void function () {
    //void运算符就是为了保证返回值是undefined
    console.log("call self")
}
```

### 带有执行环境的函数 - 闭包

「闭包的出现能给编程带来哪些便捷呢？」，这是我们学习闭包首先需要面对的问题，也就是说闭包出现的背景是什么。

```javascript
//函数是无状态的，比如下面的函数：
function call() {
    var name = "suyan"
    var age = 20
    console.log(name + " age is " + age)
}
call()
```

当 call 函数执行完后 name 和 age 占用的内存空间将会被释放，在函数外部无法访问变量 name 和 age 。如果想要在函数 call 外访问变量 age，且函数执行完后保留 age 的值，咋么办？想要解决这个问题，可以使用闭包（colsure）

```javascript
function call() {
    var name = "hello"
    var age = 20
    console.log(name + "age is " + age)
    return {
        getAge: function () {
            return age
        },
        setAge: function (newValue) {
            age = newValue
        },
    }
}
const ageObj = call()
console.log(ageObj.getAge()) //20
//修改 age 的值为30
ageObj.setAge(30)
console.log(ageObj.getAge()) // 30
```

通过 Chrome 调试工具可以查看 call 这个函数捕获的闭包中的变量：
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZeGGUkm4ZhlRcFKiaMRic8PWoCF6tLaENPs3aI9qpUwNwWkEiciaIQrHpibgbk308G9PQlPOo47ibIbWGQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZeGGUkm4ZhlRcFKiaMRic8PWwvRKVQDZLKjG3MBhaIUaXG9mtfWQhxb2UVvVibRE8qdccUrsW749Bxw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**闭包一大重要特征就是可以「保存函数执行环境中的变量」，使其延迟释放。**

```javascript
function createCounter() {
    let counter = 0
    const myFunction = function () {
        counter = counter + 1
        return counter
    }
    return myFunction
}
// increment 是一个函数
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log(c1, c2, c3) // 1 2 3
```

increment 这个函数使用了 createCounter 中的变量 counter，每次调用 increment 这个函数，**变量 counter 一直保存在执行环境中，并不会被释放**。再创建一个 increment2，这是 c11 的值为 1。可见 increment 和 increment2 使用的执行环境互不影响。

```javascript
const increment2 = createCounter()
const c11 = increment2()
console.log(c11) // 1
```

**闭包使得一个函数可以访问另一个函数作用域中的变量。** 一道关于闭包的面试题：

```javascript
;(function () {
    var numbers = []
    for (var i = 0; i < 4; i++) {
        //假设这里是let声明的i,那就是[0,1,2,3]
        numbers.push(function () {
            return i
        })
    }
    //在函数中通过 var 声明的变量 i 属于函数作用域
    console.log(i) //  i 的值是 4
    var result = numbers.map(function (e) {
        //numbers 中保存为 4 个函数，当这些函数被执行的时候会使用当前函数执行环境中的变量 i ,此时值为4。所以result都是4。
        return e()
    })
    console.log(result) // [4,4,4,4]
})()
```

最终打印的值是 4、4、4、4。在函数中通过 var 声明的变量 i 属于函数作用域，当代码执行到第 8 行后， i 的值是 4。此时 numbers 中保存为 4 个函数，当这些函数被执行的时候会使用当前函数执行环境中的变量 i，此时值为 4，故最终 result 中的值都是 4。

**总之，闭包可以延长变量的释放，你可以把闭包看做是带有执行环境的函数。**

### 调试 JavaScript 少不了这几个技巧

-   自动断点

    有时候在执行 JavaScript 代码的时候，可能来不及设置断点，代码就被执行了，其实可以通过在代码中写上 debugger（代码中第 8 行），让代码执行到 debugger 的位置自动暂停。

```javascript
function a() {
    console.log("enter a")
    b()
}
function b() {
    console.log("enter b")
    debugger
    c()
}
function c() {
    console.log("enter c")
}
a()
```

-   手动断点

    断点是程序员调试代码时非常好用的利器，通过断点调试可以看到当前执行环境中各个变量的值，以及调用堆栈，通过单步执行来查看各个步骤下代码的运行状态。如图所示（Chrome 调试面板 -> sources -> 点击代码行号即可添加断点）：

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZeGGUkm4ZhlRcFKiaMRic8PWdtSIKsk0Z5JJtyAqtQZjicWticuP6ATfvdrTvvIbUrX8KoCrXVNNVpwQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

-   打印调用堆栈

    可以通过调试面板查看当前代码的调用堆栈，也可以通过 console.trace() 打印函数调用堆栈

```javascript
function a() {
    console.log("enter a")
    b()
}
function b() {
    console.log("enter b")
    c()
}
function c() {
    console.log("enter c")
    console.trace()
}
a()
```

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZeGGUkm4ZhlRcFKiaMRic8PWtSdHoe5Lg2dWLyu9mmcZdleGsCyww1t6ibapupxKP67fHoCvw7owqng/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

-   以表格的方式打印对象

    下面是一个对象，可以通过 console.table( obj ) 来打印这个对象。

```javascript
let pkg = {
    name: "mini_tools",
    version: "1.0.0",
    description: "",
    main: "index.js",
    dependencies: {
        jquery: "^1.12.4",
    },
    devDependencies: {},
    scripts: {
        test: 'echo "Error: no test specified" && exit 1',
    },
    author: "",
    license: "ISC",
}
console.table(pkg)
```

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZeGGUkm4ZhlRcFKiaMRic8PWM7rVJTLWsWDOKJqpsEcZsXgBStQYqr0PKk8GfibEzpsiaOe4tGXS0krA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

### 连接你、我、他 —— this

```javascript
let from = "WuHan"

var obj = {
    from: "BeiJing",
    logFrom: function () {
        //使用的是全局from
        console.log(from)
    },
}

let logFrom = obj.logFrom
logFrom() // wuhan
obj.logFrom() //wuhan
```

打印结果都是 WuHan，这个例子迷惑的地方主要是下面这两个 from 的定义，第一个属于全局变量，第二个属于局部变量，logFrom 函数使用的是全局的 from 还是 obj 对象内部的 from。答案是「使用全局的 from」。

**记住一句话「this 始终代表的是一个对象」。**

当把上面的代码换成（ 把打印语句 console.log(from) 换成 console.log(this.from) ）：

```javascript
var obj = {
    from: "BeiJing",
    logFrom: function () {
        console.log(this.from)
    },
}

let logFrom = obj.logFrom
logFrom() //执行结果是 undefined
obj.logFrom() //执行结果是 BeiJing
```

**其实 this 就是被「动态」绑定到执行上下文中的一个属性**，也就是说当构建一个执行上下文的时候就会绑定一个 this 属性。主要有两种执行上下文：**全局执行上下文和函数执行上下文，那么就有两种 this，一种全局执行上下文中的 this，另一种是函数执行上下文中的 this。**

1. 当在全局执行一个函数的时候（通过括号的方式执行），**this 指向全局对象**，在浏览器中，如果在严格模式下 this 为 undefined，**在非严格模式下，this 为 window。**比如 let logFrom = obj.logFrom，此时变量 logFrom 属于全局变量，通过全局调用一个函数，this 为 window（这里属于非严格模式），window 没有属性 from，故结果为 undefined。
2. **当通过某个对象调用一个方法的时候，this 为当前的对象**。比如通过 obj 调用方法 logFrom，this 为 obj，所以打印结果为 BeiJing。

使用第 1、2 这两条可以搞定大多数 this 的问题，但是有一种情况需要留意。比如下面的代码：

```javascript
let lefex = {
    name: "suyan",
    age: 0,
    addAge: function () {
        console.log("outer this = ", this)
        this.age += 2
        setTimeout(function () {
            console.log("inner this = ", this)
            this.age += 1
        }, 100)
    },
}
lefex.addAge()
```

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGZx6R1diap91WvViasJRpqgGANDoQYicoPWjr0KiaFGfXsnlcfqXQ9rAQa7O4D02YEFTvw2LyP01U88Uw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
结果发现两个 this 并不一样，**内部函数并不会继承外部函数的 this**。为了解决这个问题

-   有了 **let that = this**这样丑陋的代码

```javascript
let lefex = {
    name: 'suyan',
    age: 0,
    addAge: function () {
        console.log('outer this = ', this); //{ name: 'suyan', age: 0, addAge: [Function: addAge] }
        this.age += 2;
        let that = this;
        setTimeout(function () {
            console.log('inner this = ', that); // inner this =  { name: 'suyan', age: 2, addAge: [Function: addAge] }
        }, 100)
    }
}
lefex.addAge()e()
```

-   也可以使用**箭头函数**解决这个问题

```javascript
let lefex = {
    name: "suyan",
    age: 0,
    addAge: function () {
        console.log("outer this = ", this) //{ name: 'suyan', age: 0, addAge: [Function: addAge] }
        this.age += 2
        setTimeout(() => {
            console.log("inner this = ", this) // inner this =  { name: 'suyan', age: 2, addAge: [Function: addAge] }
        }, 100)
    },
}
lefex.addAge()
```

构造函数也使用了 this。this 指向就是当前创建的对象，下面代码中 this 指的是 suyan。

```javascript
function Person(name) {
    this.name = name
    console.log(this) //Person { name: 'suyan' }
}
let suyan = new Person("suyan")
```

### && ，|| 超越了我的认知

```javascript
const person = {
    name: "one",
    getName() {
        return this.name
    },
}
// function isOne () {
//     return person.name === 'one' && person.getName
// }

function isOne() {
    return !!(person.name === "one" && person.getName)
}

let isTrue = isOne()
console.log(isTrue) //结果是一个函数： [Function: getName]

// 可以这么改造
function isOne() {
    return !!(person.name === "one" && person.getName) // 改造之后的值就是true
}
```

逻辑运算符如果使用的都是布尔值，则结果也是布尔值。然而，在 && 和 || 中， 当操作数是非布尔值的时候结果可能是非布尔值。

-   && 运算符从左到右进行计算，如果为真，继续往后走，直到遇到为 false 的，或者到了最后一个操作数。如果操作数是布尔值结果返回布尔值，如果操作数是非布尔值结果返回非布尔值。

```javascript
const a = 10
const b = -5
const c = 1
console.log(a && b) // -5
console.log(a > 0 && b) // -5
console.log(a < 0 && b) // false
console.log(a && b < 0) // true
console.log(a && b > 0) // false
console.log(a > 0 && b < 0) // true
console.log(a && b && c) // 1
```

-   || 运算符，只要遇到一个真值便停止计算，结果的规则和 && 运算符一致。

```javascript
console.log(a || b) // 10
console.log(a > 0 || b) // true
console.log(a < 0 || b) // -5
console.log(a || b < 0) // 10
console.log(a || b > 0) // 10
console.log(a > 0 || b < 0) // true
console.log(a || b || c) // 10
```

1. 可以被转换成 false 的值：null、NaN、0、空字符串 "", '',``、undefined。
2. && 的优先级大于 || 的优先级。

```javascript
true || (false && false) // returns true, because && is executed first
;(true || false) && false // returns false, because operator precedence cannot apply
```

3. ！和!! 操作符返回的值永远是布尔值，返回值永远是布尔值：

```javascript
console.log(!!{}) // true
console.log(!!true) // true
console.log(!!10) // true
console.log(!!-2) // true
console.log(!!"") // false
```

```javascript
//假如有个 Label 显示用户的名称，显示规则为：默认值是前端小课，如果用户定义了别名就用别名，如果用户定义了真实的名字就用真实的名字，优先级为真实名字 > 昵称 > 默认名字。
function oneFn() {
    let defaultName = "默认"
    let trueName = "真名"
    let falsetName = "别名"
    return trueName || falsetName || defaultName
}
```

### JS 中如何实现策略模式

概念：策略模式的定义是:定义一系列的算法，把它们一个个封装起来，并且使它们可以**相互替换。**

策略模式指的是定义一系列的算法，把它们一个个封装起来。将不变的部分和变化的部分隔开是每个设计模式的主题，策略模式也不例外，**策略模式的目的就是将算法的使用与算法的实现分离开来。**

一个基于策略模式的程序至少由两部分组成。第一个部分是一组**策略类**，策略类封装了具体 的算法，并负责具体的计算过程。 第二个部分是**环境类 Context**，Context 接受客户的请求，随后 把请求委托给某一个策略类。要做到这点，说明 Context 中要维持对某个策略对象的引用。

策略模式的实现并不复杂，关键是如何从策略模式的实现背后，找到封装变化、委托和多态性这些思想的价值。

优点：

-   策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。
-   策略模式提供了对开放—封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它们易于切换，易于理解，易于扩展。
-   策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作。
-   在策略模式中利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻便的替代方案。

JavaScript 版本的策略模式

```javascript
var strategies = {
    S: function (salary) {
        return salary * 4
    },
    A: function (salary) {
        return salary * 3
    },
    B: function (salary) {
        return salary * 2
    },
}
var calculaBonus = function (level, salary) {
    return strategies[level](salary)
}
console.log(calculaBonus("S", 100)) // 200
console.log(calculaBonus("A", 100)) // 200
console.log(calculaBonus("B", 100)) // 200
```

```javascript
// ES6类实现
var performanceS = function () {}
performanceS.prototype.calculate = function (salary) {
    return salary * 4
}
var performanceA = function () {}
performanceA.prototype.calculate = function (salary) {
    return salary * 3
}
var performanceB = function () {}
performanceB.prototype.calculate = function (salary) {
    return salary * 2
}

//接下来定义奖金类Bonus：
class Bonus {
    constructor() {
        this.salary = null // 原始工资
        this.strategy = null // 绩效等级对应的策略对象
    }
    setSalary(salary) {
        this.salary = salary // 设置员工的原始工资
    }
    setStrategy(strategy) {
        this.strategy = strategy // 设置员工绩效等级对应的策略对象
    }
    getBonus() {
        // 取得奖金数额
        return this.strategy.calculate(this.salary) // 把计算奖金的操作委托给对应的策略对象
    }
}

var bonus = new Bonus()
bonus.setSalary(10000)

bonus.setStrategy(new performanceS()) // 设置策略对象
console.log(bonus.getBonus()) // 输出：40000
bonus.setStrategy(new performanceA()) // 设置策略对象
console.log(bonus.getBonus()) // 输出：30000
```

### 对象的 key 原来可以使用变量

实际场景：比如有 3 个 VIP 会员，每一种会员有与之对应的一个会员 id，10 表示年会员，11 表示 3 个月会员，12 表示 6 个月会员。由于代码中多处使用到了会员 id，如果在代码使用数字做不同会员的业务处理，这样做有几个弊端：

1、数字不太直观，比如看到 10 你不会立马想到是年会员的 id，如果使用变量名 yearVipId 可直接知道是年会员 id；

2、一旦会员 id 修改后，很多业务逻辑多需要查看，确保万无一失。

```javascript
// 假如我们定义了以下常量，代码中凡是涉及到会员 ID 的时候都使用变量名来表示：
// 年会员
const YEAR_VIP_ID = 10
// 3 个月会员
const THREE_MONTH_VIP_ID = 11
// 6 个月会员
const SIX_MONTH_VIP_ID = 12

// 有一个业务需求需要根据不同的商品 ID，给用户提示不同的描述信息，为了避免写太多的 if 判断，我设计了一个对象：
const VIP_ID_OBJ = {
    YEAR_VIP_ID: "买1年送2个月",
    THREE_MONTH_VIP_ID: "买3个月送1个月",
    SIX_MONTH_VIP_ID: "买半年送1瓶茅台",
}
// 这样可以通过会员 ID 拿到对应的描述：
var vipDes = VIP_ID_OBJ[YEAR_VIP_ID]
console.log(vipDes) // undefined
//但是结果取到的 vipDes 是 undefined，这让我很诧异，仔细看了下代码，原来是 key 使用了 YEAR_VIP_ID、THREE_MONTH_VIP_ID、SIX_MONTH_VIP_ID ，它们会被转换成字符串，而不是变量的值。
```

其实 key 可以是一个变量或者一个表达式，通过 [ 变量或表达式 ] 包起来。

```javascript
const VIP_ID_OBJ = {
    ["YEAR_VIP_ID"]: "买1年送2个月",
    ["THREE_MONTH_VIP_ID"]: "买3个月送1个月",
    ["SIX_MONTH_VIP_ID"]: "买半年送1瓶茅台",
}
var vipDes = VIP_ID_OBJ["YEAR_VIP_ID"]
console.log(vipDes) // 买1年送2个月
```

### 2 道 this 面试题

```javascript
// 1. 通过 tempSuyanF() 和 obj.suyanF() 调用函数 suyan，最终 a 的结果是啥？
{
    function suyan() {
        console.log(this.a) // ?
    }
    var obj = {
        a: 2,
        suyanF: suyan,
    }
    var tempSuyanF = obj.suyanF
    var a = "global a"

    // 第 1.1 题：suyan 函数中 a 的值是啥
    tempSuyanF()
    // 第 1.2 题：suyan 函数中 a 的值是啥
    obj.suyanF()
}
```

解析：var tempSuyanF = obj.suyanF; 这是一次赋值操作，把 obj 中的函数 suyanF 赋值给 tempSuyanF，原先绑定到 obj 中的 this 会丢失。当调用 tempSuyanF 函数时，**this 绑定到了 window 对象上**（因为为非严格模式），通过 var 声明的变量 a 会被添加到 window 上。故输出结果为 global a。当直接调用 obj.suyanF() 时，此时 this 绑定到了 obj 这个对象上，obj 中定义了变量 a，故结果为 2。

```javascript
//通过 doSuyna(obj.suyanF)  和 obj.suyanF() 调用函数 suyan，最终 a 的结果是啥？
{
    function suyan() {
        console.log(this.a) // ?
    }
    function doSuyna(fn) {
        fn()
    }
    var obj = {
        a: 2,
        suyanF: suyan,
    }
    var a = "global a"
    // 第 2.1 题：suyan 函数中 a 的值是啥
    doSuyna(obj.suyanF)
    // 第 2.2 题：suyan 函数中 a 的值是啥
    obj.suyanF()
}
```

解析：第 1 题其实一样，主要考察函数在参数传递的过程中**有一次隐式的变量赋值**，执行 doSuyna(obj.suyanF); 时，相当于 fn = obj.suyanF，此时 this 也丢失，故结果是 global a，obj.suyanF(); 和第 1 题一样，结果也是 2。

### 被我忽略的 6 个 JS 开发小技巧

1.  typeof 误解

    声明一个变量 var a，typeof a 常被误解是求变量 a 的类型，其实是求变量 a 中「当前值的类型」。如图所示，当 a 的值发生改变时，typeof a 的结果也在发生变化。

```javascript
var a
console.log(typeof a) // undefined
a = "hello"
console.log(typeof a) // string
a = 42
console.log(typeof a) //number
a = true
console.log(typeof a) //boolean
a = null
console.log(typeof a) // object
a = undefined
console.log(typeof a) //undefined
a = { b: "c" }
console.log(typeof a) //object
```

2. 真假难辨

    js 中的「假值」包含 ""、0、-0、NaN,、null、undefined、false，记住空字符串也是「假值」，而空数组 [] 和空对象 {} 却不是假值。通过下面代码可以验证一下：

```javascript
if (!"" && !0 && !-0 && !NaN && !null && !undefined && !false) {
    console.log("我是假值")
}
if ({} && []) {
    console.log("我是真值")
}
```

3. == 与 ===

    结果是 a == c，看到这个结果我难以置信。== 和 === 的区别在于，== 检查「值相等」，而 === 检查「值和类型」相等。但这么说并不精确。正确的说法是，== 检查的是允许类型转换的情况下值的相等性，而 === 检查不允许类型转换的情况下值的相等性；因此，=== 经常被称为“严格相等”。

```javascript
let a = ["one", "two"]
let b = "one,two"
if (a == b) {
    console.log("a == b") //打印此行 == 检查的是允许类型转换的情况下值的相等性
} else if (a === b) {
    console.log("a === b")
} else {
    console.log("!=")
}
```

4. 类型之间比较

    结果打印的是”我该咋办“。原因是这样的， b 在 < 和 > 比较过程中，b 被转换成了无效数字 NaN，「规范设定 NaN 即不大于也不小于任何值」。== 比较结果为假是因为无论 42 == NaN 还是 "42" == "suyan" 都不可能为真。

```javascript
let a = 41
let b = "suyan"
if (a > b) {
    console.log("a>b")
} else if (a < b) {
    console.log("a<b")
} else if (a == b) {
    console.log("a==b")
} else {
    console.log("我该咋办")
}
```

5. 自己实现一个 isNaN 函数

    这里利用了 NaN 值的一个特性，即 NaN 是整个语言中唯一和自身不相等的值。因此，NaN 是使得 x != x 为真的唯一值。

```javascript
if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
        return x !== x
    }
}
```

6. IIFE [JS 的 IIFE](https://www.cnblogs.com/yiven/p/8462666.html)

    意为立即调用的函数表达式，也就是说，声明函数的同时立即调用这个函数。

```javascript
//不采用IIFE时的函数声明和函数调用：
function foo() {
    var a = 10
    console.log(a)
}
foo()

//IIFE形式的函数调用：
;(function () {
    var b = 9
    console.log(b)
})()
```

函数的声明和 IIFE 的区别在于，在函数的声明中，我们首先看到的是 function 关键字，而 IIFE 我们首先看到的是左边的（。也就是说，**使用一对（）将函数的声明括起来，使得 JS 编译器不再认为这是一个函数声明，而是一个 IIFE，即需要立刻执行声明的函数。**
两者达到的目的是相同的，都是声明了一个函数 foo 并且随后调用函数 foo。

#### 为什么需要 IIFE？

如果只是为了立即执行一个函数，显然 IIFE 所带来的好处有限。实际上，IIFE 的出现是为了弥补 JS 在**scope 方面的缺陷**：JS 只有全局作用域（global scope）、函数作用域（function scope），从 ES6 开始才有块级作用域（block scope）。对比现在流行的其他面向对象的语言可以看出，JS 在访问控制这方面是多么的脆弱！那么如何实现作用域的隔离呢？在 JS 中，只有 function，只有 function，**只有 function 才能实现作用域隔离**，因此如果要将一段代码中的变量、函数等的定义隔离出来，只能将这段代码封装到一个函数中。

在我们通常的理解中，将代码封装到函数中的目的是为了复用。在 JS 中，当然声明函数的目的在大多数情况下也是为了复用，但是 JS 迫于作用域控制手段的贫乏，我们也经常看到只使用一次的函数：这通常的目的是为了隔离作用域了！既然只使用一次，那么立即执行好了！既然只使用一次，函数的名字也省掉了！这就是 IIFE 的由来。

### 闭包

```javascript
function makeAdder(x) {
    let temp = x
    function add(y) {
        return y + temp
    }
    return add
}
let plusOne = makeAdder(1)
let plusTwo = makeAdder(2)
console.log(plusOne(2))
console.log(plusOne(5))
console.log(plusTwo(2))
console.log(plusTwo(5))
```

解析：makeAdder 函数返回一个函数 add，add 引用了变量 temp。当执行 plusOne(2) 和 plusOne(5) 的时候，发现变量 temp 仍然能够被访问到。同理 plusTwo(2) 和 plusTwo(5) 也能够访问变量 temp。就好像 makeAdder 这个函数拥有记忆功能，可以记住执行时的参数 x。

其实就是用到了闭包（colsure） 函数 add 可以访问函数外的变量 temp，能够访问的变量都有一个特征，这些变量在另外一个函数中，也就是说存在嵌套函数，内部函数可以访问外部函数词法环境内所有变量。

```javascript
function hello(who) {
    let welcome = "hi:" + who + "欢迎"
    let welcomeFun = function () {
        console.log(welcome) // hi:kobe欢迎
    }
    welcomeFun()
}
hello("kobe")
```

解析：通过 Chrome 浏览器调试可以看出，内部函数 welcomeFun 访问了外部函数 hello 的变量 welcome，当函数 welcomeFun 执行的时候，会产生一个短暂性的闭包，因为 welcomeFun 函数在 hello 函数内部立即执行了，当 hello 函数调用结束后这个闭包就被释放了。

> 闭包是当一个函数即使脱离了词法作用域，仍然能够访问它所在词法作用域。

经典面试题

```javascript
for (var i = 0; i < 4; i++) {
    let timer = function () {
        console.log(i)
    }
    setTimeout(timer, i * 1000)
}
```

解析：每隔 1 秒输出一个 4 var 定义的变量是函数作用域，或者全局作用域，此处只定义了一个 i，timer 函数中使用了 i 的引用，当 for 循环结束后，timer 会被调用，此时 i 为 4。

假设想要变成 0，1，2，3

1.  ES6 以后可以通过 let 声明块级作用域的变量。把 var 改成 let，在 for 循环中，每次声明一个独立的变量 i。

```javascript
for (let i = 0; i < 4; i++) {
    let timer = function () {
        console.log(i)
    }
    setTimeout(timer, i * 1000)
}
```

2. 因为在自执行函数中使用的还是变量 i，改进如下

```javascript
for (var i = 0; i < 4; i++) {
    ;(function (j) {
        let timer = function () {
            console.log(j)
        }
        setTimeout(timer, j * 1000)
    })(i)
}
```

[《你不知道的 JS》](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
