$(function () {
  $(".list-item").each(function (index) {
    if (index > 4) {
      $(this).css("display", "none");
    }
  });

  // OnClicking the item adding active class, OnClicking again removing active class
  $(".list-item").click(function () {
    $(this).toggleClass("active");
  });

  // Adding an item to the list
  $(".add").click(function () {
    var toAdd = $(".form-control").val();
    $(".list-item")
      .last()
      .after(
        "<div class ='list-item active'>" +
          toAdd +
          " <i class='fas fa-times'></i> </div>"
      );
      $(".list-item").click(function () {
        $(this).toggleClass("active");
      });
  });

  // Removing an item from the list
  $("div").on("click", ".fa-times", function () {
    $(this).parent("div").remove();
  });

  $(".input-container").hide();
  // hiding and displaying the list items
  $(".more").click(function () {
    $(".list-item").each(function (index) {
      $(this).css("display", "inline-block");
    });
    $(".input-container").show();

    $(".more").css("display", "none");
    $(".less").css("display", "inline-block");
    console.log($(".list-item").last().text());
  });

  $(".less").click(function () {
    $(".list-item").each(function (index) {
      if (index >= 5) {
        $(this).css("display", "none");
      }
    });
    $(".list-item.active").css("display", "inline-block");
    $(".input-container").hide();
    $(".less").css("display", "none");
    $(".more").css("display", "inline-block");
  });
});
