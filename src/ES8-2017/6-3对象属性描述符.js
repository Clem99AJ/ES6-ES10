
// const obj = {
//     name:'萧炎',
//     course:'es'
// }
// const desc = Object.getOwnPropertyDescriptors(obj)
// console.log(desc)


//给对象设置getOwnPropertyDescriptors(obj)里的属性
const obj = {}
//
//参数1：给哪一个对象设置属性
//参数2：给对象设置什么样的属性
//参数3：给对象的一些配置
Reflect.defineProperty(obj,'name',{
    value:'萧炎',//设置属性值
    writable:false,//是否能修改
    configurable:true,//是否能删除
    enumerable:false//是否可以for in 遍历key
})
Reflect.defineProperty(obj,'age',{
    value:21,//设置属性值
    writable:true,//是否能修改
    configurable:true,//是否能删除
    enumerable:true//是否可以for in 遍历key
})
console.log(obj)
obj.name = '萧熏儿'
console.log(obj)
// delete obj.name
// console.log(obj)
for(let key in obj){
    console.log(key)
}
//获取对象单个属性的描述
console.log(Object.getOwnPropertyDescriptor(obj,'age'))
//获取所有属性的描述
console.log(Object.getOwnPropertyDescriptors(obj))

