$(function(){
    $("#skin li").click(function(){
        index = this.id;
        $(this).addClass("selected").siblings().removeClass("selected");
        $("#cssfile").attr("href","styles/skin/"+index+".css");
    })
})



