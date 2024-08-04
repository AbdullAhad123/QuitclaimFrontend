let $loader = $("#preloaderCont");

$(window).on("load", function () {
  setTimeout(function () {
    $loader.fadeOut();
  }, 2000);
});

$(".user_btn").on("click", function () {
  const dropdown = $(this).siblings(".user_details_menu");
  const icon = $(this).find("svg");
  dropdown.toggle();
  icon.toggleClass("dropdownIconTransform");
});

// show backToTop
$(window).on("scroll load", function () {
  const scrolled = $(window).scrollTop();
  if (scrolled >= 500) {
    $("#topBtn").fadeIn();
  } else {
    $("#topBtn").fadeOut();
  }
});

// backToTop
$("#backToTop").click(function () {
  window.scrollTo(0, 0);
});
