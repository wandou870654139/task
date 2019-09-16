let arr = JSON.parse(sessionStorage.getItem("playernum"));//读取到传送的默认值
console.log(arr);

var playDay = JSON.parse(sessionStorage.getItem("playDay"));
console.log("此时游戏天数为"+playDay);
var playProcess = JSON.parse(sessionStorage.getItem("playProcess"));
console.log("此时游戏进程为"+playProcess);
var playNow = JSON.parse(sessionStorage.getItem("playNow"));
console.log("此时游戏时刻为"+playNow);
//插入新一页
for (i=0;i<=playDay;i++){
    console.log(playDay);
    newDay="day-"+i;
    $('.'+ newDay).append(`
<div class="time">  
<p></p>
 <span>第${i}天</span>
 <img src="../img/bottom.png"/>
 </div>
 <div class="content">
        <div class="list">
            <div class="list-broadside">
                   <p></p>
                <img src="../img/list .png"/>
                <p></p>
            </div>
                <span class="list-triangle"></span>
                <div class="list-click killer" type="button">杀手杀人</div>
            </div>
            <div id="list-slayer"></div>
        <div class="list">
            <div class="list-broadside">
                <p></p>
                <img src="../img/sun.png" />
                <p></p>
            </div>
              <span class="list-triangle"></span>
               <div class="list-click deader" type="button">亡灵发表遗言</div>
        </div>
        <div class="list">
            <div class="list-broadside">
             <p></p>
              <p></p>
            </div>
                <span class="list-triangle"></span>
                <div class="list-click liver" type="button">玩家依次发言</div>
            </div>
        <div class="list">
            <div class="list-broadside">         
                <p></p>
                <p></p>    
                 </div>  
                <span class="list-triangle"></span>
                <div class="list-click vote" type="button">全民投票</div>
            </div>
         <div id="list-ticket"></div>
  </div>
  `)
};
for (i=0;i<arr.length;i++) {
    if (arr[i].state === "sie") {
        console.log(i);
        console.log(arr[i].day);
        console.log(1.5 % 1);
        console.log(arr[i].day % 1);
        //判断为杀手杀死的
        if (arr[i].day % 1 === 0.5) {
            //判断是哪天杀死的
            pastDay = parseInt(arr[i].day);
            console.log(pastDay);
            pastDayBoxClass = "day-" + pastDay;//放入到对应的天数页面下
            $("." + pastDayBoxClass).children(".content").children('#list-slayer').append(`<div class="list">
    <div class="list-long">
    <p></p>
    <p></p>
    </div>
    <div class="list-killer" ><span class="deader-num">${arr[i].num}</span>被杀手杀死，真是身份是<span class="deader-role">${arr[i].name}</span></div>
   </div>`)
        } else {
            console.log(arr[i].day);
            console.log(arr[i].day % 1);
            console.log((arr[i].day % 1).toFixed(1));
            //判断为全民投票杀死的
            if ((arr[i].day % 1).toFixed(1) === "0.8") {
                //判断是哪天杀死的
                pastDay = parseInt(arr[i].day);
                console.log(pastDay);
                //放入到对应的天数页面下
                pastDayBoxClass = "day-" + pastDay;
                $("." + pastDayBoxClass).children(".content").children('#list-ticket').append(`<div class="list">
    <div class="list-long">
    <p></p>
    <p></p>
    </div>
    <div class="list-killer" ><span class="deader-num">${arr[i].num}</span>被投票杀死，真是身份是<span class="deader-role">${arr[i].name}</span></div>
   </div>`)
            }
        }
    }
}
//顺序点击
 if ( playNow > playDay){
     console.log("此时游戏时刻为"+playNow);
     $(".killer").css("opacity", "0.5");
     $(".killer").siblings("span").css("opacity", "0.5");
 }
 if ( playNow > playDay+0.5){
     $(".deader").css("opacity", "0.5");
     $(".deader").siblings("span").css("opacity", "0.5");
 }
 if ( playNow > playDay+0.6){
     $(".liver").css("opacity", "0.5");
     $(".liver").siblings("span").css("opacity", "0.5");
 }
$(function () {
    //第一天显示隐藏
    $(".time").click(function () {
        if ($(this).next(".content").css("display")==('block')){
            $(this).next(".content").hide();//显示
        } else {
            $(this).next(".content").show();//影藏
        }
    });
//点击标题，内容隐藏
    $(".grid-title").click(function (){
            if ($(this).siblings().css("display") == "block") {
                $(this).siblings().css("display", "none");}
            else {
                $(this).siblings().css("display", "block");}
        }
    );
 $('.killer').click(function () {
     if (playNow === playDay) {
         window.location.href = "../html/task-4-4.html";
         playProcess=0.5;
         console.log("此时游戏进程为"+playProcess);
         sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
         playNow=playDay+playProcess;
         console.log("此时游戏时刻为"+playNow);
         sessionStorage.setItem("playNow", JSON.stringify(playNow));
     }
     else {
         alert("请按顺序点击");
     }
 });
 //点击提示死者发言，并变色，再点击出现提示
 $(".deader").click(function () {
     if (playNow === playDay+0.5){
         alert("请死者亮明身份并且发表遗言");
         $(this).css("opacity", "0.5");
         $(this).siblings(".survival").css("opacity", "1");
         $(this).siblings("span").css("opacity", "0.5");
         playProcess=0.6;
         console.log("此时游戏进程为"+playProcess);
         sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
         playNow=playDay+playProcess;
         console.log("此时游戏时刻为"+playNow);
         sessionStorage.setItem("playNow", JSON.stringify(playNow));
     }
     else {
         alert("请按顺序点击");
     }
 });
 //点击提示玩家发言，并变色，再点击出现提示
 $(".liver").click(function () {
     if (playNow ===playDay+0.6){
         alert("玩家依次发言讨论");
         $(this).css("opacity", "0.5");
         $(this).siblings("span").css("opacity", "0.5");
         playProcess=0.7;
         console.log("此时游戏进程为"+playProcess);
         sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
         playNow=playDay+playProcess;
         console.log("此时游戏时刻为"+playNow);
         sessionStorage.setItem("playNow", JSON.stringify(playNow));
     }
     else {
         alert("请按顺序点击");
     }
 });
 //点击跳转投票
 $(".vote").click(function () {
     if (playNow ===playDay+0.7){
         window.location.href = "../html/task-4-4.html";
         playProcess=0.8;
         console.log("此时游戏进程为"+playProcess);
         sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
         playNow=playDay+playProcess;
         console.log("此时游戏时刻为"+playNow);
         sessionStorage.setItem("playNow", JSON.stringify(playNow));
     }
     else {
         alert("请按顺序点击");
     }
 });
    //过去的自动判断，不可点击
    for (i=1;i<playDay;i++) {
        console.log(playDay);
        pastDay="day-"+i;
        console.log(pastDay);
        $("."+pastDay).children(".content").css({"opacity":"0.5","display":"none"}).off('click');//变色
        $("."+pastDay).children(".content").children().children().off('click');//禁点
    }
});
