$(document).ready(function(){
  $(function()
  {
    $('.bxslider').bxSlider(
    {
	    auto: true,
	    slideWidth: 400,
	    minSlides: 4,
	    maxSlides: 4,
	    slideMargin: 1,
	    pager:false,
	    nextSelector: '.gallery--controls__next',
	    nextText:'<i class="fa  fa-2x fa-chevron-right"></i>',
  		prevSelector: '.gallery--controls__prev',
  		prevText: '<i class="fa  fa-2x fa-chevron-left"></i>'
	});
  });
});