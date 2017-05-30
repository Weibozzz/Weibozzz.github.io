$(function () {
    /*点击切换css样式表*/
    $(".my-container .btn").eq(0).click(function(){
        $("#page2Link").attr("href","css/page22.css")
        $(this).addClass("active").siblings("button").removeClass("active");
        $("canvas").css("display","none");
        $("iframe").attr("src","");
        $(".myul").show();
        $(".small").hide();
        $("#dituContent").hide();
    });
    $(".my-container .btn").eq(1).click(function(){
        $("#page2Link").attr("href","css/page2.css")
        $(this).addClass("active").siblings("button").removeClass("active");
        $("canvas").css("display","none");
        $("iframe").attr("src","");
        $(".myul").show();
        $(".small").show();
        $("#dituContent").hide();
    });
    $(".my-container .btn").eq(2).click(function(){
        $("#page2Link").attr("href","");
        $(this).addClass("active").siblings("button").removeClass("active");
        $("canvas").css("display","inline-block");
        $("iframe").attr("src","");
        $(".myul").show();
        $(".small").hide();
        $("#dituContent").hide();
    });
    $(".my-container .btn").eq(3).click(function(){
        $("#page2Link").attr("href","")
        $(this).addClass("active").siblings("button").removeClass("active");
        $("canvas").css("display","none");
        $(".myul").hide();
        $(".small").hide();
        $("iframe").attr("src","h5-audio.html");
        $("#dituContent").hide();
    });
    $(".my-container .btn").eq(4).click(function(){
        $("#page2Link").attr("href","")
        $(this).addClass("active").siblings("button").removeClass("active");
        $("canvas").css("display","none");
        $(".myul").hide();
        $(".small").hide();
        $("iframe").attr("src","H5-video.html");
        $("#dituContent").hide();
    });
    /*canvas绘制下雨效果*/
    var canvas = $("canvas")[0];
    var c = canvas.getContext("2d");
    function resizeCanvas() {
        $(canvas).attr("width", $(window).get(0).innerWidth*0.9);
        $(canvas).attr("height", $(window).get(0).innerHeight*0.5);
    };

    function drawRain(){
        var color1 = parseInt(Math.random()*255);
        var color2 = parseInt(Math.random()*255);
        var color3 = parseInt(Math.random()*255);
        resizeCanvas();
        canvas = $("canvas")[0];
        c = canvas.getContext("2d");
        // console.log(canvas)
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillRect(0, 0, canvas.width, canvas.height);
        for(var i=0;i<parseInt(200*Math.random());i++){
            c.beginPath();
            var x = Math.random()*canvas.width;
            var y = Math.random()*canvas.height;
            c.moveTo(x,y);
            c.lineWidth = 3;
            c.strokeStyle = "rgb("+color1+","+color2+","+color3+")";
            c.lineTo(x,y+Math.random()*50);
            c.stroke();
        }
        c.closePath();
    }
    setInterval(function(){
        drawRain();
    },10);
})

