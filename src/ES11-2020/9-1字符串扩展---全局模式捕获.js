
//字符串扩展---全局模式捕获：String.prototype.matchAll()
let str = `
    <html>
        <body>
            <div>第一个div</div>
            <p>这是p</p>
            <div>第二个div</div>
            <span>这是span</span>
        </body>
    </html>
`
//获取所有所有需要匹配的字符串
//这里需求是：匹配所有div内的字符串

//匹配规则
const regExp = /<div>(.*)<\/div>/g
//exec g---这个是使用正则来匹配
function selectDiv(regExp,str){
    let matches = []
    while(true){
        const match = regExp.exec(str)
        if(match == null){
            break
        }
        matches.push(match[1])
    }
    return matches
}

const res = selectDiv(regExp,str)
console.log(res)


//match---来匹配(缺点：直接得到所有的结果，没有表达式)
console.log(str.match(regExp))

//replace---来匹配
function selectDiv1(regExp,str){
    let matches = []
    str.replace(regExp,(all,first)=>{
        matches.push(first)
    })
    return matches
}
const res1 = selectDiv1(regExp,str)
console.log(res1)

//matchAll---来匹配
function selectDiv2(regExp,str){
    let matches = []
    for(let match of str.matchAll(regExp)){
        matches.push(match[1])
    }
    return matches
}
const res2 = selectDiv2(regExp,str)
console.log(res2)
