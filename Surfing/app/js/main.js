$(function(){
	$(".first-screen__slider").slick({
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrow-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrow-right.svg" alt="">',
		asNavFor: ".dots-slider",	
	
	})

	$(".dots-slider").slick({
		slidesToShow: 4,
		asNavFor: ".first-screen__slider",
	})


  
});