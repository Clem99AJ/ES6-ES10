
//dotAll
// . 能匹配任意单个字符
const reg = /./
console.log(reg.test('5'))
console.log(reg.test('x'))
//但是不能匹配转义字符
console.log(reg.test('\n'))
console.log(reg.test('\r'))
console.log(reg.test('\u{2028}'))
console.log(reg.test('\u{2029}'))

//开启dotAll模式---s修饰符号
const reg2 = /./s
console.log(reg2.test('5'))
console.log(reg2.test('x'))
console.log(reg2.test('\n'))
console.log(reg2.test('\r'))
console.log(reg2.test('\u{2028}'))
console.log(reg2.test('\u{2029}'))
/*
* 目前的修饰符
* g:全局修饰符
* i:忽略大小写修饰符
* m:跨行匹配
* y:粘连修饰符
* u:用于匹配unicode
* s:dotAll修饰符，真正的能单个字符
*
* */

//具名组匹配
//这是ES5里使用的模式匹配，匹配后groups是undefined,就是只有数组下标，即匹配后元素是匿名的
const date = /(\d{4})-(\d{2})-(\d{2})/.exec('2020-02-01')
console.log(date)
//这里使用ES9新增的具名组匹配
const date2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2020-02-01')
console.log(date2)
//有了key之后，就可以使用之前的结构，迅速取出其中的内容
let {year,month,day} = date2.groups
console.log(year,month,day)

//后行断言---ES9新特性
//先行断言---ES5老特性

//先行断言---匹配目标字符串后面是否接着要求的字符串,匹配到则返回目标字符串
const str = 'ecmascript'
console.log(str.match(/ecma(?=script)/))

//后行断言---匹配目标字符串前面是否接着要求的字符串，匹配到则返回目标字符串
console.log(str.match(/(?<=ecma)script/))
//后行断言---匹配目标字符串前面是否没有接着要求字符串，匹配到则返回目标字符串
console.log(str.match(/(?<!ecma)script/))



