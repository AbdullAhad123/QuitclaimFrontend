$(".user_btn").on("click", function () {
  const dropdown = $(this).siblings(".user_details_menu");
  const icon = $(this).find("svg");
  dropdown.toggle();
  icon.toggleClass("dropdownIconTransform");
});
