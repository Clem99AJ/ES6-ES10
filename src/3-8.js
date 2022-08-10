
//字符串扩展
//unicode
//es6 \uxxxx 码点 0000~ffff
//  \u20BB7 -> 如果不特殊处理则会被默认隔开  \u20BB 7
//  \u{20BB7} 用{}包裹就可以被识别为一个整体
console.log('\u{20BB7}')
//如果需要的是一个字符
//用z为例
//表示1
console.log('z')
//表示2
console.log('\z')
//表示3 是 \HHH 八进制
// console.log('\172')
//表示4 是 \xHH 16进制
// console.log('\x7A')
//表示5 \u007A
console.log('\u007A')