class Geocoder {
  constructor(){
    this.getGeocodeCoordinates = this.getGeocodeCoordinates.bind(this);
  }
  getGeocodeCoordinates(location) {
    var ajaxGeocodeSettings = {
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      data: {
        key: 'AIzaSyDNUkV37SJjXxiUK09iPw3yH2WCRZ7XvtA',
        address: location
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
}
