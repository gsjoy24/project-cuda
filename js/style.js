// for fixed navbar
$(document).ready(function () {
	$('.navbar-nav .nav-link').click(function () {
		$('.navbar-collapse').removeClass('show');
	});

	// for portfolio section
	var mixer = mixitup('.filter-content');
});

// for skill section
$(function () {
	$('.circlechart').circlechart();
});

// for portfolio section

// for contact section
function alert() {
	alert('YOUR COMMENT IS SUBMITTED!');
}

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '.navbar'
// });

ScrollReveal({
	origin: 'bottom',
	distance: '4rem',
	duration: 1500,
	delay: 200
});

// for home section
ScrollReveal().reveal('h1', { origin: 'left' });
ScrollReveal().reveal('.h-link', { origin: 'bottom', delay: 600 });

// for all section
ScrollReveal().reveal('.section-title h2', { origin: 'left' });
ScrollReveal().reveal('.section-title p', { origin: 'right' });

ScrollReveal().reveal('.row div:first-child', { delay: 600 });
ScrollReveal().reveal('.row div:nth-child(2)', { origin: 'bottom' });
ScrollReveal().reveal('.row div:nth-child(3)', { origin: 'bottom', delay: 500 });
ScrollReveal().reveal('.row div:last-child', { origin: 'bottom', delay: 600 });

// for social icons
ScrollReveal().reveal('.sc1 i', { delay: 300, interval: 200 });
ScrollReveal().reveal('.sc2 i', { delay: 300, interval: 200 });
ScrollReveal().reveal('.sc3 i', { delay: 300, interval: 200 });
ScrollReveal().reveal('.sc4 i', { delay: 300, interval: 200 });

// for portfolio section
ScrollReveal().reveal('.filter-btns button', { distance: '20px', interval: 200 });

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#navbar-example'
});
var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
dataSpyList.forEach(function (dataSpyEl) {
	bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();
});
