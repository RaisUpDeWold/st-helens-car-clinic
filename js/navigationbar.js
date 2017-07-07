var bottom = $('.topnav').offset().top;
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(this).scrollTop() > bottom) {
    $('.topnav').addClass('navbar-fixed-top');
    $('.topnav').addClass('top-nav-collapse');
  } else {
    $('.topnav').removeClass('navbar-fixed-top');
    $('.topnav').removeClass('top-nav-collapse');
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});
