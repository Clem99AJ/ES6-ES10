
//for await of
//这里先复习之前的同步迭代Iterator,是同步的
const arr = ['es6','es7','es8','es9']
arr[Symbol.iterator] = function (){
    let nextIndex = 0
    return{
        next(){
            return nextIndex < arr.length ? {
                value:arr[nextIndex++],
                done:false
            } : {
                value: undefined,
                done:true
            }
        }
    }
}
for(let item of arr){
    console.log(item)
}

//这里使用asyncIterator完成异步遍历
function getPromise(time){
    return new Promise(resolve => {
        setTimeout(res=>{
            resolve({
                value:time,
                done:false
            })
        },time)
    })
}
const arr_async = [getPromise(1000),getPromise(2000),getPromise(3000)]
arr_async[Symbol.asyncIterator] = function (){
    let nextIndex = 0
    return{
        next(){
            return nextIndex < arr_async.length ? arr_async[nextIndex++]
                : Promise.resolve({
                        value:undefined,
                        done:true
                })
        }
    }
}
//for of循环是普通的循环，是同步的,不能在异步用
for(let item of arr_async){
    console.log(item)
}
//异步的需要使用for await of,是异步的
async function test(){
    for await(let item of arr_async){
        console.log(item)
    }
}
test()
