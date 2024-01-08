$(function (){

  let search_more = $(".js-search-more");
  let search_more2 = $(".js-search-more2");

  search_more.on('click', function () {
    $('.todaysearch-wrap .search-sub .search-list ul li:nth-of-type(1), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(2), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(3), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(4), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(5)').css('display','none');
    $('.todaysearch-wrap .search-sub .search-list ul li:nth-of-type(6), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(7), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(8), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(9), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(10)').css('display','block');
    $('.js-search-more').css('display','none')
    $('.js-search-more2').css('display','block');
  })
  search_more2.on('click', function () {
    $('.todaysearch-wrap .search-sub .search-list ul li:nth-of-type(1), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(2), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(3), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(4), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(5)').css('display','block');
    $('.todaysearch-wrap .search-sub .search-list ul li:nth-of-type(6), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(7), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(8), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(9), .todaysearch-wrap .search-sub .search-list ul li:nth-of-type(10)').css('display','none');
    $('.js-search-more2').css('display','none')
    $('.js-search-more').css('display','block');
  })

})
