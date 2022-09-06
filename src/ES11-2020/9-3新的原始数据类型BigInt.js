
//新的原始数据类型：BigInt

//有两种定义BigInt型的方法
//当数字超过Number的最大限制，就需要使用这种类型
console.log(2 ** 53)
//9007199254740992是Number的最大值
//方法一：在数字后面直接接上一个字母n
const bigInt = 9007199254740993n
console.log(bigInt)
console.log(typeof bigInt)
//方法二：使用BigInt(value)
const bigInt1 = BigInt(9007199254740995)
console.log(bigInt1)

//若要删除结尾的n,只能用toString方法，因为Number存不下
console.log(bigInt1.toString())

//BigInt的计算
console.log(bigInt + bigInt1)

