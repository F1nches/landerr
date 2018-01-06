$( document ).ready(function() {
  $('.switch').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  });
});
