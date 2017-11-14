var articlesElt = document.getElementById("articles");
ajaxGet("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b907a5dcebe141f69f379193fc7c721d", function(reponse) {
  // Transforme la réponse en un tableau d'articles
  var articles = JSON.parse(reponse);
  var image0 = articles.articles[0].urlToImage;
  document.getElementById('image0').src = image0;
  var source0 = articles.source;
  var source0Elt = document.getElementById('source0');
  source0Elt.textContent = source0;
  var title0 = articles.articles[0].title;
  var title0Elt = document.getElementById('title0');
  title0Elt.textContent = title0;
  var description0 = articles.articles[0].description;
  var description0Elt = document.getElementById('description0');
  description0Elt.textContent = description0;
  var author0 = articles.articles[0].author;
  var author0Elt = document.getElementById('author0');
  author0Elt.textContent = author0;
  var url0 = articles.articles[0].url;
  document.getElementById('url0').href = url0;


});
