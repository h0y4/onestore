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
  $('.lang-menu li:first-child').mouseover(function () {
    $('.choice-lang').addClass('dp-block')
  })
  $('.lang-menu li:first-child').mouseout(function () {
    $('.choice-lang').removeClass('dp-block')
  })

  $('.choice-lang ul li:first-child a').on('mouseover', function () {
    $('.choice-lang ul li:first-child a').addClass('select-color')
    $('.choice-lang ul li:last-child a').removeClass('select-color')
  })
  $('.choice-lang ul li:last-child a').on('mouseover', function () {
    $('.choice-lang ul li:last-child a').addClass('select-color')
    $('.choice-lang ul li:first-child a').removeClass('select-color')
    $('.choice-lang ul li:last-child a').on('mouseleave',function (){
      $('.choice-lang ul li:last-child a').removeClass('select-color')
      $('.choice-lang ul li:first-child a').addClass('select-color')
    })
  })
})
