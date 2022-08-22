
//正则表达式的扩展
//新的修饰符
//ES5中的
//i(忽略大小写),m(多行匹配),g(全局匹配)
//ES6新的修饰符
//y() 粘连修饰符

//这里使用全局匹配g和粘连匹配y做对比
// const str = 'aaa_aa_a'
// const reg1 = /a+/g  //a+表示几个连续的a在一起，g修饰符会在剩余的部分中全局匹配
// const reg2 = /a+/y  //y修饰符会在剩余的部分中，从第一个开始匹配
//
// console.log(reg1.exec(str))
// console.log(reg2.exec(str))
//
// console.log(reg1.exec(str))
// console.log(reg2.exec(str))
//
// console.log(reg1.exec(str))
// console.log(reg2.exec(str))

//u修饰符  unicode相关
const str = '\uD842\uDFB7'  //表示一个字符
//这里应该不是匹配成功，但是却返回了true,因为ES5中不可以超过0xFFFF
console.log(/^\uD842/.test(str)) //^表示以什么开头
//ES6中使用u修饰符才会正确匹配
console.log(/^\uD842/u.test(str))

// . 除了换行符以外的任意当个字符
console.log(/^.$/.test(str))
console.log(/^.$/u.test(str))



