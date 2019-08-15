//全局变量
var slip = $('#slip');
var people = $('#people');
$(function () {
    $('#people').blur(function () {
        if (people.val() >= 4 && people.val() <= 18) {
            slip.val([people.val()]);
            console.log(slip.val());
        } else {
            alert('请输入4-18以内的数字');
            $("#people").val("4");

            // 人数超出范围的话 ，弹 警告框，并且将方框和滑块的值重置为4
        }
        allocation()
    });
    //点击滑块改变input框中的人数
    $("#slip").change(function () {
        people.val([slip.val()]);
        console.log(people.val());
        allocation();
    });
    //加的按钮，加玩家总人数的值
    $("#retreat").click(function () {
        if (people.val()>= 18) {
            alert("人数太多，请分开游戏");
        } else {
            var minus =people.val();
            minus++;
            people.val([minus++]);
            slip.val([people.val()]);
            allocation();
        }
    });
    //减的按钮，减玩家总人数的值
    // $("#advance").click(function () {
    $('#advance').bind('change click', function(event) {
        if (people.val()<= 4) {
            alert("人数太少，请分开游戏");
        } else {
            var add =people.val();
            people.val([add--]);
            people.val([add]);
            slip.val([people.val()])
            allocation();
        }
    });
    $("#skip").click(function () {
        allocation();
        localStorage.setItem('weekDay', JSON.stringify(data));
    });
});
function allocation() {
    // 玩家总人数//杀手人数
    var kill = Math.ceil(people.val() / 5);
    var civilian = Math.ceil((people.val()) - kill);
    $("#people1").html(kill);
    $("#people2").html(civilian);
//开始分配杀手与平民之间的身份
    var arr1 = [];
    for (var i = 0; i < kill; i++) {
        arr1.push('杀手');
    }
    for (var c = 0; c < civilian; c++) {
        arr1.push('平民');
    }
    var brr = [];
    var num = arr1.length;
    for (var i = 0; i < num; i++) {
        var temp = parseInt(Math.random() * (num - i));
        brr.push(arr1[temp]);
        arr1.splice(temp, 1);
    }
    console.log(brr);
    data = brr;
}



