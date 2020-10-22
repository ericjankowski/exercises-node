// Version 3
// =========
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Article = require('./db').Article;
const read = require('node-readability');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/articles', (req, res, next) => {
    const url = req.body.url;

    read(url, (err, result) => {
        if (err || !result) res.status(500).send('Error downloading article');
        Article.create(
            { title: result.title, content: result.content },
            (err, article) => {
                if(err) return next(err);
                res.send('OK');
            }
        );
    });
});

app.get('/articles', (req, res, next) => {
    Article.all((err, articles) => {
        if(err) return next(err);
        res.send(articles);
    });
});

app.get('/articles/:id', (req, res, next) => {
    const id = request.params.id;
    Article.find(id, (err, article) => {
        if(err) return next(err);
        res.send(article);
    });
});

app.delete('/articles/:id', (req, res, next) =>{
    Article.delete(id, (err) => {
        if (err) return next(err);
        res.send({ message: 'Deleted' });
    });
});

app.listen(app.get('port'), () => {
    console.log('Appstarted on port', app.get('port'));
});

module.exports = app;

// Version 2
// =========
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');


// const articles = [{title: 'Example'}];

// app.set('port', process.env.PORT || 3000);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/articles', (req, res, next) => {
//     console.log('Fetching all articles');
//     res.send(articles);
// });

// app.post('/articles', (req, res, next) => {
//     const article = { title: req.body.title };
//     console.log('Saving new article', article.title);
//     articles.push(article);
//     res.send(article);
// });

// app.get('/articles/:id', (req, res, next) => {
//     const id = req.params.id;
//     console.log('Fetching:', id);
//     res.send(articles[id]);
// });

// app.delete('/articles/:id', (req, res, next) => {
//     const id = req.params.id;
//     console.log('Deleting:', id);
//     delete articles[id];
//     res.send({message: 'Deleted'});
// });

// app.listen(app.get('port'), () => {
//     console.log('App started on port', app.get('port'));
// });

// module.exports = app;


// // Version 1
// // =========
// const port = process.env.PORT || 3000;


// app.get('/', (req, res) =>{
//     res.send('Hello world');
// });

// app.listen(port, () => {
//     console.log(`Express web app available at localhost: ${port}`);
// });