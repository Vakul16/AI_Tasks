$(document).ready(function () {
  // OnClicking the item adding active class, OnClicking again removing active class

  $("li").click(function () {
    // console.log(this);
    $(this).toggleClass("active");
  });

  //
  $("#btn1").click(function () {
    console.log("clicked");
    $("#demo").show();
  });
  $("#btn2").click(function () {
    $("#demo").hide();
  });

  //

  // Adding an item to the list

  $(".add").click(function () {
    var toAdd = $(".form-control").val();
    $("ul").append(
      "<li class ='active'>" + toAdd + " <i class='fas fa-times'></i> </li>"
    );
  });

  // Removing an item from the list

  $("ul").on("click", ".fa-times", function () {
    // console.log("clicked");
    // console.log($(this).parent('li'));
    $(this).parent("li").remove();
  });
});
