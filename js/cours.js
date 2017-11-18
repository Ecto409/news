var allnews = document.getElementById("news");
ajaxGet("https://newsapi.org/v2/top-headlines?sources=the-new-york-times,the-huffington-post,cnn,msnbc,abc-news&apiKey=b907a5dcebe141f69f379193fc7c721d", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var news = JSON.parse(reponse);

    shuffle = function(v){
  	for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
  	return v;
  };


    var x = "";
    for (i = 0, len = shuffle(news.articles), text = ""; i < 20; i++ ) {
    x +=
    '<a href="' + news.articles[i].url + '" class=" uk-grid-collapse uk-width-auto uk-margin" uk-grid uk-scrollspy="cls: uk-animation-slide-fade; repeat: true"> <div class="uk-card-media-left uk-cover-container"><img src="' + news.articles[i].urlToImage + '" alt="" uk-cover> <canvas width="100px" height="100px"></canvas> </div> <div class="uk-width-expand"> <div class="uk-card-body">' +
    '<h6>' + news.articles[i].source.name + '</h6>' +
    '<h3 class="uk-card-title">' + news.articles[i].title + '</h3>' +
    '</div></div></a>';
  };


document.getElementById("demo").innerHTML = x;




});
