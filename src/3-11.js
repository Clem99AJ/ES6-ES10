
//数值的扩展

//ES5进制转化
//十进制 -> 二进制
const a =15
console.log(a)
console.log('二进制',a.toString(2))
console.log('二进制',a.toString(8))
console.log('十六机制',a.toString(16))
//二进制 -> 十进制
const b = 1111
console.log(parseInt(b,2))
//ES6进制转化   0B二进制  0O八进制

//0B作为前缀表示二进制
const c = 0B0101
console.log(c)
//0O作为前缀表示八进制
const d = 0O777
console.log(d)

// Number.isFinite(value) 判断当前值，是否是有限的
console.log(Number.isFinite(199))
console.log(Number.isFinite(0.5))
console.log(Number.isFinite(5 / 0))
console.log(Number.isFinite('sad'))


// Number.isNaN(value)  判断当前值是否不是一个数字
console.log(Number.isNaN(199))
console.log(Number.isNaN(0.5))
console.log(Number.isNaN(5 / 0))
console.log(Number.isNaN('sad'))
console.log(Number.isNaN(NaN))

// Number.parseInt(value)  转化为整数
console.log(Number.parseInt('5.5'))
// Number.parseFloat(value)   转化为浮点数
console.log(Number.parseFloat('5.5'))

// Number.isInteger(value)  判断当前值是不是整数
console.log(Number.isInteger(5))
console.log(Number.isInteger(5.0))
console.log(Number.isInteger('asd'))

//0.1+0.2 === 0.3 ???
//ES中IEEE 754 标准存数字--双精度标准
console.log(0.1+0.2===0.3)
//因为精度问题，超过16位会被省略
console.log(0.1000000000000001)
console.log(0.10000000000000001)
console.log(0.10000000000000001 === 0.1)

//在ES中整数的最大值是2的53次方S
const max = Math.pow(2,53)
console.log(max)
console.log(max + 1)

//方法得到最大值-1
console.log(Number.MAX_SAFE_INTEGER)

//方法得到最小值+1
console.log(Number.MIN_SAFE_INTEGER)

//判断当前值，是否是安全的值
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1))

// Math.trunc(value) 把值转化为整数,可以把bool型也转化为整数
console.log(Math.trunc(5.5))
console.log(Math.trunc(-5.5))
console.log(Math.trunc(true))
console.log(Math.trunc(false))
console.log(Math.trunc(NaN))
console.log(Math.trunc(undefined))

// Math.sign(value) 判断当前值是正数还是负数还是0
console.log(Math.sign(5))
console.log(Math.sign(-5))
console.log(Math.sign(0))
console.log(Math.sign(true))
console.log(Math.sign(false))
console.log(Math.sign(NaN))
console.log(Math.sign('sad'))

// Math.cbrt(value) 计算一个数的立方根
console.log(Math.cbrt(27))