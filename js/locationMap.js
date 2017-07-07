var directionDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var panorama;
var latLng = new google.maps.LatLng(53.44,-2.7139);
function openWindow(){
  var myIcon = new google.maps.MarkerImage("images/location.png", null, null, null, new google.maps.Size(30,41));
  var dealerMarker = new google.maps.Marker({
    position: latLng,
    map: map,
    animation: google.maps.Animation.DROP
  });
  var content = '<div style="display:block; width:170px; height:120px;"><p style="color:#333; margin:0; padding:0; line-height:normal;"><strong>St Helens VW Centre</strong><br/>Baxters Lane<br/>St Helens<br/>Merseyside<br/>WA9 3NR</p></div>';
  var infowindow = new google.maps.InfoWindow({
    content: content
  });
  google.maps.event.addListener(dealerMarker, 'click', function() {
    infowindow.open(map, dealerMarker);
  });
}
function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var myOptions = {
    center: latLng,
    zoom: 13,
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    scrollwheel: false,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
  }

  map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  panorama = map.getStreetView();
  panorama.setPosition(latLng);
  panorama.setPov({
    heading: 0, /* SPIN STREET VIEW */
    zoom:1,
    pitch:0
  });
  openWindow();
}
function clearText(thefield){
  if (thefield.defaultValue==thefield.value)
  thefield.value = ''
}
function calcRoute() {
  var start = document.getElementById("postcode").value;
  var request = {
    origin:start,
    destination:latLng,
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.IMPERIAL
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}
function toggleStreetView() {
  var toggle = panorama.getVisible();
  if (toggle == false) {
    panorama.setVisible(true);
  } else {
    panorama.setVisible(false);
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
