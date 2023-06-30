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

	$(".travel-slider, .sleep-slider, .shop-slider").slick({
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrow-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrow-right.svg" alt="">'
	});

	

	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
		var spinner = $(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	$(".quantity-button").on("click", function(){
		const nightCount = $(".nights").val();
		const costPerNight = $(".total").data("night");
		const guestCount = $(".guests").val();
		const costPerGuest = $(".total").data("guest")

		let total =  nightCount * costPerNight + (guestCount - 1) * costPerGuest;
		const currency = "USD";

		$(".total").html("$" + total + " " + currency)	;
	})

	$(".product-box__circle").on('click', function(){
		$(this).parent().toggleClass("active")
	})

});