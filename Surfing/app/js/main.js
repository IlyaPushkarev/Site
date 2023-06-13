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

	$(".surf-slider").slick({
		slidesToShow: 4,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrow-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrow-right.svg" alt="">',
		asNavFor: ".surf-map-slider",
	});

	$(".surf-map-slider").slick({
		slidesToShow: 8,
		asNavFor: ".surf-slider",
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		adaptiveHeight: true,
	});

	$(".travel-slider").slick({
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrow-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrow-right.svg" alt="">'
		})
});