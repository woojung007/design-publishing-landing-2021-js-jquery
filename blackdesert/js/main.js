$(document).ready(function () {
  $("header #header-inner .visual").slick({
    swipe: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 3000,
    vertical: false,
    fade: true,
    arrows: false,
    dots: true,
  });

  $("#story #story-inner .section1").slick({
    swipe: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    speed: 1000,
    vertical: false,
    fade: true,
    arrows: true,
    dots: true,
  });

  $("#mmo #mmo-inner .v_content").on("click", function (e) {
    e.preventDefault();

    let videolink = "https://www.youtube.com/embed/cSt0CoYdQME";

    $(".popup")
      .css({ display: "block", opacity: 0 })
      .stop()
      .animate({ opacity: 1 }, 400);

    $(".popup .popup-inner .modal").find("iframe").attr("src", "");

    $(".popup .popup-inner .modal").find("iframe").attr("src", videolink);

    $("body").css({ overflow: "hidden" });
  });

  $(".popup .popup-inner .modal a").on("click", function (e) {
    e.preventDefault();

    $(".popup")
      .stop()
      .animate({ opacity: 0 }, 400, function () {
        $(".popup").css({ display: "none" });
      });

    $(".popup .popup-inner .modal").find("iframe").attr("src", "");

    $("body").css({ "overflow-x": "hidden", "overflow-y": "auto" });
  });
});
