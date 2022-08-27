
//异步编程解决方案Generator
// function foo(){
//     for(let i = 0;i < 3;i++){
//         console.log(i)
//     }
// }

//不能作为构造函数使用
//Generator的写法
function*foo(){
    for(let i = 0;i < 3;i++){
        //这个类似于断点，运行到这里算一步
        //yield用来标记next的一步
        yield i
    }
}
//Generator.next()能让函数进行下一步
// 但是下一步完成后会暂停，直到使用下一个next
let f = foo()
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())

//Generator内的yield只能在本层函数使用
function* gen(args){
    args.forEach(item=>{
        //这是gen函数里的箭头函数，所以会报错
        // yield item + 1
    })
}


function* gen1(x){
    let y = 2 * (yield(x + 1))
    let z = yield(y / 3)
    return x + y + z
}
let g1 = gen1(5)
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());


//next().value会得到这一步的返回值，即这一步的yield
function* count(x = 1){
    while (true){
        if(x % 7 === 0){
            yield x
        }
        x++
    }
}
let n = count()
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)


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
function request(url){
    ajax(url,res=>{
        getData.next(res)
    })
}
function* gen3(){
    let res1 = yield request('static/a.json')
    console.log(res1)
    let res2 = yield request('static/b.json')
    console.log(res2)
    let res3 = yield request('static/c.json')
    console.log(res3)
}
let getData = gen3()
getData.next()

