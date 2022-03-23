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
      $("#video_start2").fadeIn();
    },
    false
  );

  // 活动规则
  $(".rules-click").click(function () {
    $(".wrap-rules").fadeIn(400);
  });
  $(".rules-close").click(function () {
    $(".wrap-rules").fadeOut(400);
  });

  // 左边下载栏
  var flag1 = 2;
  $(".down-open").click(function () {
    if (flag1 % 2 == 0) {
      $(".download-wrap").animate({ left: "-174px" });
      $(".down-open").css("opacity", "1");
    }
    if (flag1 % 2 == 1) {
      $(".download-wrap").animate({ left: "0px" });
      $(".down-open").css("opacity", "0");
    }
    flag1++;
  });

  // 顶部分享栏 ???二维码hover效果
  $(
    ".share-click,.share-wrap,.community-code,.wechat-code,.taptap-code,.wb-code,.dy-code"
  ).mouseenter(function () {
    $(".share-wrap").show();
  });

  $(".share-click,.share-wrap").mouseleave(function () {
    $(".share-wrap").hide();
  });

  $(".community").mouseenter(function () {
    $(".community-code").show();
    $(".community").attr("src","./assets/images/share/icon/community-hover.png")
  });
  $(".community").mouseleave(function () {
    $(".community-code").hide();
    $(".community").attr("src","./assets/images/share/icon/community.png")
  });

  $(".wechat").mouseenter(function () {
    $(".wechat-code").show();
    $(".wechat").attr("src","./assets/images/share/icon/wechat-hover.png")
  });
  $(".wechat").mouseleave(function () {
    $(".wechat-code").hide();
    $(".wechat").attr("src","./assets/images/share/icon/wechat.png")
  });

  $(".TapTap").mouseenter(function () {
    $(".taptap-code").show();
    $(".TapTap").attr("src","./assets/images/share/icon/TapTap-hover.png")
  });
  $(".TapTap").mouseleave(function () {
    $(".taptap-code").hide();
    $(".TapTap").attr("src","./assets/images/share/icon/TapTap.png")
  });

  $(".wb").mouseenter(function () {
    $(".wb-code").show();
    $(".wb").attr("src","./assets/images/share/icon/wb-hover.png")
    
  });
  $(".wb").mouseleave(function () {
    $(".wb-code").hide();
    $(".wb").attr("src","./assets/images/share/icon/wb.png")
  });

  $(".dy").mouseenter(function () {
    $(".dy-code").show();
    $(".dy").attr("src","./assets/images/share/icon/dy-hover.png")
  });
  $(".dy").mouseleave(function () {
    $(".dy-code").hide();
    $(".dy").attr("src","./assets/images/share/icon/dy.png")
  });

  // 适龄弹框
  $(".age-tips").click(function () {
    $(".wrap-age-tips").fadeIn(400);
  });
  $(".age-tips-close").click(function () {
    $(".wrap-age-tips").fadeOut(400);
  });


  

});
