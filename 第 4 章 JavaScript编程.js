let name = 'zrt'
console.log(name);
//定义一个函数，并把这个函数赋值给变量call
let call = function () {
    console.log('call fun:', name); //call fun: zrt
}
//调用函数
call()

let sub = function (a, b) {
    return a - b
}
console.log(sub); //[Function: sub]

//函数有一个内部参数 arguments，它保存了函数调用时的所有参数，它不是一个数组。
function kill (a, b) {
    console.log(arguments); //[Arguments] { '0': 3, '1': 2 }
    return a - b
}
kill(3, 2)

let person = new Object()
person.name = "cherry"
person.age = 18

person.welcome = function () {
    console.log('he name is' + this.name, 'and he age is ' + this.age);//he name ischerry and he age is 18
}
person.welcome()

//通过对象直接量的方式创建
let person2 = {
    name: "cherry",
    age: 16,
    welcome: function () {
        console.log('he name is ' + this.name, 'and he age is ' + this.age);
    }
}
person2.welcome()

let animal = {
    _name: "animal"
}

Object.defineProperty(animal, 'name', {
    configurable: true,
    enumerable: true,
    get () {
        return this.__name
    },
    set (nV) {
        this._name = nV
    }
})

// 基于构造函数来创建对象
function Person (name, age) {
    this.name = name
    this.age = age
    this.welcome = function () {
        console.log('he name is ' + this.name, 'and he age is ' + this.age);
    }
}
// 创建对象的时候可以通过 new 来创建对象
let person4 = new Person('ch', 24)
person4.welcome() //he name is ch and he age is 24

let person5 = new Person('chh', 25)
person5.welcome() //he name is chh and he age is 25


var name = 'cherry'
function callVal (isNew) {
    if (isNew) {
        var age = 20;
        var age = 24
    }
    // 可以正常访问 if {} 块级作用域中定义的 age 变量
    // 因为是函数作用域
    console.log(age);
}
callVal(true)
console.log(age); // Uncaught ReferenceError: age is not defined
console.log(name);

var name = 'left' //name还可以继续声明
console.log(name);

// call 这个函数被提升了
call()
function call () {   // name 被提升了
    console.log(name);  //undefined
    var name = 'qianmian '
}

//let 是块级作用域
function callLet (isNew) {
    if (isNew) {
        let address = 'sr'
        address = 'fg' //可以被再次赋值
        console.log(address); //fg
        //不能再次定义
        // let address = 'jx' //SyntaxError: Identifier 'address' has already been declared
    }
    //在不同的作用域中是可以重复定义的
    let address = 'jx'
    console.log(address); //jx
}
callLet(true)

//const 也是块级作用域，它与 let 不同的是它的值一旦被指定是不能修改的
function callConst (isNew) {
    if (isNew) {
        const job = 'one'
        //const 变量不能修改
        // job = 'fe' //TypeError: Assignment to constant variable.
        console.log(job);

        const info = {
            tip: '123',
            num: 11
        }
        //属性可以修改
        info.num = 12
        console.log(info); //{ tip: '123', num: 12 }
    }
}
callConst(true)

//-------------期中考试之var let const 
//---第一题
var name = 'one'
function call () {
    console.log(name); //
    var name = '1'
}
call()
//答案：代码在执行过程中需要创建对应的执行上下文，上面的代码会创建两个执行上下文，全局执行上下文和函数执行上下文。当函数执行的时候会从当前的执行上下文中查找变量，如果存在就使用当前上下文的变量，否则到全局执行上下文中查找变量。故本题的答案为 undefined。
var name = undefined;
name = 'suyan';
function call () {
    var name = undefined;
    // name 的值是什么 ?
    console.log(name);
    name = '前端小课';
}
call();

//第二题 ： 别被函数外部那个 name 给迷惑了，在函数执行上下文中已经找到了变量，不会到全局找的。故结果为 error。
var name = 'two'
function call () {
    console.log(name); //报错   ReferenceError: Cannot access 'name' before initialization
    let name = '2'
}
call()

//第三题 ： 让你明白什么是块级作用域，if{}它已经构成了一个块级作用域，所以使用let定义的变量只能在这里面作用，自然不会影响到全局的name。所以为three
var name = 'three'
function call (isTrue) {
    if (isTrue) {
        let name = '3'
    }
    console.log(name); //three
}
call(true)

//第四题 : if{}已经构成一个块级作用域，这个块内部的变量不能被提前使用。所以为error
var name = 'four'
function call (isTrue) {
    if (isTrue) {
        console.log(name); //报错 ReferenceError: Cannot access 'name' before initialization
        let name = '4'
    }
}
call(true)

//第五题：使用 var 声明的变量会被挂载到 window 对象上，而使用 let 和  const 不会。
let from = 'bj'
console.log(window.from); //undefined
var type = 1
console.log(window.type); //1

//------------JavaScript 内置对象数组 
let names = new Array('ch', 'god') //通过new Array创建
console.log(names); //[ 'ch', 'god' ]
let name = [1, 2] //2 是通过数组直接量
console.log(name); //[ 1, 2 ]

// concat, 有拼接的意思，把多个数组中的值合并到一起
let citys = ['shangrao', 'guangfeng']
citys = citys.concat(['yushan'], ['wannian'])
console.log(citys); //[ 'shangrao', 'guangfeng', 'yushan', 'wannian' ]

//fill 给某个区间填充指定的值，这个比较有用。fill(value:c T, start?: number, end?: number): this; 
let arr = new Array(5)
console.log(arr.fill(2, 0));  //[ 2, 2, 2, 2, 2 ]

//copyWithin: 复制数组中某个区间的数据到指定位置，会修改原数组。array.copyWithin(target：必需。复制到指定目标索引位置。, start：可选。元素复制的起始位置。, end：可选。停止复制的索引位置)：
//复制数组的前面两个元素到第三和第四个位置上：
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits.copyWithin(2, 0, 2)); //[ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'Papaya' ]

//find, 查找第一个符合条件的元素，返回值为元素的值
let arr = [1, 4, 6, 8]
console.log(arr.find(e => e > 1)); //4

//findIndex: 查找第一个符合条件的元素。返回为元素在数组中的索引，参数是一个函数
let arr = [1, 2, 3, 4, 5]
console.log(arr.findIndex(e => e > 2));//2 第一种写法

let e = arr.findIndex(function (e) { //第二种写法
    return e > 2
})
console.log(e); //2

//forEach，遍历数组，这种便力不能暂停，只能遍历到结尾自动结束
let arr = ['apple', 'banner', 'pear']
arr.forEach(e => {
    console.log(e); //apple banner pear
});

//indexOf, 某个item在数组中的下标，如果下标为-1，说明数组中不存在这个元素，常用这个判断数组中是否包含某个元素
let city = [1, 2, 3]
console.log(city.indexOf(2)); // 1
console.log(city.indexOf(-1)); // -1

//join, 数组中元素以某个字符串拼接起来
let arr = ['a', 'b', 'c', 'd']
console.log(arr.join('.'));// "a.b.c.d"

//map，遍历数组中的元素，重新组成一个数组
const arr1 = [1, 3, 4, 5, 7]
const map1 = arr1.map(x => x * 2)
console.log(map1); //[ 2, 6, 8, 10, 14 ]

//pop，删除数组最后一个元素，返回值为删除的元素
const arr = [1, 2, 3, 4]
console.log(arr.pop()); //4

//push，在数组末尾插入一个元素。返回值为数组的长度
const arr = [1, 2, 3, 4]
console.log(arr.push("5", "6"));  // 6
console.log(arr); //[ 1, 2, 3, 4, '5', '6' ]

//reverse，翻转一个数组
const arr = [1, 2, 3, 4]
console.log(arr.reverse());
const obj = [{ name: 1 }, { name: 2 }]
console.log(obj.reverse()); //[ { name: 2 }, { name: 1 } ]

//shift，删除数组中第一个元素，返回值为删除的元素
const arr = ['apple', 'banner', 'pear']
console.log(arr.shift()); //apple

//slice(beg, end)，取数组中某个范围内的元素组合成一个新的数组，不会改变原数组；
const arr = ['one', 'two', 'three', 'four', 'five']
console.log(arr.slice(0, 2)); // [ 'one', 'two' ]

//some，查询数组中是否有符合某个条件的元素，比如如查看数据是否存在偶数
const arr = [1, 2, 3, 4, 5]
const even = (ele) => ele % 2 === 0
console.log(arr.some(even)); //true

//splice(start[,deleteCount[,item1[,item2[,...]]]])，删除或插入元素到指定的位置。在数组第二个位置插入元素drum，不进行删除。
let arr = ['one', 'two', 'three', 'four', 'five']
let removed = arr.splice(2, 0, 'six')
console.log(arr); // [ 'one', 'two', 'six', 'three', 'four', 'five' ]
console.log(removed); // removed is [], no elements removed

//unshift,从头在数组插入元素
const arr = [1, 2, 3]
console.log(arr.unshift(-1, 0)); //返回数组长度 5
console.log(arr); //[ -1, 0, 1, 2, 3 ]

//题目一
let names = ['one', 'two']
names.length = 0;
console.log(names[0]); //undefined

//题目二
var numbers = []
for (var i = 0; i < 4; i++) {
    numbers.push(function () {
        return i;
    })
}
var result = numbers.map(function (e) {
    return e()
})
console.log(result); //[ 4, 4, 4, 4 ]


//--------------Object
function Person (name, age) {
    this.name = name
    this.age = age
}
Person.prototype.welcome = function () {
    console.log('哇哇，Hi, I am ', this.name);
}

const suyan = new Person('suyan', 1);
const lefe = new Person('Lefe', 2);
console.log(suyan);


//---------执行上下文
function log () {
    console.log(name);
}
function welcome () {
    var name = 'qiaankun';
    log()
}
var name = 'hello'
welcome() //hello

// 上面这段代码会存在一个全局作用域，log 函数作用域和 welcome 函数作用域，JavaScript 代码执行的时候，会从当前作用域查找变量，如果未找到会到它的外层作用域中查找。log 函数的外层作用域是全局作用域，故 log 函数的打印值为全局作用域定义的变量。打印结果为“hello”。

// 闭包
function call () {
    var name = 'suyan';
    var age = 20;
    console.log(name + ' age is ' + age);
    return {

        getAge: function () {
            return age;
        },
        setAge: function (newValue) {
            age = newValue;
        }
    };
}
const ageObj = call();
console.log(ageObj.getAge()); // 20
// 修改 age 的值为 30
ageObj.setAge(30);
console.log(ageObj.getAge()); // 30

//闭包一大重要特征就是可以「保存函数执行环境中的变量」，使其延迟释放，比如下面的函数：
function createCounter () {
    let counter = 0;
    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
// increment 是一个函数
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1, c2, c3); // 1,2,3

//increment 这个函数使用了 createCounter 中的变量 counter，每次调用 increment 这个函数，变量 counter 一直保存在执行环境中，并不会被释放。再创建一个 increment2，这是 c11 的值为 1。可见 increment 和 increment2 使用的执行环境互不影响。
const increment2 = createCounter();
const c11 = increment2();
console.log(c11); // 1

//看一下 JavaScript 内置对象数组 这节课程中的一道关于闭包的面试题
; (function () {
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

// 调试 JavaScript 少不了这几个技巧
//1. 自动断点
function a () {
    console.log("enter a")
    b()
}
function b () {
    console.log("enter b")
    debugger
    c()
}
function c () {
    console.log("enter c")
}
a()

//2.可以通过调试面板查看当前代码的调用堆栈，也可以通过 console.trace() 打印函数调用堆栈
function a () {
    console.log("enter a")
    b()
}
function b () {
    console.log("enter b")
    c()
}
function c () {
    console.log("enter c")
    console.trace()
}
a()

//以表格的方式打印对象  下面是一个对象，可以通过 console.table( obj ) 来打印这个对象。
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

//连接你、我、他 —— this
let from = 'wuhan';
var obj = {
    from: "beijing",
    logFrom: function () {
        console.log(from);
    }
}
let logFrom = obj.logFrom;
logFrom() //wuhan
obj.logFrom() //wuhan

//this 始终代表一个对象
let from = "wuhan";
var obj = {
    from: "beijing",
    logFrom: function () {
        console.log(this.from); //换成this.from 其实 this就是被动态绑定到执行上下文中的一个属性
    }
}
let logFrom = obj.logFrom;
logFrom() //undefined
obj.logFrom() // beijing

//下面的代码两个this并不一样 ，内部函数并不会继承外部函数的 this。
let lefex = {
    name: 'suyan',
    age: 0,
    addAge: function () {
        console.log('outer this = ', this); //{ name: 'suyan', age: 0, addAge: [Function: addAge] }
        this.age += 2;
        setTimeout(function () {
            console.log('inner this = ', this); // window {parent:window}
        }, 100)
    }
}
lefex.addAge()

// 解决方法一 就有了 let that = this 这样丑陋的代码。 
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
lefex.addAge()

//解决方法2 当然也可以用箭头函数
let lefex = {
    name: 'suyan',
    age: 0,
    addAge: function () {
        console.log('outer this = ', this); //{ name: 'suyan', age: 0, addAge: [Function: addAge] }
        this.age += 2;
        setTimeout(() => {
            console.log('inner this = ', this); // inner this =  { name: 'suyan', age: 2, addAge: [Function: addAge] }
        }, 100)
    }
}
lefex.addAge()

//构造函数也使用了 this。this 指向就是当前创建的对象，下面代码中 this 指的是 suyan。
function Person (name) {
    this.name = name;
    console.log(this); //Person { name: 'suyan' }
}
let suyan = new Person('suyan')

// && ，|| 超越了我的认知
const person = {
    name: 'one',
    getName () {
        return this.name
    }
}
// function isOne () {
//     return person.name === 'one' && person.getName
// }

function isOne () {
    return !!(person.name === 'one' && person.getName)
}

let isTrue = isOne();
console.log(isTrue); //结果是一个函数： [Function: getName]

// 可以这么改造
function isOne () {
    return !!(person.name === 'one' && person.getName)  // 改造之后的值就是true
}

// 逻辑运算符如果使用的都是布尔值，则结果也是布尔值。然而，在 && 和 || 中， 当操作数是非布尔值的时候结果可能是非布尔值。
// && 运算符从左到右进行计算，如果为真，继续往后走，直到遇到为 false 的，或者到了最后一个操作数。如果操作数是布尔值结果返回布尔值，如果操作数是非布尔值结果返回非布尔值。
const a = 10;
const b = -5;
const c = 1;
console.log(a && b); // -5
console.log(a > 0 && b); // -5
console.log(a < 0 && b); // false
console.log(a && b < 0); // true
console.log(a && b > 0); // false
console.log(a > 0 && b < 0); // true
console.log(a && b && c); // 1

// || 运算符，只要遇到一个真值便停止计算，结果的规则和 && 运算符一致。
console.log(a || b); // 10
console.log(a > 0 || b); // true
console.log(a < 0 || b); // -5
console.log(a || b < 0); // 10
console.log(a || b > 0); // 10
console.log(a > 0 || b < 0); // true
console.log(a || b || c); // 10

//&& 的优先级大于 || 的优先级。
true || false && false;      // returns true, because && is executed first
(true || false) && false    // returns false, because operator precedence cannot apply

// ！和!! 操作符返回的值永远是布尔值，返回值永远是布尔值：
console.log(!!{}); // true
console.log(!!true); // true
console.log(!!10); // true
console.log(!!-2); // true
console.log(!!''); // false

//假如有个 Label 显示用户的名称，显示规则为：默认值是前端小课，如果用户定义了别名就用别名，如果用户定义了真实的名字就用真实的名字，优先级为真实名字 > 昵称 > 默认名字。
function oneFn () {
    let defaultName = '默认';
    let trueName = '真名';
    let falsetName = '别名';
    return trueName || falsetName || defaultName
}