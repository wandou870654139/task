var color = "blue";
function changeColor(){
    var anotherColor = "red";
    // console.log(color);
    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        // 这里可以访问color, anotherColor, 和 tempColor
    }
    // 这里可以访问color 和 anotherColor，但是不能访问 tempColor
    swapColors();
    console.log(anotherColor);
}
changeColor();
// 这里只能访问color
// console.log(anotherColor);
var a=0;
//第一步，var a。0；
//第二步，作用域。这个时候。编译器，问作用域
//第三布，引擎开始执行了，var a，问作用域，你这边又全局变量a吗。
//如果有的话·赋值0，变量a、
console.log(a);