
//对象扩展
// Object.values() 和 Object.entries()

const obj = {
    name:'迦南学院',
    web:'www.imooc.com',
    course:'es8'
}
//老方法遍历values
console.log(Object.keys(obj))
const res = Object.keys(obj).map(key => obj[key])
console.log(res)

//ES8的Object.values()遍历值
console.log(Object.values(obj))

//ES8的Object.entries()遍历键值对
console.log(Object.entries(obj))
console.log(Object.entries([1,2,3]))
//结合for循环使用
for(let [key,val] of Object.entries(obj)){
    console.log(`${key}:${val}`)
}

