$(document).ready(function(){
  $('.slider').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
});

$('#loader').fadeOut('slow');
  $('#content').fadeIn('slow');
  setTimeout(() => { 
  	AOS.refresh();
  }, 500);

function openNav(button){
	// button.classList.toggle('opened');
	// button.setAttribute('aria-expanded', button.classList.contains('opened'));
	$('#myNav').css('width', "100%");
	$('body').addClass('overlayBody');
}
/* Open when someone clicks on the span element */


/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  $('#myNav').css('width', "0%");
	$('body').removeClass('overlayBody');
}

// $(window).resize(() => {
// 	let presentation = $('#presentation');
// 	console.log(window.screen.width);
// 	presentation[0].height = window.screen.width * .9;
// 	presentation[0].width = window.screen.width * .9;
// 	console.log(presentation[0].height);
// 	console.log(presentation[0].width);
// });