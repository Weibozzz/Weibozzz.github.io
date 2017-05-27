var app = angular.module("app",[]);
app.controller("con",function($scope){
    $scope.content = [
        {
            "title":"angularJS的高级功能",
            "text":"数据模型和视图，各种服务，依赖注入，路由，指令。",
            "src":"img/k01.jpg"
        },
        {
            "title":"angularJS的优缺点",
            "text":"建议在构建一个CRUD（增加Create、查询Retrieve、更新Update、删除Delete），处理数据能力非常实用。而对于那些图形编辑、游戏开发等应用，使用Angular就不如调用其他JavaScript类库方便，如jQuery。",
            "src":"img/k02.jpg"
        }
    ];
    $scope.sub = function () {
        if($scope.content.length >= 5){
            $scope.content.pop();
        }
        var obj = {
            title:$scope.title,
            text:$scope.text,
            src:"img/k0"+(Math.floor(Math.random()*3)+1)+".jpg"
        };
        $scope.content.unshift(obj);
        $scope.title = "";
        $scope.text = "";
    };
    $scope.nowtime = new Date().getTime();
    $scope.cli = function(){
        $scope.nowtime = new Date().getTime();
    }
});