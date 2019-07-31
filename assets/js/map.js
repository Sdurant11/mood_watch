// GOOGLE MAPS jacvascript map API KEY: AIzaSyDNUkV37SJjXxiUK09iPw3yH2WCRZ7XvtA
$(document).ready(initializeApp)

function initializeApp() {
  getGeoLocation();

}

function getGeoLocation(){
  var ajaxGeocodeSettings= {
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    data: {
      key: 'AIzaSyDNUkV37SJjXxiUK09iPw3yH2WCRZ7XvtA',
      address: "14"
    },
    dataType: 'json',
    success: function (response) {
      console.log('success', response);
    },
    error: function (error) {
      console.log('error', error);
    }

  };
  $.ajax(ajaxGeocodeSettings)
}

var map;
function getMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 39.0997, lng: -94.5786},
    zoom: 5.3
  });
}
