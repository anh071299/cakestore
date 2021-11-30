$('#banner-sliders').owlCarousel({
  dots: false,
  loop: true,
  autoplay: false,
  nav: false,
  margin: 0,
  items: 1,
});
$('#service-sliders').owlCarousel({
  dots: true,
  loop: true,
  autoplay: false,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>"
  ],
  margin: 0,
  responsiveClass: true,
  responsive: {
    1: {
      items: 1,
    },
    991: {
      items: 3,
    },
  }
});
$('.about-sliders').owlCarousel({
  dots: true,
  loop: true,
  autoplay: true,
  nav: false,
  margin: 20,
  responsive: {
    1: {
      items: 1,
    },
    991: {
      items: 1,
    },
  }
});

$('#review-sliders').owlCarousel({
  dots: true,
  loop: true,
  autoplay: false,
  margin: 30,
  responsive: {
    1: {
      items: 1,
    },
    991: {
      items: 2,
    },
  }
});

$('#blog-sliders').owlCarousel({
  dots: true,
  loop: true,
  autoplay: false,
  margin: 30,
  responsive: {
    1: {
      items: 1,
    },
    991: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  }
});

$('#team-sliders').owlCarousel({
  dots: true,
  loop: true,
  autoplay: false,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>"
  ],
  responsive: {
    1: {
      items: 1,
    },
    550: {
      items: 2,
    },
    991: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  }
});

$('.counter__value').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');
  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },
    {
      duration: 3500,
      easing: 'swing',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }
    });
});
// $('#team').scroll(function() {
//     if(this.scrollTop == (this.scrollHeight - this.offsetHeight)) {
//         console.log('ok')
//     }

// })
// Get all sections that have an ID defined
const sections = $("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  $.each(sections, (key, current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    sectionId = current.getAttribute("id");
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      if (sectionId == 'banner-sliders') {
        $(".navbar-nav  a[href*= page-top]").addClass("active");
      }
      else {
        $(".navbar-nav  a[href*= page-top]").removeClass("active");
      }
      $(".navbar-nav  a[href*=" + sectionId + "]").addClass("active");
    } else {
      $(".navbar-nav  a[href*=" + sectionId + "]").removeClass("active");
    }
  });
}