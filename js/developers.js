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

  $('.choice-lang ul li:first-child a').on('mouseover', function () {
    $('.choice-lang ul li:first-child a').addClass('select-color')
    $('.choice-lang ul li:last-child a').removeClass('select-color')
  })
  $('.choice-lang ul li:last-child a').on('mouseover', function () {
    $('.choice-lang ul li:last-child a').addClass('select-color')
    $('.choice-lang ul li:first-child a').removeClass('select-color')
  })

  $('#none-btn1').on('click', function () {
    let down = $('#down-arrow');
    let up = $('#up-arrow');

    if (up.hasClass("dp-block") === true) {
      up.removeClass("dp-block")
      up.addClass("dp-none")
      down.addClass("dp-block")
      down.removeClass("dp-none")
      // $('#onestore-section').addClass('on')
      $('#onestore-section').fadeIn({'display':'block'},500);
    } else {
      down.removeClass("dp-block")
      down.addClass("dp-none")
      up.addClass("dp-block")
      up.removeClass("dp-none")
      $('#onestore-section').fadeOut({'display':'none'},500);
      // $('#onestore-section').removeClass('on')
    }
  })

  $('#none-btn2').on('click', function () {
    let down = $('#down-arrow2');
    let up = $('#up-arrow2');

    if (up.hasClass("dp-block") === true) {
      up.removeClass("dp-block")
      up.addClass("dp-none")
      down.addClass("dp-block")
      down.removeClass("dp-none")
      $('#onestore-section2').fadeIn({'display':'block'},500);
    } else {
      down.removeClass("dp-block")
      down.addClass("dp-none")
      up.addClass("dp-block")
      up.removeClass("dp-none")
      $('#onestore-section2').fadeOut({'display':'none'},500);
    }
  })

  $('#none-btn3').on('click', function () {
    let down = $('#down-arrow3');
    let up = $('#up-arrow3');

    if (up.hasClass("dp-block") === true) {
      up.removeClass("dp-block")
      up.addClass("dp-none")
      down.addClass("dp-block")
      down.removeClass("dp-none")
      $('#onestore-section3').fadeIn({'display':'block'},500);
    } else {
      down.removeClass("dp-block")
      down.addClass("dp-none")
      up.addClass("dp-block")
      up.removeClass("dp-none")
      $('#onestore-section3').fadeOut({'display':'none'},500);

    }
  })
  $('#none-btn4').on('click', function () {
    let down = $('#down-arrow4');
    let up = $('#up-arrow4');

    if (up.hasClass("dp-block") === true) {
      up.removeClass("dp-block")
      up.addClass("dp-none")
      down.addClass("dp-block")
      down.removeClass("dp-none")
      $('#onestore-section4').fadeIn({'display':'block'},500);
    } else {
      down.removeClass("dp-block")
      down.addClass("dp-none")
      up.addClass("dp-block")
      up.removeClass("dp-none")
      $('#onestore-section4').fadeOut({'display':'none'},500);
    }
  })
})
