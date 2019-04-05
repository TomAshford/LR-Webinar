$(document).ready(function() {
	$("div[data-link]").click(function(){
		var scroller = $(this).attr("data-link");
		$('html, body').animate({
			'scrollTop':   $(scroller).offset().top
		}, 1000);
	});
	$("a[data-link]").click(function(){
		var scroller = $(this).attr("data-link");
		$('html, body').animate({
			'scrollTop':   $(scroller).offset().top
		}, 1000);
	});
});