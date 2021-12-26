$(document).ready(function(){
  $('.slider').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
  // $('#content').css('display', 'block');
  // $('#loader').fadeOut('slow');
  // $('#content').fadeIn('slow');
  // setTimeout(() => { 
  // 	AOS.refresh();
  // }, 500);
  
});

$('#loader').fadeOut('slow');
  $('#content').fadeIn('slow');
  setTimeout(() => { 
  	AOS.refresh();
  }, 500);

function openNav(button){
	button.classList.toggle('opened');
	button.setAttribute('aria-expanded', button.classList.contains('opened'));
	$('#myNav').css('width', "100%");
}
/* Open when someone clicks on the span element */


/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  $('#myNav').css('width', "0%");
}