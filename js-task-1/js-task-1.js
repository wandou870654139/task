//定义全局变量
var box = document.getElementsByClassName('box');
var z
function onload() {

}

function start() {
    window.clearInterval(z);
    z=window.setInterval(scheme, 1000);


}
function end() {
    console.log('x');
    window.clearInterval(z);
    recover();

 }

function scheme() {
    recover();
    box[sort()[0]].style.backgroundColor = color();
    box[sort()[4]].style.backgroundColor = color();
    box[sort()[8]].style.backgroundColor = color();
    console.log(color());
}
//随机颜色
function color() {
    //Math是数字向下取整。
    var r = Math.floor((Math.random() * 256) + 0);
    var g = Math.floor((Math.random() * 256) + 0);
    var b = Math.floor((Math.random() * 256) + 0);
    return "rgb(" + r + ',' + g + ',' + b + ")"
}
//获取随机的三个格子
function sort() {
    var arr = [0, 2, 1, 5, 3, 4, 6, 5, 8, 7];
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var j = Math.floor(Math.random() * (len - i));
        newArr[i] = arr[j];
        arr.splice(j, 1)
    }
    return newArr;
}

//这个是固定的六个常在颜色
sort();
console.log(sort());
function recover() {
    for (var i = 0; i < 9; i++) {
        box[i].style.backgroundColor = "rgb(255,193,7)";
        console.log(i);
    }
}


