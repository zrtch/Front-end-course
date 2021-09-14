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
kill(3,2)
