$(function(){
	$('.slider').slick({
		dots:true,
		arrows:false
	});

	$(".text .button").click(function(){
		$(this).parent().css("display","none");
		$(this).parent().next().css("display","flex");	
	});

	$(".more_information .btn-more").click(function(){
		$(this).parent().css("display","none");
		$(this).parent().prev().css("display","flex");
	});

	$(".gallery__team img").click(function(){
		$(this).next().toggleClass("active")
		
	});

	$('.slider__reviews').slick({
		arrows:false,
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});	

	$(".icon-menu").click(function(){
		$(".header-menu  ul").addClass("active");
		$(this).hide();
		if($(".header-menu  ul").has("active")){
			$(".icon-cross").toggleClass("active");
		} else{$(".icon-cross").toggleClass("active");}

		});
		
		$(".icon-cross").click(function(){
			$(".header-menu  ul").removeClass("active");
			$(this).removeClass("active");
			$(".icon-menu").show();
		});

		$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.gallery__team:not(.slick-initialized)').slick({
     
      arrows:true,
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $(".gallery__team.slick-initialized").slick("unslick");
  }
});

 $(".show-form").click(function(){
 	$('.form').toggleClass('active');
 	if($('.form').hasClass("active")){$(this).text('Cover form')}
 		else{$(this).text('Uncover form')}
 })

})