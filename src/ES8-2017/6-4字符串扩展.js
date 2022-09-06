
//需要两个参数
//参数1：需要填充到几位
//参数2：用来填充的字符串

const str = '萧炎'
//从头填充
console.log(str.padStart(8,'x'))
//从尾填充
console.log(str.padEnd(8,'x'))
console.log(str.padStart(8))


//应用场景
//时间格式填充（YYYY-MM-DD => 2001-01-01）
let date = new Date()
let Year = date.getFullYear()
let Month = (date.getMonth() + 1).toString().padStart(2,'0')
let Day = date.getDay().toString().padStart(2,'0')
console.log(`${Year}-${Month}-${Day}`)

//手机号只显示后四位（*******9267）
let phoneNumber = '15351239267'
console.log(phoneNumber.slice(-4).padStart(phoneNumber.length,'*'))
//处理后端返回的秒级时间戳（10位）为 毫秒级时间戳（13位）
//尾部填充0


