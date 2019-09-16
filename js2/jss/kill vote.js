// arr=JSON.parse(sessionStorage.getItem("gameplays"));//获得储存值他是数组
// console.log(arr);
player = JSON.parse(sessionStorage.getItem("gameplayers"));//获得储存值他是对象
console.log(player);
gameProcess = JSON.parse(sessionStorage.getItem("time"));//读取到传送的默认值
console.log(gameProcess);

playDay = JSON.parse(sessionStorage.getItem("playDay"));//获取天数
console.log("游戏天数",playDay);
console.log("游戏天数类型",typeof playDay);



for(var i=0;i<player.length; i++){
    $("main").append(`
   <div class="box  ${player[i].state}">
   <!--这个对应数组的下标-->
   <div class="subscript">${i}</div>
 <p class="identity  ${player[i].state}">${player[i].name}</p>
 <p class="number">${player[i].num}</p>
<img class="knife"  src="../img/knife.png"/>
</div>
`
    )
};

if(gameProcess ===3){//如果是点击投票进入的 就改变头部内容把杀手杀人改成投票
$("#change").html("投票")
}
else {
    $("#change").html("杀手杀人")
}

$(".knife").hide();//刀的图片隐藏

$(".death").css({"background":"pink"});//让死的人变色，前提是在es6处添加了数组的生死状态。

// for(var i=0;i<player.length; i++) {
//     if (player[i].state==="death"){
//
//     }
// }

$(".box").click(function () {
    // $(".knife").toggle();
    $(this).children("img").show();//$this代表鼠标选中的box .children代表去寻找box下面的子元素，children(img)代表去寻找box下面的子元素中的img，toggle()代表的如果是隐藏它就显示反之隐藏
    $(this).children(".identity").css({"background":"pink"});//$this代表鼠标选中的box.children代表去寻找box下面的子元素 identity改变它的颜色为红色
    $(this).siblings().children("img").hide();//$this代表鼠标选中的box.siblings()代表选中Box的同胞（除了它自己，其他哥哥姐姐弟弟）
    // $(this).siblings().children(".identity").css({"background":"#f5c97b" });//$this代表鼠标选中的box.siblings()代表选中Box的同胞除了它本外恢复本来的颜色
    $(this).siblings().children(".live").css({"background":"#f5c97b" });//只对活着的同胞进行变色
     m = $(this).children(".subscript").html();//选中这个盒子的子元素subscript的内容赋值给m
      console.log(m);
    // player[m].state = "death";
    // console.log(player);
    // if( player[m].state === "death"){//如果选中的人的生死状态是死的
    //     alert("你煞笔么，我已经死了！");//弹窗
    // }
});

// //
//    if ( player[m].state==="death"){
//
//
//
//    }
// $("button").click(function () {
//     // window.location.href="js4.0.html";
// });
$("button").click(function () {
    // if (number === 1) {//如果number=1 说明是从投票页面进入
    //     if (player[m].state === "death") {//判断生死状态
    //         alert("你煞笔么，我已经死了！")//弹窗
    //     } else {
    //         player[m].state = "death";//改变选中的生死状态
    //         number += 1;
    //         if (number === 2) {
    //             number = 0;
    //             sessionStorage.setItem("time", JSON.stringify(number));
    //             window.location.href = "js4.0.html";//页面跳转
    //         }
    //     }
    // } else {//反之就是杀手页面进入
    //     if (player[m].state === "death") {//判断生死状态
    //         alert("你煞笔么，我已经死了！")//弹窗
    //     } else {
    //         if (player[m].name === "杀手") {//判断是不是杀手
    //             alert("你是煞笔么杀自己人？");//如果是杀手弹窗
    //         } else {//如果不是杀手
    //             player[m].state = "death";//改变选中的生死状态
    //             number += 1;
    //             sessionStorage.setItem("time", JSON.stringify(number));
    //             // console.log("number);
    //             sessionStorage.setItem("gameplayers", JSON.stringify(player));//把改变的值储存到浏览器
    //             window.location.href = "js4.0.html";//页面跳转
    //         }
    //     }
    //
    //
    // }

function judge() {
    var livePeople = 0;//var一个活着的平民的变量把0赋值给它
    var liveKill = 0;//var一个活着的杀手的变量把0赋值给它
    for (i = 0; i < player.length; i++) {//循环
        if (player[i].state == "live") {//先判断它的生死状态
            if (player[i].name == "平民") {//再判断它是不是平民
                livePeople += 1;//是就+1
                console.log("活着的平民数" + livePeople);
            } else {//否则的话
                liveKill += 1;//杀手人数+1

                console.log("活着的杀手数" + liveKill);
            }
        }
    }
    console.log("活着的杀手数" + liveKill);
    if (liveKill==0){//如果杀手人数等于0
        alert("平民胜利");//弹窗
        window.location.href = "result.html";//页面跳转
    }else {//如果杀手人数不等于0再进行判断
        if (liveKill == livePeople) {//如果杀手等于平民
            alert("杀手胜利");//弹窗
            window.location.href = "result.html";//页面跳转
        } else {
            window.location.href = "js4.0.html";//页面跳转
        }
    }
}
    if (gameProcess === 3) {//是则代表投票时进来
        if(player[m].state === "death"){//判断生死
            alert("你煞笔么，我已经死了！")//弹窗
        }else{//活着才能继续
            player[m].state = "death";//改变选中的生死状态
            player[m].whoKill = "vote";
            player[m].deathDay = playDay;
            gameProcess = 0;
            playDay = playDay + 1;
            sessionStorage.setItem("playDay",JSON.stringify(playDay));
            sessionStorage.setItem("time",JSON.stringify(gameProcess));
            sessionStorage.setItem("gameplayers", JSON.stringify(player));//把改变的值储存到浏览器
            judge();
        }
    }else {//反之是杀手时进
        if(player[m].state === "death"){//判断生死
            alert("你煞笔么，我已经死了！")//弹窗
        }else{//活着才能继续
            if(player[m].name === "杀手"){//判断是不是杀手
                alert("你是煞笔么杀自己人？");//如果是杀手弹窗
            } else{
                player[m].state = "death";//改变选中的生死状态
                player[m].whoKill = "killer";
                player[m].deathDay = playDay;
                console.log(m);
                gameProcess = 1;
                sessionStorage.setItem("time",JSON.stringify(gameProcess));
                sessionStorage.setItem("gameplayers", JSON.stringify(player));//把改变的值储存到浏览器
                judge();
            }
        }
    }
    // var m = $(".box").children(".subscript").html();
    // if(vote===2){
    //     if( player[m].state === "death"){//如果选中的人的生死状态是死的
    //         alert("你煞笔么，我已经死了！")}//弹窗
    //         else{
    //             player[m].state = "death";
    //             sessionStorage.setItem("gameplayers",JSON.stringify(player));//把改变的值储存到浏览器
    //             // sessionStorage.removeItem('B');//移除传入投票的值
    //             window.location.href = "js4.0.html";//页面跳转}
    //     }
    //
    // }
    // else {
    //     if( player[m].state === "death"){//如果选中的人的生死状态是死的
    //         alert("你煞笔么，我已经死了！");//弹窗
    //     }
    //     else {//如果生死状态是活的
    //         if (player[m].name==="杀手"){//判断是不是杀手
    //             alert("你是煞笔么杀自己人？");//如果是杀手弹窗
    //         }
    //         else {//如果不是杀手
    //             player[m].state = "death";//改变选中的生死状态
    //             sessionStorage.setItem("gameplayers",JSON.stringify(player));//把改变的值储存到浏览器
    //             sessionStorage.removeItem('B');//移除传入投票的值
    //             window.location.href = "js4.0.html";//页面跳转
    //             console.log(player);
    //         }
    //     }
    // };


});


//5.24
//完成数组转对象，先就俩个属性，一个代表“角色名称”，另一个代表“生死状态”
// var aaa = [];//这是个空数组
// for(var i = 0;i<arr.length; i++){
//     aaa.push({name:arr[i],state:"live"});
//     console.log(aaa);
// }
//你的目的是去改变这个数组里面对象的属性。

//你要去知道如何获取选中的盒子，对应数组的下标。
// a = $(this).children(".subscript").html();//自己的方法

// var q = $(".box").index($(this));//$("A").index(B))  B距离A几个位置 //老宋遗产
// console.log(q);


//就可以杀人，即该表数组对应下标的属性。
// aaa[a].state="death";
// console.log(aaa);


//5.25
//昨天是点击盒子，就把它给杀了，今天杀它放到“投死按钮这里”。即点击“投死”才把它给杀死。 2行代码 1小时

//杀死之后，调整到法官台本页面  1行代码 10分钟 中午吃饭前完成

//做杀手杀人时，不能杀自己。 多了一个判断4行代码 3个小时 下午5点完成

//5.26
//完成点击杀人后才点击投票，点击投票后才能杀人。

//5.27
//完成4个按钮依次点击


