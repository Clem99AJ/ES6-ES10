
//可选的Catch Binding
//省略catch绑定的参数和括号
//在ES10后，catch的括号和参数可以不写

//这里定义一个方法来判断是否是JSON字符串
const validJSON = json => {
    try{
        JSON.parse(json)
        return true
    }catch{
        //这里不需要catch(e)里的异常提示
        //所以就省略了括号和参数
        return false
    }
}
const str = '{"name":"萧炎"}'
const str1 = '{name:"萧炎"}'
console.log(validJSON(str))
console.log(validJSON(str1))
