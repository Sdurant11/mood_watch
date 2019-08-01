
class Twitter {
  constructor(geocodeLocation, tweetText, query){
    this.geocodeLocation = geocodeLocation;
    this.tweetText = tweetText;
    this.getUserLocationAndText = this.getUserLocationAndText.bind(this);
    this.keyword = query;
  }
  getUserLocationAndText() {
    $.ajax({
      url: "http://localhost/c619_hackathon2/twitter-search-proxy.php?q="+this.keyword+"&count=5&result_type=popular",
      dataType: "JSON",
      // method: 'POST',
      // oauth_comsumer_key: 'CLgwwtClkE95L1SC3JqKmijif',
      // data: {
      //   search_term: "cats",
      // },

      success: function (response) {
        var locationArray = [];
        var textArray = [];
        console.log(response);
        for (var i = 0; i < response.statuses.length; i++) {
          // var output = Regex.Replace(input, @"[\d-]", string.Empty);
          // var output = /\d/.test(response.statuses[i].user.location)
          if (response.statuses[i].user.location != '' || response.statuses[i].user.location == "Internet" || response.statuses[i].user.location == "the Internet") {
            console.log(response.statuses[i].user.location)
            locationArray.push(response.statuses[i].user.location);
          }
          if(response.statuses[i].text !== ""){
            console.log(response.statuses[i].text);
            textArray.push(response.statuses[i].text);
          }
        }
        console.log(locationArray)
        this.geocodeLocation(locationArray);
        this.tweetText(textArray);
        console.log(textArray);
      }.bind(this)
    })

  }
}


// key and secret combo  =  "Q0xnd3d0Q2xrRTk1TDFTQzNKcUttaWppZjo4M1ppaU1PV1hCNTlWTzJDbjFnekx0QTBDaXF0c2w1aU5yYjI2cnlTbENydkpCTVliYw=="
