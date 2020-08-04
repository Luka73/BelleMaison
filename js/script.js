$('.carousel').carousel({
    interval: 1800
});

function claer() {
  document.getElementById("form").reset();
}

$(document).ready(function() {
    var selectedClass = "1";
    $("#gallery").show();
    $("#gallery div").not("."+selectedClass).hide().removeClass('animation');

    $(".filter").click(function(){
      selectedClass = $(this).attr("data-rel");
      $("#gallery").show();
      $("#gallery div").not("."+selectedClass).hide().removeClass('animation');
      setTimeout(function() {
        $("."+selectedClass).show().addClass('animation');
        $("#gallery").show();
      }, 300);
    });
});
