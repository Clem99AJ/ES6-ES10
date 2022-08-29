
//模块化Module

//模块化规范
//CommonJS:Node.js
//AMD:require.js
//CMD:sea.js

//ES6
//导出export，导入import
//导入和导出的名字要一样

//这里时export 和 export default 的混合导入
import mod , {
    a as aa,
    b as bb,
    People
} from './module'

console.log(aa,bb)
console.log(mod.sum(2,7))
console.log(mod.obj)
let people = new People()
people.name = '萧熏儿'
people.showName()

