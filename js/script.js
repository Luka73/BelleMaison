$('.carousel').carousel({
    interval: 1800
});


function validade() {
  var flag = false;
  var forms = document.getElementsByClassName('needs-validation');
  var validation = Array.prototype.filter.call(forms, function(form) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else { flag = true; }
      
      form.classList.add('was-validated');
    });
  
    if(flag) {
      var firstName = $(".first-name").val();
      var lastName = $(".last-name").val();
      var email = $(".email").val();
      var address = $(".address").val();
      var alert =  $('.alert');

      var requiredFields = 'First Name: ' + firstName + ' Last Name: ' + lastName+ 'Email:' + email;
      var addressField = (address) ? ' Address : ' + address : "";
      var msg = requiredFields + addressField + '. Confirmed Client added ';
      alert.text(msg);
      alert.removeAttr("hidden");
    }
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
