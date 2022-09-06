
//字符串扩展
const str = '  Math  '
//去除前后的空格之前使用---正则表达式
console.log(str)
console.log(str.replace(/^\s+/g,''))//替换前面的空格
console.log(str.replace(/\s+$/g,''))//去掉后面的空格

//str.trimStart()---去除前面的空格
console.log(str.trimStart())
console.log(str.trimLeft())
//str.trimEnd()---去除后面的空格
console.log(str.trimEnd())
console.log(str.trimRight())
//去除前后空格
console.log(str.trim())