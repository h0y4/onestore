$(function () {
  // 스크롤 이동 시 네비메뉴 색변경
  $(window).scroll(function () {
    let nav = $("#nav");

    let scTop = $(window).scrollTop();
    if (scTop > 1) {
      nav.addClass("nav-fixed")
    }
    if (scTop == 0) {
      nav.removeClass("nav-fixed")
    }
  })
  $('#toggle-btn').click(function () {
    $('#toggle-btn2').css('opacity', 1);
    $('#toggle-btn').addClass("active");
    $('#toggle-btn2').removeClass("active");
    $('#m-nav').addClass("cs-d-block");
  });
  $('#toggle-btn2').click(function () {
    $('#toggle-btn2').addClass("active");
    $('#toggle-btn2').css('opacity', 0);
    $('#toggle-btn').removeClass("active");
    $('#m-nav').removeClass("cs-d-block");
  })

})
