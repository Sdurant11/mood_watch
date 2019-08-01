class Command {
  constructor(){
    this.worldMap = new MapCreator();
    this.coordinatesArray = [];
    this.keyword = "taco"
    this.geocodeLocations = this.geocodeLocations.bind(this);
    this.twitter = new Twitter(this.geocodeLocations, this.keyword);
    this.geocoder = new Geocoder();
    this.twitter.getUserLocation();
    // this.worldMap.createMarkers();


  }

  geocodeLocations(locationArray){
    for (var i = 0; i < locationArray.length; i++) {
      this.geocoder.getGeocodeCoordinates(locationArray[i]);
    }
  }


}
