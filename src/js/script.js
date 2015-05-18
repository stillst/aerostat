$(document).ready(function(){
  
  //slider

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

    $('.bxslider__small').bxSlider(
    {
	    auto: true,
	    slideWidth: 400,
	    minSlides: 1,
	    maxSlides: 1,
	    slideMargin: 1,
	    pager:false,
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

	$('.feedbacks__slider--small').bxSlider(
    {
	    auto: true,
	    slideWidth: 400,
	    minSlides: 1,
	    maxSlides: 1,
	    slideMargin: 1,
	});

	
  });

  //dropdownlist
  $(function()
   {
      $(document).on('click', '.questions__list dt', function()
      {          
        $(".questions__list dt").removeClass("questions__active");        
        $(this).addClass("questions__active");                               
      });
   }); 

   //tabs
   $(function()
   {
      $(document).on('click', '.tabs__menu-item', function()
      {  
        var index = $(this).index();            
        $(".tabs__menu-item--active").removeClass("tabs__menu-item--active");        
        $(this).addClass("tabs__menu-item--active");                       
        $(".tabs__article--active").removeClass("tabs__article--active");        
        $(".tabs__article").eq(index).addClass("tabs__article--active");                   
      });
   }); 

   //nav-menu-btn
   $(function()
   {
        $(document).on('click', '.nav-btn', function()
        {      

	      	if($("header nav .head-foot__nav").length) 
	      	{	  			
	  			$('header .head-foot__nav').detach().appendTo($('header .wrapper'));
	  			$( ".head-foot__nav" ).slideToggle("slow");
			}  	
	      	else
	      	{	      		
	      		$( ".head-foot__nav" ).slideToggle("slow", function()
	      		{
        			$('header .head-foot__nav').detach().prependTo($('header .col-8'));
    			});	      				    		
	      	}       		              
	    return false;
        });
   }); 

   //nav-menu-btn-footer
   $(function()
   {
        $(document).on('click', '.nav-btn--up', function()
        {      

	      	if($("footer nav .head-foot__nav").length) 
	      	{	  			
	  			$('footer .head-foot__nav').detach().prependTo($('footer .col-8'));
	  			$( ".head-foot__nav" ).slideToggle("slow");
			}  	
	      	else
	      	{	      		
	      		$(".head-foot__nav" ).slideToggle("slow", function()
	      		{
        			$('footer .head-foot__nav').detach().prependTo($('footer .wrapper'));
    			});	      				    		
	      	}       		              
	    return false;
        });
   }); 
  


  
/*
    function change_options_after_resize()
	{
	   	if($('body').width()<360)
	    { 
	        console.log("Первое");
	              	$('.bxslider').bxSlider(
	        	    {
	        		    auto: true,
	        		    slideWidth: 400,
	        		    minSlides: 1,
	        		    maxSlides: 1,
	        		    slideMargin: 1,
	        		    pager:false,
	        		    nextSelector: '.gallery__controls--next',
	        		    nextText:'<i class="fa  fa-2x fa-chevron-right"></i>',
	        	  		prevSelector: '.gallery__controls--prev',
	        	  		prevText: '<i class="fa  fa-2x fa-chevron-left"></i>'
	        		});

	       
	    }
	    else
	    {
	    	console.log("Второе");
	      	 $('.bxslider').bxSlider(
		    {
			    auto: true,
			    slideWidth: 360,
			    minSlides: 1,
			    maxSlides: 1,
			    slideMargin: 1,
			    pager:false,
			    nextSelector: '.gallery__controls--next',
			    nextText:'<i class="fa  fa-2x fa-chevron-right"></i>',
		  		prevSelector: '.gallery__controls--prev',
		  		prevText: '<i class="fa  fa-2x fa-chevron-left"></i>'
			});
	   	}
	}

	$(window).resize(change_options_after_resize);
	*/
}); 