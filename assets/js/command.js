class Command {
  constructor(){
    this.tweetMood = []
    this.markerStorageArray = [];
    this.coordinatesArray = [];
    this.ajaxCallCounter = null;
    this.ajaxFinishCheck = this.ajaxFinishCheck.bind(this);
    this.keyword = "gibberjabbertiddlywink"
    this.geocodeLocations = this.geocodeLocations.bind(this);
    this.textToEmotionGenerator = this.textToEmotionGenerator.bind(this);
    this.enterKeyEvent = this.enterKeyEvent.bind(this);
    this.searchButtonEvent = this.searchButtonEvent.bind(this);
    this.clearButtonEvent = this.clearButtonEvent.bind(this);
    this.twitter = new Twitter(this.geocodeLocations, this.textToEmotionGenerator, this.keyword);
    this.emotionText = new TextToEmotion();
    this.geocoder = new Geocoder();
    this.worldMap = new MapCreator();
    this.worldMap.createMap();
    this.twitter.getUserLocationAndText();
    window.addEventListener("keydown", this.enterKeyEvent);
    $("#searchButton").on("click", this.searchButtonEvent);
    $("#clearButton").on("click", this.clearButtonEvent);
  }

  ajaxFinishCheck(){

    this.ajaxCallCounter--;
    if(this.ajaxCallCounter < 1 ){
      this.worldMap.createMarkers(this.tweetMood);

    }
  }

  geocodeLocations(locationArray){
    for (var i = 0; i < locationArray.length; i++) {
      this.ajaxCallCounter++;
      this.geocoder.getGeocodeCoordinates(locationArray[i], this.ajaxFinishCheck, i);
    }
  }

  textToEmotionGenerator(textArray){
    for(var i = 0; i<textArray.length; i++){
      this.ajaxCallCounter++;
      this.emotionText.analyzeAndAppendText(textArray[i], this.ajaxFinishCheck, i);
    }
  }

  enterKeyEvent(event){
    this.twitter.tweetInfo = [];
    this.tweetMood = []
    this.coordinatesArray = [];
    for (var i = 0; i < this.worldMap.markerArray.length; i++) {
      this.markerStorageArray.push(this.worldMap.markerArray[i]);
    }
    this.worldMap.markerArray = [];
    if ($(".form-control").val() && event.keyCode === 13 ){
      this.twitter.keyword = $(".form-control").val()
      this.twitter.getUserLocationAndText();
    }
  }
  searchButtonEvent(event){
      this.twitter.tweetInfo = [];
      this.tweetMood = []
      this.coordinatesArray = [];
      for (var i = 0; i < this.worldMap.markerArray.length; i++){
        this.markerStorageArray.push(this.worldMap.markerArray[i]);
      }
      this.worldMap.markerArray = [];
    if ($(".form-control").val()){
      this.twitter.keyword = $(".form-control").val()
      this.twitter.getUserLocationAndText();

    }
  }
  clearButtonEvent(event){
    this.twitter.tweetInfo = [];
    this.tweetMood = []
    this.coordinatesArray = [];
    this.worldMap.deleteMarkers();
    this.worldMap.markerArray = [];
    this.markerStorageArray = [];
  }

}
