$(document).ready(function(){
  $('.g-carousel').slick({
    slidesToShow: 5,
    infinite: true,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            infinite: true,
        }
      },
      {
        breakpoint: 940,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
        }
      }
    ]
  });
});

AOS.init();