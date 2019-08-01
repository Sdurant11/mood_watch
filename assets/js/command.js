class Command {
  constructor(){
    debugger;
    this.keyword = "horses"
    this.geocodeLocations = this.geocodeLocations.bind(this);
    this.enterKeyEvent = this.enterKeyEvent.bind(this);
    this.searchButtonEvent = this.searchButtonEvent.bind(this);
    this.twitter = new Twitter(this.geocodeLocations, this.keyword);
    this.geocoder = new Geocoder();
    this.twitter.getUserLocation();
    // window.on("click")
    window.addEventListener("keydown", this.enterKeyEvent);
    $("#searchButton").on("click", this.searchButtonEvent)

  }

  geocodeLocations(locationArray){
    for (var i = 0; i < locationArray.length; i++) {
      this.geocoder.getGeocodeCoordinates(locationArray[i]);
    }
  }
  enterKeyEvent(event){
    if ($(".form-control").val() && event.keyCode === 13 ){
      this.twitter.keyword = $(".form-control").val()
      this.twitter.getUserLocation();
    }
  }
  searchButtonEvent(event){
    if ($(".form-control").val()){
      this.twitter.keyword = $(".form-control").val()
      this.twitter.getUserLocation();
    }
  }

}
