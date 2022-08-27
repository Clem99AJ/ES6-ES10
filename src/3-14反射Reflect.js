
//Reflect反射
//将Object上的方法转移到Reflect上去
//例如：ES5拦截代理的方法可以在Reflect中使用
let obj = {}
let newVal = ''
Reflect.defineProperty(obj,'name',{
    get(){
        return newVal
    },
    set(value){
        newVal = value
    }
})
obj.name = '萧炎'
console.log(obj.name)

//修改了Object中的返回值，让其合理
//之前Object中是没有返回值的
//使用try{}catch(e){}对其进行处理
// let obj2
// let obj3
// try{
//     Object.defineProperty(obj2,'name',{})
// }catch (e){
// }
// //而使用Reflect后，方法有了bool型的返回值
// if(Reflect.defineProperty(obj3,'name',{})){
//
// }

//让Object的操作变成一些函数行为
//让命令式操作变成函数式操作
//命令式
console.log('assign' in Object)
//函数式
console.log(Reflect.has(Object,'assign'))

//Reflect对象的方法与Proxy的方法一一对应
let user = {
    name:'萧炎',
    age:21,
    _password:'123456'
}
user = new Proxy(user,{
    get(target,prop){
        if(target[prop].startsWith('_')){
            return new Error('不可访问')
        }else{
            return Reflect.get(target,prop)
        }
    },
    set(target,prop,value){
        if(target[prop].startsWith('_')){
            return new Error('不可访问')
        }else{
            Reflect.set(target,prop,value)
            return true
        }
    },
    // has(target,prop){},
    deleteProperty(target, prop) {
        if(target[prop].startsWith('_')){
            return new Error('不可访问')
        }else{
            Reflect.deleteProperty(target,prop)
        }
    },
    ownKeys(target) {
        return Reflect.ownKeys(target).filter(key=>!key.startsWith('_'))
    }
})
