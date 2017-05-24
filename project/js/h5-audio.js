/**
 * Created by Administrator on 2017/4/20.
 */
var audio=$("#musicbox")[0];
var arr = [
    {
        "name": "绅士",
        "author": "薛之谦",
        "src": "music/薛之谦 - 绅士.mp3"
    },
    {
        "name": "默",
        "author": "那英",
        "src": "music/那英 - 默.mp3"
    },
    {
        "name": "晴天",
        "author": "刘瑞琦",
        "src": "music/刘瑞琦 - 晴天.mp3"
    }
];
//7.格式化时间函数
function formatTime(times){
    times=parseInt(times);
    var m=parseInt(times/60);
    var s=parseInt(times%60);
    return zero(m)+":"+zero(s);
}
//8.补0
function zero(num){
    return num.toString().replace(/^(\d)$/, "0$1")
}
function loopMusic(){
//1.添加歌曲列表
    addMusic();
    function addMusic(){
        for(var i in arr){
            var li=document.createElement("li");
            li.innerHTML="　■　"+arr[i].name+"-"+arr[i].author;
            $("#musiclist")[0].appendChild(li);
        }
    }
//2.播放 暂停按钮
    $("#play")[0].onclick=function(){
        if(this.className=="playing"){
            this.className="stop";
            audio.pause();
            clearInterval(timer)
        }else{
            this.className="playing";
            audio.play();
            timer=setInterval(run,100)
        }
    };
//3.根据全部，随机，单曲播放下一首
    var flag=1;
    $("#mode")[0].onclick=function(){
        switch (flag){
            case 1:
                flag=2;
                this.innerHTML="随机";
                break;
            case 2:
                flag=3;
                this.innerHTML="单曲";
                break;
            case 3:
                flag=1;
                this.innerHTML="全部";
                break;
        }
    };
//4.定义播放函数
    function playMusic(index){
        audio.setAttribute("src",arr[index].src);
        audio.play();
        INDEX=index;
        for(var i in arr){
            $("li")[i].className="";
        }
        $("li")[index].className="yel";
    }
    playMusic(0);
//5.点击下一首播放对应模式
    $("#next")[0].onclick= function () {
        nextMusic();
    };
    function nextMusic(){
        var old=INDEX;
        INDEX++;
        if(INDEX>=arr.length){
            INDEX=0;
        }
        if(flag==3){
            INDEX--;
        }
        if(flag==2){
            do{
                INDEX=parseInt(Math.random()*arr.length)
            }while(INDEX==old)
        }
        playMusic(INDEX);
    }

//9.获取歌曲总时间和当前播放时间
    function run(){
        if(!isNaN(audio.duration)){
            $("#cliPro")[0].style.width=audio.currentTime/audio.duration*$("#progress")[0].offsetWidth+"px";
            $("#time")[0].innerHTML=formatTime(audio.currentTime)+" / "+formatTime(audio.duration);
        }

        if(audio.ended){
            nextMusic();
        }
    }
    var timer=setInterval(run,100);
//6.点击对应歌曲播放对应歌曲
    for(var i in arr){
        $("li")[i].c=i;
        $("li")[i].ondblclick=function(){
            $("#play")[0].className="playing";
            playMusic(this.c);
        }
    }
//10.点击进程得到当前时间
    $("#progress")[0].onclick=function(){
        audio.currentTime=event.offsetX/this.offsetWidth*audio.duration;
    };
//11.拖动音量控制声音
    var down;
    $("#vol")[0].onmousedown=function(){
        down=true;
    };
    $("#volume")[0].onmousemove=function(){
        var vm=this.offsetWidth;
        var v=$("#vol")[0].offsetWidth;
        var l=event.clientX-this.offsetLeft-v/2;
        if(down){
            if(l>=0&&l<=vm-v){
                $("#vol")[0].style.left=l+"px";
                audio.volume=l/vm;
            }
        }
    };
    document.onmouseup=function(){
        down=false;
    };
//12.点击音量设置当前音量值
    $("#volume")[0].onclick=function(){
        var vm=this.offsetWidth;
        var v=$("#vol")[0].offsetWidth;
        var l=event.clientX-this.offsetLeft-v/2;
        $("#vol")[0].style.left=l+"px";
        audio.volume=l/vm;
    };
}
loopMusic();
//13.清空列表
var reset;
var clear=0;
$("button")[2].onclick= function () {
    if(clear==0){
        $("#play")[0].className="stop";
        reset=true;
        audio.setAttribute("src","");
        for(var i=arr.length-1;i>=0;i--){
            $("#musiclist")[0].removeChild($("li")[i]);
        }
        clearInterval(timer);
        $("#time")[0].innerHTML="00:00 / 00:00";
        $("#cliPro")[0].style.width="0";
    }
    clear++;
};
//14.重置列表
$("button")[0].onclick=function(){
    clear=0;
    $("#play")[0].className="playing";
    if(reset){
        loopMusic();
    }
    timer=setInterval(run,100);
    reset=false;
};
//15.随机打乱
$("button")[1].onclick=function(){
    if(!reset){
        for(var i in arr){
            arr.sort(function(){return 0.5-Math.random()});
        }
        for(var i=arr.length-1;i>=0;i--){
            $("#musiclist")[0].removeChild($("li")[i]);
        }
        loopMusic();
    }
};




