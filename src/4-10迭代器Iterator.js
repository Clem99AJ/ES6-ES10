
//迭代器Iterator
//这里实现Iterator的原理
// function makeIterator(arr){
//     //用于取数组的值
//     let nextIndex = 0
//     return {
//         next(){
//             return nextIndex < arr.length ? {
//                 value : arr[nextIndex++],
//                 //这个表示迭代还没结束
//                 done : false
//             } : {
//                 value : undefined,
//                 //这个表示迭代结束了
//                 done : true
//             }
//         }
//     }
// }
// let it = makeIterator(['a','b','c'])
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let courses = {
//     allCourse:{
//         frontend:['ES','小程序','Vue','React'],
//         backend:['Java','Python','SpringBoot'],
//         webapp:['Android','IOS']
//     }
// }
// for(let course of courses){
//     console.log(course)
// }

//对数组使用iterator
// let arr = ['a','b','c']
// console.log(arr)
// //iterator方法的写法
// let it = arr[Symbol.iterator]()
// //iterator的用法
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

//对Map使用iterator
// let map = new Map()
// map.set('name','萧炎')
// map.set('age',21)
// map.set('school','迦南学院')
// console.log(map)
// let it = map[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

//让这样一个不可迭代的数据结构，变得可迭代
// let courses = {
//     allCourse:{
//         frontend:['ES','小程序','Vue','React'],
//         backend:['Java','Python','SpringBoot'],
//         webapp:['Android','IOS']
//     }
// }
//可迭代协议---指的就是具有iterator的数据结构的Symbol.iterator属性
//迭代器协议---return{next(){return{value,done}}
//需要同时满足两个条件，格式固定
// courses[Symbol.iterator] = function (){
//     let allCourse = this.allCourse
//     //这里使用Reflect.oweKeys(obj)获取所有key
//     let keys = Reflect.ownKeys(allCourse)
//     let values = []
//     return{
//         next(){
//             if(!values.length){
//                 if(keys.length){
//                     values = allCourse[keys[0]]
//                     //把改键对应的弹出
//                     keys.shift()
//                 }
//             }
//             return{
//                 done:!values.length,
//                 value:values.shift()
//             }
//         }
//     }
// }
// //使用
// for(let c of courses){
//     console.log(c)
// }

//Generator实现不可迭代的数据结构的迭代
let courses = {
    allCourse:{
        frontend:['ES','小程序','Vue','React'],
        backend:['Java','Python','SpringBoot'],
        webapp:['Android','IOS']
    }
}
// courses[Symbol.iterator] = function * () {
//     let allCourse = this.allCourse
//     let keys = Reflect.ownKeys(allCourse)
//     let values = []
//     while (1){
//         if(!values.length){
//             if(keys.length){
//                 values = allCourse[keys[0]]
//                 keys.shift()
//                 yield values.shift
//             }else{
//                 return false
//             }
//         }else{
//             yield values.shift
//         }
//     }
// }
//使用
// for(let c of courses){
//     console.log(c)
// }
