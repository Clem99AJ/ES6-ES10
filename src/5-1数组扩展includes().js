
//includes(searchElement,fromIndex) -> boolean
//参数1：需要找的元素（必传）
//参数2：从哪个索引开始寻找（选传）
//返回值：boolean类型
const arr = ['es6','es7','es8']
//只用一个参数的情况
console.log(arr.includes('es7'))
console.log(arr.includes('es9'))

//使用两个参数的情况
//参数2为正数的情况---从正数的索引处开始找,索引从0开始计数
console.log(arr.includes('es7',1))
console.log(arr.includes('es7',2))
//参数2为负数的情况---从倒数的地方开始找，倒数从1开始计数
console.log(arr.includes('es7',-2))

//includes VS indexOf

//indexOf(searchElement,fromIndex) -> 1,-1
//参数1：需要找的元素（必传）
//参数2：从哪个索引开始寻找（选传）
//返回值：1存在，-1不存在
//只用一个参数
console.log(arr.indexOf('es7'))
//使用两个参数
console.log(arr.indexOf('es7',1))
console.log(arr.indexOf('es7',2))
