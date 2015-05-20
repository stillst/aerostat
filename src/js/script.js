$(document).ready(function(){
  
  	//slider
    var slider = $('.bxslider').bxSlider(
    {
	    auto: true,
	    slideWidth: 400,
	    minSlides: 4,
	    maxSlides: 4,
	    slideMargin: 20,
	    pager:false,
	    nextSelector: '.gallery__controls--next',
	    nextText:'<i class="fa  fa-2x fa-chevron-right"></i>',
  		prevSelector: '.gallery__controls--prev',
  		prevText: '<i class="fa  fa-2x fa-chevron-left"></i>'
	});

	var feedbacks_slider = $('.feedbacks__slider').bxSlider(
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


    if($('.wrapper').width()<720)
	{ 	          	
    	slider.reloadSlider(
    	{			    	  
		    auto: true,
		    slideWidth: 700,
		    maxSlides: 1,
		    pager:true,
	  	});    

	  	feedbacks_slider.reloadSlider(
    	{			    	  
		    auto: true,
		    slideWidth: 700,
		    maxSlides: 1,
		    pager:false,
	  	});    
	}	   

    function change_options_after_resize()
	{
		$('.head-foot__nav').css('display', 'none');
	   	if($('.wrapper').width()<720)
	    { 	    	 
	    	slider.reloadSlider(
	    	{			    	  
			    auto: true,
    		    slideWidth: 700,
    		    maxSlides: 1,
    		    pager:true,
		  	});    
		  	feedbacks_slider.reloadSlider(
    		{			    	  
			    auto: true,
			    slideWidth: 700,
			    maxSlides: 1,
			    pager:false,
	  		});  
	    }	

	    else
	    {
	    	$('.head-foot__nav').css('display', 'block');
	    	slider.reloadSlider(
	    	{			    	  
			    auto: true,
			    slideWidth: 400,
			    minSlides: 4,
			    maxSlides: 4,
			    slideMargin: 20,
			    pager:false,
			    nextSelector: '.gallery__controls--next',
			    nextText:'<i class="fa  fa-2x fa-chevron-right"></i>',
		  		prevSelector: '.gallery__controls--prev',
		  		prevText: '<i class="fa  fa-2x fa-chevron-left"></i>'
		  	});    

		  	feedbacks_slider.reloadSlider(
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
	    }   
	}

	$(window).resize(change_options_after_resize);

  
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
}); 