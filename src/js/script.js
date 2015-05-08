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

    $('.feedbacks__slider').bxSlider(
    {
	    auto: true,
	    slideWidth: 450,
	    minSlides: 2,
	    maxSlides: 2,
	    slideMargin: 1,
	    pager:false,
	    nextSelector: '.feedbacks__controls--next',
	    nextText:'<i class="fa  fa-chevron-right"></i>',
  		prevSelector: '.feedbacks__controls--prev',
  		prevText: '<i class="fa fa-chevron-left"></i>'
	});
  });
});