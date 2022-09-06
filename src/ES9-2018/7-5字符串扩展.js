
//字符串扩展
//放松了对模板字符串的限制---即使unicode码错误，也不会报错

//这里复习一下之前学的模板字符串
function foo(a,b,c,d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}
const name = '萧炎'
const age = 21
foo`这是${name},他的年龄是${age}岁`

//这里使用ES9新特性---对错误的unicode码不报错
function foo2(args){
    console.log(args)
}
foo2`\u{61} and \u{63} `
