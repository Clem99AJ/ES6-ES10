
//Symbol扩展---Symbol.prototype.description

//Symbol(val)---val是Symbol的描述属性，使用description能获取其中的内容
const s = Symbol('imooc')
console.log(s)
console.log(s.description)
//description属性只可读，不可写
s.description = 'YUNFE'
console.log(s)
