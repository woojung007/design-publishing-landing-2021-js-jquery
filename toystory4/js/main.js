$(document).ready(function () {
  $(".visual").slick({
    swipe: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3500,
    speed: 2000,
    vertical: false,
    fade: true,
    arrows: false,
    dots: true,
  });

  $(".visual-slider").slick({
    swipe: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    speed: 1000,
    vertical: false,
    fade: false,
    arrows: true,
    dots: false,
  });

  $(".visual1").on("click", function (e) {
    e.preventDefault();

    let videolink = "https://tv.naver.com/embed/5788091?autoPlay=true";

    $(".popup")
      .css({ display: "block", opacity: 0 })
      .stop()
      .animate({ opacity: 1 }, 400);

    $(".popup .popup_inner .modal").find("iframe").attr("src", "");
    $(".popup .popup_inner .modal").find("iframe").attr("src", videolink);
    $("body").css({ overflow: "hidden" });
  });

  $(".visual2").on("click", function (e) {
    e.preventDefault();

    let videolink = "https://tv.naver.com/embed/8857339?autoPlay=true";

    $(".popup")
      .css({ display: "block", opacity: 0 })
      .stop()
      .animate({ opacity: 1 }, 400);

    $(".popup .popup_inner .modal").find("iframe").attr("src", "");
    $(".popup .popup_inner .modal").find("iframe").attr("src", videolink);
    $("body").css({ overflow: "hidden" });
  });

  $(".visual3").on("click", function (e) {
    e.preventDefault();

    let videolink = "https://tv.naver.com/embed/8716869?autoPlay=true";

    $(".popup")
      .css({ display: "block", opacity: 0 })
      .stop()
      .animate({ opacity: 1 }, 400);

    $(".popup .popup_inner .modal").find("iframe").attr("src", "");
    $(".popup .popup_inner .modal").find("iframe").attr("src", videolink);
    $("body").css({ overflow: "hidden" });
  });

  $(".visual4").on("click", function (e) {
    e.preventDefault();

    let videolink = "https://tv.naver.com/embed/8556299?autoPlay=true";

    $(".popup")
      .css({ display: "block", opacity: 0 })
      .stop()
      .animate({ opacity: 1 }, 400);

    $(".popup .popup_inner .modal").find("iframe").attr("src", "");
    $(".popup .popup_inner .modal").find("iframe").attr("src", videolink);
    $("body").css({ overflow: "hidden" });

    $(".popup")
      .css({ display: "block", opacity: 0 })
      .stop()
      .animate({ opacity: 1 }, 400);

    $(".popup .popup_inner .modal").find("iframe").attr("src", "");
    $(".popup .popup_inner .modal").find("iframe").attr("src", videolink);
    $("body").css({ overflow: "hidden" });
  });

  $(".popup .popup_inner .modal a").on("click", function (e) {
    e.preventDefault();

    $(".popup")
      .stop()
      .animate({ opacity: 0 }, 400, function () {
        $(".popup").css({ display: "none" });
      });
    $(".popup .popup_inner .modal").find("iframe").attr("src", "");
    $("body").css({ overflow: "scroll" });
  });
});
