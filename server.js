var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles=
{
    'article-one':{
    title: "Article One | Divyanshu Jha",
    heading: "Article One",
    date: "Feb 13,2017",
    content: `<p>
            This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
        </p>
        <p>
            This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
        </p>`
}
,
'article-two':{
    title: "Article Two | Divyanshu Jha",
    heading: "Article Two",
    date: "Feb 14,2017",
    content: `<p>
            This is the content of my second article.
        </p>`
},
'article-three':{
    title: "Article Three | Divyanshu Jha",
    heading: "Article Three",
    date: "Feb 18,2017",
    content: `<p>
            This is the content of my third article.
        </p>`
}
};

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
            <meta name="viewport" content="width-device-width,initial-scale=1/">
                <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <h3>
            ${heading}
        </h3>
        <div>${date}</div>
        ${content}
        </div>
    </body>
</html>`
;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName',function(req,res)
{
    var articlename=req.params.articleName;
    res.send(createTemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});