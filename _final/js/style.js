// for fixed navbar
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 30) {
      $(".navigation").addClass("fixed");
    } else {
      $(".navigation").removeClass("fixed")
    }
  });

  $(".navbar-nav .nav-link").click(function (){
    $(".navbar-collapse").removeClass("show");
  });
});


// for skill section
$(function(){
$('.circlechart').circlechart();
});

// for portfolio section
$(document).ready(function() {
  var mixer = mixitup('.filter-content');
});

// for contact section
 function alart(){
   alert("YOUR COMMENT IS SUBMITED!")
 }

// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '.navbar'
// });

ScrollReveal({
  distance:"4rem",
  duration: 2500,
  delay: 400,
})

// for home section
ScrollReveal().reveal("h1", { origin: "left" });
ScrollReveal().reveal(".h-link", { origin: "bottom", delay: 600, });

// for all section 
ScrollReveal().reveal(".section-title h2", { origin: "left" });
ScrollReveal().reveal(".section-title p", { origin: "right" });
 
ScrollReveal().reveal(".row div:first-child", { origin: "left"});
ScrollReveal().reveal(".row div:nth-child(2)", { origin: "bottom" });
ScrollReveal().reveal(".row div:nth-child(3)", { origin: "top" });
ScrollReveal().reveal(".row div:last-child", { origin:"right"   });

// for social icons
ScrollReveal().reveal(".sc1 i", { origin: "buttom", delay: 700, interval:200});
ScrollReveal().reveal(".sc2 i", { origin: "buttom", delay: 700, interval:200});
ScrollReveal().reveal(".sc3 i", { origin: "buttom", delay: 700, interval:200});
ScrollReveal().reveal(".sc4 i", { origin: "buttom", delay: 700, interval:200});

// for portfolio section
ScrollReveal().reveal(".filter-btns button", { distance:"20px", interval:200});




