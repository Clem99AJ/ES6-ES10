
//Promise的静态方法
//Promise.resolve---直接成功的回调
// let p1 = Promise.resolve('success')
// p1.then(res=>{
//     console.log(res)
// })
// //Promise.reject---直接失败回调
// let p2 = Promise.reject('fail')
// p2.catch(err=>{
//     console.log(err)
// })
// //用于对于之前的Promise简写
// function foo(flag){
//     if(flag){
//         //这是原本写异步的方法
//         return new Promise(resolve => {
//             resolve('success')
//         })
//     }else{
//         //这是直接使用静态方法
//         return Promise.reject('fail')
//     }
// }
// foo(false).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

//Promise.all([p1,p2,···])当数组内的Promise异步操作都成功进入该Promise的resolve
// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(res=>{
//         console.log(1)
//         resolve('1成功')
//         // reject('1失败')
//     },5000)
// })
// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(res=>{
//         console.log(2)
//         // resolve('2成功')
//         reject('2失败')
//     },2000)
// })
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(res=>{
//         console.log(3)
//         resolve('3成功')
//         // reject('3失败')
//     },3000)
// })
//
// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

//Promise.race([p1,p2,···])谁先完成，就用谁的回调
// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

//Promise.all([p1,p2,···])的应用例子---上传多张图片
const imgArray = ['1.jpg','2.jpg','3.jpg']
let PromiseArr = []
imgArray.forEach(item=>{
    PromiseArr.push(new Promise((resolve, reject)=>{
    //    这里省略一些图片上传的操作
        resolve(`url+${item}`)
    }))
})
Promise.all(PromiseArr).then(res=>{
    console.log('图片上传成功')
})

//Promise。race([])的应用例子---图片加载超时提醒
function getImg(){
    return new Promise((resolve, reject)=>{
        let img = new Image()
        img.onload = function (){
            resolve('Image load is successful')
        }
        // img.src = 'https://img-blog.csdnimg.cn/20190927151117521.png?x-oss-process=image/resize,m_fixed,h_224,w_224'
        img.src = 'abc'
    })
}
function timeout(){
    return new Promise((resolve, reject) =>{
        setTimeout(res=>{
            reject('Image load is fail')
        },2000)
    })
}
Promise.race([getImg(),timeout()]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
