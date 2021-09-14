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
