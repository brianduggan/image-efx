$(function(){

	function crossFadeMouseOn() {
		$(this).find('.front').fadeTo(400, 0);
	}

	function crossFadeMouseOff() {
		$(this).find('.front').fadeTo(400, 1);
	}

	$('.crossfade-frame').hover(crossFadeMouseOn, crossFadeMouseOff);

	$('.slide-frame').hover(function(){
		$(this).find('.top').slideUp("slow");
	}, function(){
		$(this).find('.top').slideDown("fast");
	});

	$('.caption-frame').hover(function(){
		var $p = $(this).find('p'),
			padding = 40,
			height = $(this).find('p').height();
		$p.animate({bottom: height + padding},"slow");
	}, function(){
		var $p = $(this).find('p');
		$p.animate({bottom: 0},"fast");
	});


});