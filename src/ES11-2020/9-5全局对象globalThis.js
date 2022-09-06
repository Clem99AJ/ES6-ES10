
//全局对象globalThis

//JS的全局对象有
//node: global
//ES: window / self

//例如：setTimeout是全局的方法
setTimeout(()=> {
    console.log(1)
},1000)
window.setTimeout(()=>{
    console.log(2)
},2000)
self.setTimeout(()=>{
    console.log(3)
},3000)

//用老方法看全局有没有对象
//需要定义一个函数，一个一个的判断---这样太麻烦
function getGlobal(){
    if(typeof window !== 'undefined'){
        return window
    }
    if(typeof self !== 'undefined'){
        return self
    }
    if(typeof global !== 'undefined'){
        return global
    }
    throw new Error('Not find global Object')
}
const global = getGlobal()
console.log(global)

//ES11提供的---globalThis能直接包含上面的三种方法
console.log(globalThis)