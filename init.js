/*(function($) {
 $(function(){
  var introductionEl = $('div.introduction'),
      introductionElOffset = introductionEl.offset().top/2,
      documentEl = $(document);
   
  documentEl.on('scroll', function() {
      if (documentEl.scrollTop() > introductionElOffset && introductionEl.hasClass('hidden) ) {
 	introductionEl.removeClass('hidden');
  });
  });
})();
*/

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

$(document).ready(function(){
  $('.modal').modal();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators:true
});
/*
function scrollDown() {
  $("html, body").animate({ scrollTop: 2000 }, "slow");
}

$("body").on("click", "#scrollthis", scrollDown);

$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
          //set event handler to #scroll with your scroll function
          $("body").off("click", "#scrollthis", scrollDown);
    } else {
          //unset event handler
          $("body").on("click", "#scrollthis", scrollDown);
    }
});
*/

$("#scrollthis").click(function() {
  $('html,body').animate({
      scrollTop: $(".page-footer").offset().top},
      'fast');
}); 

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


