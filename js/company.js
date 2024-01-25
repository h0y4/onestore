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
        nextArrow: $('.slick-next'),
        prevArrow: $('.slick-prev'),
    });

    $('#videoModal').on('shown.bs.modal', function (event) {
        $('body,html').css('overflow-y', 'scroll');
        $('body').addClass('scroll')
        $('.modal-open').css('padding', 0);
    });

    $('#videoModal').on('hidden.bs.modal', function (event) {
        $('body,html').css('overflow', 'auto');
        $('body').removeClass('scroll')
    });

    // 네비 햄버거 버튼 눌렀을때
    $('#toggle-btn').click(function () {
        $('#toggle-btn2').css('opacity', 1);
        $('#toggle-btn').addClass("active");
        $('#toggle-btn2').removeClass("active");
        $('#m-nav').addClass("cs-d-block");
        $('.sub-link').addClass("no-active");
    });
    $('#toggle-btn2').click(function () {
        $('#toggle-btn2').addClass("active");
        $('#toggle-btn2').css('opacity', 0);
        $('#toggle-btn').removeClass("active");
        $('#m-nav').removeClass("cs-d-block");
        $('.sub-link').removeClass("no-active");
    })


})

