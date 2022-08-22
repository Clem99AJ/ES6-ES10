
//Proxy代理

//ES5拦截代理
//结合一个外部变量及 Object.defineProperty(o,p,a)实现

// let obj = {}
// let newVal = ''
// Object.defineProperty(obj,'name',{
//     get(){
//         console.log('get')
//         return newVal
//     },
//     set(value){
//         console.log('set')
//         newVal = value
//     }
// })
// //这里调用set
// obj.name = 'es'
// //这里调用get
// console.log(obj.name)
//
// //ES6  proxy拦截代理 new Proxy(obj,{})
// //参数1为拦截的对象，参数2为hook函数，get,set
// let obj2 = {}
// let p = new Proxy(obj,{
//     get(target,prop){
//     //    参数1：代理的对象，参数2：传进的参数
//     },
//     set(target,prop,value){
//     //    参数1：代理的对象，参数2：当前目标属性的值 参数3：给目标属性要设置的值
//
//     },
//     //用来判断值是否存在对象中
//     has(target,prop){
//     //    参数1：代理的对象，参数2：当前判断传入的值
//     },
//     ownKeys(target) {
//     //
//     }
//
// })
// p.name = 'happy'
// console.log(p.name)
//
// //get的使用---对数组的代理
// let arr = [7,8,9]
// arr = new Proxy(arr,{
//     get(target,prop){
//         console.log(target,prop)
//     //    这里实现一个判断下标处是否有值的功能
//         return prop in target ? target[prop] : 'error'
//     }
// })
// console.log(arr[1])
// console.log(arr[10])
//
// //使用拦截代理，get实现字典---对对象的代理
// let diction = {
//     name:'名字',
//     age:'年龄',
//     hello:'你好',
//     world:'世界'
// }
// diction = new Proxy(diction,{
//     get(target,prop){
//         return prop in target ? target[prop] : prop
//     }
// })
// console.log(diction.name)
// console.log(diction.age)
// console.log(diction.hello)
// console.log(diction.sad)
//
// //set---拦截代理实现只能对数组添加数字类型的元素
// let arr2 = []
// arr2 = new Proxy(arr2,{
//     set(target,prop,value){
//         if(typeof value === 'number'){
//             target[prop] = value
//             return true
//         }else{
//             return false
//         }
//     }
// })
// console.log(arr2.push(5));
// console.log(arr2.push(6));
// console.log(arr2.length);
//
// //使用has拦截代理in的逻辑---这里用has判断值是否在范围内
// let range = {
//     start:1,
//     end:5
// }
// range = new Proxy(range,{
//     has(target,prop){
//         return prop>=target.start&&prop<=target.end
//     }
// })
// console.log(1 in range)
// console.log(3 in range)
// console.log(9 in range)
//
// //复习一下对象遍历的方法
// let s = Symbol('es')
// let obj5 = {
//     name:'萧炎',
//     age:21
// }
// console.log(Object.getOwnPropertyNames(obj5))
// console.log(Object.getOwnPropertySymbols(obj5))
// console.log(Object.keys(obj5))
//
// //ownKeys能拦截代理循环遍历---这里使用ownKeys实现返回不是 _ 开头的
// let userInfo = {
//     userName:'萧炎',
//     userAge:21,
//     _password:'123456'
// }
// userInfo = new Proxy(userInfo,{
//     ownKeys(target) {
//         return Object.keys(target).filter(key=>!key.startsWith('_'))
//     }
// })
// for(let key in userInfo){
//     console.log(key)
// }
//
// //拦截代理的综合使用
// let user = {
//     name:'萧炎',
//     age:21,
//     _password: '123456'
// }
// user = new Proxy(user,{
//     get(target,prop){
//         if(prop.startsWith('_')){
//             throw new Error('不可访问')
//         }else{
//             return target[prop]
//         }
//     },
//     set(target,prop,value){
//         if(prop.startsWith('_')){
//             throw new Error('不可访问')
//         }else{
//             target[prop] = value
//
//         }
//     },
//     deleteProperty(target, prop) {
//         if(prop.startsWith('_')){
//             throw new Error('不可访问')
//         }else{
//             delete target[prop]
//             return true
//         }
//     },
//     has(target,prop){
//         if(prop.startsWith('_')){
//             throw new Error('不可访问')
//         }else{
//             return true
//         }
//     },
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'))
//     }
// })
//
// user.name = '萧熏儿'
// try{
//     user._password = 'sad'
// }catch (e){
//     console.log(e.message)
// }
// delete user.age
// console.log(name in user)
// Object.keys(user)
// console.log(user)

//apply---用来拦截代理方法的
let sum = (...args)=>{
    let num = 0
    args.forEach(item=>{
        num += item
    })
    return num
}
sum = new Proxy(sum,{
     apply(target, thisArg, argArray) {
         return target(...argArray) * 2
     }
 })
console.log(sum(1,2))
console.log(sum.call(null,1,2,3))
console.log(sum.apply(null,[1,2,3]))

//constructor  拦截监听类中的实例属性
let People = class {
    constructor(name) {
        this.name = name
    }
}

People = new Proxy(People,{
    construct(target, argArray, newTarget) {
        console.log('construct')
        return new target(...argArray)
    }
})
console.log(new People('sad'))