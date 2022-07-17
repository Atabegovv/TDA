$(function () {


  //header-slider
  $('.header__slider-inner').slick({
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1850,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1444,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });


  //popular-slider
  $('.popular-slider__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  
  //sale-slider
  $('.sale-slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });

   //news-slider
   $('.news-slider__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });


  //sidenav-tabs
  $(".aside__tab-content").not(":first").hide();
  $(".sidenav__wrapper .aside-tab").click(function() {
    $(".sidenav__wrapper .aside-tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".aside__tab-content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
  
});

//sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}