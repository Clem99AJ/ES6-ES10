
//数组扩展
//数组扁平化，能把多维数组降一维
//Array.prototype.flat(val)---val指层级
const arr = [1,2,3,[4,5,6,[7,8,9]]]
console.log(arr.flat())
console.log(arr.flat().flat())
console.log(arr.flat(2))
//层级无限，指的是直接扁平到一维
console.log(arr.flat(Infinity))

//Array.prototype.flatMap(val)---val指层级
//作用是flat和map的结合

//如果不使用flatMap,对一个数组遍历加一
const arr1 = [1,2,3,4,5]
const res = arr1.map(x => x + 1)
const res1 = arr1.map(x => [x + 1]).flat()
console.log(res1)
//使用flatMap
const res2 = arr1.flatMap(x => [x + 1])
console.log(res2)
