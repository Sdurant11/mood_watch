
class TextToEmotion {

//pass in text and location of div from twitter.js
  constructor(twitterText, location){
    this.tweet = twitterText;
    this.position = location;
  }



function analyzeAndAppendText(){

  var textToEmotionAjax = {

    url: "https://apis.paralleldots.com/v4/emotion",
    method: "POST",
    dataType: "json",

    data: {
      "text": tweet,
      "api_key": "yUwuC25XTQCfAg2fcbENogGOQgsyBiEHWG1oGrz62v0"
    },

    success: function (response) {
      console.log('success', response);
      for (var feeling in response.emotion) {
        if (response.emotion[feeling] > 0.5) {
          feeling = feeling.toLowerCase();
          var emojiDiv = $('<div>');
          emojiDiv.addClass('emoji ' + feeling);
          $('body').append(emojiDiv);
        }
      }
    },

    error: function () {
       console.log('error - emotion not received');
      }
    };

   $.ajax(textToEmotionAjax);

  }


}
