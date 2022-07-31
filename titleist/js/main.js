$(document).ready(function () {
  $(".visual").slick({
    swipe: true,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplaySpeed: 5000,
    speed: 3500,
    vertical: false,
    fade: false,
    arrows: false,
    dots: true,
  });

  let ht = $(window).height();
  $("header").height(ht);
  $("section").height(ht);

  let fht = $("footer").height();
  $("footer").height(fht);

  $(window).on("resize", function () {
    let ht = $(window).height();
    $("header , section").height(ht);
  });

  $(window).on("resize", function () {
    let fht = $("footer").height();
    $("footer").height(fht);
  });

  $("header , section , footer").on("mousewheel", function (event, delta) {
    if (delta > 0) {
      let prev = $(this).prev().offset().top;
      $("html,body").stop().animate({ scrollTop: prev }, 1000, "easeInSine");
    } else if (delta < 0) {
      let next = $(this).next().offset().top;
      $("html,body").stop().animate({ scrollTop: next }, 1000, "easeOutSine");
    }
  });

  /* 클릭전 기본값 */
  $(".menu").stop().slideUp();

  /*.btn_menu 클릭시 실행구문*/
  $(".btn-menu").on("click", function () {
    $(this).toggleClass("on");
    $(
      ".topmenu , .topmenu li , .topmenu li a span , .topmenu li:nth-child(4)"
    ).toggleClass("on");

    if ($(".menu").is(":visible")) {
      $(".menu").stop().slideUp();
    } else {
      $(".menu").stop().slideDown();
    }
  });

  $(".menu li").on("click", function (e) {
    e.preventDefault();
    $(".menu").stop().slideUp();

    $(".btn-menu").toggleClass("on");
    $(
      ".topmenu , .topmenu li , .topmenu li a span , .topmenu li:nth-child(4)"
    ).toggleClass("on");
  });

  /*마우스 오버시 */
  $("article").on("mouseover", function () {
    /*블러 이미지 적용*/
    $("#section1")
      .stop()
      .animate({ opacity: 0.6 }, function () {
        $(this)
          .css({ "background-image": "url('img/section1-imgbig-blur2.jpg')" })
          .animate({ opacity: 1 }, 2000);
      });

    $(this)
      .stop()
      .animate({ width: "450px" }, 1000, function () {
        $(this).find("h3").stop().animate({ right: 40 }, 400);
      });
    $(this).find("p").stop().animate({ right: 40 }, 800);

    $(this).find("img").stop().animate({ opacity: 1 }, 100);
  });

  /*마우스 아웃시 */
  $("article").on("mouseout", function () {
    /*블러 이미지 적용 취소 원래 이미지로*/
    $("#section1")
      .stop()
      .animate({ opacity: 0.6 }, function () {
        $(this)
          .css({ "background-image": "url('img/section1-imgbig.jpg')" })
          .animate({ opacity: 1 }, 3200);
      });

    $(this).stop().animate({ width: "320px" }, 700);
    $(this).find("img").stop().animate({ opacity: 0 }, 300);

    $(this).find("h3").stop().animate({ right: -340 }, 500);
    $(this).find("p").stop().animate({ right: -340 }, 300);
  });

  let sw = false;

  $(".family-site button").on("click", function () {
    if (sw == false) {
      $(".family-site .family-list").show(600);
      sw = true;
    } else {
      $(".family-site .family-list").hide(600);
      sw = false;
    }
  });

  $(".family-site .family-list > li").on("click", function () {
    $(".family-site .family-list").hide();
    sw = false;
  });
});
