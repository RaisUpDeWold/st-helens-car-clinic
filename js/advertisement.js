$(window).load(function() {
  $("#servicesFlexisel").flexisel({
    visibleItems: 3,
    itemsToScroll: 1,
    autoPlay: {
      enable: true,
      interval: 3000,
      pauseOnHover: true
    }
  });
});
