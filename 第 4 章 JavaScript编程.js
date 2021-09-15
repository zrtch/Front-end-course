// 让 JavaScript 跑起来+函数
let name = '前端';
console.log(name);
//定义一个函数，并把这个函数赋值给变量call
let call = function(){
    console.log('call fun:',name); //call fun: 前端
}
//调用函数
call()

let sub2 = new Function('a','b','return a - b');
console.log(sub2(8,6))

//函数可以作为函数参数传递，也可以作为函数返回值。
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

//函数有一个内部参数 arguments，它保存了函数调用时的所有参数，它不是一个数组。
function kill(a,b){
    console.log(arguments);  // { '0': 3, '1': 2 }
    return a * a - b;
}
kill(3,2) //调用函数不传递参数就是空对象

//JavaScript 中的对象 使用new关键字后紧跟一个函数调用，这个函数被称为构造函数
let person = new Object();
person.name = "前端";
person.age = 15;
person.welcome = function(){
    console.log('he name is ' +  this.name + ' age is ' + this.age );
}
person.welcome()

//通过对象直接量的方式创建
let person2 = {
    name: "前端",
    age: 18,
    welcome: function () {
        console.log("He name is " + this.name + " age is " + this.age)
    },
}
person2.welcome() //He name is 前端 age is 18

//基于构造函数来创建对象：
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.welcome = function () {
        console.log('He name is ' + this.name + ' age is ' + this.age);
    };
}
let person4 = new Person('lefex', 20);
person4.welcome();
let person5 = new Person('suyan', 30);
person5.welcome();

//var 很傻、let 很亲切 、const 更坚定
var name = 'suyan';
function callVar(isNew){
    if(isNew){
        var age = 20;
        var age = 24
    }
    console.log(age);
}
callVar(true)
// console.log(age); //age is not defined  会报错
var name = 'elx' //name还可以继续声明
console.log(name); //elx 

//call这个函数被提升了
call();

function call(){
     // name 被提升了
    console.log(name); //undefined
    var name = '前代'
}

//let是块级作用域
function callLet(isNew){
    if(isNew){
        let address  = 'shangrao';
        // 可以再次被赋值
        address  = 'xinjiang' 
        // 不能再次被定义  Identifier 'address' has already been declared
        // let address = 'BaoTou';  
        console.log(address); //xinjiang
    }
     // 在不同的作用域中是可以重复定义的
    let address = 'hushi';
    console.log(address); //hushi
}
callLet(true)

//如果在未声明时使用会报错
call()
function call(){
    console.log(name); //Cannot access 'name' before initialization
    let name = '大苏打' 
}

// const 也是块级作用域，它与 let 不同的是它的值一旦被指定是不能修改的
function callConst(isNew){
    if(isNew){
        const job = 'ios';
        // job = 'fe';  //const 变量不能修改 Assignment to constant variable.
        console.log(job); //ios
        const info = {
            top:'123',
            sex:"男"
        }
        info.sex = '女'
        console.log(info); //{ top: '123', sex: '女' }
    }
    const job = 'android';
    console.log(job); //android
}
callConst(true)