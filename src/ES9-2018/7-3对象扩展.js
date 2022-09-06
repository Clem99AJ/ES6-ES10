
//对象扩展
//Rest&Spread
//在ES9里对象扩展与ES5数组扩展一样
//在扩展时，是深拷贝，即真正的克隆出一个对象来，而不是引用

//之前数组的合并
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]

//ES9对象的合并与数组的合并是一样的写法,且是深拷贝
const obj1 = {
    name:'萧炎',
    age:21
}
const obj2 = {
    school:'迦南学院',
    course:'es'
}
const obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3)
//深拷贝，没有引用，所以改变之前的值，合并后的值不变
obj1.age = 18
console.log(obj3)

//...在等号左边，是剩余运算符号，特别的，需要放在参数的最后一个
const {name,age,...rest} = obj3
console.log(name)
console.log(age)
console.log(rest)

