function setBackground() {
	$('[setBackground]').each(function () {
		var background = $(this).attr('setBackground')
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-size": "cover",
			"background-position": "center center"
		})
	})
	$('[setBackgroundRepeat]').each(function () {
		var background = $(this).attr('setBackgroundRepeat')
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-repeat": "repeat"
		})
	})
}
function Aos(){
	AOS.init({
		disable: 'phone',
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
		initClassName: "aos-init", // class applied after initialization
		animatedClassName: "aos-animate", // class applied on animation

		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 700, // values from 0 to 3000, with step 50ms
		easing: "ease", // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
	});
}
function images(){
	$(function(){
		$('.panorama-view').panorama360();
	});
}
function compareZoom(){
	$('.box-compare .zoom').click(function () {
 
		if ($(this).hasClass('in')) {
		
		 $(this).removeClass('in');
		 $('.box-compare').removeClass('active');
		 $(this).addClass('out');
		} else {
		  $(this).removeClass('out');
		 $('.box-compare').addClass('active');
		 $(this).addClass('in');
		}
	  });
}
$(document).ready(function () {
	setBackground()
	Aos()
	images()
	compareZoom()
});