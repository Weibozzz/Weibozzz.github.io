//1.
$(function(){
    $("#inputSearch").focus(function(){
        if($(this).val()=="请输入商品名称"){
            $(this).val("");
        }
    }).blur(function(){
        if($(this).val()==""){
            $(this).val("请输入商品名称");
        }
    }).keydown(function(e){
        if(e.keyCode == 13){
            alert("提交成功!");
        }
    })
})









