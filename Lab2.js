$('#control').ready(function()
{
    initialize(36.588056, -116.943056);
    $('#submit').click(function()
{     
        calcRoute();     
         
       
 });
});
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
function initialize(lat,lan) {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center:new google.maps.LatLng(lat,lan)
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
     var control = document.getElementById('control');
  control.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
}

function calcRoute() {
  var selectedMode = document.getElementById('mode').value;
  var a = document.getElementById('start').value;
var b = document.getElementById('end').value;
    var request = {
      origin: a,
      destination: b,

      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}