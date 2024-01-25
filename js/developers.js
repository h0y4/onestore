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


  let down1 = $('#down-arrow')
  let down2 = $('#down-arrow2')
  let down3 = $('#down-arrow3')
  let down4 = $('#down-arrow4')

  let up1 = $('#up-arrow');
  let up2 = $('#up-arrow2');
  let up3 = $('#up-arrow3');
  let up4 = $('#up-arrow4');

  let section1 = $('#onestore-section')
  let section2 = $('#onestore-section2')
  let section3 = $('#onestore-section3')
  let section4 = $('#onestore-section4')


  $('#none-btn1').on('click', function () {
    if (up1.hasClass("dp-block") === true) {
      up1.removeClass("dp-block")
      up1.addClass("dp-none")
      down1.addClass("dp-block")
      down1.removeClass("dp-none")
      section1.fadeIn({'display': 'block'}, 500);
      section2.fadeOut({'display': 'none'}, 500);
      section3.fadeOut({'display': 'none'}, 500);
      section4.fadeOut({'display': 'none'}, 500);
      up1.removeClass("dp-block")
    } else {
      down1.removeClass("dp-block")
      down1.addClass("dp-none")
      up1.addClass("dp-block")
      up1.removeClass("dp-none")
      section1.fadeOut({'display': 'none'}, 500);
    }

    if (down2.hasClass("dp-block") === true) {
      down2.removeClass("dp-block")
      up2.removeClass("dp-none")
      up2.addClass("dp-block")
      down2.addClass("dp-none")
    }
    if (down3.hasClass("dp-block") === true) {
      down3.removeClass("dp-block")
      up3.removeClass("dp-none")
      up3.addClass("dp-block")
      down3.addClass("dp-none")
    }
    if (down4.hasClass("dp-block") === true) {
      down4.removeClass("dp-block")
      up4.removeClass("dp-none")
      up4.addClass("dp-block")
      down4.addClass("dp-none")
    }
  })


  $('#none-btn2').on('click', function () {
    if (up2.hasClass("dp-block") === true) {
      up2.removeClass("dp-block")
      up2.addClass("dp-none")
      down2.addClass("dp-block")
      down2.removeClass("dp-none")
      section2.fadeIn({'display': 'block'}, 500);
      section1.fadeOut({'display': 'none'}, 500);
      section3.fadeOut({'display': 'none'}, 500);
      section4.fadeOut({'display': 'none'}, 500);
      setInterval(function () {
        if ($(".swiper-pagination-bullet[aria-label='Go to slide 1']").hasClass('swiper-pagination-bullet-active') === true) {
          $(".swiper-pagination-bullet[aria-label='Go to slide 3']").removeClass('bgtx-color')
          $(".swiper-pagination-bullet[aria-label='Go to slide 1']").addClass('bgtx-color')

        }
        if ($(".swiper-pagination-bullet[aria-label='Go to slide 2']").hasClass('swiper-pagination-bullet-active') === true) {
          $(".swiper-pagination-bullet[aria-label='Go to slide 1']").removeClass('bgtx-color')
          $(".swiper-pagination-bullet[aria-label='Go to slide 2']").addClass('bgtx-color')
        }
        if ($(".swiper-pagination-bullet[aria-label='Go to slide 3']").hasClass('swiper-pagination-bullet-active') === true) {
          $(".swiper-pagination-bullet[aria-label='Go to slide 2']").removeClass('bgtx-color')
          $(".swiper-pagination-bullet[aria-label='Go to slide 3']").addClass('bgtx-color')
        }

        $(".swiper1 .swiper-pagination-bullet[aria-label='Go to slide 1']").text("게임/앱 패널 메인")
        $(".swiper1 .swiper-pagination-bullet[aria-label='Go to slide 1']").css({
          "width": "auto",
          "height": "40px",
          "line-height": "40px",
          "display": "inline-block",
          "vertical-align": "top",
          "border-radius": "20px",
          "font-size": "16px",
          "font-weight": "400",
          "padding": "0 18px",
          "color": "rgba(24, 24, 24, 0.9)",
          "background": "#E6E6EB",
          "opacity": "1",
          "cursor": "no-drop"
        })

        $(".swiper1 .swiper-pagination-bullet[aria-label='Go to slide 2']").text("상품 상세 페이지: 추천 영역")
        $(".swiper1 .swiper-pagination-bullet[aria-label='Go to slide 2']").css({
          "width": "auto",
          "height": "40px",
          "line-height": "40px",
          "display": "inline-block",
          "vertical-align": "top",
          "border-radius": "20px",
          "font-size": "16px",
          "font-weight": "400",
          "padding": "0 18px",
          "color": "rgba(24, 24, 24, 0.9)",
          "background": "#E6E6EB",
          "opacity": "1",
          "cursor": "no-drop"
        })

        $(".swiper1 .swiper-pagination-bullet[aria-label='Go to slide 3']").text("게임 랭킹 패널 상단")
        $(".swiper1 .swiper-pagination-bullet[aria-label='Go to slide 3']").css({
          "width": "auto",
          "height": "40px",
          "line-height": "40px",
          "display": "inline-block",
          "vertical-align": "top",
          "border-radius": "20px",
          "font-size": "16px",
          "font-weight": "400",
          "padding": "0 18px",
          "color": "rgba(24, 24, 24, 0.9)",
          "background": "#E6E6EB",
          "opacity": "1",
          "cursor": "no-drop"
        })

        $(".swiper2 .swiper-pagination-bullet[aria-label='Go to slide 1']").text("게임 패널 상단 배너")
        $(".swiper2 .swiper-pagination-bullet[aria-label='Go to slide 1']").css({
          "width": "auto",
          "height": "40px",
          "line-height": "40px",
          "display": "inline-block",
          "vertical-align": "top",
          "border-radius": "20px",
          "font-size": "16px",
          "font-weight": "400",
          "padding": "0 18px",
          "color": "rgba(24, 24, 24, 0.9)",
          "background": "#E6E6EB",
          "opacity": "1",
          "cursor": "no-drop"
        })

        $(".swiper2 .swiper-pagination-bullet[aria-label='Go to slide 2']").text("타이틀 상세 페이지")
        $(".swiper2 .swiper-pagination-bullet[aria-label='Go to slide 2']").css({
          "width": "auto",
          "height": "40px",
          "line-height": "40px",
          "display": "inline-block",
          "vertical-align": "top",
          "border-radius": "20px",
          "font-size": "16px",
          "font-weight": "400",
          "padding": "0 18px",
          "color": "rgba(24, 24, 24, 0.9)",
          "background": "#E6E6EB",
          "opacity": "1",
          "cursor": "no-drop"
        })

        $(".swiper2 .swiper-pagination-bullet[aria-label='Go to slide 3']").text("혜택 패널: 쿠폰 득템전")
        $(".swiper2 .swiper-pagination-bullet[aria-label='Go to slide 3']").css({
          "width": "auto",
          "height": "40px",
          "line-height": "40px",
          "display": "inline-block",
          "vertical-align": "top",
          "border-radius": "20px",
          "font-size": "16px",
          "font-weight": "400",
          "padding": "0 18px",
          "color": "rgba(24, 24, 24, 0.9)",
          "background": "#E6E6EB",
          "opacity": "1",
          "cursor": "no-drop"
        })
      })
    } else {
      down2.removeClass("dp-block")
      down2.addClass("dp-none")
      up2.addClass("dp-block")
      up2.removeClass("dp-none")
      section2.fadeOut({'display': 'none'}, 500);
    }

    if (down1.hasClass("dp-block") === true) {
      down1.removeClass("dp-block")
      up1.removeClass("dp-none")
      up1.addClass("dp-block")
      down1.addClass("dp-none")
    }
    if (down3.hasClass("dp-block") === true) {
      down3.removeClass("dp-block")
      up3.removeClass("dp-none")
      up3.addClass("dp-block")
      down3.addClass("dp-none")
    }
    if (down4.hasClass("dp-block") === true) {
      down4.removeClass("dp-block")
      up4.removeClass("dp-none")
      up4.addClass("dp-block")
      down4.addClass("dp-none")
    }

  })


  $('#none-btn3').on('click', function () {
    if (up3.hasClass("dp-block") === true) {
      up3.removeClass("dp-block")
      up3.addClass("dp-none")
      down3.addClass("dp-block")
      down3.removeClass("dp-none")
      section3.fadeIn({'display': 'block'}, 500);
      section1.fadeOut({'display': 'none'}, 500);
      section2.fadeOut({'display': 'none'}, 500);
      section4.fadeOut({'display': 'none'}, 500);
    } else {
      down3.removeClass("dp-block")
      down3.addClass("dp-none")
      up3.addClass("dp-block")
      up3.removeClass("dp-none")
      section3.fadeOut({'display': 'none'}, 500);
    }
    if (down1.hasClass("dp-block") === true) {
      down1.removeClass("dp-block")
      up1.removeClass("dp-none")
      up1.addClass("dp-block")
      down1.addClass("dp-none")
    }
    if (down2.hasClass("dp-block") === true) {
      down2.removeClass("dp-block")
      up2.removeClass("dp-none")
      up2.addClass("dp-block")
      down2.addClass("dp-none")
    }
    if (down4.hasClass("dp-block") === true) {
      down4.removeClass("dp-block")
      up4.removeClass("dp-none")
      up4.addClass("dp-block")
      down4.addClass("dp-none")
    }
  })

  $('#none-btn4').on('click', function () {
    if (up4.hasClass("dp-block") === true) {
      up4.removeClass("dp-block")
      up4.addClass("dp-none")
      down4.addClass("dp-block")
      down4.removeClass("dp-none")
      section4.fadeIn({'display': 'block'}, 500);
      section1.fadeOut({'display': 'none'}, 500);
      section2.fadeOut({'display': 'none'}, 500);
      section3.fadeOut({'display': 'none'}, 500);
    } else {
      down4.removeClass("dp-block")
      down4.addClass("dp-none")
      up4.addClass("dp-block")
      up4.removeClass("dp-none")
      section4.fadeOut({'display': 'none'}, 500);
    }
    if (down1.hasClass("dp-block") === true) {
      down1.removeClass("dp-block")
      up1.removeClass("dp-none")
      up1.addClass("dp-block")
      down1.addClass("dp-none")
    }
    if (down2.hasClass("dp-block") === true) {
      down2.removeClass("dp-block")
      up2.removeClass("dp-none")
      up2.addClass("dp-block")
      down2.addClass("dp-none")
    }
    if (down3.hasClass("dp-block") === true) {
      down3.removeClass("dp-block")
      up3.removeClass("dp-none")
      up3.addClass("dp-block")
      down3.addClass("dp-none")
    }
  })
})

