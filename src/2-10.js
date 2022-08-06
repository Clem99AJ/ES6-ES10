
//在ES5中，定义对象的属性是，对象外的一个变量
// let name = '楠溪泽岸'
// let age = 21
// let obj = {
//     name:name,
//     age:age
// }
// console.log(obj)

//在ES6在简化后，如果对象属性名与对象外的变量同名，则可以只写键
// let name = '楠溪泽岸'
// let age = 21
// let obj = {
//     name,
//     age
// }
// console.log(obj)

//ES6中，如果有一个变量的键，需要使用一个变量的内容作为键则使用[]
// let name = '楠溪泽岸'
// let age = 21
// let XXX = 'school'
// let obj = {
//     name,
//     age,
//     [XXX]:'YNUFE'
// }
// console.log(obj)

//ES6中方法的简写形式
//ES5简写前
// let name = '楠溪泽岸'
// let age = 21
// let XXX = 'school'
// let obj = {
//     name,
//     age,
//     [XXX]:'YNUFE',
//     study:function (){
//         console.log(this.name + ' is learning')
//     }
// }
// console.log(obj)
// obj.study()

//ES6简写后
// let name = '楠溪泽岸'
// let age = 21
// let XXX = 'school'
// let obj = {
//     name,
//     age,
//     [XXX]:'YNUFE',
//     study(){
//         console.log(this.name + ' is learning')
//     }
// }
// console.log(obj)
// obj.study()

//Object.is()判断两个值是否严格相等，作用和===差不多
// console.log(Object.is(2, '2'));
// console.log(Object.is(NaN,NaN))
// console.log(Object.is(+0,-0))

//在判断对象上，结果没变，因为对象的比较是对象在堆内存中的地址的对比
//所以内容相同，两个对象也不相同
// let obj1 = {
//     name:'楠溪泽岸',
//     age:21
// }
// let obj2 = {
//     name:"楠溪泽岸",
//     age:21
// }
// console.log(obj1 == obj2)
// console.log(Object.is(obj1,obj2))

//扩展运算符
// let x = {
//     a:3,
//     b:4
// }
// let y = {...x}
// console.log(y)
//Object.assign(y,x)合并两个对象
// let x = {
//     a:3,
//     b:4
// }
// let y = {
//     c:5,
//     d:6
// }
//把后面的对象合并到前面
// Object.assign(y,x)
// console.log(y)

// 'a' in obj 用来判断对象里是否含有a属性
// let x = {
//     a:3,
//     b:4
// }
// console.log('a' in x)
//in可以判断数组下标处，是否有值
// let arr = [1,2,3]
// console.log(3 in arr)

//对象的遍历方式
// let obj = {
//     name:"楠溪泽岸",
//     age:21,
//     school:"YNUFE"
// }
// //循环遍历
// for(let key in obj){
//     console.log(key,obj[key])
// }
// //Object.keys(obj).forEach()
// Object.keys(obj).forEach(key =>{
//     console.log(key,obj[key])
// })
// //Object.getOwnPropertyNames(obj).forEach()
// Object.getOwnPropertyNames(key=>{
//     console.log(key,obj[key])
// })
// //Reflect.ownKeys(obj).forEach()
// Reflect.ownKeys(obj).forEach(key=>{
//     console.log(key,obj[key])
// })
