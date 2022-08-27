
//异步编程解决方案Promise
// let p = new Promise((resolve, reject)=>{
//     //Promise有两个参数
//     //resolve表示成功时的回调函数，reject表示失败时的回调函数
//     setTimeout(()=>{
//         resolve('成功')
//         // reject('失败')
//     },1000)
// }).then(res=>{//then表示Promise的主线程成功后，执行的函数，是异步的
// //    第一个参数表示成功后的操作---由resolve调用
//     console.log(res)
// },res=>{
// //    第二个参数表示失败后的操作---由reject调用
//     console.log(res)
// })

//这里的执行顺序是 1，2，3
//Promise会先执行new时的程序，然后then是异步的，会在主线程执行玩后执行
// let p2 = new Promise((resolve, reject)=>{
//     console.log(1)
//     resolve()
// })
// console.log(2)
// p2.then(res=>{
//     console.log(3)
// },res=>{})

// let p1 = new Promise((resolve, reject)=>{
//     resolve(1)
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(2)
//     },1000)
// })
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(3)
//     },1000)
// })
//这里看自己点开看的时间决定Promise的状态，1秒内pending，1秒后就是fulfilled或rejected
// console.log(p1)
// console.log(p2)
// console.log(p3)
// //这里输出时，已经完成所以是fulfilled
// setTimeout(()=>{
//     console.log(p2)
// },2000)
// //这里输出时，已经完成所以是rejected
// setTimeout(()=>{
//     console.log(p3)
// },2000)
//
// p1.then(res=>{
//     console.log(res)
// })
// p2.then(res=>{
//     console.log(res)
// })
// p3.catch(err=>{
//     console.log(err)
// })

//Promise的状态确定后，就不能改变
//例如：下面先调用resolve,再调用reject，先调用的resolve使状态确定后，就不会变为rejected
// let p = new Promise((resolve, reject)=>{
//     resolve(1)
//     reject(2)
// }).then(res=>{
//     console.log(res)
// },err=>{
//     console.log(err)
// })



//这里使用Promise解决Ajax的，使用时的 Callback Hell 的问题
// function ajax(url,callback){
//     let xmlhttp
//     if(window.XMLHttpRequest){//判断是不是新的浏览器
//         xmlhttp = new XMLHttpRequest()
//     }else{//否则是老的浏览器
//         xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
//     }
// //2、发送请求
//     xmlhttp.open('GET',url,true)
//     xmlhttp.send()
// //3、服务端请求
//     xmlhttp.onreadystatechange = function (){
//         if(xmlhttp.readyState === 4 && xmlhttp.status ===200){
//             let obj = JSON.parse(xmlhttp.responseText)
//             callback(obj)
//         }
//     }
// }
//这是一种相对麻烦的扁平化,虽然扁平化了，但是相对增加的代码量太多
// new Promise((resolve, reject)=>{
//     ajax('static/a.json',res=>{
//         console.log(res)
//         resolve()
//     })
// }).then(res=>{
//     return new Promise((resolve, reject)=>{
//         ajax('static/b.json',res=>{
//             console.log(res)
//             resolve()
//         })
//     })
// }).then(res=>{
//     return new Promise((resolve, reject)=>{
//         ajax('static/c.json',res=>{
//             console.log(res)
//         })
//     })
// })
// //所以把这个封装陈一个函数
// function getPromise(url){
//     return new Promise((resolve, reject)=>{
//         ajax(url,res=>{
//             resolve(res)
//         })
//     })
// }
// getPromise('static/a.json')
//     .then(res=>{
//         console.log(res)
//         return getPromise('static/b.json')
//     }).then(res=>{
//         console.log(res)
//         return getPromise('static/c.json')
//     }).then(res=>{
//         console.log(res)
//     })





function ajax(url,successCallback,failCallback){
    let xmlhttp
    if(window.XMLHttpRequest){//判断是不是新的浏览器
        xmlhttp = new XMLHttpRequest()
    }else{//否则是老的浏览器
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
//2、发送请求
    xmlhttp.open('GET',url,true)
    xmlhttp.send()
//3、服务端请求
    xmlhttp.onreadystatechange = function (){
        if(xmlhttp.readyState === 4 && xmlhttp.status ===200){
            let obj = JSON.parse(xmlhttp.responseText)
            //这里用&&表示，参数传递了就调用传递的，没有就不传递
            successCallback && successCallback(obj)
        }else if(xmlhttp.readyState === 4 && xmlhttp.status === 404){
            //这里用&&表示，参数传递了就调用传递的，没有就不传递
            failCallback && failCallback(xmlhttp.statusText)
        }
    }
}

//下面使用的
function getPromise(url){
    return new Promise((resolve, reject)=>{
        ajax(url,res=>{
            resolve(res)
        },err=>{
            reject(err)
        })
    })
}


//这里可以在then中使用第二个参数，也可以用catch统一调用来处理 失败的回调
//这里使用第二个参数
getPromise('static/aa.json')
    .then(res=>{
        console.log(res)
        return getPromise('static/b.json')
    },err=>{
        console.log(err)
        //这里如果不返回Promise，会让下一个then未定义
        // return getPromise('static/b.json')
    }).then(res=>{
        console.log(res)
        return getPromise('static/c.json')
    }).then(res=>{
        console.log(res)
    })

//这里使用catch统一处理失败的回调
getPromise('static/aa.json')
    .then(res=>{
        console.log(res)
        return getPromise('static/b.json')
    }).then(res=>{
        console.log(res)
        return getPromise('static/c.json')
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
        return
    })
