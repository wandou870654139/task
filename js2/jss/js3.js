arr=JSON.parse(sessionStorage.getItem("gameplays"));//获得储存值
console.log(arr);

$(".close").click(function () {
    window.location.href = "js2.1.html"
});
// var num = 0;
var num = 0;
var play = 1 ;//几号
$("#people").hide();//平民图片默认隐藏

$("#king").show();//背景图片默认显示//
console.log("点击次数",num );
console.log("玩家序号",play);
$(".examine").click(function () {
    num = num + 1;
    console.log(num);//点击次数
    // 点击第0次是玩家1
    // 点击第2次是玩家2
    // 点击第4次是玩家3
    //点击触发
    $("#king,#people").toggle();
    //背景图片隐藏
    // $("#people").toggle();

    if(num%2 ==0){//判断点击次数，显示的下一个玩家，这时要关闭身份显示；即身份提示关闭；
        //按钮显示“查看身份”
        if(play>=arr.length){
            window.location.href = " judge.html"
        };
          play = play+1;
        $(".figure").text(play);//文本输出play的值
        $("#identity").empty();
    //设置他为空
        $(".butTEXT").text("查看"+play+"号身份")
    //获取数组下标并赋值给它
         console.log(arr[play]);
         console.log(play);
    } else {//当是奇数的时候，这时已经打开了身份，即“身份提示”显示；
        // “按钮”显示传递给下一位
        //当传递到最后一位时，发生跳转
    var nextplay = play + 1;;
    //要把数字+1并复制给它
    $(".butTEXT").text("隐藏并传递给" +nextplay+ "号");
    //字符串数字拼接
    $("#identity").text(arr[play-1]);
        console.log(play);
        if(play==arr.length){
            $(".butTEXT").text("查看法官页面");
        }
        // var a = play-1;
        // console.log(a);
        // if(a>=arr.length){

        //         // }
}
});


    // var playernum = [];
    // for (var i = 0; i < arr.length; i++) {
    //     playernum.push(({name: arr[i], state: "live"}));
    //     console.log(playernum);
    // }
    // sessionStorage.setItem("gameplayers", JSON.stringify(playernum));

    //平民图片显示
//     if (num%2 == 0  ) {
//         // 偶数
//         play = play +1;
//         console.log(play);
//         $(".figure").text(play);
//         $("#number").text(play);
//         $("#identity").text("");
//         $(".butTEXT").text("查看"+play+"号身份")
//
//     }
//     else {
//         var nextplay =play+1;
//         console.log(nextplay);
//         $("#identity").text(1231231);
//         $(".butTEXT").text("隐藏并传递给"+ nextplay +"号")
//     }
// });












    // num = num + 1;
    // $(".figure").text(play);

    // } else {
    // }


    // console.log(arr[num]);



// console.log($("#king").is(":visible"));
// $(".examine").click(function (){
//       if($("#king").is(":visible"))//如果平民图片是隐藏的，则
//
//     {
//         $("#people").show();//则平民图片是显示
//         $("#king").hide();//背景隐藏
//     }
//     else {
//         $("#king").show();//否则背景图片显示
//         $("#people").hide(); //否则平民图片隐藏
//     }});

    //如果背景图是显示的（平民图是隐藏图）
    //则平民显示，背景图隐藏掉
    //否则背景图则显示

// });
// var a = $(arr)[0];
// console.log(a);


// $(".number").text(Math.ceil(num/2));//显示是几号玩家
//
// if(num%2 == 0 ) {
//     $("#identity").text(arr[num/2]);
// }else {
//     $("#identity").text("查看玩家身份");
// }