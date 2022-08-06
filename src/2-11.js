//深拷贝与浅拷贝

//浅拷贝 Object.assign
// let target = {
//     a:{
//         b:{
//             c:4
//         },
//         e:5,
//         f:3
//     }
// }
// let source = {
//     a:{
//         b:{
//             c:4
//         },
//         e:5
//     }
// }
// Object.assign(target,source)
// source.a.e = 6
// console.log(target)

//深拷贝
// let a = 5
// let b = 6
// a = b.
// b = 7
// console.log(a,b)

//对象浅拷贝
// let obj1 = {
//     name:'楠溪泽岸',
//     age:21
// }
// let obj2 = obj1
// obj1.age = 18
// console.log(obj1)
// //我们想要的结果是，obj2不再发生改变
// console.log(obj2)

//对象深拷贝
//用JSON.stringify()可以把对象转化为字符串
// 和JSON.parse()可以把JSON字符串转化为对象
// let obj1 = {
//     name:'楠溪泽岸',
//     age:21
// }
// let str = JSON.stringify(obj1)
// let obj2 = JSON.parse(str)
// obj1.age = 18
// console.log(obj1)
// console.log(str)
// console.log(obj2)

//自定义一个深拷贝函数
//判断数据类型
let checkType = data =>{
    //使用Object.prototype.toString.call(data)得到类型
    console.log(Object.prototype.toString.call(data).slice(8,-1));
    return Object.prototype.toString.call(data).slice(8,-1)
}
//这里开始写深拷贝
let deepClone = target =>{
    let targetType = checkType(target)
    let result
    if(targetType == 'Object'){
        result = {}
    }else if(targetType == 'Array'){
        result = []
    }else{
        return target
    }
    for(let i in target){
        let value = target[i]
        let valueType = checkType(value)
        if(valueType == 'Object' || valueType == 'Array'){
            result[i] = deepClone(value)
        }else {
            result[i] = value
        }
    }
    return result
}
let arr1 = [1,2,{age:21}]
let arr2 = deepClone(arr1)
arr2[2].age = 18
console.log(arr1)
console.log(arr2)
