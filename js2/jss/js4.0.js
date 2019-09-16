player = JSON.parse(sessionStorage.getItem("gameplayers"));/gameProcess = JSON.parse(sessionStorage.getItem("time"));//读取到传送的默认值
console.log(gameProcess);/获得对象player储存值
console.log(player);

playDay = JSON.parse(sessionStorage.getItem("playDay"));//获取天数
console.log("游戏天数",playDay);
console.log("游戏天数类型",typeof playDay);
// for(var i=0;i<day.length;i++){
//     $("main").append( `
// <div class="day-${i+1}">
// <div class="main-top ">
//
//     <span id="day">第${i+1}天</span>
// </div>
// <div class="main-mid">
//         <div class="style">
//                     <div class="moon">
//                         <p></p>
//                     <img  src="../img/moon.png"/>
//                         <p></p>
//                     </div>
//                     <div class="commonality">
//                     <span ></span>
//                     <p class="murder "> 杀手杀人</p>
//                     </div>
//                 </div>
//         <div class="explain"></div>
//         <div class="style">
//             <div class="moon">
//                 <p></p>
//                 <img  src="../img/sun.png"/>
//                 <p></p>
//             </div>
//             <div class="commonality">
//                 <span ></span>
//                 <p class="ghost"> 亡灵发表遗言</p>
//             </div>
//         </div>
//         <div class="style">
//             <div class="moon">
//                 <p></p>
//                <p class="empty"></p>
//                 <p></p>
//             </div>
//             <div class="commonality">
//                 <span ></span>
//                 <p class="player">玩家依次发言</p>
//             </div>
//         </div>
//         <div class="style">
//             <div class="moon">
//                 <p></p>
//                 <p class="empty"></p>
//                 <p></p>
//             </div>
//             <div class="commonality">
//                 <span ></span>
//                 <p class="vote"> 投票</p>
//             </div>
//         </div>
//         <div class="tip"></div>
//
//     </div>
// </div>
//
//
//
//
//     `)
// }
for(var i=1;i<=playDay;i++){//模板字符串playDay是游戏天数
    $("main").append( `
<div class="day-${i}">
<div class="main-top ">
 <span id="day">第${i}天</span>
</div>
<div class="main-mid">
 <div class="style">
                    <div class="moon">
                        <p></p>
                    <img  src="../img/moon.png"/>
                        <p></p>
                    </div>
                    <div class="commonality">
                    <span ></span>
                    <p class="murder button"> 杀手杀人</p>
                </div>
                    </div>
        <div class="explain"></div>
        <div class="style">
            <div class="moon">
                <p></p>
                <img  src="../img/sun.png"/>
                <p></p>
            </div>
            <div class="commonality">
                <span ></span>
                <p class="ghost button"> 亡灵发表遗言</p>
            </div>
        </div>
        <div class="style">
            <div class="moon">
                <p></p>
               <p class="empty"></p>
                <p></p>
            </div>
            <div class="commonality">
                <span ></span>
                <p class="player button">玩家依次发言</p>
            </div>
        </div>
        <div class="style">
            <div class="moon">
                <p></p>
                <p class="empty"></p>
                <p></p>
            </div>
            <div class="commonality">
                <span ></span>
                <p class="vote button"> 投票</p>
            </div>
        </div>
        <div class="tip"></div>

    </div>
</div>
  `)
};

//"杀手杀人按钮"
// if (number === 0){//如果数据是0的话
//      $(".murder").click(function (){//点击进入杀人页面
//         window.location.href = "kill vote.html"//就发生跳转
//     })}
// else {//不是0的时候
//     $(".murder").css({"opacity":"0.5"});//改变他的透明度
//     $(".murder").click(function () {
//         alert("请按顺序点击")
//     })
//     };

$(".main-top").click(function () {//点击隐藏或者显示下面的内容
    $(this).siblings().toggle();
//     // $(this)(".main-mid").toggle();
});


$(".murder").click(function () {//点击杀手杀人
    if (gameProcess === 0){//如果游戏进程是0
        window.location.href = "kill vote.html"//跳转
    }else{//反之弹窗
        alert("请按顺序点击")
    }
});

// for (i=0;i<player.length;i++){
//     if (player[i].whoKill==="killer") {
//         $(".explain").css({"display":"block"})
//         $(".explain").text( +[i+1]+ "号被杀手杀死真实身份是"+player[i].name);
//     }
//     if (player[i].whoKill==="vote") {
//         $(".tip").css({"display":"block"})

//         $(".tip").text( +[i+1]+ "号被投票投死真实身份是"+player[i].name);
//     }
// }


for (i=0;i<player.length;i++) {//循环遍历整个数组
    //做下面的是要做一个day-i的类名
    var deathDay=player[i].deathDay;//循环找到这个第几天死的把它复制给deathDay
    var deathClassName="day-" + deathDay;//把day-i赋值给deathClassName
    console.log("."+ deathClassName);
    console.log($("."+ deathClassName));
    console.log(  player[i].num + "玩家第几天死的",deathClassName);

    // $("."+ deathClassName).find(".murder,.ghost,.player,.vote").css({"background":"pink"});
    if (player[i].whoKill==="killer") {//如果是杀手杀死的
        $("."+ deathClassName).children().find(".explain").css({"display":"block"});//找到explain改变成显示

        $("."+ deathClassName).children().find(".explain").text( +[i+1]+ "号被杀手杀死真实身份是"+player[i].name);//然后输出内容
    }
    if (player[i].whoKill==="vote") {
        $("."+ deathClassName).children().find(".tip").css({"display":"block"});
        $("."+ deathClassName).children().find(".tip").text( +[i+1]+ "号被投票投死真实身份是"+player[i].name);
    }
};
$(".ghost").click(function () {//点击死人发言
    if (gameProcess===1){
        alert("请死掉的煞笔说话")
        gameProcess = 2 ;
        $(".ghost").css({"opacity":".5"});//改变他的透明度
        // sessionStorage.setItem("time",JSON.stringify(gameProcess));
        console.log(gameProcess);
    }else
        {
            alert("请按顺序点击")
    }
});


$(".player").click(function () {//点击死人发言
    if (gameProcess===2){
        alert("请活着的天才说话")
        gameProcess = 3 ;
        $(".player").css({"opacity":"0.5"});//改变他的透明度
        // sessionStorage.setItem("time",JSON.stringify(gameProcess));
        console.log(gameProcess);
    }else
    {
        alert("请按顺序点击")
    }
});

$(".vote").click(function (){//点击进入杀人页面
        if (gameProcess === 3){//如果数据是3的话
            gameProcess = 3;
        sessionStorage.setItem("time",JSON.stringify(gameProcess));
        window.location.href = "kill vote.html"//就发生跳转
    }
else {//不是3的时候
        alert("请按顺序点击")
    }
});

//防止刷新

if(gameProcess>=1){
    $(".murder").css({"opacity":"0.5"})
}

if(gameProcess>=2){
    $(".murder").css({"opacity":"0.5"})
}
if(gameProcess>=3){
    $(".player").css({"opacity":"0.5"})
    $(".vote").css({"opacity":"0.5"})
}
for (i=1;i<playDay;i++){
        var deathDay = i;//循环找到这个第几天死的把它复制给deathDay
        var deathClassName ="day-" + deathDay;//把day-i赋值给deathClassName
        $("."+ deathClassName).find(".button").css({"opacity":"0.5"});
        $("."+ deathClassName).find(".button").off("click");
        $("."+ deathClassName).children(".main-mid").hide();
}
// $(".vote").click(function () {//点击死人发言
//     if (number===3){
//         (this).css({"opacity":"0.5"});//改变他的透明度
//         window.location.href = "kill vote.html"//就发生跳转
//
//     }else
//     {
//         alert("请按顺序点击")
//     }
// });


//
// if(number === 0){
//     $(".murder").click(function () {
//         window.location.href = "kill vote.html"
//         number=1
//         sessionStorage.setItem("number",JSON.stringify(number));
//     });//点击跳转到杀人页面
// }
// else {
//     $(".murder").css({"opacity":"0.5"});
// }
// console.log(number);
//
//
// // “亡灵发表遗言”按钮
// if (number===1){
//     $(".murder").css({"opacity":"0.5"});
//     $(".ghost").click(function () {
//         $(".ghost").css({"opacity":"0.5"});
//         number = 2;
//         alert("请死掉的煞笔发言");
//         // $(".murder").css({"opacity":"0.5"});
//         sessionStorage.setItem("time",JSON.stringify(number));
//         window.location.href = "js4.0.html";
//         console.log(number);
//     })}
//     else {
//     $(".ghost").click(function () {
//
//         alert("依次点击啊")
//     });
// // };
//     console.log(number)
//     number = JSON.parse(sessionStorage.getItem("time"));//读取到传送的默认值
//     console.log(number);
//
// }
// // //“玩家讨论页面”
// if (number===2){
//     $(".murder").css({"opacity":"0.5"});
//     $(".ghost").css({"opacity":"0.5"});
//     $(".player").click(function () {
//         $(".player").css({"opacity":"0.5"});
//         alert("请死掉的煞笔发言");
//         number = 3;
//         // $(".murder").css({"opacity":"0.5"});
//         sessionStorage.setItem("time",JSON.stringify(number));
//         window.location.href = "js4.0.html"
//         console.log(number);
//     })}
// else {
//     $(".player").click(function () {
//         alert("依次点击啊跑呢么快干啥呢？")
//     });
// };
// console.log(number);
//
//
//
// //玩家投票页面
// if (number===3){
//     $(".murder").css({"opacity":"0.5"});
//     $(".ghost").css({"opacity":"0.5"});
//     $(".player").css({"opacity":"0.5"});
//     $(".vote").click(function () {
//         window.location.href = "kill vote.html"
//     })
// }else {
//     $(".vote").click(function () {
//         alert("依次点击啊跑呢么快干啥呢？")
//     })
// }

// }
// else {
//     // $(".vote").off("click");
//     // $(".vote").css({"opacity":"0.5"});
// }
//



// $(".murder").click(function () {
//     $(this).css({"opacity":"0.5"});
//     window.location.href = "kill vote.html"
// });//点击跳转到杀人页面
//
// $(".vote").click(function () {
//     sessionStorage.setItem("B",JSON.stringify(0));
//     window.location.href = "kill vote.html"
// });