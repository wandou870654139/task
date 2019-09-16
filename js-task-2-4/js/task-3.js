data=JSON.parse(sessionStorage.getItem("weekDay"));//获得储存值
console.log(data);
var click = 0;
var show = $("#show");
$(function() {
    $("#Landing").click(function (e) {
        click++;
        show = click;
        //计算点击次数的表达式。
        $click = click + 1;
        // console.log($click)
        //向上取整。点击一次的话，默认把点击次数的值加1，取整第一个值是1。
        var $reveal = Math.floor(($click + 1) / 2);
        console.log($reveal);
        var arr=Math.floor($click/2);
        console.log(arr);
        $(".circle").text($reveal);
        if (click % 2 === 0){
            // 奇数
            $("#Role").css('display', 'none');
            $("#padishah").css('display', 'block');
            $(".examine").text("查看"+$reveal+"号身份");//这个是查看
        } else {
            // 偶数
            $("#Role").css('display', 'block');
            $("#padishah").css('display', 'none');
            $("show").text(click + "偶数");
            var $reveal=$reveal + 1;
            $(".examine").text("隐藏身份并传递给"+$reveal+"号");
            $(".allocation").text(data[arr]);
        }
        if (click === data.length*2-1){
            $(".examine").text("法官页面");
        }
        if (click === data.length*2){
            $(".examine").text("法官页面");
            window.location="../html/task-4-1.html";
        }
    });
});
