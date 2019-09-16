arr=JSON.parse(sessionStorage.getItem("gameplays"));//获得储存值
console.log(arr);

var gameProcess = 0;
sessionStorage.setItem("time",JSON.stringify(gameProcess));
console.log("number");
$(".close").click(function () {
var close = confirm("确认关闭么？");
    if(close ==true){
        window.location="js2.0.html";
        localStorage.removeItem('key');
        sessionStorage.clear();
    }
});
for(var i=0;i<arr.length; i++){  //模板字符串生成
    $("main").append(`
   <div class="box">
<p class="id">${arr[i]}</p>
<p class="number">${i+1}号</p>
</div>
`)
}
$("#btn").click(function () {
    window.location.href="js4.0.html";
});
var playernum = [];//把数组转换成对象
for (var i = 0; i < arr.length; i++) {
    playernum.push(({name: arr[i], state: "live",num: i+1 + "号",whoKill:"none",deathDay:"0"}));
    console.log(playernum);
}
sessionStorage.setItem("gameplayers", JSON.stringify(playernum));//传到浏览器上面
var playDay = 1;//游戏天数
console.log("游戏天数",playDay);
sessionStorage.setItem("playDay",JSON.stringify(playDay));