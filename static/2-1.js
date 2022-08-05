//var -> variable
var a =5
console.log(a)

delete a
console.log(a)
b = 6
console.log(b)
delete b

let c = 7
console.log(c)
console.log(window.c)

console.log(d)
var d = 8

// console.log(f)
// let f =8

// var e = 6
// if(true){
//     e = 7
//     let e
// }

// function foo(a = b,b = 2){
//     console.log(a,b)
// }
// foo()

// for(var i = 0;i < 3;i++){
//     console.log('循环内：' + i)
// }
// console.log('循环外：' + i)

// if(false){
//     var f = 5;
// }
// console.log(f)

// for(let i = 0;i < 3;i++){
//     console.log('循环内：' + i)
// }
// console.log('循环外：' + i)

// if(true) let f = 5
// if(true){
//     let f = 5
// }

// for(var i = 0;i < 3;i++){
//     setTimeout(function (){
//         console.log(i)
//     })
// }

// for(var i = 0;i < 3;i++){
//     (function (j){
//         console.log(j)
//     })(i)
// }

for(let i = 0;i < 3;i++){
    setTimeout(function (){
        console.log(i)
    })
}