//ES里用function模拟类，类一般首字母大写
function People(name,age){
    //实例属性
    this.name = name
    this.age = age
    People.count++
}
//ES5里方法不直接写在构造函数（类）里，而是写在protoType里
//实例方法
People.prototype.show = function (){
    console.log(this.name +' '+this.age)
}


//静态方法
console.log(Math.max(4,5))
console.log(Math.random())
//静态属性直接在类里面区定义,使用时不需要去new一个对象
People.count = 0
//静态方法
People.showCount = function (){
    console.log(this)
    console.log('new了  ' + People.count +'  次People')
}


let p1 = new People('萧炎',21)
p1.show()
let p2 = new People('云韵',21)
p2.show()

//自带的几个类
let str = new String('YNUFE')
console.log(str)
let arr = new Array(1,2,3)
console.log(arr)
let obj = new Object({name:'楠溪泽岸',age:21})
obj.school = 'YNUFE'
console.log(obj)

//调用静态属性
console.log(People.count)
//调用静态方法
console.log(People.showCount())