
//动态导入
//这里实现，点击按钮时，才导入ajax
//功能和Vue Router很像
const oBtn = document.querySelector('#btn')
oBtn.addEventListener('click',()=>{
    import('../ajax').then(mod=>{
        console.log(mod)
        mod.default('static/a.json',res=>{
            console.log(res)
        })
    })
})
