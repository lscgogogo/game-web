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
  $(".rules-click").click(function () {
    $(".wrap-rules").fadeIn(300);
  });
  $(".rules-close").click(function () {
    $(".wrap-rules").fadeOut(300);
  });

  // 左边下载栏
  var flag1 = 2;
  $(".down-open").click(function(){
    if (flag1 % 2 == 0) {
        $(".download-wrap").animate({ left: "-174px" });
        $('.down-open').css("opacity","1")
    }
    if (flag1 % 2 == 1) {
        $(".download-wrap").animate({ left: "0px" });
        $('.down-open').css("opacity","0")
    }
    flag1++
  })
  


});
