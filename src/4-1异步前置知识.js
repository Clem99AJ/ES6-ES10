
//异步操作前置知识
//JS是单线程的
console.log(1)
setTimeout(()=>{
    console.log(2)
},1000)
console.log(3)

//会先执行完主线程才会去执行异步的
console.log(1)
setTimeout(()=>{
    console.log(2)
},0)
console.log(3)

//如果执行主线程时间比异步时间长
// 那会等待主线程执行完毕才会执行异步

//伪代码，不可执行，只是表示主线程优先
// setTimeout(()=>{
//     console.log(1)
// },0)
// sleep(5000)
//则异步操作在5s后才会执行

//Ajax原理
//1、创建XMLHttpsRequest对象
// var url = 'http://musicapi.xiecheng.live/personalized'
// var xmlhttp
// if(window.XMLHttpRequest){//判断是不是新的浏览器
//     xmlhttp = new XMLHttpRequest()
// }else{//否则是老的浏览器
//     xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
// }
// //2、发送请求
// xmlhttp.open('GET',url,true)
// xmlhttp.send()
// //3、服务端请求
// xmlhttp.onreadystatechange = function (){
//     if(xmlhttp.readyState === 4 && xmlhttp.status ===200){
//         var obj = JSON.parse(xmlhttp.responseText)
//         console.log(obj)
//     }
// }

//把Ajax请求封装成函数

function ajax(url,callback){
    var xmlhttp
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
            var obj = JSON.parse(xmlhttp.responseText)
            callback(obj)
        }
    }
}
// var url = 'http://musicapi.xiecheng.live/personalized'
// ajax(url,res=>{
//     console.log(res)
// })

//Callback Hell回调深渊，回调地狱
//例：想按顺序调用1，2，3函数
//那就在1的回调函数里调用2然后再调用3
//可以应用在省市县三级联动的场景
ajax('static/a.json',res=>{
    console.log(res)
    ajax('static/b.json',res=>{
        console.log(res)
        ajax('static/c.json',res=>{
            console.log(res)
        })
    })
})


