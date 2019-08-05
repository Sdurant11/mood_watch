
class Twitter {
  constructor(geocodeLocation, tweetText,query, locationQuery){
    this.geocodeLocation = geocodeLocation;
    this.tweetText = tweetText;
    this.wantedLocation = locationQuery;
    this.getUserLocationAndText = this.getUserLocationAndText.bind(this);
    this.keyword = query;
    this.tweetInfo = [];
    this.makeLinksClickable = this.makeLinksClickable.bind(this);

  }
  getUserLocationAndText() {
    if (this.keyword && this.wantedLocation){
      this.keyword = this.keyword +" " + this.wantedLocation;

    }
    console.log(this.keyword);
    $.ajax({
      url: "http://localhost/c619_hackathon2/twitter-search-proxy.php?q=" + this.keyword +"&src=typed_query&count=3&result_type=mixed",
      dataType: "JSON",

      success: function (response) {
        var locationArray = [];
        var textArray = [];
        for (var i = 0; i < response.statuses.length; i++) {
          var tweetInfoObj = {}
          if (response.statuses[i].user.location != '' || response.statuses[i].user.location == "Internet" || response.statuses[i].user.location == "the Internet") {
            locationArray.push(response.statuses[i].user.location);
            tweetInfoObj.location = response.statuses[i].user.location;
          }
          else{
            locationArray.push("antarctica");
          }
          if(response.statuses[i].text !== ""){
            var text = response.statuses[i].text;
            var clickableText = this.makeLinksClickable(text);
            textArray.push(clickableText);
            tweetInfoObj.text = clickableText;
          }

          if(response.statuses[i].user.screen_name){
            tweetInfoObj.name = response.statuses[i].user.screen_name;
          }

          this.tweetInfo.push(tweetInfoObj);
        }
        this.geocodeLocation(locationArray);
        this.tweetText(textArray);

      }.bind(this)
    })

  }

  makeLinksClickable(text){
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp,"<a href='$1'>$1</a>"); 
  }
}


// key and secret combo  =  "Q0xnd3d0Q2xrRTk1TDFTQzNKcUttaWppZjo4M1ppaU1PV1hCNTlWTzJDbjFnekx0QTBDaXF0c2w1aU5yYjI2cnlTbENydkpCTVliYw=="
