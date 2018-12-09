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
    $('.carousel').carousel();
});

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

