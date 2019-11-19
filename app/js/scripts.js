$(document).ready(function () {
    let url = "../js/bk-tweets.json";
    console.log("here");
    loadData(url);
});

function loadData(dataURL) {
    //ajax request
    //on success, parse the data

    $.ajax({
        method: "GET",
        url: dataURL,
        dataType: "json",
        success: parseData
    });
}

function parseData(data) {
    console.log(data);
    let addHtml = "";
    for (let a = 0; a < data.length; a++) {
        console.log(data[a]);
        let id = data[a].id;
        let handle = data[a].handle;
        let imgUrl = data[a].profImgUrl;
        let tweetText = data[a].text;

        
        addHtml+= '<div class="post-box"><div class="left"><img src="' + imgUrl + '"></div><div class="right"><div class="handle-bar">';
        addHtml+= '<p class="handle">@' + handle + '</p></div>';
        addHtml+= '<p class="tweet-p">' + tweetText + '</p></div></div>';
        
    }
    $('#feed').html(addHtml);
}