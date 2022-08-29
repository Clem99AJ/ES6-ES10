
//数值扩展---幂运算符
//自己定义
function pow(x,y){
    let res = 1
    for(let i = 0;i < y;i++){
        res *= x
    }
    return res
}
console.log(pow(2,10))

//Math.pow()
console.log(Math.pow(2,10))

//ES7
console.log(2 ** 10)