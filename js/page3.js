var wrap = document.getElementById("wrap");
function ranFn(max, min) {
    return parseInt(Math.random() * (max - min) + min);
}
var width = 200;
var padding = 10;
//创建数组 存储新得得li
var lis = [];
//存储每一个li的高度
var arrLi = [];
function createLi(num, bol) {
    var totalWidth = document.documentElement.clientWidth;
    var cols = parseInt(totalWidth / (width + padding));
    wrap.style.width = cols * (width + padding) + "px";
    //初始化每一列的高度为0
    var arrHeight = [];
    for (var i = 0; i < cols; i++) {
        arrHeight[i] = 0;
    }
    for (var i = 0; i < num; i++) {
        var li = lis[i] || document.createElement("li");
        li.innerHTML = i + 1;
        var h = arrLi[i] || ranFn(50, 300);
        li.style.height = h + "px";
        li.style.lineHeight = h + "px";
        li.style.borderRadius = "10px";
        //寻找最短列
        var min = arrHeight[0];
        var minIndex = 0;
        for (var j = 0; j < arrHeight.length; j++) {
            if (min > arrHeight[j]) {
                min = arrHeight[j];
                minIndex = j;
            }
        }
        li.style.top = arrHeight[minIndex] + "px";
        li.style.left = minIndex * (width + padding) + "px";
        arrHeight[minIndex] += (h + padding);
        bol && wrap.appendChild(li);
    }
}
createLi(100, true);

