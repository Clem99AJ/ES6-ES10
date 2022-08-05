let arr = [1,2,3,4,5]

//for的使用
//break
for(let i = 0;i < arr.length;i++){
    if(i === 3){
        break
    }
    console.log(arr[i])
}
//continue
for(let i = 0;i < arr.length;i++){
    if(i === 3){
        continue
    }
    console.log(arr[i])
}
//forEach()
arr.forEach(function (elem,index,array) {
    console.log(elem,index)
})

//map进行操作后生成新的数组
let result = arr.map(function (value){
    value+=1
    return value
})
console.log(arr,result)

//filter过滤
let result2 = arr.filter(function (value){
    console.log(value)
    return value == 2
})
console.log(arr,result2)

//some如果存在所需要的元素，则不进行之后的遍历，返回true
let result3 = arr.some(function (value){
    console.log(value)
    return value == 2
})
console.log(arr,result3)

//every检查数组中的每一个元素，是否都符合所需要的元素
let result4 = arr.every(function (value){
    console.log(value)
    return value == 3
})
console.log(arr,result4)

//reduce有两个参数，一个函数，一个初始值
let sum = arr.reduce(function (prev,cur,index,array){
    return prev + cur
},0)
console.log(sum)
let max = arr.reduce(function (prev,cur,index,array){
    return Math.max(prev,cur)
},0)
console.log(max)
//去重
let arr2 = [1,2,2,3,4,5,5,6,6,7]
let result5 = arr2.reduce(function (prev,cur,index,array){
    prev.indexOf(cur) == -1 && prev.push(cur)
    return prev
},[])
console.log(result5)

Array.prototype.foo = function (){
    console.log('foo')
}
for(let index in arr){
    console.log(index,arr[index])
}

//ES6 的数组遍历
//find 返回第一个通过测试的元素
// let arr3 = [1,2,3,4,5,2]
// let res = arr3.find(function (value) {
//     return value == 2
// })
// console.log(arr3,res)

//findIndex 返回第一个通过测试的元素的下标
// let arr3 = [1,2,3,4,5,2]
// let res = arr3.findIndex(function (value) {
//     return value == 2
// })
// console.log(arr3,res)
//for of
// let arr3 = [1,2,3,4,5,2]
// for(let item of arr3){
//     console.log(item)
// }
//for of values()
// let arr3 = [1,2,3,4,5,2]
// for(let item of arr3.values()){
//     console.log(item)
// }
//for of keys()
// let arr3 = [1,2,3,4,5,2]
// for(let item of arr3.keys()){
//     console.log(item)
// }
//for of entries
let arr3 = [1,2,3,4,5,2]
for(let [index,item] of arr3.entries()){
    console.log(index,item)
}






