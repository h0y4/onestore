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
  
})
