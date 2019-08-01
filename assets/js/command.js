class Command {
  constructor(){
    debugger;
    this.keyword = "horses"
    this.geocodeLocations = this.geocodeLocations.bind(this);
    this.enterKeyEvent = this.enterKeyEvent.bind(this);
    this.twitter = new Twitter(this.geocodeLocations, this.keyword);
    this.geocoder = new Geocoder();
    this.twitter.getUserLocation();
    // window.on("click")
    window.addEventListener("keydown", this.enterKeyEvent)


  }

  geocodeLocations(locationArray){
    for (var i = 0; i < locationArray.length; i++) {
      this.geocoder.getGeocodeCoordinates(locationArray[i]);
    }
  }
  enterKeyEvent(event){
    if ($(".form-control").val() && event.keyCode === 13 ){
      this.twitter.keyword = $(".form-control").val()
      this.twitter.getUserLocation()
      // $(".form-control").text()
      // this.twitter = new Twitter(this.geocodeLocations, this.keyword)
    }
    
  }
}
