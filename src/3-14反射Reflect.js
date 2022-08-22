
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


