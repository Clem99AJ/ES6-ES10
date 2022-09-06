
//Promise扩展，Promise.prototype.finally()
//不管成功还是失败，都回调
//一般用在请求接口，结束转圈圈的动画

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('success')
        // reject('fail')
    })
}).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('finally')
})

