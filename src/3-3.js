
//ES6的类与继承
class People{
    //实例属性
    constructor(name,age,sex) {
        this.name = name
        this.age = age

        this._sex = -1
    }
    //使用get,set方法来写实例属性,可以对属性赋值取值时写一些逻辑
    get sex(){
        //1代表male,0代表female
        if(this._sex == 1){
            return 'male'
        }else if(this._sex == 0){
            return 'female'
        }else {
            return 'error'
        }
    }
    set sex(val){
        //只有是1和0的时候才赋值
        if(val == 1 || val == 0){
            this._sex = val
        }
    }
    //实例方法
    showName(){
        console.log('Name is ' + this.name)
    }
    //static静态方法
    static getCount(){
        return 5
    }
}
//ES6里class中不可以定义静态属性,需要静态属性只能和ES5一样,类名.XX来定义
People.count = 0

let p1 = new People('萧炎',21)
console.log(p1)
p1.showName()
p1.sex = 1
console.log(p1.sex)
console.log(People.getCount());
console.log(People.count)
//继承
class Coder extends People{
    //实例属性
    constructor(name,age,company) {
        //用super来继承父类中的属性
        super(name,age);
        this.company = company
    }
    //实例属性
    showCompany(){
        console.log("Company is " + this.company)
    }
}
let coder = new Coder('萧熏儿',21,'古族')
console.log(coder)
coder.showName()
coder.showCompany()
console.log(Coder.getCount());