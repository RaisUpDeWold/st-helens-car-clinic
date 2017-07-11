var bottom = $('.topnav').offset().top;
//jQuery to collapse the navbar on scroll
$(document).scroll(function() {
  if ($(this).scrollTop() > bottom) {
    $('.topnav').addClass('navbar-fixed-top');
    $('.topnav').addClass('top-nav-collapse');

    $('#navigationSocialButtonGroup').css('display', 'inline-block');
  } else {
    $('.topnav').removeClass('navbar-fixed-top');
    $('.topnav').removeClass('top-nav-collapse');

    $('#navigationSocialButtonGroup').css('display', 'none');
  }

  setActiveListElements();
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + 10
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Update current item class
function setActiveListElements(event){
  var windowPos = $(document).scrollTop();
  $('#topNavBar li a[href^="#"]').each(function() {
    var currentLink = $(this);
    if ($(currentLink.attr("href")).length > 0) {
      var refElement = $(currentLink.attr("href"));
      if (refElement.position().top <= windowPos && (refElement.position().top + refElement.height() + $("#topNavBar").height() ) > windowPos) {
        $('#topNavBar li').removeClass("active");
        currentLink.parent().addClass('active');
      }
      else{
        currentLink.removeClass("active");
      }
    }
  });
}
