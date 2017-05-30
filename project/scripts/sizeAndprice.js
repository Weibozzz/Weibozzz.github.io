/**
 * Created by Administrator on 2017/4/12.
 */
$(function(){
    $(".color_change>ul>li>img").click(function(){
        var imgAlt=$(this).attr("alt");
        $(".color_change>strong").text(imgAlt);//颜色变化
    });
    $(".pro_size>ul>li").click(function(){
        var sizeText=$(this).text();
        $(this).addClass("cur").siblings().removeClass("cur");//增加当前尺寸的背景色
        $(".pro_size>strong").text(sizeText);//显示当前的尺寸大小
    });
    $(".pro_num").prev().html("数&#12288;&#12288;量：1");//当前数量为1
    $("#num_sort").change(function(){
        var sort=$(this).val();//选择框的数量
        var unitPrice=$(".tbDetailPrice>strong").text();//促销价格
        $(".pro_num").prev().html("数&#12288;&#12288;量："+sort);
        $(".pro_price>strong").text(sort*unitPrice);//计算总价
    })
})
