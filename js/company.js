$(function () {
  let nav = $("#nav");

  $(window).scroll(function () {
    let scTop = $(window).scrollTop();
    if (scTop > 2) {
      nav.addClass("nav-fixed")
    }
    if (scTop == 0) {
      nav.removeClass("nav-fixed")
    }
  })
  nav.mouseover(function () {
    nav.addClass("on")
  })
  nav.mouseout(function () {
    nav.removeClass("on")
  })

  $('.slick-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:$('.slick-next'),
    prevArrow:$('.slick-prev'),
  });

  $('#videoModal').mousedown(function (){
    // $('#element').off('scroll touchmove mousewheel');
    $('.modal').css("overflow","visible");
  })

})

