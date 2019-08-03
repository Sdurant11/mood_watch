class MapCreator{
  constructor(){
    this.map;
    this.markerArray = [];
    this.markerWindowCounter = 0;
    this.currentInfoWindow = null;
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
    if (!commandCenter.coordinatesArray.length) return;


    for (let i = 0; i < commandCenter.coordinatesArray.length; i++){
        const image = {
        url: "assets/pics/" + tweetMoodArray[i] + ".png",
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      const tweet = commandCenter.twitter.tweetInfo[i];
      const infoWindow = new google.maps.InfoWindow({
        content: `
        <div>${tweet.name}</div>
        <div>${tweet.location}</div>
        <div>${tweet.text}</div>
      `
      });
      const marker = new google.maps.Marker({
        map: this.map,
        title: tweet.name,
        draggable: false,
        icon: image,
        position: commandCenter.coordinatesArray[i]
      })
      marker.addListener('click', () => {
        console.log("happened");
        if (this.currentInfoWindow) {
          this.currentInfoWindow.close();
          this.currentInfoWindow = null;
        }
        this.currentInfoWindow = infoWindow
        this.currentInfoWindow.open(this.map, marker)

      })
      // marker.addListener('click', (function (map, marker, infoWindow) {
      //   return function(){
      //     if (this.markerWindowCounter) {
      //       this.currentInfoWindow.close(map, marker);
      //       this.markerWindowCounter--
      //     }
      //     this.markerWindowCounter++
      //     this.currentInfoWindow = infoWindow
      //     this.currentInfoWindow.open(map, marker)

      //   }
      // })(this.map, marker, infoWindow));

      this.markerArray.push(marker);
    }

  }

  deleteMarkers(){
    for ( let idz = 0 ; idz < this.markerArray.length; idz++){
      this.markerArray[idz].setMap(null);
      // commandCenter.markerStorageArray[idz].setMap(null);
    }
    // commandCenter.markerStorageArray = [];
  }

}
