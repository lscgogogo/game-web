// 展示动画
function handlePageReady() {
  setTimeout(() => {
    $(".btn-web-delay").addClass("btn-web");
    $(".btn-web-delay").removeClass("hide");
    $(".share-click-delay").addClass("share-click");
    $(".share-click-delay").removeClass("hide");
  }, 500);
  setTimeout(() => {
    $(".rules-click-delay").addClass("rules-click");
    $(".rules-click-delay").removeClass("hide");
    $(".download-wrap-delay").addClass("download-wrap");
    $(".download-wrap-delay").removeClass("hide");
  }, 1000);
  setTimeout(() => {
    $(".wrap-achievement-delay").addClass("wrap-achievement");
    $(".wrap-achievement-delay").removeClass("hide");
    $(".age-tips-delay").addClass("age-tips");
    $(".age-tips-delay").removeClass("hide");
    $(".copyright-click-delay").addClass("copyright-click");
    $(".copyright-click-delay").removeClass("hide");
    $(".order-btn-delay").addClass("order-btn");
    $(".order-btn-delay").removeClass("hide");
  }, 1500);
}

$(document).ready(function () {
  // 背景视频
  $("#video-start1")[0].play();
  setTimeout(function () {
    handlePageReady();
  }, 4000);
  var video_start1 = document.getElementById("video-start1");
  video_start1.addEventListener(
    "ended",
    function () {
      $("#video-start1").fadeOut();
      $("#video-start2").fadeIn();
    },
    false
  );

  setTimeout(() => {
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

    // 顶部分享栏
    $(
      ".share-click,.share-wrap,.community-code,.wechat-code,.taptap-code,.wb-code,.dy-code"
    ).mouseenter(function () {
      console.log(1);
      $(".share-wrap").show();
    });
    $(".community-code").mouseenter(function () {
      $(".share-wrap").show();
      $(".community-code").show();
    });
    $(".wechat-code").mouseenter(function () {
      $(".share-wrap").show();
      $(".wechat-code").show();
    });
    $(".taptap-code").mouseenter(function () {
      $(".share-wrap").show();
      $(".taptap-code").show();
    });
    $(".wb-code").mouseenter(function () {
      $(".share-wrap").show();
      $(".wb-code").show();
    });
    $(".dy-code").mouseenter(function () {
      $(".share-wrap").show();
      $(".dy-code").show();
    });

    $(".share-click,.share-wrap").mouseleave(function () {
      $(".share-wrap").hide();
    });

    $(".community-wrap").mouseenter(function () {
      $(".community-code").show();
      $(".community").attr(
        "src",
        "./assets/images/share/icon/community-hover.png"
      );
    });
    $(".community-wrap").mouseleave(function () {
      $(".community-code").hide();
      $(".community").attr("src", "./assets/images/share/icon/community.png");
    });

    $(".wechat-wrap").mouseenter(function () {
      $(".wechat-code").show();
      $(".wechat").attr("src", "./assets/images/share/icon/wechat-hover.png");
    });
    $(".wechat-wrap").mouseleave(function () {
      $(".wechat-code").hide();
      $(".wechat").attr("src", "./assets/images/share/icon/wechat.png");
    });

    $(".TapTap-wrap").mouseenter(function () {
      $(".taptap-code").show();
      $(".TapTap").attr("src", "./assets/images/share/icon/TapTap-hover.png");
    });
    $(".TapTap-wrap").mouseleave(function () {
      $(".taptap-code").hide();
      $(".TapTap").attr("src", "./assets/images/share/icon/TapTap.png");
    });

    $(".wb-wrap").mouseenter(function () {
      $(".wb-code").show();
      $(".wb").attr("src", "./assets/images/share/icon/wb-hover.png");
    });
    $(".wb-wrap").mouseleave(function () {
      $(".wb-code").hide();
      $(".wb").attr("src", "./assets/images/share/icon/wb.png");
    });

    $(".dy-wrap").mouseenter(function () {
      $(".dy-code").show();
      $(".dy").attr("src", "./assets/images/share/icon/dy-hover.png");
    });
    $(".dy-wrap").mouseleave(function () {
      $(".dy-code").hide();
      $(".dy").attr("src", "./assets/images/share/icon/dy.png");
    });

    // 适龄弹框
    $(".age-tips").click(function () {
      $(".wrap-age-tips").fadeIn(400);
    });
    $(".age-tips-close").click(function () {
      $(".wrap-age-tips").fadeOut(400);
    });

    // 底部版权信息
    var flag2 = 2;
    $(".copyright-click").click(function () {
      if (flag2 % 2 == 0) {
        $(".copyright-click").attr(
          "src",
          "./assets/images/footer/footer-open.png"
        );
        $(".footer-wrap").animate({ bottom: "0px" }, 500);
      }
      if (flag2 % 2 == 1) {
        $(".copyright-click").attr(
          "src",
          "./assets/images/footer/footer-copyright.png"
        );
        $(".footer-wrap").animate({ bottom: "-138px" }, 500);
      }
      flag2++;
    });

    // 预约功能
    $(".order-btn").click(function () {
      $(".wrap-order").fadeIn(300);
    });
    $(".login-close").click(function () {
      $(".wrap-order").fadeOut(300);
    });

    // 预约里程碑
    if (reserveNumber >= 100000) {
      $(".unfinished-1w").attr(
        "src",
        "./assets/images/achievement/1w-finish.png"
      );
      $(".unfinished-3w").attr(
        "src",
        "./assets/images/achievement/3w-finish.png"
      );
      $(".unfinished-6w").attr(
        "src",
        "./assets/images/achievement/6w-finish.png"
      );
      $(".unfinished-10w").attr(
        "src",
        "./assets/images/achievement/10w-finish.png"
      );
    } else if (reserveNumber >= 60000) {
      $(".unfinished-1w").attr(
        "src",
        "./assets/images/achievement/1w-finish.png"
      );
      $(".unfinished-3w").attr(
        "src",
        "./assets/images/achievement/3w-finish.png"
      );
      $(".unfinished-6w").attr(
        "src",
        "./assets/images/achievement/6w-finish.png"
      );
    } else if (reserveNumber >= 30000) {
      $(".unfinished-1w").attr(
        "src",
        "./assets/images/achievement/1w-finish.png"
      );
      $(".unfinished-3w").attr(
        "src",
        "./assets/images/achievement/3w-finish.png"
      );
    } else if (reserveNumber >= 10000) {
      $(".unfinished-1w").attr(
        "src",
        "./assets/images/achievement/1w-finish.png"
      );
    }

    // 奖励hover效果
    $(".unfinished-1w").mouseenter(function () {
      $(".reward-1w").fadeIn(300);
    });
    $(".unfinished-1w").mouseleave(function () {
      $(".reward-1w").fadeOut(300);
    });
    $(".unfinished-3w").mouseenter(function () {
      $(".reward-3w").fadeIn(300);
    });
    $(".unfinished-3w").mouseleave(function () {
      $(".reward-3w").fadeOut(300);
    });
    $(".unfinished-6w").mouseenter(function () {
      $(".reward-6w").fadeIn(300);
    });
    $(".unfinished-6w").mouseleave(function () {
      $(".reward-6w").fadeOut(300);
    });
    $(".unfinished-10w").mouseenter(function () {
      $(".reward-10w").fadeIn(300);
    });
    $(".unfinished-10w").mouseleave(function () {
      $(".reward-10w").fadeOut(300);
    });
  }, 6000);
});

   // 验证码倒计时
   var counts = 60;
   function settime(val) {
     if (counts == 0) {
       val.removeAttribute("disabled");
       val.value = "获取验证码";
       counts = 60;
       return false;
     } else {
       val.setAttribute("disabled", true);
       val.value = "已发送（" + counts + ")";
       counts--;
     }
     setTimeout(function () {
       settime(val);
     }, 1000);
   }
