var express = require('express');
var morgan = require('morgan');
var path = require('path');
var articleOne={
    title:  'Article One',
    heading:    'Article One',
    date: '5th January,2017',
    content :   `<p>This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.</p>

<p>This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.</p>

<p>This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.</p> `
    
    
};
function articles(data){
    var title=data.title;
    var header=data.header;
    var date=data.date;
    var content=data.content;
    
    
    var htmlTemplate=`<html>
<head>
<title>${title}</title>
<link href='/ui/style.css' rel="stylesheet"/>
</head>
<body>
<div class="container">
<div class="header">
<a href="index.html">HOME</a>
</div>
<hr/>
<div>
    <h3>${header}</h3>
    </div>
    <div>
  ${date}
  
  </div>
<div class="content">
${content}
</div>
</div>
</body>
</html>`

return htmlTemplate;
}


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
     res.send(articles(articleOne));
});
app.get('/article-two',function(req,res){
    res.send('This is article Two!');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
