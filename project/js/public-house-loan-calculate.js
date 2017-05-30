/**
 * Created by Administrator on 2017/4/4.
 */
function $(ID){
    return document.getElementById(ID);
}
function changeColor(obj,color){  //添加背景颜色
    obj.bgColor=color;
}
function checkedEmpty(eleName,RegExp){  //正则验证
    var obj=$(eleName);
    var msg=$(eleName+"Msg");
    var str=obj.value;
    var path=RegExp;
    if(!path.test(str)){
        msg.innerHTML="格式不正确，小数点后最多两位！";
        obj.style.borderColor="red";
        msg.className="wrong";
        return false;
    }else{
        msg.innerHTML="输入正确";
        obj.style.borderColor="green";
        msg.className="correct";
        return true;
    }
}
function getFocus(eleName){ //获得焦点时候的提示
    var obj=$(eleName);
    var msg=$(eleName+"Msg");
    msg.innerHTML="注意格式要正确";
    obj.style.borderColor="orange";
    msg.className="prompt";

}