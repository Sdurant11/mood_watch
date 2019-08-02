class MapCreator{
  constructor(){
    this.map;
    this.markerArray = [];
    this.createMarkers = this.createMarkers.bind(this);
    this.deleteMarkers = this.deleteMarkers.bind(this);
  }
  createMap(){
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 39.0997, lng: -94.5786 },
      zoom: 5.3
    });
  }

  createMarkers(tweetMoodArray){
    if(commandCenter.coordinatesArray.length){
      for (var i = 0; i < commandCenter.coordinatesArray.length; i++){
        var image = {

          url: "assets/pics/" + tweetMoodArray[i] + ".png",
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        var contentString = '<div>'+ commandCenter.twitter.tweetInfo[i].name+ '</div>' + '<div>' +commandCenter.twitter.tweetInfo[i].location+ '</div>' + '<div>'+ commandCenter.twitter.tweetInfo[i].text+'</div>';
        var infoWindow = new google.maps.InfoWindow({
          content: contentString
        });
        var marker = new google.maps.Marker({
          map: this.map,
          title: commandCenter.twitter.tweetInfo[i].name,
          draggable: false,
          icon: image,
          position: commandCenter.coordinatesArray[i]
        })

        marker.addListener('click', (function (map, marker, infoWindow) {
          return function(){
            infoWindow.open(map, marker)
          }
        })(this.map, marker, infoWindow));

        this.markerArray.push(marker);
      }
    }
  }

  deleteMarkers(){
    for ( var idz = 0 ; idz < this.markerArray.length; idz++){
      this.markerArray[idz].setMap(null);
      commandCenter.markerStorageArray[idz].setMap(null);
    }
  }

}
