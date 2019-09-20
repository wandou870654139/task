data=JSON.parse(sessionStorage.getItem("weekDay"));//获得储存值
console.log(data);
var playday=1;//原始游戏天数
console.log("此时游戏天数为"+playday);
sessionStorage.setItem("playDay",JSON.stringify(playday));//将天数保存到浏览器。
var playprocess=0;//原始游戏进程
console.log("此时游戏进程为"+playprocess);
sessionStorage.setItem("playProcess",JSON.stringify(playprocess));//将进程保存到浏览器。
var playnow=playday+playprocess;
console.log("此时游戏时刻为"+playnow);
sessionStorage.setItem("playNow",JSON.stringify(playnow));//将时刻保存到浏览器。
//font-size的控制
function setRem(){
    var width = document.body.offsetWidth; //获取当前页面的宽度
    var nowFont=width/320*16; //设置页面的字体大小
    var htmlFont=document.getElementsByTagName('html')[0]; //通过标签名称来获取元素
    htmlFont.style.fontSize =nowFont+"px"; // 给获取到的元素的字体大小赋值
}
setRem(); //运行脚本setRem
window.onresize=setRem;  //监听屏幕变化
$(function(){
    $("#return").click(function () {
        if (window.confirm('要返回查看身份页面？')) {
            window.location = "../html/task-2-2.html"
        } else {
            return false;
            //事件处理函数会取消事件，不再继续向下执行
        }
    });
//点击返回游戏页面
    $("#fork").click(function () {
        if (window.confirm('确定退出游戏？')) {
            console.log('xxxxxx');
            // sessionStorage.clear();
            window.location = "../html/task-2-2.html"
        } else {
            return false;
            //事件处理函数会取消事件，不再继续向下执行
        }
    })
});
$(".examine").click(function () {
    window.location="../html/task-4-3.html";
});
//生成杀人的盒子
function test() {
    for (var i=0;i<data.length;i++){
        let html=(`<div class="conten">
        <div class="conten-box">
            <div class="conten-civilian clcor">${data[i]}</div>
            <div class="conten-first">${i+1}号</div>
    </div>`)
        $("main").append(html);
    }
}
test();
var playernum = [];//把数组转换成对象
for (var i = 0; i < data.length; i++) {
    playernum.push({
        name  : data[i],
        state: "live",
        num: i+1 + "号",
        day:1,
    });
}
sessionStorage.setItem("playernum",JSON.stringify(playernum));//储存新数组
console.log(playernum);


