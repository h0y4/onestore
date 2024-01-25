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


    // 네비 햄버거 버튼 눌렀을때
    $('#toggle-btn').click(function () {
        $('#toggle-btn2').css('opacity', 1);
        $('#toggle-btn').addClass("active");
        $('#toggle-btn2').removeClass("active");
        $('#m-nav').addClass("cs-d-block");
        // cursor pointer / 속성추가
        $('.sub-link').addClass("cursor");
    });
    $('#toggle-btn2').click(function () {
        $('#toggle-btn2').addClass("active");
        $('#toggle-btn2').css('opacity', 0);
        $('#toggle-btn').removeClass("active");
        $('#m-nav').removeClass("cs-d-block");
        // cursor pointer / 속성제거
        $('.sub-link').removeClass("cursor");
    })
})
