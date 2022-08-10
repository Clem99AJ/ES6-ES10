
//Set一种新的数据结构
// let s = new Set()
// console.log(s)

//Set这个数据结构不可以重复
// let s =new Set([1,2,3,2])
// console.log(s)

//常用方法
//add添加
// let s = new Set()
// s.add('es1').add('es2')
// console.log(s)
//
// //delete删除
// s.delete('es2')
// console.log(s)
//
// //clear清除
// s.clear()
// console.log(s)
//
// //has(value)判断Set中是否存有value这个元素
// s.add('es3')
// console.log(s.has('es3'))
//
// //size获取元素个数
// console.log(s.size);

//遍历Set
// let s =new Set([1,2,3,2,'es1','es2'])
// //forEach正常遍历
// s.forEach(item =>{
//     console.log(item)
// })
// //for( of )遍历键
// for(let item of s.keys()){
//     console.log(item)
// }
// //for(of)遍历值
// for(let item of s.values()){
//     console.log(item)
// }
// //for( of )能遍历键和值
// for(let item of s.entries()){
//     console.log(item[0] +':'+ item[1])
// }

//应用场景
//数组去重
// let arr = [1,1,1,2,2,3,3,4,5,5]
// let s = new Set(arr)
// console.log(s)
// //数组合并去重
// let arr1 = [1,2,3,4,5]
// let arr2 = [3,4,5,6,7]
// let s1 = new Set([...arr1,...arr2])
// console.log(s1)
// //Set转化为数组
// console.log([...s1])
// console.log(Array.from(s1))
// //求交集
// let s3 = new Set(arr1)
// let s4 = new Set(arr2)
// let result = new Set(arr1.filter((item)=>{
//     return s4.has(item)
// }))
// console.log(result)
// //求差集
// let s5 = new Set(arr1.filter((item)=>{
//     return !s4.has(item)
// }))
// let s6 = new Set(arr2.filter((item)=>{
//     return !s3.has(item)
// }))
// console.log(s5)
// console.log(s6)
// let s7 = new Set([...s5,...s6])
// console.log(s7)

//WeakSet是set的特殊形式,只能加入 可迭代对象,不能加入  其他基本数据类型
let ws = new WeakSet()
let obj1 = {
    name:'萧炎'
}
let obj2 = {
    name:'萧熏儿'
}

ws.add(obj1).add(obj2)
console.log(ws)

ws.delete(obj1)
console.log(ws)
console.log(ws.has(obj2));

//垃圾回收机制 GC
// 计数的垃圾回收机制
// 当前值被引用一次就+1
// 只要引用次数不为0就不会被回收
// WeakSet是弱引用，不会被垃圾回收机制考虑，如果对象消失，
// 则WeakSet中的值也会消失，不会一直存在







