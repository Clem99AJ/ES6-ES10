
//空值合并计算符
//Nullish coalescing Operator

//只有 A ?? B 前面的值是null或undefined时才取B
//否则取A的值

//之前的符号 ||
//会把  '' ， 0 ， null ， undefined 认为是false
//但是需要的只是null和undefined才需要后面的值
const a = ''
const b = a || 5
console.log(b)

// ??  解决了这个问题
const a1 = ''
const b1 = a1 ?? 5
console.log(b1)