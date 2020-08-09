function getDateTime() {
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  h = n.getHours();
  mi = n.getMinutes();
  s = n.getSeconds();
  return "Today: " + m + "/" + d + "/" + y + " - " + h + ":" + mi + ":" + s;
}

$('.carousel').carousel({
  interval: 1800
});

function validade() {
  var form = document.getElementsByClassName('needs-validation')[0];
  if(!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    $('#alert').addClass("d-none");  
  } else {
    console.log('Validado!');
    var requiredFields = 'First Name: ' + $(".first-name").val() + ' Last Name: ' 
                            + $(".last-name").val()+ ' Email:' + $(".email").val();
    var addressField = ($(".address").val() != "") ? ' Address : ' + $(".address").val() : "";
    var texto = requiredFields + addressField + '. Confirmed Client added ';

    $('#alert').text(texto);
    $('#alert').removeClass("d-none");   
    $('#alert').addClass("d-block");
  }

  form.classList.add('was-validated');
}

function reinicia() {
  var form = document.getElementsByClassName('needs-validation')[0];
  form.classList.remove('was-validated');
  $('#alert').removeClass("d-block");  
  $('#alert').addClass("d-none");
}


function reiniciaLoan() {
  var form = document.getElementsByClassName('loan-validation')[0];
  form.classList.remove('was-validated');
}

function loanAmount() {
  var loan = $('#loan').val();
  var years = $('#years').val();
  var rate = $('#rate').val();

  var monthlyRate = rate / (12 * 100);
  var monthlyPayment = loan * monthlyRate / (1 - 1 / Math.pow(1 + monthlyRate, years * 12));
  var totalPayment = monthlyPayment * 12 * years;
  var monthly = (monthlyPayment * 100) / 100.0;
  var total = (totalPayment * 100) / 100.0;

  if(monthly != null && total != null) {
    $('#monthly').val(monthly.toFixed(2));
    $('#total').val(total.toFixed(2));
  }
}

function validLoan() {
  var form = document.getElementsByClassName('loan-validation')[0];
  if(!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  form.classList.add('was-validated');
  loanAmount();  
}

$(document).ready(function() {
  $('#date').text(getDateTime());
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