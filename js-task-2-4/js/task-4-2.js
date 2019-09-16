let arr = JSON.parse(sessionStorage.getItem("playernum"));//读取到传送的默认值
console.log(arr);

var playDay = JSON.parse(sessionStorage.getItem("playDay"));
console.log("此时游戏天数为"+playDay);
var livingKillerNum = JSON.parse(sessionStorage.getItem("livingKillerNum"));
var livingCivilianNum = JSON.parse(sessionStorage.getItem("livingCivilianNum"));

var civiliansLiving = 0;//声明拼命存活状态
var aliveKiller = 0;//声明杀手存活状态
for(i=0;i<arr.length;i++) {//对数组所有对象，进行判断
    if (arr[i].state=="live"){//筛选出存活的对象

        if(arr[i].name=="平民"){
            civiliansLiving++;
            console.log("剩下贫民人数",civiliansLiving);
        }else{
            aliveKiller++;
            console.log("剩下杀手人数",aliveKiller);
        }
    }
};
//根据天数，生成内容盒子
$(".column").append(`
<div class="column-people">
 <p class="column-surplus">剩余玩家</p>
<p class="column-killer">杀&emsp;手${livingKillerNum}人</p>
<p class="column-civilian">平&emsp;民${livingCivilianNum}人</p>
 </div>
`);
for (var n = 1;n <playDay;n++) {
    $(".submenu").append(`
<div class="number day-${n}">
    <p class="number-day">第<span >${n}</span>天</p>
    <p class="number-night "></p>
<p class="number-daytime"></p>
</div>
`);
}
//插入游戏日志，把每天死人放到相应的位置
for (i=0;i<arr.length;i++) {
    if (arr[i].state==="sie") {//找出死亡的玩家
        if (arr[i].day % 1===0.5) {//判断为杀手杀死的
            pastDay=parseInt(arr[i].day);//判断是哪天杀死的
            console.log(pastDay);
            pastDayBoxClass="day-"+pastDay;//放入到对应的天数页面下
            $("."+pastDayBoxClass).children(".number-night").append(`
晚上：<span class="deader-num">${arr[i].num}</span>被杀手杀死，真实身份是<span class="deader-role">${arr[i].name}</span>`)
        }
        else {
            console.log((arr[i].day % 1).toFixed(1));
            if ((arr[i].day % 1).toFixed(1)==="0.8") {//判断为全民投票杀死的//知识点四js浮点型计算
                pastDay=parseInt(arr[i].day);//判断是哪天杀死的
                console.log(pastDay);
                pastDayBoxClass="day-"+pastDay;//放入到对应的天数页面下
                $("."+pastDayBoxClass).children(".number-daytime").append(`
白天：<span class="deader-num">${arr[i].num}</span>被投票杀死，真实身份是<span class="deader-role">${arr[i].name}</span>`)
            }
        }
    }
};