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
