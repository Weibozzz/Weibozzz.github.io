/**
 * Created by Administrator on 2017/4/12.
 */
$(function(){
    $("#cart").click(function(){
        var str="你放入购物车的商品为：\n"
        +$(".jnProDetail>h4").text()+"\n"
        +"颜色："+$(".color_change>strong").text()+"\n"
        +"尺寸："+$(".pro_size>strong").text()+"\n"
        +$(".pro_num").prev().text()+"\n"
        +"总价为："+$(".pro_price>strong").text()+"\n";
        alert(str)
    })
})
