/*var articlesElt = document.getElementById("articles");
ajaxGet("https://newsapi.org/v1/articles?source=google-news&sortBy=latest&apiKey=b907a5dcebe141f69f379193fc7c721d", function(reponse) {
  // Transforme la réponse en un tableau d'articles
  var articles = JSON.parse(reponse);
  var image0 = articles.articles[0].urlToImage;
  document.getElementById('image0').src = image0;
  var source0 = articles.source;
  var source0Elt = document.getElementById('source0');
  source0Elt.textContent = "ON " + source0;
  var title0 = articles.articles[0].title;
  var title0Elt = document.getElementById('title0');
  title0Elt.textContent = title0;
  var url0 = articles.articles[0].url;
  document.getElementById('url0').href = url0;

});*/

var allnews = document.getElementById("news");
ajaxGet("https://newsapi.org/v2/top-headlines?sources=the-next-web,the-verge&apiKey=b907a5dcebe141f69f379193fc7c721d", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    var news = JSON.parse(reponse);
    var x = "";
    for (i in news.articles) {
    x +=
    '<a href="' + news.articles[i].url + '" class="uk-card uk-card-default uk-grid-collapse uk-width-auto uk-margin" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true"> <div class="uk-card-media-left uk-cover-container"><img src="' + news.articles[i].urlToImage + '" alt="" uk-cover> <canvas width="200%"></canvas> </div> <div class="uk-width-expand"> <div class="uk-card-body">' +
    '<h6>' + news.articles[i].source.name + '</h6>' +
    '<h3 class="uk-card-title">' + news.articles[i].title + '</h3>' +
    '</div></div></a>';
  };

document.getElementById("demo").innerHTML = x;

});
