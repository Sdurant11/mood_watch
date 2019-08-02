
class Twitter {
  constructor(geocodeLocation, tweetText, query){
    this.geocodeLocation = geocodeLocation;
    this.tweetText = tweetText;
    this.getUserLocationAndText = this.getUserLocationAndText.bind(this);
    this.keyword = query;
    this.tweetInfo = [];

  }
  getUserLocationAndText() {
    $.ajax({
      url: "http://localhost/c619_hackathon2/twitter-search-proxy.php?q="+this.keyword+"&count=10&result_type=popular",
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
            textArray.push(response.statuses[i].text);
            tweetInfoObj.text = response.statuses[i].text;
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
}


// key and secret combo  =  "Q0xnd3d0Q2xrRTk1TDFTQzNKcUttaWppZjo4M1ppaU1PV1hCNTlWTzJDbjFnekx0QTBDaXF0c2w1aU5yYjI2cnlTbENydkpCTVliYw=="
