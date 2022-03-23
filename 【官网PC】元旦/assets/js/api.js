console.log('index.js')
// 1、签名实例
// 接口参数
var params = {
  params1: '111',
  params2: '111',
  params3: '111'
}
// 签名秘钥
var secret_common = 'SQz7RrTGbb0j7NCK'                // 账号中心的接口签名秘钥
var secret_active = 'JZ0Psf67jc10U05cykVzpUctYExk'    // 活动中心的接口签名秘钥
// 签名后获取到sign参数
params.sign = sign(params, secret_common)
// 包含了sign的接口全部参数
console.log(params)
// 发起接口请求：ajax(params)

// 2、toast使用；详细参数查看jquery.toast.js
$("body").toast({
  position: 'fixed',
  content: 'hhhhhhhh',
  duration: 3000,
})
