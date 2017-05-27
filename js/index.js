$(function () {
    /*轮播图的移入移出事件*/
    $(".my-main-left").hover(function(){
        $(".my-main-left .my-carousel-trans").fadeIn(1000);
    },function(){
        $(".my-main-left .my-carousel-trans").fadeOut(1000);
    });
});