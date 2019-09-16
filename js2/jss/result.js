player = JSON.parse(sessionStorage.getItem("gameplayers"));//获得对象player储存值
console.log(player);
playDay = JSON.parse(sessionStorage.getItem("playDay"));//获取天数
console.log("游戏天数",playDay);
gameProcess = JSON.parse(sessionStorage.getItem("time"));//读取到传送的默认值
console.log(gameProcess);


for(var i=0;i<playDay;i++) {//模板字符串playDay是游戏天数
    $("main").append(`
<div class="day-${i+1}">
    <div class="day">第${i+1}天
 
</div>
<p class="moon"></p>
<p class="sun"></p>
    </div>
    
 
    `
    );
};

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
    $("#kill").text(liveKill);
    $("#people").text(livePeople);
    console.log("活着的杀手数" + liveKill);
    if (liveKill == 0) {//如果杀手人数等于0
        $("#result").text("平民胜利");

    } else {//如果杀手人数不等于0再进行判断
        if (liveKill == livePeople) {//如果杀手等于平民
            $("#result").text("杀手胜利");
        }
    }
};
    judge();







        //
        // var livePeople = 0;//var一个活着的平民的变量把0赋值给它
        // var liveKill = 0;//var一个活着的杀手的变量把0赋值给它
        // for (i = 0; i < player.length; i++) {//循环
        //     if (player[i].state == "live") {//先判断它的生死状态
        //         if (player[i].name == "平民") {//再判断它是不是平民
        //             livePeople += 1;//是就+1
        //             console.log("活着的平民数" + livePeople);
        //         } else {//否则的话
        //             liveKill += 1;//杀手人数+1
        //         }
        //     }
        // }
// $("#kill").text(liveKill);
// $("#people").text(livePeople);

for (i=0;i<player.length;i++) {//循环遍历整个数组
    //做下面的是要做一个day-i的类名
    var deathDay=player[i].deathDay;//循环找到这个第几天死的把它复制给deathDay
    var deathClassName="day-" + deathDay;//把day-i赋值给deathClassName
    if (player[i].whoKill==="killer") {//如果是杀手杀死的

        $("."+ deathClassName).find(".moon").text( +[i+1]+ "号被杀手杀死真实身份是"+player[i].name);//然后输出内容
    }
    if (player[i].whoKill==="vote") {
        $("."+ deathClassName).find(".sun").text( +[i+1]+ "号被投票投死真实身份是"+player[i].name);
    }

};