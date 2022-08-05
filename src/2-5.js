// DOM 类数组和伪数组
//选中标签
let divs = document.getElementsByTagName('div')
console.log(divs)//HTMLCollection
//选中id为XX的标签
let div2 = document.getElementsByClassName('XX')
console.log(div2)//HTMLCollection
//传递选择器
// let divs3 = document.querySelectorAll('.xx')
// console.log(divs3)//NodeList
//
// //检验一个东西是不是数组
// console.log(divs3 instanceof Array)

//ES5  slice把类数组转化为真数组
let divs3 = document.querySelectorAll('.xx')
let res = Array.prototype.slice.call(divs3)
console.log(res)
res.push('test')
console.log(res)
//ES6 from把类数组转化为真数组
//首先，我们按照伪数组定义一个伪数组，有下标，有长度
let arrLike = {
    0:'es6',
    1:'es7',
    2:'es8',
    length:3
}
console.log(arrLike)
//用from转化
let res2 = Array.from(arrLike)
res2.push('es9')
console.log(res2)

//new Array()新建一个数组的一种方法
let arr = new Array(1,2)
console.log(arr)
//如果只放一个，那么就只是数组长度
let arr1 = new Array(3)
console.log(arr1)

//Array.of()新建一个数组的一种方法
let arr3 = Array.of(1,2,3)
console.log(arr3)
//如果只放一个，那就是只有一个值
let arr4 = Array.of(3)
console.log(arr4)
//特殊的用法，把一些不是同一类型放到一个数组中
let arr5 = Array.of(
    1,
    true,
    'es6',
    [1,2,3],
    {
        name:'楠溪泽岸',
        age:21
    }
)
console.log(arr5)
//copyWithin()需要三个参数
//必须的参数：从哪开始覆盖
//可选的参数：用哪的索引开始用来来覆盖
//可选的参数：用来覆盖的索引到哪结束
let arr6 = [1,2,3,4,5]
console.log(arr6.copyWithin(1,3))

//new Array(3).fill(初始值)给数组赋一个初始值
//三个参数（value,start,end）
let arr7 = new Array(3).fill(7)
console.log(arr7)
//给start到end赋值value
let arr8 = [1,2,3,4,5]
arr8.fill('楠',1,3)
console.log(arr8)
//若只给value则会全部替换
arr8.fill(0)
console.log(arr8)

//arr.include(NaN)可以解决ES中 NaN != NaN 的问题
// 方法本身和indexOf()作用类似
//indexOf(value)检查数组是否存在元素，存在返回索引，不存在返回-1,但是无法检查NaN
//include(value)检查数组是否存在元素，存在返回true,不存在返回false
let arr9 = [1,2,3,4,5,NaN]
console.log(arr9.indexOf(NaN))
console.log(arr9.includes(NaN))





