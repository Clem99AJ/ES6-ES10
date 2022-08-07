
//继承

//组合式继承--call继承属性，prototype继承方法
//父类--使用构造函数写一父类
function Animal(name){
    this.name = name
}
//在原型中给父类一个实体方法
Animal.prototype.showName = function (){
    console.log('动物的名字:' + this.name)
}

//子类--用call改变this指向来继承属性
function Dog(name,color){
    //call需要两个参数
    //第一个参数：需要改变指向的对象（需要继承的对象）
    //第二个参数：指向的对象（继承的对象的属性）
    Animal.call(this,name)//继承属性
    this.color = color
}
//prototype继承方法
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog


let dog = new Dog('旺财','white')
console.log(dog)
dog.showName()

