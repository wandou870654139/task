function loadXMLDoc() {
    document.getElementById('hint').innerText = '';
    var lyb = document.getElementById('lyb').value;
    var cmm = document.getElementById('cmm').value;
    var xhr = new XMLHttpRequest();
    if ((lyb === null || lyb === '') || (cmm === null || cmm === '')) {
        document.getElementById('hint').innerText = '请输入用户名或密码';
    } else {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    var data = JSON.parse(xhr.responseText);
                    console.log(xhr);
                    if (data.code === -5003){
                        document.getElementById('hint').innerText=data.message;
                    } else if (data.code === -5004){
                        document.getElementById('hint').innerText=data.message;
                    } else {
                        console.log(data.code)
                    }
                   console.log('name='+lyb+'&'+'&pwd='+cmm)
                }
            }
        }
    }
    xhr.open("POST", "/carrots-admin-ajax/a/login", true);
    xhr.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
    xhr.send('name='+lyb+'&'+'&pwd='+cmm)
}
// $(function(){
//     $("#btn").click(function(){
//         $('#hint').text('');
//         var lyb = $("input[name='username']").val();
//         var cmm = $("input[name='email']").val();
//         if ((lyb === null || lyb ==='')||(cmm === null || cmm === '')){
//             // alert('请输入用户名或密码');
//             $('#hint').text('请输入用户名和密码')
//         }else {
//             $.ajax({
//                 type:'Post',
//                 url:'carrots-admin-ajax/a/login',
//                 contentType: 'application/x-www-form-urlencoded',
//                 data:{
//                     name:lyb,
//                     pwd:cmm,
//                 },
//                 success:function (data) {
//                     console.log(data.message);
//                     var json=JSON.parse(data);
//                     console.log(json);
//                     console.log(json.code);
//                     if (json.code === -5003){
//                         $('#hint').text(json.message)
//                     }else if (json.code === -5004){
//                         $('#hint').text(json.message)
//                     } else {
//                         console.log(json.code)
//                     }
//                 }
//             });
//         }
//     });
// });






























//  function loadXMLDoc() {
//      var xhr = null;
//      if (window.XMLHttpRequest) {
//          xhr = new XMLHttpRequest();//谷歌、火狐等浏览器
//      } else if (window.ActiveXObject) {
//          xhr = new ActiveXObject("Microsoft.XMLHTTP");//ie低版本
//      }
//      return xhr;

 // }
 // //注册方法
 //     function reg(){
 //    //1、获取准备Post内容
 //         var username = document.getElementsByName('username')[0].value;
 //         var email = document.getElementsByName('email')[0].value;
 //         //2、创建XMLHttpRequest对象
 //         var xhr = createXhr();
 //         //3、确定请求参数
 //         xhr.open("POST", "/carrots-admin-ajax/a/login", true);
 //         xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
 //         //4、重写回调函数
 //         xhr.onreadystatechange = function(){
 //             if(this.readyState == 4 && this.status == 200){
 //                 //使用服务器端返回值
 //                 var regres = document.getElementById('regres');
 //                 regres.innerHTML = this.responseText;
 //             }
 //         }
 //         //5、发送请求
 //         var content = 'username='+username+'&email='+email;
 //         xhr.send(content);
 //         return false;//不跳转页面
 //     }





























