
$(function(){
    var a = 30;
    var b = -30;
    $("#jnNoticeInfo li a").mouseover(function(e){
        this.myTitle = this.title;
        this.title = "";
        //console.log(this.title);
        $("body").append("<div id='tooltip'>"+this.myTitle+"</div>");
        $("#tooltip").css({
            "left":e.pageX+a+"px",
            "top": e.pageY+b+"px"
        }).show();

    }).mouseout(function(){
        this.title = this.myTitle;
        $("#tooltip").remove();
    }).mousemove(function(e){
        $("#tooltip").css({
            "left":e.pageX+a+"px",
            "top": e.pageY+b+"px"
        }).show();
    })


})