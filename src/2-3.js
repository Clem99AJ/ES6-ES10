// let arr = [1,2,3]
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// console.log(a,b,c)
// let [a,b,c] = [1,2,3]
// console.log(a,b,c)
// let [a,b,c] = [1,2,[3,4]]
// console.log(a,b,c)
// let [a,b,[c,d]] = [1,2,[3,4]]
// console.log(a,b,c,d)
// let [a,b,[c]] = [1,2,[3,4]]
// console.log(a,b,c)
// let [a,b,c,d=5] = [1,2,[3,4]]
// console.log(a,b,c,d)
// let [a,b,c,d=5] = [1,2,[3,4],6]
// console.log(a,b,c,d)
//对象
// let user = {
//     name:'楠溪泽岸',
//     age:21
// }
// let name = user.name
// let age = user.age
// console.log(name,age)
// let user = {
//     name:'楠溪泽岸',
//     age:21
// }
// let {age,name} = user
// console.log(name,age)
// let user = {
//     name:'楠溪泽岸',
//     age:21
// }
// let {age:uAge,name:uName} = user
// console.log(uName,uAge)
//字符串解构赋值
// let str = '楠溪泽岸'
// for(let i = 0;i < str.length;i++){
//     console.log(str[i])
// }
// let [a,b,c,d] = '楠溪泽岸'
// console.log(a,b,c,d)

//应用场景
//数组默认值
// let [a,b,c,d = 8] = [1,2,3]
// console.log(a,b,c,d)
//对象默认值
// let user = {
//     name:'楠溪泽岸'
// }
// let {name,age = 21} = user
// console.log(name,age)
//复杂的
// function foo(){
//     console.log(123)
// }
// let [a = foo()] = []
//方法接收数据时解构
// function foo([a,b,c]){
//     console.log(a,b,c)
// }
// let arr = [1,2,3]
// foo(arr)
// function foo({name:uMame,age:uAge,school:uSchool = 'YNUFE'}){
//     console.log(uMame,uAge,uSchool)
// }
// let obj = {
//     name:'楠溪泽岸',
//     age:21
// }
// foo(obj)
// function foo(){
//     let obj = {
//         name:'楠溪泽岸',
//         age:21
//     }
//     return obj
// }
//
// let {name:uMame,age:uAge,school:uSchool = 'YNUFE'} = foo()
// console.log(uMame,uAge,uSchool)
//提取JSON数据
//模拟后端的json串
// let json = '{"a":"hello","b":"world"}'
// let {a,b} = JSON.parse(json)
// console.log(a,b)


