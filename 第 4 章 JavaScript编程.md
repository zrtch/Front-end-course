### 让 JavaScript 跑起来+函数

JavaScript 既可以在浏览器中执行，也可以在服务端执行，还可以在移动 App 中执行，这一切其实归功于 JavaScript 引擎，比如 V8、JavaScriptCore。V8 引擎被应用于谷歌浏览器 Chrome 和 Node.js 。V8 很牛逼，是一个开源项目，**使用 C++ 实现了 JavaScript 和 WebAssembly**，应用于 Windows、macOS、Linux 系统，Chrome 和 Node.js 都是采用它实现的。

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
通过 new 来调用函数，这个函数便成为了构造函数，并没有特定的方法来定义一个构造函数。
通过构造函数创建对象也有它的缺点，在每个 person 下都存在一个 welcome 函数。

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

> 1.var 声明的变量的**作用域是全局或者函数级别的**，而 let 和 const 声明的**变量是块级的**，一个 { } 表示一个块；

> 2.var 声明的变量可以更新，重新声明；let 声明的变量可以更新但不可以重新声明；**const 声明的变量既不能更新也不能重新声明**；

> 3.var 和 let 申明的变量可以不初始化，但是**const 声明的变量必须初始化**；

> 4.var、let、const **申明的变量都会发生变量提升（先使用后定义），var 申明的变量被初始化为 undefined，而 let 和 const 声明的变量不会被初始化，会报错**。

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

![p](https://mmbiz.qpic.cn/mmbiz_png/dZjzL3cZLGYGnd0Fxj6rObsicULviatAPOicukRtjGTDPIP2zKhv5O5Yn5fmU3Kvk2TWSsqxg5PQ1vicRjKJNArNng/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

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
const array = [1, 2, 3]
console.log(array.reverse()) //[3,2,1]
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
let array = ["1", "3", "4"]
let removed = array.splice(1, 0, "2")
console.log(array) //[ '1', '2', '3', '4' ]
console.log(removed) //[] no elements removed
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

-   Object 决定先造一批人类，起名为 Person。说着，他抬起手指在空中写下：
