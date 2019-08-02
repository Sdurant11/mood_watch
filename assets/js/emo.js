
class TextToEmotion {
  constructor(twitterText){
    this.tweet = twitterText;
    this.emojiDiv;
    this.analyzeAndAppendText = this.analyzeAndAppendText.bind(this);
  }



 analyzeAndAppendText(tweet, ajaxFinishCheck, index){
  var textToEmotionAjax = {

    url: "https://apis.paralleldots.com/v4/emotion",
    method: "POST",
    dataType: "json",

    data: {
      "text": tweet,
      "api_key": "yUwuC25XTQCfAg2fcbENogGOQgsyBiEHWG1oGrz62v0"
    },

    success: function (response) {
      var emotionStats = response.emotion;
      var emotionArray = Object.values(emotionStats);
      var feelingAmount = Math.max(...emotionArray);
      for (var key in emotionStats){
        if (emotionStats[key] === feelingAmount){
          var tweetMood = key;
        }
      }
      tweetMood = tweetMood.toLowerCase();
      commandCenter.tweetMood[index] = tweetMood;
      this.emojiDiv = $('<div>');
      this.emojiDiv.addClass('emoji ' + tweetMood);
      ajaxFinishCheck();
    },

    error: function () {
       console.log('error - emotion not received');
      }
    };

   $.ajax(textToEmotionAjax);

  }


}
