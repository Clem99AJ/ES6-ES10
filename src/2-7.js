//扩展运算符
//把数组转化成用 , 隔开的值
// function foo(x,y,z){
//     console.log(x,y,z)
// }
// let arr = [1,2,3]
// foo(...arr)

//ES5合并两个数组
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// Array.prototype.push.apply(arr1,arr2)
// console.log(arr1)

//ES6合并两个数组
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// arr1.push(...arr2)
// console.log(arr1)

//rest参数
//ES5中对函数不定参数求和
// function foo(x,y,z){
//     let sum = 0
//     //通过argument得到参数的伪数组，用for循环对这个伪数组遍历求和
//     //call和java中继承很像
//     Array.prototype.forEach.call(arguments,function (item){
//         sum += item
//     })
//     return sum
// }
//
// console.log(foo(1,2))
// console.log(foo(1,2,3))
//ES6中对函数不定参数求和
// function foo(x,y,z){
//     let sum = 0
//     //通过argument得到参数的伪数组，用for循环对这个伪数组遍历求和
//     //call和java中继承很像
//     Array.from(arguments).forEach(function (item){
//         sum += item
//     })
//     return sum
// }
// console.log(foo(1,2))
// console.log(foo(1,2,3))


//使用rest ...XX来传参数解决不定参数求和
// function foo(...args){
//     let sum = 0
//     args.forEach(function (item){
//         sum += item
//     })
//     return sum
// }
//
// console.log(foo(1,2))
// console.log(foo(1,2,3,))
//用在剩余的
// function foo(x,...args){
//     console.log(x)
//     console.log(args)
// }
// foo(1,2,3)
// foo(1,2,3,4)

//可以与解构相结合
let [x,...y] = [1,2,3,4]
console.log(x,y)


