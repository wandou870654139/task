data=JSON.parse(sessionStorage.getItem("weekDay"));//获得储存值
console.log(data);
//对象，显示的是名字，状态，身份号
 arr = JSON.parse(sessionStorage.getItem("playernum"));//读取到传送的默认值
console.log(arr);
//获取到的游戏天数
playDay = JSON.parse(sessionStorage.getItem("playDay"));//获取天数
console.log("游戏天数",playDay);
console.log("游戏天数类型",typeof playDay);

playNow = JSON.parse(sessionStorage.getItem("playNow"));//游戏时刻
console.log("游戏时刻",playNow);

var playProcess = JSON.parse(sessionStorage.getItem("playProcess"));
console.log("此时游戏进程为"+playProcess);
//font-size的控制
function setRem(){
    var width = document.body.offsetWidth; //获取当前页面的宽度
    var nowFont=width/320*16; //设置页面的字体大小
    var htmlFont=document.getElementsByTagName('html')[0]; //通过标签名称来获取元素
    htmlFont.style.fontSize =nowFont+"px"; // 给获取到的元素的字体大小赋值
}
setRem(); //运行脚本setRem
window.onresize=setRem;  //监听屏幕变化
// $(function() {
//     $("#return").click(function () {
//         if (window.confirm('要返回查看身份页面？')) {
//             window.location = "../html/task-2-2.html"
//         } else {
//             return false;//事件处理函数会取消事件，不再继续向下执行
//         }
//     });
// //点击返回游戏页面
//     $("#fork").click(function () {
//         if (window.confirm('兄弟,你是要退出游戏么？')) {
//             window.location = "../html/task-2-2.html"
//         } else {
//             return false;//事件处理函数会取消事件，不再继续向下执行
//         }
//     });
// });

//生成杀人的盒子
function test(){
        for (var i = 0; i < arr.length; i++) {
            $('main').append(`
<div class="conten ">
        <div class="conten-box kinging ${arr[i].state}">
            <div class="conten-civilian">${data[i]}</div>
            <div class="conten-first">${i + 1}号</div>
             <img class="knife" src="../img/knife.png"/></main>
    </div>`);
        }
    }
test();
//加载完，就对死亡玩家变色
$(".sie").css("opacity", "0.5");//使选中的盒子变色。dead对应了${arr[n].live},即死了的玩家
$(".knife").hide();//先把刀隐藏掉
$(".conten-box").click(function () {
    $(".knife").hide();//把刀隐藏掉
    $(this).children(".knife").show();//使选中的盒子的“小刀”图片出现
    $('.conten-civilian').removeClass('conten-bg');
    $(this).children('.conten-civilian').addClass('conten-bg');
    //this就是上面this选中的本身
    x=this;
    //返回
    return  x;
});
//开始进入投票阶段
$(".examine").click(function () {
    //.index是返回一个数值，这个数值是“.player-box”盒子（html里有很多这个盒子，但是默认第一个）与刚点击的盒子之间的距离。
    var q = $(".conten-box").index(x);
    console.log(arr[q].name);
    //首先判断是否活着
    if(arr[q].state === "live") {
        //判断游戏的进程，杀手杀人的时候进行
        if (playProcess === 0.5) {
            //判断这个盒子所对应的数组中的对象的角色属性是否是杀手，如果杀手则提示不能杀自己。
            if (arr[q].name === "杀手") {
                alert("所长别开枪，是我");
            } else {
                //如果不是杀手，即是平民，则使它的生存状态改变。
                arr[q].state = "sie";
                //改变天数属性，以便于标记什么时刻杀死，即标记为杀手杀死
                arr[q].day = playNow;
                //储存新数组;//将改变的数组的保存到浏览器。
                sessionStorage.setItem("playernum", JSON.stringify(arr));
                console.log(arr);
                window.location.href = "task-4-3.html";
            }
        }
        else{//当再全民投票时运行
            //如果不是杀人，即是平民，则使它的生存状态改变。
                arr[q].state = "sie";
            //改变天数属性，以便于标记什么时刻杀死，即标记为全民投票杀死
                arr[q].day = playNow;
            //储存新数组;//将改变的数组的保存到浏览器。
                sessionStorage.setItem("playernum", JSON.stringify(arr));
                console.log(arr);
                // 重置游戏进程，生成新的游戏天数，新的时刻
            // 重置游戏进程
                playProcess = 0;
                console.log("此时游戏进程为" + playProcess);
                sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
            // 生成新的游戏天数
                playDay = playDay + 1;
                console.log("此时游戏天数为" + playDay);
                sessionStorage.setItem("playDay", JSON.stringify(playDay));
            // 生成新的时刻
                playNow = playDay + playProcess;
                console.log("此时游戏时刻为" + playNow);
                sessionStorage.setItem("playNow", JSON.stringify(playNow));
                window.location = "../html/task-4-3.html";
            result()
        }
    }
    else
        {
            alert("不能鞭尸");
        }
});
//判断游戏结果
function result() {
    var livingKillerNum = 0;
    var livingCivilianNum = 0;
    for (n = 0; n < arr.length; n++) {
        //判断活着的人
        if (arr[n].state === "live" && arr[n].name === "杀手") {
            //活着为杀手，则杀手数目+1
            livingKillerNum++;
        }
        if (arr[n].state === "live" && arr[n].name === "平民") {
            //活着为杀手，则杀手数目+1
            livingCivilianNum++;
        }
    }
    console.log(livingKillerNum);
    console.log(livingCivilianNum);
    sessionStorage.setItem("livingKillerNum", JSON.stringify(livingKillerNum));
    sessionStorage.setItem("livingCivilianNum", JSON.stringify(livingCivilianNum));
    switch (true) {
        case livingKillerNum === 0 :
            //若杀手死完则，平民胜利
            alert("平民胜利");
            //跳转到游戏结果日志页面。
            location.href = "../html/task-4-3.html";
            break;
        //判断投票后，但平民=1，若杀手＞1，则为杀手必胜利
        case livingKillerNum > 1 && livingCivilianNum === 1 :
            alert("杀手胜利");
            //跳转到游戏结果日志页面。
            location.href = "../html/task-4-2.html";
            break;
        //判断与投票后，若杀手=平民，则杀手赢，为了排除第一个判断的影响，加上livingKillerNum===1。
        case livingKillerNum === livingCivilianNum && playProcess === 0 :
            alert("杀手胜利");
            //跳转到游戏结果日志页面。
            location.href = "../html/task-4-2.html";
            break;
        default:
            //跳转到游戏进程控制页面。
            location.href = "../html/task-4-3.html";

    }
};
