// GOOGLE MAPS jacvascript map API KEY: AIzaSyDNUkV37SJjXxiUK09iPw3yH2WCRZ7XvtA
var map;
function getMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 39.0997, lng: -94.5786},
    zoom: 5.3
  });
}
