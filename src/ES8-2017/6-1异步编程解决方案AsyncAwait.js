
//异步编程解决方案async/await
//async的基本使用，像修饰符一样，放在函数前面
//返回值是Promise
// async function foo(){
//     return 'sad'//等同于Promise.resolve('sad')
// }

// console.log(foo())

//await的基本使用，写在async修饰的函数里
//await后面跟的一般是异步操作

//这里使用一个异步操作
// function timeout(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             // console.log(1)
//             resolve(1)
//         },1000)
//     })
// }
//
// async function foo(){
//     //使用await接在异步操作前，能让之后同步的操作等待异步操作执行完成
//     const res = await timeout()
//     console.log(res)
//     console.log(2)
// }
// foo()

//常用操作
// function timeout(){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             // console.log(1)
//             // resolve(1)
//             // resolve('success')
//             reject('fail')
//         },1000)
//     })
// }
// async function foo(){
//     return await timeout()
// }
// foo().then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })


//async/await可以一般用在发送请求
//伪代码模拟axios
// async function request(){
//     const data = await axios.get('https://www.xx.com')
//     console.log(data)
// }

//导入之前的ajax请求
import ajax from './ajax'

function request(url){
    return new Promise((resolve,reject) => {
        ajax(url,res=>{
            resolve(res)
        },err=>{
            reject(err)
        })
    })
}
//使用async和await完成异步操作顺序执行
async function getData(){
    const res1 = await request('static/a.json')
    console.log(res1)
    const res2 = await request('static/b.json')
    console.log(res2)
    const res3  = await request('static/c.json')
    console.log(res3)
}
getData()

