
//Map一种新的数据结构
//与对象很像，对象的key只能是字符串
// 但是Map的key可以是很多类型，
// 可以是字符串，也可以是对象
// let m = new Map()
// let obj1 = {
//     name:'萧炎'
// }
// let obj2 = {
//     name:'萧熏儿'
// }
// //常用方法
// //set添加
// m.set(obj1,'es6')
// m.set(obj2,'es7')
// console.log(m)
// //get使用
// console.log(m.get(obj1));
// // //delete删除
// m.delete(obj1)
// console.log(m)
// // //has判断是否存在
// console.log(m.has(obj2))

//初始化方法
// let m = new Map([
//     ['name','萧炎'],
//     ['age',21]
// ])
// console.log(m)
//
// //size元素个数
// console.log(m.size)

//遍历Map
// let m = new Map([
//     ['name','萧炎'],
//     ['age',21]
// ])
// console.log(m)
// //forEach
// m.forEach((value,key)=>{
//     console.log(value,key)
// })
// //for( of )
// for(let [key,value] of m){
//     console.log(key,value)
// }
// //.keys()遍历key
// for(let key of m.keys()){
//     console.log(key)
// }
// //.values()遍历value
// for(let value of m.values()){
//     console.log(value)
// }
// //.entries遍历键值对
// for(let item of m.entries()){
//     console.log(item[0],item[1])
// }

//WeakMap
let wm = new WeakMap()
//收垃圾回收机制影响的，会在GC中+1，只要大于0就不会回收
let elem = document.getElementsByTagName('h1')
//而WeakMap不受影响，所以用了之后，在GC中不会+1
wm.set(elem,'info')
console.log(wm.get(elem))
