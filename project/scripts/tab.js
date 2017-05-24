/**
 * Created by Administrator on 2017/4/12.
 */
$(function(){
    $(".tab_menu>ul>li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");//当前产品
        $(".tab_box>div").eq($(this).index()).show().siblings().hide();//当前产品说明
    }).hover(function(){
        $(this).toggleClass("hover");  //hover效果
    })
})