function ajax(url,successCallback,failCallback){
    let xmlhttp
    if(window.XMLHttpRequest){//判断是不是新的浏览器
        xmlhttp = new XMLHttpRequest()
    }else{//否则是老的浏览器
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
//2、发送请求
    xmlhttp.open('GET',url,true)
    xmlhttp.send()
//3、服务端请求
    xmlhttp.onreadystatechange = function (){
        if(xmlhttp.readyState === 4 && xmlhttp.status ===200){
            let obj = JSON.parse(xmlhttp.responseText)
            //这里用&&表示，参数传递了就调用传递的，没有就不传递
            successCallback && successCallback(obj)
        }else if(xmlhttp.readyState === 4 && xmlhttp.status === 404){
            //这里用&&表示，参数传递了就调用传递的，没有就不传递
            failCallback && failCallback(xmlhttp.statusText)
        }
    }
}
export default ajax