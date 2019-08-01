$(document).ready(initializeApp)

function initializeApp(){
  $.ajax({
    url: "http://localhost/c619_hackathon2/twitter-search-proxy.php?q=taco",
    dataType: "JSON",
    // method: 'POST',
    // oauth_comsumer_key: 'CLgwwtClkE95L1SC3JqKmijif',
    // data: {
    //   search_term: "cats",
    // },
    success: function (response) {
      console.log(response);
      for (var i = 0; i < response.statuses.length; i++){
        // var output = Regex.Replace(input, @"[\d-]", string.Empty);
          var output = /\d/.test(response.statuses[i].user.location)
        if (response.statuses[i].user.location != '' || response.statuses[i].user.location == "Internet" || response.statuses[i].user.location == "the Internet"){
          console.log(response.statuses[i].user.location);
          console.log(response.statuses[i].text);
        }
      }
    }
  })

}

// key and secret combo  =  "Q0xnd3d0Q2xrRTk1TDFTQzNKcUttaWppZjo4M1ppaU1PV1hCNTlWTzJDbjFnekx0QTBDaXF0c2w1aU5yYjI2cnlTbENydkpCTVliYw=="
