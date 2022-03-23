$(document).ready(function () {

    // 背景视频
$("#video_start1")[0].play();
setTimeout(function () {
  handlePageReady();
}, 500);
var video_start1 = document.getElementById("video_start1");
video_start1.addEventListener(
  "ended",
  function () {
    $("#video_start1").fadeOut();
    $("#video_start2").fadeIn(0);
  },
  false
);



// 活动规则
$(".rules-click").click(function(){
    $('.wrap-rules').fadeIn(300)
});
$(".rules-close").click(function(){
    $('.wrap-rules').fadeOut(300)
});




})
