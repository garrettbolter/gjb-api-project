function loadData() {

    // $.ajax({
    //     type: "GET",
    //     url: "https://newsapi.org/v1/sources",
    //     dataType: "json",
    //     success: parseData2
    // });

    $.ajax({
        type: "GET",
        url: "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=zmkHZeeU8fvq8vGiIs0xGWQ0bCNXCwW7",
        dataType: "json",
        success: parseData
      });
    // console.log(nyt);

}

function parseData2(data) {

    let html = "";
    let len = data['sources'];

    for (let a = 0; a < len.length; a++) {
        html += '<li class="nav-item"><a class="nav-link" href="#" onclick="loadArticles(\'' + len[a]["id"] + '\')">' + len[a]["name"] + '</a></li>'
    }
    $("#sources-area").html(html);
}

function parseData(data) {
    // console.log(data['results']);
    let html = "";
    let results = data['results'];
    for (let a = 0; a < results.length; a++) {
        html += '<li class="nav-item"><a class="nav-link" href="' + results[a]['url'] +'" target="_blank" onclick="loadArticles(\'' + results[a] + '\')">' + results[a]['title'] + '</a></li>';
    }
    $("#books-sources").html(html);
}

function loadArticles(source) {
    // console.log(source);
    $.ajax({
        type: "GET",
        url: "https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&apiKey=567c2ddbc05249778d830390311b37bb",
        dataType: "json",
        success: parseArticles
    });
}

function parseArticles(data) {
    let articles = data['articles'];
    let html = '';
    for (let a = 0; a < articles.length; a++) {
        // console.log(articles[a]['description']);
        html += '<div><h3><a href="' + articles[0]["url"] + '">' + articles[a]["title"] + '</a></h3>';
        if (articles[a]['description'] != null) {
            html += '<p>' + articles[a]['description'] + '</p>';
        }
        html += '</div>';
    }
    $("#feed-area").html(html);

}