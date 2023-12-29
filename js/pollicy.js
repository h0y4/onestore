  $(function () {
  // 드롭다운 메뉴
  $(document).on('click', '.js-drop-title', function () {
    var $elem = $(this);
    var $subElem = $elem.next('.js-drop-content');

    if ($elem.hasClass('on')) {
      $elem.removeClass('on');
      $subElem.slideUp(100);
    } else {
      $elem.addClass('on');
      $subElem.slideDown(100);
    }

    return false;
  });
});
