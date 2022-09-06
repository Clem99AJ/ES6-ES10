
//可选链：Optional chaining
//可选链
const user = {
    address:{
        street:'XX街道',
        getNum(){
            return '80号'
        }
    }
}

//我们在获取user的street属性时，不能直接.取
// 需要判断是否存在,才去取

//先不用可选链实现
const street = user && user.address && user.address.street
console.log(street)
//方法需要判断存在了才能用
const num = user && user.address && user.address.getNum && user.address.getNum()
console.log(num)
//用可选链实现
const street1 = user?.address?.street
console.log(street1)
const num1 = user?.address?.getNum?.()
console.log(num1)