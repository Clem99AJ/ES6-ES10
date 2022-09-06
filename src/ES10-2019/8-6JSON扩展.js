
//JSON扩展

//JSON superset---JSON超集
//针对  段分隔符\u2029  和  行分隔符\u2028 不能识别的问题
eval('let str = "imooc";\u2029 function foo(){return str}')
console.log(foo())

//JSON.stringify()增强能力
//解决之前转化范围小
//之前范围：0xD800~0xDfff
//  \uD83D\uDE0E  是一个字符，ES10解决了不识别的问题
console.log(JSON.stringify('\uD83D\uDE0E'))

