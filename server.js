var express = require('express');
var morgan = require('morgan');
var path = require('path');
var articles={
 articleOne:{
    title:  'Article One',
    header:    'Article One',
    date: '5th January,2017',
    content :   `<p>This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.</p>

<p>This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.</p>

<p>This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.This my First article.</p> `
    
    
},

 articleTwo:{
    title:  'Article Two!',
    header:    'Article Two',
    date: '17th January,2017',
    content :   `<p>This my Second article.This my Second article.This my Second article.This my Second article.This my Second article.This my Second article.This my Second article.</p> `
    
    
},
 articleThree:{
    title:  'Article Three!',
    header:    'Article Three',
    date: '27th January,2017',
    content :   `<p>This my Third article.This my Third article.This my Third article.This my Third article.This my Third article.This my Third article.This my Third article.</p> `
    
    
}
};


function createTemplate(data){
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

app.get('/:articleName',function(req,res){
    var articleName=req.param.articleName;
     res.send(createTemplate(articles[articleName]));
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
