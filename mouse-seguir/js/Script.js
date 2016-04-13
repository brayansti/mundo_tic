// PantallaCompleta
var button = $("button");
button.click(function(event) {
	toggleFullScreen();
});
function toggleFullScreen() {
	if (!document.fullscreenElement &&// alternative standard method
		!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {// current working methods
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
}



// EventoTouch
$display = $('body');
$(document).bind('touchmove mousemove', function (e) {
	var currentY = e.originalEvent.touches ?
		e.originalEvent.touches[0].pageY : e.pageY;
	var currentX = e.originalEvent.touches ?
		e.originalEvent.touches[0].pageX : e.pageX;
		// console.log(currentY + " " + currentX);
	var nave = $(".nave");
		nave.css({
			"left": currentX-54,
			"top": currentY-64
		});
	// console.log(currentY);
	$('body').css('background-position', currentX/20+"px "+ currentY/20+"px");
	$('html').css('background-position', -currentX/20+"px "+ -currentY/20+"px");
});


// Mover el Background
// $(document).ready(function() {
// 	var movementStrength = 25;
// 	var height = movementStrength / $(window).height();
// 	var width = movementStrength / $(window).width();
// 	$("body").mousemove(function(e){
// 		var pageX = e.pageX - ($(window).width() / 2);
// 		var pageY = e.pageY - ($(window).height() / 2);
// 		var newvalueX = width * pageX * -2 - 25;
// 		var newvalueY = height * pageY * -2 - 50;
// 		$('body').css("background-position", newvalueX+"px "+newvalueY+"px");
// 	});

// 	$("html").mousemove(function(e){
// 		var pageX = e.pageX - ($(window).width()	/ 2);
// 		var pageY = e.pageY - ($(window).height() / 2);
// 		var newvalueX = width * pageX * +1 + 25;
// 		var newvalueY = height * pageY * +1 + 50;
// 		$('html').css("background-position", newvalueX+"px "+newvalueY+"px");
// 	});
// });
