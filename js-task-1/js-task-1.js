//定义全局变量
var box = document.getElementsByClassName('box');
var timing;
//开始闪
function start() {
        window.clearInterval(timing);
        timing=window.setInterval(scheme, 1000);
    document.getElementById("just").disabled=true;//禁止点击
    }
// }
//结束闪
function end() {
    window.clearInterval(timing);
    recover();
    document.getElementById("just").disabled=false;//启动点击
}
//全部返回初始黄色
function recover() {
    for (var i = 0; i < 9; i++) {
        box[i].style.backgroundColor = "rgb(255,193,7)";
        // console.log(i);
    }
}
//随机九宫格的位置
//三个数组代表三个位置
function scheme() {
    sort();
    recover();
    console.log(newArr[1]);
    box[newArr[1]].style.backgroundColor = color();
    box[newArr[2]].style.backgroundColor = color();
    box[newArr[3]].style.backgroundColor = color();
}
//随机颜色
function color() {
    //Math.floor() 返回小于或等于一个给定数字的最大整数
//Math.random():获取0~1随机数
    var r = Math.floor((Math.random() * 256) );
    var g = Math.floor((Math.random() * 256) );
    var b = Math.floor((Math.random() * 256) );
    // console.log(r,g,b);
    return "rgb(" + r + ',' + g + ',' + b + ")";
    rgb(0,0,0)
}
//获取随机的三个格子
//洗牌算法
function sort() {
    //arr等于0-8这九个数字
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    //空数组.
    newArr = [];

//创建一个有序的从左到右0-8的循环，用于空数组下标
    for (var i = 0, len = arr.length; i < len; i++) {
        // console.log(len-i);
        // console.log( Math.floor(Math.random() * (len - i)));

        //声明一个j的变量，首先向下取整，然后获取一个0-1的整数再乘以数组长度（数组长度再
        // i一直在有序循环），
        // console.log('len',len,'len - i' , len - i)
        var j = Math.floor(Math.random() * (len - i));
        // console.log(j);

        //newArr上面已经声明过，是一个空数组，空数组的下标是i，在空数组里面的下标放进了arr的下标j，此时的j是一个
        //随机的0-9之间的整数，后来的数组又对他进行赋值，arr是0-9的有序循环，有序循环里又
        //放进了向下取整完毕之后的随机数，此时newArr这个位置获取一个随机数，这个随机数的位置
        //就是闪烁的格子的位置。
        newArr[i] = arr[j];
        // console.log('当前的i是',i,'当前被新增的是',newArr[i],'当前的j是',arr[j])
        //在当前位置上面向后删除一个数组项目
        arr.splice(j, 1)
        // console.log(arr.splice(j, 1));

        // console.log(i)
    }
    // return newArr;

// console.log(sort());


// arr = [];
// for (var i=0;i<9;i++){
//     arr.push(i);
// }

























// var arr = [0,1,2, 3, 4, 5, 6, 7, 8];
// newArr = [];
// for (var i = 0, len = arr.length ; i < len ; i++) {
//     var num = Math.random()
//     var j = Math.floor(num * (len - i));
//     newArr[i] = arr[j];
//     // newArr.push(arr[j]);
// //     console.log(arr)
//     arr.splice(j, 1)
//     // console.log(arr)
// //     console.log('')
//     console.log(arr)
//     console.log('')
//     console.log(newArr)
}
//
//
//
//
//
// console.log(num,len - i,num * (len - i),Math.floor(num * (len - i)));
// console.log(arr)
// console.log(newArr)


