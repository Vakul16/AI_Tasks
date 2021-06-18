$(function () {
  // OnClicking the item adding active class, OnClicking again removing active class
  $(".list-item").click(function () {
    $(this).toggleClass("active");
  });

  // Adding an item to the list
  $(".add").click(function () {
    var toAdd = $(".form-control").val();
    $(".inner-container").append(
      "<div class ='list-item active'>" +
        toAdd +
        " <i class='fas fa-times'></i> </div>"
    );
  });

  // Removing an item from the list
  $("div").on("click", ".fa-times", function () {
    $(this).parent("div").remove();
  });

  $(".input-container").hide();
  // hiding and displaying the list items
  $(".more").click(function () {
    $(".hide-items .list-item").css("display", "inline-block");
    $(".input-container").show();
    $(".more").css("display", "none");
    $(".less").css("display", "inline-block");
  });
  $(".less").click(function () {
    $(".hide-items .list-item").css("display", "none");
    $(".hide-items .list-item.active").css("display", "inline-block");
    $(".input-container").hide();
    $(".less").css("display", "none");
    $(".more").css("display", "inline-block");
  });
});
