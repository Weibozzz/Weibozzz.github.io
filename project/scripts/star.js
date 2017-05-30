/**
 * Created by Administrator on 2017/4/12.
 */
$(function(){
    $(".pro_rating>ul>li").click(function(){
        var title=$(this).find("a").attr("title")
        alert("您给商品的评价为："+title)
        var index=$(this).index()+1;
        var locationY=index*(-16)+"px";
        $(".rating").css("background-position-y",locationY)
    })
})
