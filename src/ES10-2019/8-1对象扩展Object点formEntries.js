
//对象扩展---Object.fromEntries()
//之前学的---Object.entries(obj),能把对象转化为键值对数组
//而Object.fromEntries()相当于entries的逆运算


//这里复习一下Object.entries()
let obj = {
    name:'萧炎',
    age:21,
    school:'迦南学院'
}
let entries = Object.entries(obj)
console.log(entries)
//使用fromEntries()转化回去
console.log(Object.fromEntries(entries))


//应用场景
//把map类型的数据转化为对象
let map = new Map
map.set('name','萧熏儿')
map.set('age',21)
console.log(map)
console.log(Object.fromEntries(map))


//一个对象中有一些数据,需要过滤出大于的部分
//但是对象没有这个方法,而数组有filter方法
//那就可以使用entries把对象转化为数组后过滤
//然后把过滤后的数组用fromEntries把数组转化为对象
let obj1 = {
    Math:100,
    English:80,
    Chinese:90
}
let res = Object.entries(obj1).filter(([key,val])=>val>=90)
console.log(res)
let obj2 = Object.fromEntries(res)
console.log(obj2)