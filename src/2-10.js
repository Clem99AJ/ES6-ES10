
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




