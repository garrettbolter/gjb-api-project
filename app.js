const Twitter = require('twitter');
const config = require('./config.js');
const fs = require('fs'); 
const T = new Twitter(config);

console.log("launching twitter-bot script (app.js)");

// Set up your search parameters
const params = {
  q: '#TheBlackKeys',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

// Initiate your search using the above paramaters
T.get('search/tweets', params, (err, data, response) => {
  // If there is no error, proceed
  if (err) {
    return console.log(err);
  }

  // Loop through the returned tweets
  const tweetsId = data.statuses
    .map(tweet => ({
      id: tweet.id_str
    }));
  for (let a = 0; a < tweetsId.length; a++) {
    // console.log(tweetsId);
  }
  
  tweets = [];
  for (let a  = 0; a < data.statuses.length; a++) {
    // console.log(data.statuses[a].id_str);
    tweets.push({id: data.statuses[a].id_str, text: data.statuses[a].text, handle: data.statuses[a].user.screen_name, profImgUrl: data.statuses[a].user.profile_image_url_https});
    let id = data.statuses[a].id_str;

  }

  // console.log(tweets);
  str_tweets = JSON.stringify(tweets);
  fs.writeFileSync('tweets.json', str_tweets);

  // console.log(str_tweets);
  console.log("----saved as tweets.json----");

});