var express = require('express');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var app = express();

app.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, '../dist'),
    debug: true,
    //outputStyle: 'compressed',
    outputStyle: 'extended'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3001, function () {
    console.log('Listening on port 3001');
});