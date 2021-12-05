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

