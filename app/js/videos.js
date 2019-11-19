/**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  
  function loadClient() {
    gapi.client.setApiKey("AIzaSyAG6upUobl2lBALQuyiUlVYlcxMjhh_wrI");
    console.log("howdy");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for APEYE"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": "snippet",
      "q": "The Black Keys"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                // console.log("Response", response);
                parseVideos(response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "441497559613-u68uaia6cctk6ut02h9i4u905knits2n.apps.googleusercontent.com"});
  });

  function parseVideos(response) {
      console.log("works yo");
    //   console.log(response);
    let len = response.result.items.length;
    let html = "";
    for (let a = 0; a < len; a++) {
    //   console.log(response.result.items[a].snippet.title);
        html += "<h2>" + response.result.items[a].snippet.title + "</h2>";
        html += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + response.result.items[a].id.videoId + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
    // console.log(html);
    document.getElementById("videos").innerHTML = html;
  }