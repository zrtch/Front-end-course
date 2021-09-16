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
