var articlesElt = document.getElementById("articles");
ajaxGet("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=b907a5dcebe141f69f379193fc7c721d", function(reponse) {
  // Transforme la réponse en un tableau d'articles
  var articles = JSON.parse(reponse);
  var image0 = articles.articles[0].urlToImage;
  document.getElementById('image0').src = image0;
  var author0 = articles.articles[0].author;
  var source0 = articles.source;
  var source0Elt = document.getElementById('source0');
  source0Elt.textContent = "ON " + source0 + ", by " + author0;
  var title0 = articles.articles[0].title;
  var title0Elt = document.getElementById('title0');
  title0Elt.textContent = title0;
  var description0 = articles.articles[0].description;
  var description0Elt = document.getElementById('description0');
  description0Elt.textContent = description0;
  var url0 = articles.articles[0].url;
  document.getElementById('url0').href = url0;

});

ajaxGet("https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=b907a5dcebe141f69f379193fc7c721d", function(reponse) {
  // Transforme la réponse en un tableau d'articles
  var articles = JSON.parse(reponse);
  var bimage0 = articles.articles[0].urlToImage;
  document.getElementById('bimage0').src = bimage0;
  var bauthor0 = articles.articles[0].author;
  var bsource0 = articles.source;
  var bsource0Elt = document.getElementById('bsource0');
  bsource0Elt.textContent = "ON " + bsource0 + ", by " + bauthor0;
  var btitle0 = articles.articles[0].title;
  var btitle0Elt = document.getElementById('btitle0');
  btitle0Elt.textContent = btitle0;
  var bdescription0 = articles.articles[0].description;
  var bdescription0Elt = document.getElementById('bdescription0');
  bdescription0Elt.textContent = bdescription0;
  var burl0 = articles.articles[0].url;
  document.getElementById('burl0').href = burl0;

});

var articlesElt = document.getElementById("articles");
ajaxGet("https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=b907a5dcebe141f69f379193fc7c721d", function(reponse) {
  // Transforme la réponse en un tableau d'articles
  var articles = JSON.parse(reponse);
  var cimage0 = articles.articles[0].urlToImage;
  document.getElementById('cimage0').src = cimage0;
  var cauthor0 = articles.articles[0].author;
  var csource0 = articles.source;
  var csource0Elt = document.getElementById('csource0');
  csource0Elt.textContent = "ON " + csource0 + ", by " + cauthor0;
  var ctitle0 = articles.articles[0].title;
  var ctitle0Elt = document.getElementById('ctitle0');
  ctitle0Elt.textContent = ctitle0;
  var cdescription0 = articles.articles[0].description;
  var cdescription0Elt = document.getElementById('cdescription0');
  cdescription0Elt.textContent = cdescription0;
  var url0 = articles.articles[0].url;
  document.getElementById('curl0').href = curl0;

});

var articlesElt = document.getElementById("articles");
ajaxGet("https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=b907a5dcebe141f69f379193fc7c721d", function(reponse) {
  // Transforme la réponse en un tableau d'articles
  var articles = JSON.parse(reponse);
  var dimage0 = articles.articles[0].urlToImage;
  document.getElementById('dimage0').src = dimage0;
  var dauthor0 = articles.articles[0].author;
  var dsource0 = articles.source;
  var dsource0Elt = document.getElementById('dsource0');
  dsource0Elt.textContent = "ON " + dsource0 + ", by " + dauthor0;
  var dtitle0 = articles.articles[0].title;
  var dtitle0Elt = document.getElementById('dtitle0');
  dtitle0Elt.textContent = dtitle0;
  var ddescription0 = articles.articles[0].description;
  var ddescription0Elt = document.getElementById('ddescription0');
  ddescription0Elt.textContent = ddescription0;
  var durl0 = articles.articles[0].url;
  document.getElementById('durl0').href = durl0;

});

var articlesElt = document.getElementById("articles");
ajaxGet("https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=b907a5dcebe141f69f379193fc7c721d", function(reponse) {
  // Transforme la réponse en un tableau d'articles
  var articles = JSON.parse(reponse);
  var eimage0 = articles.articles[0].urlToImage;
  document.getElementById('eimage0').src = eimage0;
  var eauthor0 = articles.articles[0].author;
  var esource0 = articles.source;
  var esource0Elt = document.getElementById('esource0');
  esource0Elt.textContent = "ON " + esource0 + ", by " + eauthor0;
  var etitle0 = articles.articles[0].title;
  var etitle0Elt = document.getElementById('etitle0');
  etitle0Elt.textContent = etitle0;
  var edescription0 = articles.articles[0].description;
  var edescription0Elt = document.getElementById('edescription0');
  edescription0Elt.textContent = edescription0;
  var eurl0 = articles.articles[0].url;
  document.getElementById('eurl0').href = eurl0;

});
