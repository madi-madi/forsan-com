$(document).ready(function(){
/// time slide go to slide  two 
	$('.carousel').carousel({
		interval:3000
	});
// end time out  to Slide Show 


//  hover  in li  navbar  toggleClass active  
	$('div.collapse  ul.nav li').hover(function(){
		$('div.collapse  ul.nav li').removeClass("active");
		$(this).toggleClass("active");
	});


	/*
	$('div.collapse  ul.nav li').mouseleave(function(){
		$('div.collapse  ul.nav li').removeClass("active");
		$('li:first-child').toggleClass("active");

	});
	*/
	/// End hover navebar 

$('.progress-number').each(function() {
  $(this).animate({
    left: $(this).data('percentage')
  }, {
    duration: 1500,
    step: function(now, fx) {
      var data = Math.round(now);
      $(this).text(data );
    }
  });
});

//  Function  show  div Color option  
$(".gear-check").click(function(){

	$(".color-option").toggle(800);
});






// change Color theme on Click 
	
	var colorLi =$(".color-option ul li");
	
 colorLi  
	.eq(0).css("backgroundColor","#F44336").end()
	.eq(1).css("backgroundColor","#4f9d2b").end()
	.eq(2).css("backgroundColor","#fd6c02");

	colorLi.click(function(){

		$("link[href*='theme']").attr("href",$(this).attr("data-value"));

	});

});


// $(window).load /// erroe !!!
	$(window).on("load", function(){

	$(".loading-overlay .spinner").fadeOut(2000 , 
		function(){
			$(this).parent().fadeOut(2000 , 
				function(){
					$("body").css("overflow" , "auto");
					$(this).remove();

				});
	});
});