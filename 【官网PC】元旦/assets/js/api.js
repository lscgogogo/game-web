// 弹框
function bounced(data) {
  var string = String(data);
  $("body").toast({
    position: "fixed",
    content: string,
    duration: 3000,
  });
}

// 1、签名实例
// 发送短信接口参数
var params1 = {
  sms_type: "phone_login", //短信类型
  phone_number: 0, //手机号
  ts: Math.round(new Date() / 1000), //当前时间戳
};

// 签名秘钥
var secret_common = "SQz7RrTGbb0j7NCK"; // 账号中心的接口签名秘钥
var secret_active = "JZ0Psf67jc10U05cykVzpUctYExk"; // 活动中心的接口签名秘钥

// 发送请求获取验证码
$(document).ready(function () {
  $(".get-code").click(function () {
    //获取手机号
    params1.phone_number = $(".iphone").val();
    // 签名后获取到sign参数
    params1.sign = sign(params1, secret_common);
    // console.log(params);
    $.post(
      "http://test.shiyue.com/web/sms/send",
      params1,
      (data)=>{
        console.log(params1);
        if (data.code === 0) {
          bounced("手机验证码发送成功");
        } else if (data.code === 1000) {
          bounced("参数错误");
        } else if (data.code === 1005) {
          bounced("手机号码格式错误");
        } else if (data.code === 1203) {
          bounced("验证码发送失败,请稍后再试");
        } else if (data.code === 2402) {
          bounced("短信类型错误");
        }
      }
    );
  });
});
// 预约参数
var params2 = {
  code: 0,
  phone_number:0,
  ts: Math.round(new Date() / 1000),
};
// 点击  立即登录 发送请求
$(document).ready(function () {
  $(".login-btn").click(function () {
    params2.code = $(".verification-code").val();
    params2.phone_number = $(".iphone").val();
    params2.sign = sign(params2, secret_common);
    console.log(params2);
    $.post(
      "http://test.shiyue.com/web/phoneLogin",
      params2,
      (data)=>{
        console.log(data);
        if (data.code === 0) {
          bounced("预约成功");
        } else if (data.code === 1000) {
          bounced("参数错误");
        } else if (data.code === 1005) {
          bounced("手机号码格式错误");
        } else if (data.code === 2500) {
          bounced("验证码不正确，请重新输入");
        } else if (data.code === 1101) {
          bounced("登录失败:账号不存在");
        } 
      }
    );
  });
});

var reserveNumber = 0;
// 预约人数参数
var params3 = {
  project:'11',
  ts: Math.round(new Date() / 1000)
};
// 获取预约人数接口
$(document).ready(function () {
    params3.sign = sign(params3, secret_common);
    console.log(params3);
    $.post(
      "http://test-activity.shiyue.com/reservation/info",
      params3,
      (data)=>{
        console.log(data);
        // 保存预约人数
        reserveNumber = data.data.reserve_num;
        console.log(reserveNumber);
        if (data.code === 0) {
          $('.order-number').text(reserveNumber);
          console.log("成功");
        } else if (data.code === 1000) {
          bounced("参数错误");
        } else if (data.code === 1002) {
          bounced("签名错误");
        } else if (data.code === 3006) {
          bounced("获取预约信息失败");
        } 
      }
    );
});

