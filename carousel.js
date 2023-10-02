$('.burger-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
        {
          breakpoint: 980,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    });
  