// GOOGLE MAPS jacvascript map API KEY: AIzaSyDNUkV37SJjXxiUK09iPw3yH2WCRZ7XvtA
class MapCreator{
  constructor(){
    this.map;

  }
  createMap(){
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 39.0997, lng: -94.5786 },
      zoom: 5.3
    });
  }

  createMarkers(){
    if(commandCenter.coordinatesArray.length){
      for (var i = 0; i < commandCenter.coordinatesArray.length; i++){
        var marker = new google.maps.Marker({
          map: this.map,
          draggable: false,
          position: commandCenter.coordinatesArray[i]
        })
      }
    }
  }

}
