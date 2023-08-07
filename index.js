const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

const news = require('./data/news.json');

app.use(cors());


app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/categories', (req, res) =>{
    console.log(categories)
    res.send(categories);
})

app.get('/news', (req, res) =>{
    res.send(news);
})

app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.get('/categories/:id', (req, res) =>{
    const id = req.params.id;
    const categoryNews = news.filter(n => n.category_id === id);
    res.send(categoryNews);
})

app.listen(port, () => {
    console.log(`Dragon API is running: ${port}`)
})