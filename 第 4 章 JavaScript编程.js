let name = 'zrt'
console.log(name);
//定义一个函数，并把这个函数赋值给变量call
let call = function (){
    console.log('call fun:',name); //call fun: zrt
}
//调用函数
call()

let sub = function(a,b){
    return a - b 
}
console.log(sub); //[Function: sub]

//函数有一个内部参数 arguments，它保存了函数调用时的所有参数，它不是一个数组。
function kill(a,b){
    console.log(arguments); //[Arguments] { '0': 3, '1': 2 }
    return a -b 
}
kill(3,2)

let person = new Object()
person.name = "cherry"
person.age = 18

person.welcome = function(){
    console.log('he name is' + this.name, 'and he age is ' + this.age);//he name ischerry and he age is 18
}
person.welcome()

//通过对象直接量的方式创建
let person2 = {
    name:"cherry",
    age:16,
    welcome:function(){
        console.log('he name is ' + this.name, 'and he age is ' + this.age);
    }
}
person2.welcome()

let animal = {
    _name:"animal"
}

Object.defineProperty(animal,'name',{
    configurable:true,
    enumerable:true,
    get(){
        return this.__name
    },
    set(nV){
        this._name = nV
    }
})

// 基于构造函数来创建对象
function Person(name,age){
    this.name = name
    this.age = age
    this.welcome = function(){
        console.log('he name is ' + this.name, 'and he age is ' + this.age); 
    }
}
// 创建对象的时候可以通过 new 来创建对象
let person4 = new Person('ch',24)
person4.welcome() //he name is ch and he age is 24

let person5 = new Person('chh',25) 
person5.welcome() //he name is chh and he age is 25


var name = 'cherry'
function callVal(isNew){
    if(isNew){
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
function call(){   // name 被提升了
    console.log(name);  //undefined
    var name = 'qianmian '
}

//let 是块级作用域
function callLet(isNew){
    if(isNew){
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
function callConst(isNew){
    if(isNew){
        const job = 'one'
        //const 变量不能修改
        // job = 'fe' //TypeError: Assignment to constant variable.
        console.log(job);

        const info = {
            tip:'123',
            num:11
        }
        //属性可以修改
        info.num  = 12
        console.log(info); //{ tip: '123', num: 12 }
    }
}
callConst(true)

//-------------期中考试之var let const 
//---第一题
var name  = 'one'
function call(){
    console.log(name); //
    var name = '1'
}
call()
//答案：代码在执行过程中需要创建对应的执行上下文，上面的代码会创建两个执行上下文，全局执行上下文和函数执行上下文。当函数执行的时候会从当前的执行上下文中查找变量，如果存在就使用当前上下文的变量，否则到全局执行上下文中查找变量。故本题的答案为 undefined。
var name = undefined;
name = 'suyan';
function call() {
    var name = undefined;
    // name 的值是什么 ?
    console.log(name);
    name = '前端小课';
}
call();

//第二题 ： 别被函数外部那个 name 给迷惑了，在函数执行上下文中已经找到了变量，不会到全局找的。故结果为 error。
var name = 'two'
function call(){
    console.log(name); //报错   ReferenceError: Cannot access 'name' before initialization
    let name = '2'
}
call()

//第三题 ： 让你明白什么是块级作用域，if{}它已经构成了一个块级作用域，所以使用let定义的变量只能在这里面作用，自然不会影响到全局的name。所以为three
var name = 'three'
function call(isTrue){
    if(isTrue){
        let name = '3'
    }
    console.log(name); //three
}
call(true)

//第四题 : if{}已经构成一个块级作用域，这个块内部的变量不能被提前使用。所以为error
var name = 'four'
function call(isTrue){
    if(isTrue){
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
let names = new Array('ch','god') //通过new Array创建
console.log(names); //[ 'ch', 'god' ]
let name = [1,2] //2 是通过数组直接量
console.log(name); //[ 1, 2 ]

// concat, 有拼接的意思，把多个数组中的值合并到一起
let citys = ['shangrao','guangfeng']
citys = citys.concat(['yushan'],['wannian'])
console.log(citys); //[ 'shangrao', 'guangfeng', 'yushan', 'wannian' ]

//fill 给某个区间填充指定的值，这个比较有用。fill(value:c T, start?: number, end?: number): this; 
let arr = new Array(5)
console.log(arr.fill(2,0));  //[ 2, 2, 2, 2, 2 ]

//copyWithin: 复制数组中某个区间的数据到指定位置，会修改原数组。array.copyWithin(target：必需。复制到指定目标索引位置。, start：可选。元素复制的起始位置。, end：可选。停止复制的索引位置)：
//复制数组的前面两个元素到第三和第四个位置上：
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits.copyWithin(2, 0, 2)); //[ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'Papaya' ]

//find, 查找第一个符合条件的元素，返回值为元素的值
let arr = [1,4,6,8] 
console.log(arr.find(e=>e>1)); //4

//findIndex: 查找第一个符合条件的元素。返回为元素在数组中的索引，参数是一个函数
let arr = [1,2,3,4,5]
console.log(arr.findIndex(e=>e>2));//2 第一种写法

let e = arr.findIndex(function(e){ //第二种写法
    return e > 2
})
console.log(e); //2

//forEach，遍历数组，这种便力不能暂停，只能遍历到结尾自动结束
let arr = ['apple','banner','pear']
arr.forEach(e => {
    console.log(e); //apple banner pear
});

//indexOf, 某个item在数组中的下标，如果下标为-1，说明数组中不存在这个元素，常用这个判断数组中是否包含某个元素
let city = [1,2,3]
console.log(city.indexOf(2)); // 1
console.log(city.indexOf(-1)); // -1

//join, 数组中元素以某个字符串拼接起来
let arr = ['a','b','c','d']
console.log(arr.join('.'));// "a.b.c.d"

//map，遍历数组中的元素，重新组成一个数组
const arr1 = [1,3,4,5,7]
const map1 = arr1.map( x => x*2 )
console.log(map1); //[ 2, 6, 8, 10, 14 ]

//pop，删除数组最后一个元素，返回值为删除的元素
const arr = [1,2,3,4]
console.log(arr.pop()); //4

//push，在数组末尾插入一个元素。返回值为数组的长度
const arr = [1,2,3,4]
console.log(arr.push("5","6"));  // 6
console.log(arr); //[ 1, 2, 3, 4, '5', '6' ]

//reverse，翻转一个数组
const arr = [1,2,3,4]
console.log(arr.reverse());
const obj = [{name:1},{name:2}]
console.log(obj.reverse()); //[ { name: 2 }, { name: 1 } ]