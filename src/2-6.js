//ES5设函数默认值
// function foo(x,y){
//     // y = y || 'world'
//     console.log(x,y)
// }
// foo('hello',0)
//ES6设置函数默认值
// function foo(x,y = 'world'){
//     console.log(x,y)
// }
// foo('hello',0)

//函数的参数与解构赋值结合
// function foo({x, y = 5}){
//     console.log(x,y)
// }
// foo({})
// foo({x:1})
// foo({x:1,y:2})


// function ajax(url,{
//     body = '',
//     method = 'GET',
//     header = {}
// } = {}){
//     console.log(method)
// }
// ajax('https://www.imooc.com')
// ajax('https://www.imooc.com',{
//     method:'POST'
// })

//函数的length属性会返回函数的参数个数
// function foo(x,y,z){
//     console.log(x,y,z)
// }
//
// console.log(foo.length)
//
// function foo1(x = 1,y = 2,z = 3){
//     console.log(x,y,z)
// }
//
// console.log(foo1.length)

//作用域
// let x = 1
// function foo(x,y = x){
//     console.log(y)
// }
// foo(2)
//错误
// function foo1(y = x){
//     let x = 2
//     console.log(y)
// }
// foo1()

//输出函数的名字
// function foo(x,y){
//     console.log(this,x,y)
// }
// console.log(foo.name);

//输出匿名的函数的名字
// console.log((new Function()).name)
function foo(x,y){
    console.log(this,x,y)
}
//bind可以改变foo的指向内容
// foo.bind({
//     name:'nxza'
// })(1,2)

//用了bind后，查看name属性，会有bound
console.log(foo.bind({}).name)

//匿名的
console.log((function (){}).bind({}).name)

