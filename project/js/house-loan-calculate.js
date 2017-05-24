var tr=document.getElementsByTagName("tr");
for(var i=0;i<tr.length;i++){     //当前添加背景色
    tr[i].onmouseover=function(){
        changeColor(this,"#f2f2f2")
    };
    tr[i].onmouseout=function(){
        changeColor(this,"white")
    }
}
//添加onblue事件
$("unitPrice").onblur=function (){return checkedEmpty("unitPrice",/^\d+(\.\d{1,2})?$/);};
$("rent").onblur=function (){return checkedEmpty("rent",/^\d+(\.\d{1,2})?$/);};
$("cost").onblur=function (){return checkedEmpty("cost",/^\d+(\.\d{1,2})?$/);};
$("area").onblur=function (){return checkedEmpty("area",/^\d+(\.\d{1,2})?$/);};
$("interest").onblur=function (){return checkedEmpty("interest",/^\d+(\.\d{1,2})?$/);};
//添加onfous事件
$("unitPrice").onfocus=function (){return getFocus("unitPrice");};
$("cost").onfocus=function (){return getFocus("cost");};
$("rent").onfocus=function (){return getFocus("rent");};
$("area").onfocus=function (){return getFocus("area");};
$("interest").onfocus=function (){return getFocus("interest");};


function checkedData(){ //检查数据验证
     return $("unitPrice").onblur()&&
            $("rent").onblur()&&
            $("cost").onblur()&&
            $("area").onblur()&&
            $("interest").onblur();
}
$("result").onclick=function (){ //计算函数
    checkedData();
    if(checkedData()){            //验证通过
        var t_unitPrice=parseInt(getValue("unitPrice"));
        var t_rent=parseFloat(getValue("rent"));
        var t_cost=parseFloat(getValue("cost"));
        var t_area=parseFloat(getValue("area"));
        var t_first=parseFloat(getValue("first"));
        var t_interest=parseFloat(getValue("interest"));
        $("firstResult").innerHTML=t_unitPrice*t_area*t_first/10;
        $("totalResult").innerHTML=t_unitPrice*t_area*(1-t_first/10);
        $("interestResult").innerHTML=(parseFloat( $("totalResult").innerHTML)*t_interest/100/12).toFixed(2);
        $("rentResult").innerHTML=t_rent*t_area;
        $("costResult").innerHTML=t_cost*t_area;
    }
};
function getValue(eleName){  //获取value值
    if($(eleName)!=null){
        return $(eleName).value;
    }else{

    }return "";
}
