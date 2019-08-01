class Command {
  constructor(){
    this.worldMap = new MapCreator();
    this.coordinatesArray = [];
    this.ajaxCallCounter = null;
    this.ajaxFinishCheck = this.ajaxFinishCheck.bind(this);
    this.keyword = "taco"
    this.geocodeLocations = this.geocodeLocations.bind(this);
    this.textToEmotionGenerator = this.textToEmotionGenerator.bind(this);
    this.enterKeyEvent = this.enterKeyEvent.bind(this);
    this.searchButtonEvent = this.searchButtonEvent.bind(this);
    this.twitter = new Twitter(this.geocodeLocations, this.textToEmotionGenerator, this.keyword);
    this.emotionText = new TextToEmotion();
    this.geocoder = new Geocoder();
    this.twitter.getUserLocation();
    window.addEventListener("keydown", this.enterKeyEvent);
    $("#searchButton").on("click", this.searchButtonEvent)

  }

  ajaxFinishCheck(){
    this.ajaxCallCounter--;
    if(this.ajaxCallCounter < 1 ){
      this.worldMap.createMarkers();
    }
  }

  geocodeLocations(locationArray){
    for (var i = 0; i < locationArray.length; i++) {
      this.ajaxCallCounter++;
      this.geocoder.getGeocodeCoordinates(locationArray[i], this.ajaxFinishCheck);

    }
    this.worldMap.createMarkers();
  }

  textToEmotionGenerator(textArray){
    for(var i = 0; i<textArray.length; i++){
      this.emotionText.analyzeAndAppendText(textArray[i]);
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

  appendToMap(coordinates, smiley){

  }
}
