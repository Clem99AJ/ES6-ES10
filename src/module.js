
//导出的格式
//变量
// export const a = 5
// export const b = 'mai'
// //函数
// export const sum = (x,y)=>x + y
// //对象
// const obj = {
//     name:'萧炎',
//     age:21,
//     school:'迦南学院'
// }
// export { obj }

//全部导出
const a = 5
const b = 'mai'
const sum = (x,y)=>x + y
const obj = {
    name:'萧炎',
    age:21,
    school:'迦南学院'
}
class People{
    constructor(name){
        this.name = name
    }
    showName(){
        console.log(this.name)
    }
}
export{
    a,
    b,
    People
}
export default {
    sum,
    obj
}
