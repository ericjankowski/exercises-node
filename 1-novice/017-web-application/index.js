// Version 2
// =========
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const articles = [{title: 'Example'}];

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/articles', (req, res, next) => {
    console.log('Fetching all articles');
    res.send(articles);
});

app.post('/articles', (req, res, next) => {
    const article = { title: req.body.title };
    console.log('Saving new article', article.title);
    articles.push(article);
    res.send(article);
});

app.get('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('Fetching:', id);
    res.send(articles[id]);
});

app.delete('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('Deleting:', id);
    delete articles[id];
    res.send({message: 'Deleted'});
});

app.listen(app.get('port'), () => {
    console.log('App started on port', app.get('port'));
});

module.exports = app;


// // Version 1
// // =========
// const port = process.env.PORT || 3000;


// app.get('/', (req, res) =>{
//     res.send('Hello world');
// });

// app.listen(port, () => {
//     console.log(`Express web app available at localhost: ${port}`);
// });