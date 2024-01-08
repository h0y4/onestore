$(function () {
  $(window).scroll(function () {
    let scTop = $(window).scrollTop();
    let nav = $('#nav');
    if (scTop > 2) {
      nav.addClass("nav-fixed")
    }
    if (scTop == 0) {
      nav.removeClass("nav-fixed")
    }
  })

  $('.subhover').mouseover(function () {
    $('.submenu').addClass('dp-block')
  })
  $('.subhover').mouseout(function () {
    $('.submenu').removeClass('dp-block')
  })
  $('.lang-menu').mouseover(function () {
    $('.choice-lang').addClass('dp-block')
  })
  $('.lang-menu').mouseout(function () {
    $('.choice-lang').removeClass('dp-block')
  })
})
