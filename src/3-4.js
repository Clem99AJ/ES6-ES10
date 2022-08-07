
//新的原始数据类型Symbol
//声明方式1
// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1)
// console.log(s2)
// console.log(s1===s2)

//声明方式2
// let s1 = Symbol('萧炎')
// let s2 = Symbol('萧炎')
// console.log(s1)
// console.log(s2)
// console.log(s1==s2)

//声明方式3
//使用Symbol.for('String')相当于定义在全局的环境中

// let s1 = Symbol.for('萧炎')
// let s2 = Symbol.for('萧炎')
// console.log(s1===s2)
//
// //不管什么时候调用Symbol.for都是全局的
// function foo(){
//     return Symbol.for('foo')
// }
// const x = foo()
// const y = Symbol.for('foo')
// console.log(x === y)

//Symbol.keyFor用来判断Symbol是否用for注册全局
// const s1 = Symbol('foo')
// console.log(Symbol.keyFor(s1))
// const s2 = Symbol.for('foo')
// console.log(Symbol.keyFor(s2))

//应用场景
//用在对象里有同名键需求时,解决对象里键只能唯一,但是需要同名的键名
// const stu1 = Symbol('萧炎')
// const stu2 = Symbol('萧炎')
//
// const grade = {
//     [stu1]:{address:'xxx',tel:'111'},
//     [stu2]:{address:'yyy',tel:'222'}
// }
// console.log(grade)
// //获取其中同名的一个人的方法
// console.log(grade[stu1])
// console.log(grade[stu2])

// const sym = Symbol('school')
// class User{
//     constructor(name) {
//         this.name = name
//         this[sym] = 'YNUFE'
//     }
//     getName(){
//         return this.name + this[sym]
//     }
// }
// const user = new User('楠溪泽岸')
// //只显示除了Symbol外的属性
// for(let key in user){
//     console.log(key)
// }
// for(let key of Object.keys(user)){
//     console.log(key)
// }
// //只显示Symbol属性
// for(let key of Object.getOwnPropertySymbols(user)){
//     console.log(key)
// }
// //属性都显示
// for(let key of Reflect.ownKeys(user)){
//     console.log(key)
// }

//魔术字符串(指同一字符串重复出现多次)
// function getArea(shape){
//     let area
//     switch (shape){
//         case 'Circle':
//             area = 1
//             break
//         case 'Triangle':
//             area = 2
//             break
//     }
//     return area
// }
//
// console.log(getArea('Circle'))
// console.log(getArea('Triangle'))
//不用Symbol消除魔术字符串
// const shapeType = {
//     triangle:'Triangle',
//     circle:'Circle'
// }
// function getArea(shape){
//     let area
//     switch (shape){
//         case shapeType.circle:
//             area = 1
//             break
//         case shapeType.triangle:
//             area = 2
//             break
//     }
//     return area
// }
//
// console.log(getArea(shapeType.circle))
// console.log(getArea(shapeType.triangle))
//用Symbol消除魔术字符串
// const shapeType = {
//     triangle:Symbol('Triangle'),
//     circle:Symbol('Circle')
// }
// function getArea(shape){
//     let area
//     switch (shape){
//         case shapeType.circle:
//             area = 1
//             break
//         case shapeType.triangle:
//             area = 2
//             break
//     }
//     return area
// }
//
// console.log(getArea(shapeType.circle))
// console.log(getArea(shapeType.triangle))