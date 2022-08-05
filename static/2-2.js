//ES5中的定义常量
Object.defineProperty(window,'PI',{
    value:3.14,
    writable:false
})
console.log(PI)
PI = 5
console.log(PI)

// const a = 5
// a = 6

const obj = {
    name:"楠溪泽岸",
    age:34
}
console.log(obj)
//让内容不被修改
Object.freeze(obj)
obj.school = '慕课'
console.log(obj)

const arr = [1,2,3]
arr.push(4)
console.log(arr)