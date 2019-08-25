//全局变量，获取input框的value值
var slip = document.getElementById("slip");
var two = document.getElementById("qwe");
two.value=4;
//玩家人数的输入框与滚动条同步

function start() {
    if (two.value >= 4 && two.value <=18) {
        slip.value=two.value;
    } else {
        alert('请输入4-18以内的数字');
        two.value=4;
        slip.value=4;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为4
    }
}
//滚动条改变玩家人数随着改变
function long() {
    two.value=slip.value;
    person()
}
//减的按钮，减掉玩家总人数的值
function reduce(){
    if (two.value <=4){
        alert('最小是4');
        two.value=4;
    } else {
        two.value--;
        slip.value=two.value;
    }
    person();
}
//加的按钮，加玩家总人数的值
function increase(){
    if(two.value>=18) {
        alert("人数太多，请分开游戏");
    }
    else{
        two.value++;
        slip.value=two.value;
    }
    person()
}
function person() {
    //玩家总人数。
    //杀手人数
    var kill=Math.ceil(two.value/5);
    console.log(kill)
    var civilian=Math.ceil((two.value)-kill);
    console.log(civilian)
    document.getElementById("people1").innerHTML=kill;
    document.getElementById("people2").innerHTML=civilian;

    //建立空数组
    var arr1=[];
    //分配人数
    function test() {
        console.log(kill);
        for (var i=0;i<kill;i++){
            arr1.push('杀手');
        }
        for (var c=0;c<civilian;c++){
            arr1.push('平民')
        }
    }
    function randomId() {
        var brr = [];
        var num = arr1.length;
        for (var i = 0; i < num; i++) {
            var temp = parseInt(Math.random() * (num - i));
            brr.push(arr1[temp]);
            arr1.splice(temp, 1);
        }
        //
        data=brr;
    }
    test();
    randomId();
}
function login() {
    localStorage.setItem('weekDay',JSON.stringify(data));
}









