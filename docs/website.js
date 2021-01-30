// jQuery(document).ready(function($) {
//     "use strict";
//     $('#customers-testimonials').owlCarousel( {
//             loop: true,
//             center: true,
//             items: 3,
//             margin: 30,
//             autoplay: true,
//             dots:true,
//         nav:true,
//             autoplayTimeout: 8500,
//             smartSpeed: 450,
//           navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//             responsive: {
//                 0: {
//                     items: 1
//                 },
//                 768: {
//                     items: 2
//                 },
//                 1170: {
//                     items: 3
//                 }
//             }
//         });
//     });
jQuery(document).ready(function($) {
    "use strict";
    $('#testimonials-list').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});

$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});