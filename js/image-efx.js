$(function(){

	function crossFadeMouseOn() {
		$(this).find('img').eq(0).fadeTo(400, 0);
	}

	function crossFadeMouseOff() {
		$(this).find('img').eq(0).fadeTo(400, 1);
	}

	$('.crossfade-frame').hover(crossFadeMouseOn, crossFadeMouseOff);

	$('.slide-frame').hover(function(){
		$(this).find('img').eq(0).slideUp("slow");
	}, function(){
		$(this).find('img').eq(1).slideDown("fast");
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