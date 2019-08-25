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
        //其中的a，你可以替换成你要限制鼠标点击次数的dom
        // if($click * 2- 1) e.preventDefault();
        if (click % 2 === 0){
            // 奇数
            $("#Role").css('display', 'none');
            $("#padishah").css('display', 'block');
            // console.log(click + "偶数");
            $(".examine").text("查看"+$reveal+"号身份");//这个是查看
            // $("#allocation").text(data[arr]);
        } else {
            // 偶数
            $("#Role").css('display', 'block');
            $("#padishah").css('display', 'none');
            $("show").text(click + "偶数");
            // console.log(click + "奇数");
            var $reveal=$reveal + 1;
            $(".examine").text("隐藏身份并传递给"+$reveal+"号");
            $(".allocation").text(data[arr]);
        }
        if (click === data.length*2-1){
            $(".examine").text("法官页面");
            window.location="task-3-1.html";
        };
        // if (click === data.length*2){
        //     $(".examine").text("法官页面");
        // }
    });
});
