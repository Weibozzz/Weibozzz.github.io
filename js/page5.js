$(function(){
    var n = 0;
    $(".my-tr").click(function(){
        if(n == 0){
            $(this).parent().next().fadeIn(1000);
            n = 1;
        }else{
            $(this).parent().next().fadeOut(500);
            n = 0;
        }
    });
    $(".my-remove").click(function () {
        $(this).parents("tr").empty().next().empty();
    })
});