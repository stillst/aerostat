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
	    nextSelector: '.gallery__controls--next',
	    nextText:'<i class="fa  fa-2x fa-chevron-right"></i>',
  		prevSelector: '.gallery__controls--prev',
  		prevText: '<i class="fa  fa-2x fa-chevron-left"></i>'
	});
  });
});