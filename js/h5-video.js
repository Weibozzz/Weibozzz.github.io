
function getClass(ele) {
    return document.getElementsByClassName(ele)[0];
}
var video=getClass("controller-video");
var videoBox=document.getElementById("videoBox");
var play=document.getElementById("play");
//1.播放 暂停
function changePlay() {
    if(play.className=="stop"){
        play.className="playing";
        getClass("icon-play").className="icon-pause";
        getClass("icon-pause").style.display="block";
        video.pause();
        clearInterval(timer);
    }else {
        play.className="stop";
        getClass("icon-pause").className="icon-play";
        getClass("icon-play").style.display="none";
        video.play();
        timer=setInterval(run,50);
    }
}
getClass("stop").onclick=function () {
    // console.log(getClass("stop").className)
    changePlay()
};
//2.自动播放
function run() {
    var allTime=video.duration;
    if(!isNaN(allTime)){
        getClass("time").innerHTML=formatTime(video.currentTime)+" / "+formatTime(allTime);
    }
    video.ended&&(getClass("stop").className="playing",clearInterval(timer));
    orangeWidth();
}
run();
var  timer=setInterval(run,50);
function formatTime(times) {
    var m=parseInt(times/60);
    var s=parseInt(times)%60;
    return zero(m)+":"+zero(s);
}
function zero(num) {
    return num.toString().replace(/^(\d)$/, "0$1");
}
//3.播放进程
function orangeWidth() {
    var scal=video.currentTime/video.duration;
    var l=getClass("progress").offsetWidth;
    getClass("circle").style.left=scal*l+"px";
    getClass("orange").style.width=scal*l+"px";
}
//4.快进 快退
getClass("progress").onclick=function (event) {
    var event=event||window.event;
    video.currentTime=event.offsetX/this.offsetWidth*video.duration;
};
//5.音量
getClass("volume").onclick=function (event) {
    var event=event||window.event;
    video.volume=event.offsetX/this.offsetWidth;
    getClass("vol-orange").style.width=video.volume*this.offsetWidth+"px";
    getClass("vol-circle").style.left=video.volume*this.offsetWidth+"px";
};
//6.全屏
getClass("fullScreen").onclick=function () {
    if(video.requestFullscreen) {
        video.requestFullscreen();
    } else if(video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if(video.msRequestFullscreen){
        video.msRequestFullscreen();
    } else if(video.oRequestFullscreen){
        element.oRequestFullscreen();
    }else {
        video.webkitRequestFullScreen();
    }
};
//7.关闭播放器
getClass("close").onclick=function () {
    getClass("wrap").style.opacity=0;
    getClass("wrap").style.top="-520px";
    video.pause()
};
video.onclick=function () {
    changePlay();
};
getClass("icon-play").onclick=function () {
    changePlay();
};
getClass("wrap").onmouseover=function () {
    getClass("controller").style.opacity="100";
    getClass("controller").style.filter="alpha(opacity=100)";
};
getClass("wrap").onmouseout=function () {
    getClass("controller").style.opacity="0";
    getClass("controller").style.filter="alpha(opacity=0)";
};














