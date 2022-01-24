const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(4000, function () {
    console.log(`You are looking *live* at PORT:${PORT}`);
});