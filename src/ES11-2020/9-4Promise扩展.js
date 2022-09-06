
//Promise扩展
//Promise.allSettled()
//能得到完成后的状态

//这个是Promise.all---需要所有都resolve才会到then
// 有一个reject就会跳到catch，并且只返回reject的信息
// 这样就造成得不到resolve的信息
Promise.all([
    Promise.resolve({
        code:200,
        data:[1,2,3]
    }),
    // Promise.resolve({
    //     code:200,
    //     data:[4,5,6]
    // }),
    Promise.reject({
        code:500,
        data:[]
    }),
    Promise.resolve({
        code:200,
        data:[7,8,9]
    })
]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})


//这里使用Promise.allSettled([])---能返回其中的所有信息
// Promise.allSettled([
//     Promise.resolve({
//         code:200,
//         data:[1,2,3]
//     }),
//     Promise.reject({
//         code:500,
//         data:[]
//     }),
//     Promise.resolve({
//         code:200,
//         data:[7,8,9]
//     })
// ]).then(res=>{
//     let fulfilled = res.filter(item=>item.status=='fulfilled')
//     console.log('fulfilled',fulfilled)
//     let rejected = res.filter(item=>item.status =='rejected')
//     console.log('rejected',rejected)
//     console.log('success')
// }).catch(err=>{
//     console.log(err)
//     console.log('fail')
// })
