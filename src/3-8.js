
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
//表示6 \u{7A}
console.log('\u{7A}')

//字符串的遍历器接口
for(let item of 'imooc'){
    console.log(item)
}

//模板字符串
//如果不用模板字符串打印换行需要\n
const str1 = '打算大苏打\n'
+'大大大大撒\n'
+'大大实打实\n'
console.log(str1)

//如果字符串中间有变量有变量
// const a = 30
// const b = 20
// const c = 'ES5'
// const str2 = '我的年龄是:' + (a + b)+'岁'+ c
// console.log(str2)

//使用模板字符串换行,就直接换行就可以
const str3 = `大撒大撒
撒地方大师傅
啊大大发`
console.log(str3)

//能在模板字符串内，使用标签
const str4 = `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
`
console.log(str4)

//模板字符串内使用变量，遇到变量使用${}符号解析变量
const a = 30
const b = 20
const c = 'ES5'
const str5 =` 我的年龄是${a + b} + ${c}`
console.log(str5)

//嵌套模板
//ES5里写一个判断屏幕大小，然后对应使用样式
//先写一个判断大屏幕的方法
const isLargeScreen = ()=>{
    return false
}
let class1 = 'icon'
class1 += isLargeScreen() ? ' icon-big ' : ' icon-small '
console.log(class1)

//ES6里使用嵌套模板实现
const class2 = `icon ${isLargeScreen()?'icon-big':'icon-small'}`
console.log(class2)

//使用模板字符串传参数
// 会把零散的字符串组合为一个数组作为第一个参数
 function foo(a,b,c,d) {
     console.log(a)
     console.log(b)
     console.log(c)
     console.log(d)
}
const name = '萧炎'
const age = 21
const gender = 'male'
foo`He is ${name},who age is ${age}-${gender}`

//识别码点
//ES5不能识别大于0xFFFF的码点
console.log(String.fromCharCode(0x20BB7))
//ES6能识别大于0xFFFF的码点
console.log(String.fromCodePoint(0x20BB7))

//ES5中indexOf返回子串存在处的下标
const str7 = 'imooc'
console.log(str7.indexOf('oc'))
//ES6中includes判断是否存在字符子串
console.log(str7.includes('oc'))


//判断字符串是否以某个字符串开头
const str8 = 'imooc'
console.log(str8.startsWith('im'))
//判断字符串是否以某个字符串结尾
const str9 = 'imooc'
console.log(str9.endsWith('ooc'))

//让同一个字符串重复多次
const str10 = 'imooc'
console.log(str10.repeat(5))

