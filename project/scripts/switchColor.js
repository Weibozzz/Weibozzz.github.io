/**
 * Created by Administrator on 2017/4/12.
 */
$(function(){
    $(".color_change>ul>li").click(function(){
        var bigImg=$("#bigImg").attr("src");//最大图的路径     images/pro_img/blue_one_small.jpg

        if($(this).index()==0){bigImg="images/pro_img/blue_one_small.jpg";$(".imgList_blue").show();$(".imgList_green ,.imgList_yellow ").hide();}
        if($(this).index()==1){bigImg="images/pro_img/yellow_one_small.jpg";$(".imgList_yellow").show();$(".imgList_blue,.imgList_green").hide();}
        if($(this).index()==2){bigImg="images/pro_img/green_one_small.jpg";$(".imgList_green").show();$(".imgList_blue,.imgList_yellow").hide();}

        $("#bigImg").attr("src",bigImg);
    })
})