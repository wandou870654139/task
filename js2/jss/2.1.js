

var player_num = document.getElementById("player");
//设置一个变量使它获得input  idp layer的属性 为什么不获得它的value值是因为下面value是变动的

var slider_num = document.getElementById("slider");
//设置一个变量使它获得player的属性 为什么不获得它的value值是因为下面value是变动的
function getBack() {
    window.location.href="js2.0.html";
};
function less() {//点击减少
    player_num.value--;
    //点击player_num.value--的value值减少1
    if (player_num.value >= 4 && player_num.value<=18) {
        //如果玩家人数的value大于等于4 并且小于等于十八
        slider_num.value = player_num.value
        //呢么就把玩家的value值赋值给滑动块
        //绑定滑动块
    }
    else {
        //反之弹窗
        alert("人数太少了煞笔")
        slider_num.value = 4;
        //把玩家的value值设置为4
        player_num.value = 4;
        //把滑动块的值设置为4
    }
    num();
};
function plus() {
    player_num.value++;
    //点击player_num.value--的value值减少1
    if (player_num.value >= 4 && player_num.value<=18) {
        //如果玩家人数的value大于等于4 并且小于等于十八
        slider_num.value = player_num.value
        //呢么就把玩家的value值赋值给滑动块
        //绑定滑动块
    }
    else {
        alert("人数太多了煞笔");
        //反之弹窗
        slider_num.value = 18;
        //把玩家的value值设置为默认18
        player_num.value = 18;
        //把滑块的value值设置为默认18
    }
    num();
}

function moveChange() {//滑动块事件
    if (slider_num.value >= 4 && slider_num.value<=18) {
        //如果滑动块的value值大于等于4并且小于等于18
       player_num.value = slider_num.value;
       //把滑块的value的值赋值给玩家
    }
    else {
        //反之弹窗
        alert("请输入4-18中的值煞笔");
        slider_num.value = 4;
        player_num.value = 4;
        //把玩家和滑块的value恢复默认值
    };
    num();
};

function on_change() {//焦点事件
    if (player_num.value >= 4 && player_num.value <=18){
        //如果玩家的value值大于等于4并且小于等于18
        slider_num.value = player_num.value;
        //玩家的value的值赋值给滑动块
    }
    else {
        //反之弹窗
        alert("请输入4-18的值煞笔")
        player_num.value = 4;
        slider_num.value = 4;
        //恢复默认值
    }
    num();
};
num();
function num() {
    var a = document.getElementById("player").value;
    //定义一个变量a获得玩家的value值
    kill_num = Math.ceil(a/5);
    //然后把杀手的人数是总人数的5分之一向上取整
    quantity_num = a-kill_num;
    //平民的人数是总人数-去杀手的人数
    document.getElementById("quantity_num") .innerHTML = quantity_num ;
    //改变quantity_num的值
    document.getElementById("kill_num").innerHTML = kill_num;
    //改变kill_num的值
    kill = (new Array(kill_num)).fill("杀手");
    //创建一个新的数组KILL
    square = (new Array(quantity_num)).fill("平民");
    //创建一个数组  square
    play = kill.concat(square);
    //合并数组
    console.log(play);
    shuffle();
    return kill_num;

};
    // var kill = (new Array(kill_num)).fill("杀手");
    // console.log(kill);
    // var square = (new Array(slider_num)).fill("平民");
    // console.log(square);
    // var player = kill.concat(square);

function shuffle() {//洗牌算法
    //定义一个空数组。
    copy = [];
    //n=数组长度
    n = play.length;
    console.log(play);
    var i;//i就是一个变量名字
    // 如果还剩有元素则继续。。。
    while (n) {
        //
        i = Math.floor(Math.random() * play.length);
        // 如果这个元素之前没有被选中过。。
        // if (i in array) {
        copy.push(play[i]);
        // delete array[i];   //没用
        play.splice(i, 1);//把i从play数组里拿出来 然后位数-1
        n--;//循环次数n-1

    }
    console.log(copy);

    sessionStorage.setItem("gameplays",JSON.stringify(copy));

    return copy;
};
// }

// a= (new Array(kill_num)).fill("杀手");
// console.log(a);
function skip() {

    window.location.href="js3.html";
};//页面跳转到下一个页面






