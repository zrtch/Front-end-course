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

