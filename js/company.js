$(function () {
  let nav = $("#nav");

  $('#link').click(function () {
    var src = src = 'https://www.youtube.com/embed/eIG4nIsfrmE?si=GkMJF8Uoo4c2O0Ml title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    $('#videoModal').modal('show');
    $('#videoModal iframe').attr('src', src);
  });

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
})

