// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
// = require jquery
// = require jquery_ujs
// = require jquery.min
// = require carousel
// = require source/jquery.fancybox
// = require source/helpers/jquery.fancybox-buttons
// = require js-dop
// = require jquery.min
// = require easing
// = require jquery.ui.totop

$(function (argument) {
  $('.error').hide()
})

function validate (name, number, email, event) {
  $('.error').hide()
  if (!name) {
    $('#name ~ .error').show()
  }
  if (!number) {
    $('#number ~ .error').show()
  }
  if (!email || !validateEmail(email)) {
    $('#email ~ .error').show()
  }

  if (name && number && email && validateEmail(email)) {
    $.post( "/send_mail", $('#send').serialize(), function( data ) {
      if (data.status == 'ok') {
        text = '<div class="but"><strong>Сообщение отправлено! <br>В ближайшее время с вами свяжутся.</strong></div>';
        $("#result").html(text);
        $("#result").fadeToggle(7000);
        document.forms.comment.reset()
      } else {
        alert('Что-то пошло не так! Повторите попытку')
      }
    });
  }

  event.preventDefault();
  return false;

}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}