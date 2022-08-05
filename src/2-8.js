
//ES5定义函数
//会存在函数的预定义，即函数定义可以写在调用后面
// console.log(foo(1,2))
// function foo(x,y){
//     return x + y
// }
//使用let变量达到不使用预定义的效果,即调用写在定义后
// let sum = function (x,y) {
//     return x + y
// }
// console.log(sum(1,2))

//ES6使用箭头定义函数
// let sum = (x,y)=>{
//     return x + y
// }
// console.log(sum(1,2))
//特别的：当参数只有一个  或   程序体只有一句话时  可以不写括号和return
// let sum = (x,y)=>x+y
// console.log(sum(1,2))
//
// let x = x=>x
// console.log(x(1))

//this指向定义时的对象不是调用时的对象
//在ES5中定义函数时，使用的this是调用时的对象
//获取一个id为btn按钮标签，并监听,作为列子
// let oBtn = document.querySelector('#btn')
// oBtn.addEventListener('click',function (){
//     //先输出一下this,在调用延时函数1秒后输出一下this
//     console.log(this)
//     setTimeout(function (){
//         //到这里会发现，两个this的输出结果不一样
//         console.log(this)
//     },1000)
// })

//这里用同样的例子，演示箭头函数中this的指向
// let oBtn = document.querySelector('#btn')
// oBtn.addEventListener('click',function () {
//     //首先，先在这里输出一下this,一秒后输出用箭头函数写的延时函数的this
//     console.log(this)
//     setTimeout(()=>{
//         console.log(this)
//     },1000)
// })

//箭头函数不可以当作构造函数
//用function写一个类
// function People(name,age){
//     this.name = name
//     this.age = age
// }
// let people = new People('楠溪泽岸',21)
// console.log(people)

//用箭头函数不可以写,这里用了webpack打包，所以看不出来，把这个放到浏览器执行就会出错
// let  People2 = (name,age)=>{
//     this.name = name
//     this.age = age
// }
// let people2 = new People2('楠溪泽岸',21)
// console.log(people2)


//箭头函数不可以使用arguments
// let foo = (x,y,z)=>{
//     console.log(arguments)
// }
// foo(1,2,3)

//替代方法，使用rest...来替代
let foo = (...args)=>{
    console.log(args)
}
foo(1,2,3)


